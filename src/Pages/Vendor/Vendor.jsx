import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import { ThemeProvider } from "@mui/material/styles";
import { createTheme } from "@mui/material/styles";
import useStyles from "../../Style";
import axios from "axios";
import { TiEdit } from "react-icons/ti";
import Cookies from "universal-cookie";
import Createcontext from "../../Hooks/Context/Context";
import { useSnackbar } from "notistack";
import UserDelete from "./DeleteVendor";
import StatusBarCard from "../../Admin_panel/StatusBarCard";
import Areagraph from "../../Admin_panel/Areagraph";
import TotalSales from "../../Admin_panel/TotalSales";
import Productstorelist from "../../Admin_panel/Productstorelist";
import "../../style.css";
import "../../Admin_panel/dashboard.css";
import Recentorder from "../../Admin_panel/Recentorder";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { useLocation, useNavigate } from "react-router-dom";
const CustomFontTheme = createTheme({
  typography: {
    fontSize: 25,
  },
  components: {
    MuiContainer: {
      styleOverrides: {
        root: {
          fontSize: 24,
        },
      },
    },
  },
});
const Vendor = () => {
  const classes= useStyles()
  const location = useLocation();
  const navigate = useNavigate();
  const [allstore, setAllstore] = React.useState([]);
  const [selectedstore, setselectedstore] = React.useState(location?.state?.id);
  const [topsellproduct, settopsellproduct] = React.useState();
  const [totalsale, settotalsale] = React.useState({});
  const [orderstore, setorderstore] = React.useState({});
  const { state } = React.useContext(Createcontext);
  const cookies = new Cookies();
  const [pageSize, setPageSize] = React.useState(5);
  const [detailstype, setdetailstype] = React.useState(true);
  const token_data = cookies.get("Token_access");
  const columns = [
    {
      field: "ProductImage",
      headerName: "Product Image",
      minWidth: 120,
      flex: 1,
      sortable: false,
      "@media(max-width:540px)": {
        maxWidth: 90,
        minWidth: 40,
        flex: 1,
      },
      editable: false,
      renderCell: (params) => {
        return (
          <div className="imagecircelproduct">
            <img src={params.row?.images[0]?.image} alt="" />
          </div>
        );
      },
    },
    {
      field: "Product_Name",
      headerName: "Product Name",
      minWidth: 120,
      flex: 1,
      sortable: false,
      editable: false,
    },
    {
      field: "category_name",
      headerName: "Category Name",
      minWidth: 120,
      flex: 1,
      sortable: false,
      editable: false,
    },
    {
      field: "Prices",
      headerName: "Price",
      type: "number",
      minWidth: 120,
      flex: 1,
      sortable: false,
      editable: false,
      headerAlign: "left",
      align: "left",

      renderCell: (params) => {
        return `${params.row?.Prices[0]?.Price[0]?.Price}`;
      },
    },
    {
      field: "Quantity",
      headerName: "Quantity",
      sortable: false,
      minWidth: 120,
      flex: 1,
      renderCell: (params) => {
        return `${params.row?.Prices[0]?.Price[0]?.Quantity} Qty`;
      },
    },
    {
      field: "Stock",
      headerName: "Stock",
      editable: false,
      sortable: false,
      minWidth: 120,
      flex: 1,
      headerAlign: "center",
      align: "center",
      renderCell: (params) => {
        return `${params.row?.Prices[0]?.Price[0]?.Stock} `;
      },
    },
    {
      field: "Edit",
      headerName: "Edit",
      editable: false,
      sortable: false,
      minWidth: 120,
      flex: 1,
      headerAlign: "center",
      align: "center",
      renderCell: (params) => {
        return (
          <React.Fragment>
            {state.Roles.DeleteVendor && (
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent:'center',
                  gap: "5px",
                  "& .MuiOutlinedInput-root": {
                    "&.Mui-focused fieldset": {
                      borderWidth: "1px",
                      borderColor: "black",
                    },
                  },
                  "& . MuiDataGrid-root .MuiDataGrid-cell:focus": {
                    outline: "#e0e0e0",
                  },
                }}
              >
                <a
                  target="blank"
                  href={`https://www.weedx.io/products/${params.row.category_name.toLowerCase()}/${params.row.SubcategoryName.toLowerCase()}/${params.row.Product_Name.toLowerCase().replaceAll(
                    " ",
                    "-"
                  )}/${params.row.id}`}
                >
                  <MdOutlineRemoveRedEye
                    color="rgba(67, 80, 133, 0.5)"
                    size={18}
                  />
                </a>
                <TiEdit color="rgba(67, 80, 133, 0.5)" size={18} />
                <UserDelete data={params.row}></UserDelete>
              </Box>
            )}
          </React.Fragment>
        );
      },
    },
  ];
  const row = totalsale;
  const [Data, SetData] = React.useState({})
  let date = new Date()
  const TodayDate = date.getFullYear() + "-" + String((date.getMonth() + 1)).padStart(2, '0') + "-" + date.getDate()
  const currentYear = new Date().getFullYear();
  const lastYear = currentYear - 1;
  const monthStartDate = new Date(date.getFullYear(), date.getMonth(), 2).toISOString().split('T')[0]
  const monthlastDate = TodayDate
  const lastmonthStartDate = new Date(date.getFullYear(), date.getMonth() - 1, 2).toISOString().split('T')[0]
  const firstDayOfCurrentMonth = new Date(date.getFullYear(), date.getMonth(), 1);
  const lastmonthLastDate = new Date(firstDayOfCurrentMonth - 1).toISOString().split('T')[0]
  // End /////////////////
  //    Week Calculate //////////////////////// 
  const WeekCalculate = date.getDate() - date.getDay() + (date.getDay() === 0 ? - 6 : 1);
  const StartDateWeek = new Date(date.setDate(WeekCalculate)).toISOString().split('T')[0]
  // const previous =  new Date(date.setDate(date.getDate() - 1)).toISOString().split('T')[0]
  function GetpreviousWeekDate(d, j) {
    //   const today = new Date();
    const dayOfWeek = date.getDay();  // 0 (Sunday) to 6 (Saturday)
    const diff = dayOfWeek + d - j;
    const startOfPreviousWeek = new Date(date);
    startOfPreviousWeek.setDate(date.getDate() - diff);
    return startOfPreviousWeek.toISOString().split('T')[0];
  }
  let yesterday = new Date(TodayDate)
  yesterday.setDate(yesterday.getDate() - 1)
  function convert(str) {
    var date = new Date(str),
      mnth = ("0" + (date.getMonth() + 1)).slice(-2),
      day = ("0" + date.getDate()).slice(-2);
    return [date.getFullYear(), mnth, day].join("-");
  }


  function CalculateDays(date1) {
    if (date1 === "first") {
      const datefirst = new Date(state.CustomeStartDate)
      const datesecond = new Date(state.CustomeEndDate)
      const diffTime = Math.abs(datesecond - datefirst);
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      var StartEndDate = new Date(state.CustomeEndDate);
      StartEndDate.setDate(StartEndDate.getDate() - diffDays - 1);
      var EndStartDate = new Date(state.CustomeStartDate);
      EndStartDate.setDate(EndStartDate.getDate() - diffDays - 1);
      return convert(EndStartDate.toString())
    }
    else {
      const datefirst = new Date(state.CustomeStartDate)
      const datesecond = new Date(state.CustomeEndDate)
      const diffTime = Math.abs(datesecond - datefirst);
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      var StartEndDate = new Date(state.CustomeEndDate);
      StartEndDate.setDate(StartEndDate.getDate() - diffDays - 1);
      var EndStartDate = new Date(state.CustomeStartDate);
      EndStartDate.setDate(EndStartDate.getDate() - diffDays - 1);
   
      return convert(StartEndDate.toString())
    }



  }
  React.useEffect(() => {
    if (state.datesSelect === "Customize") {
      if (state.CustomeStartDate !== "" && state.CustomeEndDate !== "") {
        SetData({
          "SelectTime": state.datesSelect === "Year" ? "ThisYear" : state.datesSelect === "Months" ? 'ThisMonth' : state.datesSelect === "Today" ? 'Today' : state.datesSelect === "week" ? "week" : state.datesSelect === "Customize" && "costume",
          "StartDate": state.datesSelect === "Year" ? `${date.getFullYear()}-01-01` : state.datesSelect === "Months" ? monthStartDate : state.datesSelect === "week" ? StartDateWeek : state.datesSelect === "Today" ? TodayDate : state.datesSelect === "Customize" && state.CustomeStartDate,
          "EndDate": state.datesSelect === "Year" ? TodayDate : state.datesSelect === "Months" ? monthlastDate : state.datesSelect === "week" ? TodayDate : state.datesSelect === "Today" ? TodayDate : state.datesSelect === "Customize" && state.CustomeEndDate,
          "LastStartDate": state.datesSelect === "Year" ? `${lastYear}-01-01` : state.datesSelect === "Months" ? lastmonthStartDate : state.datesSelect === "week" ? GetpreviousWeekDate(7, 1) : state.datesSelect === "Today" ? yesterday.toISOString().split('T')[0] : state.datesSelect === "Customize" && CalculateDays('first'),  //yesterday.toISOString().split('T')[0]
          "EndStartDate": state.datesSelect === "Year" ? `${lastYear}-12-31` : state.datesSelect === "Months" ? lastmonthLastDate : state.datesSelect === "week" ? GetpreviousWeekDate(0, 0) : state.datesSelect === "Today" ? yesterday.toISOString().split('T')[0] : state.datesSelect === "Customize" && CalculateDays('Second')
        })
      }
    }
    else {
      SetData({
        "SelectTime": state.datesSelect === "Year" ? "ThisYear" : state.datesSelect === "Months" ? 'ThisMonth' : state.datesSelect === "Today" ? 'Today' : state.datesSelect === "week" ? "week" : state.datesSelect === "Customize" && "costume",
        "StartDate": state.datesSelect === "Year" ? `${date.getFullYear()}-01-01` : state.datesSelect === "Months" ? monthStartDate : state.datesSelect === "week" ? StartDateWeek : state.datesSelect === "Today" ? TodayDate : state.datesSelect === "Customize" && state.CustomeStartDate,
        "EndDate": state.datesSelect === "Year" ? TodayDate : state.datesSelect === "Months" ? monthlastDate : state.datesSelect === "week" ? TodayDate : state.datesSelect === "Today" ? TodayDate : state.datesSelect === "Customize" && state.CustomeEndDate,
        "LastStartDate": state.datesSelect === "Year" ? `${lastYear}-01-01` : state.datesSelect === "Months" ? lastmonthStartDate : state.datesSelect === "week" ? GetpreviousWeekDate(7, 1) : state.datesSelect === "Today" ? yesterday.toISOString().split('T')[0] : state.datesSelect === "Customize" && CalculateDays('first'),  //yesterday.toISOString().split('T')[0]
        "EndStartDate": state.datesSelect === "Year" ? `${lastYear}-12-31` : state.datesSelect === "Months" ? lastmonthLastDate : state.datesSelect === "week" ? GetpreviousWeekDate(0, 0) : state.datesSelect === "Today" ? yesterday.toISOString().split('T')[0] : state.datesSelect === "Customize" && CalculateDays('Second')
      })
    }
  }, [state.datesSelect, state.CustomeStartDate, state.CustomeEndDate])




  React.useEffect(() => {
    axios
      .post(
        `https://api.cannabaze.com/AdminPanel/TopSaleProductVendor/`,
        { ...Data, Storeid: selectedstore },
        {
          headers: {
            Authorization: `Bearer ${token_data}`,
          },
        }
      )
      .then((res) => {
        settopsellproduct(res.data);
      });
  }, [selectedstore, Data]);

  React.useEffect(() => {
    if (detailstype) {
      axios
        .post(
          `https://api.cannabaze.com/AdminPanel/ProductDetailsVendor/`,
          { Storeid: selectedstore },
          {
            headers: {
              Authorization: `Bearer ${token_data}`,
            },
          }
        )
        .then((res) => {
          settotalsale(res.data);
        });
    } else {
      axios
        .post(
          `https://api.cannabaze.com/AdminPanel/OrderByStoreId/`,
          { ...Data, Storeid: selectedstore },

          {
            headers: {
              Authorization: `Bearer ${token_data}`,
            },
          }
        )
        .then((res) => {
          setorderstore(res.data);
        });
    }
  }, [selectedstore, detailstype]);

  React.useEffect(() => {
    axios
      .get(
        `https://api.cannabaze.com/AdminPanel/AllStoresVendor/${location.state.id}`,
        {
          headers: {
            Authorization: `Bearer ${token_data}`,
          },
        }
      )
      .then((res) => {
        setAllstore(res?.data);
        setselectedstore(res?.data[0].id);
      });
  }, [location.state.id, Data]);

  return (
    <div className="venderSection">
      <div className="row">
        <div className="col-12">
          <StatusBarCard title={"vendor"} id={location.state.id} />
        </div>
        <div className="col-12">
          <dvi className="storelistcardWrapper">
            {allstore?.map((item) => {
           
              return (
                <div
                  className="storelistcard"
                  onClick={() => {
                    setselectedstore(item.id);
                  }}
                  style={{
                    border: selectedstore === item.id && "2px solid #31B655",
                  }}
                >
                  <div className="storeType">
                    {" "}
                    {item.CurbSide_Pickup && <span>CurbSide Pickup</span>}{" "}
                    {item.Delivery && <span>Delivery</span>}{" "}
                    {item.StoreFront && <span>Store Front</span>}
                  </div>
                  <h4 className="storelistcardName">{item.Store_Name}</h4>
                  <p className="storelistcardDesc">{item?.Store_Address}</p>
                  <div
                    className="storerating"
                    onClick={() => {
                      navigate("/allreview",  {
                        state: {
                          item
                        }
                      }) ;
                    }}
                  >
                    {" "}
                    {item?.rating !== null ? item?.rating.toFixed(1) : 0} (
                    {item?.TotalRating !== null
                      ? item?.TotalRating.toFixed(0)
                      : 0}
                    )
                    {item?.rating !== null ? (
                      <span className="">
                        {Array(parseInt(item?.rating) ).fill().map(() => {
                            return (
                              <AiFillStar
                                size={12}
                                color="rgba(252, 213, 3, 1)"
                              />
                             );
                          })}
                        {Array(5   - parseInt(item?.rating)).fill().map(() => {
                            return (
                              <AiOutlineStar
                                size={12}
                                color="rgba(252, 213, 3, 1)"
                              />
                            );
                          })}
                      </span>
                    ) : (
                      Array(5)
                        .fill()
                        .map(() => {
                          return (
                            <AiOutlineStar
                              size={12}
                              color="rgba(252, 213, 3, 1)"
                            />
                          );
                        })
                    )}
                  </div>
                </div>
              );
            })}
          </dvi>
        </div>
        <div className="col-12">
          <div className="venderHeroDiv">
            <div className="venderHeroDiv_card">
              <Areagraph title={"Sales Performance"} id={selectedstore} />
            </div>
            <div className="venderHeroDiv_card">
              <TotalSales type={"vendor"} />
            </div>
            <div className="venderHeroDiv_card">
              <div className="coupon_card">
                <h3 className="graphtitle">Coupon Code</h3>
                <h4 className="coupen_total">$ 90,000</h4>
                <div className="colorLine">
                  {[...Array(7)].map((e, i) => (
                    <span
                      className="coupencolorBox"
                      style={{
                        backgroundColor: `${"#" +
                          Math.floor(Math.random() * 16777215).toString(16)
                          }`,
                      }}
                      key={i}
                    ></span>
                  ))}
                </div>
                <div className="store_coupen_list">
                  <div className="locationList">
                    <div className="locationListItem">
                      <span className="locationName">
                        {" "}
                        <span
                          className="colorCircle"
                          style={{ backgroundColor: "#FF7F50" }}
                        ></span>{" "}
                        New York
                      </span>
                      <span className="locationAmount">$ 6,806</span>
                    </div>
                    <div className="locationListItem">
                      <span className="locationName">
                        {" "}
                        <span
                          className="colorCircle"
                          style={{ backgroundColor: "green" }}
                        ></span>{" "}
                        New York
                      </span>
                      <span className="locationAmount"> $ 6,806</span>
                    </div>
                    <div className="locationListItem">
                      <span className="locationName">
                        {" "}
                        <span
                          className="colorCircle"
                          style={{ backgroundColor: "#00F0FF" }}
                        ></span>{" "}
                        Phoenix
                      </span>
                      <span className="locationAmount">$ 2000</span>
                    </div>
                    <div className="locationListItem">
                      <span className="locationName">
                        {" "}
                        <span
                          className="colorCircle"
                          style={{ backgroundColor: "#CCCCFF" }}
                        ></span>{" "}
                        Chicago{" "}
                      </span>
                      <span className="locationAmount">$ 1600</span>
                    </div>
                    <div className="locationListItem">
                      <span className="locationName">
                        {" "}
                        <span
                          className="colorCircle"
                          style={{ backgroundColor: "#40E0D0" }}
                        ></span>{" "}
                        Philadelphia{" "}
                      </span>
                      <span className="locationAmount">$ 806</span>
                    </div>
                    <div className="locationListItem">
                      <span className="locationName">
                        {" "}
                        <span
                          className="colorCircle"
                          style={{ backgroundColor: "red" }}
                        ></span>{" "}
                        Los Angeles{" "}
                      </span>
                      <span className="locationAmount">$ 566</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="venderHeroDiv_card">
              <Productstorelist
                title={"Top Sale Product"}
                Data1={topsellproduct}
                link={"/topproduct"}
              />
            </div>
          </div>
        </div>
        <div className="col-12 mb-4 mt-4 bg-white">
          <div className="d-flex justify-content-between align-content-center py-4">
            <div className="gap-4 d-flex">
              <button
                className="topbutton"
                onClick={() => {
                  setdetailstype(!detailstype);
                }}
                style={{
                  backgroundColor: !detailstype ? "#fff" : "#31B655",
                  color: detailstype ? "#fff" : "#31B655",
                }}
              >
                Product Details
              </button>
              <button
                className="topbutton"
                onClick={() => {
                  setdetailstype(!detailstype);
                }}
                style={{
                  backgroundColor: detailstype ? "#fff" : "#31B655",
                  color: !detailstype ? "#fff" : "#31B655",
                }}
              >
                Order Details
              </button>
            </div>
            <button className="topbutton">+ Add Product</button>
          </div>

          {detailstype ? (
            <Box
             className={classes.DataTableBoxStyle}
            >
              <ThemeProvider theme={CustomFontTheme}>
                <DataGrid
                  rows={row}
                  columns={columns}
                  autoHeight
                  initialState={{
                    pagination: {
                      paginationModel: {
                        pageSize: 5,
                      },
                    },
                  }}
                  getRowId={(row) => row.id}
                  pageSize={pageSize}
                  onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
                  rowsPerPageOptions={[5, 10, 20]}
                  pagination
                  disableRowSelectionOnClick
                  disableColumnMenu
                  disableColumnFilter
                  disableColumnSelector
                  className={classes.DataTableStyle}
                />
              </ThemeProvider>
            </Box>
          ) : (

            <Recentorder title={"Order Details"} order={orderstore} />
          )}
        </div>
      </div>
    </div>
  );
};
export default Vendor;
