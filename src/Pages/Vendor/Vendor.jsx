import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import { ThemeProvider } from "@mui/material/styles";
import { createTheme } from "@mui/material/styles";
import { BsThreeDotsVertical } from "react-icons/bs";
import { Select, MenuItem } from "@mui/material";
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
  const location = useLocation();
  const navigate = useNavigate();
  const [allstore, setAllstore] = React.useState([]);
  const [selectedstore, setselectedstore] = React.useState(location.state.id);
  const [topsellproduct, settopsellproduct] = React.useState();
  const [totalsale, settotalsale] = React.useState({});
  const [orderstore, setorderstore] = React.useState({});
  const { state, dispatch } = React.useContext(Createcontext);
  const { enqueueSnackbar } = useSnackbar();
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
      headerName: "Store Type",
      minWidth: 120,
      flex: 1,
      sortable: false,
      editable: false,
    },
    {
      field: "Prices",
      headerName: "Store Name",
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
      headerName: "Status",
      editable: false,
      sortable: false,
      minWidth: 120,
      flex: 1,
      headerAlign: "center",
      align: "center",
      renderCell: (params) => {
        return `${params.row?.Prices[0]?.Price[0]?.Stock} Qty`;
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
  console.log()
  React.useEffect(() => {
    axios
      .post(
        `https://api.cannabaze.com/AdminPanel/TopSaleProductVendor/`,
        {
          SelectTime: "Year",
          StartDate: "2023-01-30",
          EndDate: "2024-01-31",
          LastStartDate: "2023-01-01",
          EndStartDate: "2023-12-31",
          Storeid: selectedstore,
        },
        {
          headers: {
            Authorization: `Bearer ${token_data}`,
          },
        }
      )
      .then((res) => {
        settopsellproduct(res.data);
      });
  }, [selectedstore]);

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
          {
            SelectTime: "Year",
            Storeid: selectedstore,
            StartDate: "2023-01-01",
            EndDate: "2024-02-01",
          },
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
  }, [location.state.id]);

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
                        {Array(parseInt(item?.rating) + 1)
                          .fill()
                          .map(() => {
                            return (
                              <AiFillStar
                                size={12}
                                color="rgba(252, 213, 3, 1)"
                              />
                            );
                          })}
                        {Array(4 - parseInt(item?.rating))
                          .fill()
                          .map(() => {
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
                <h3 className="graphtitle">Coupen Code</h3>
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
              sx={{
                width: "100%",

                "& .MuiDataGrid-columnHeaders": {
                  backgroundColor: "#F9FAFC",
                  color: "#5A5A5A",
                },
                "& .MuiButton-root": {
                  color: "#FFFFFF",
                  display: "flex",
                  width: "200px",
                },
                // check
                ".MuiDataGrid-root .MuiDataGrid-columnHeader:focus-within": {
                  outline: "none",
                },
              }}
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
                  sx={{
                    "&.MuiDataGrid-root .MuiDataGrid-cell:focus-within": {
                      outline: "none",
                    },
                    "&.MuiDataGrid-root  .MuiDataGrid-columnHeader:focus": {
                      outline: "none",
                    },
                    "&.MuiDataGrid-root  .MuiDataGrid-cell:focus": {
                      outline: "none",
                    },
                    "&.MuiDataGrid-root .MuiDataGrid-row:hover": {
                      backgroundColor: "#FFFFFF",
                    },
                    "&.MuiDataGrid-root .MuiDataGrid-columnSeparator": {
                      visibility: "hidden",
                    },
                    " &.MuiDataGrid-root .MuiDataGrid-cellContent": {
                      fontSize: "14px",
                    },
                  }}
                />
              </ThemeProvider>
            </Box>
          ) : (
            <Recentorder title={"Order Details"} data={orderstore} />
          )}
        </div>
      </div>
    </div>
  );
};
export default Vendor;
