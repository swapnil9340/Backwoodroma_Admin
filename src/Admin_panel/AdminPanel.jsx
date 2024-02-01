import React, { useContext, useState, useEffect } from 'react'
import StatusBarCard from './StatusBarCard'
import ReactApexChart from 'react-apexcharts';
import Createcontext from '../Hooks/Context/Context'
import Productstorelist from './Productstorelist';
import { ThemeProvider } from "@mui/material/styles";
import Box from '@mui/material/Box';
import { createTheme } from "@mui/material/styles";
import './dashboard.css';
import { Link } from 'react-router-dom';
import { DataGrid } from '@mui/x-data-grid';
import TotalSales from './TotalSales'
import Areagraph from './Areagraph'
import Recentorder from './Recentorder';
import { MdOutlineEmail } from "react-icons/md";
import { BsTelephone } from "react-icons/bs";
import axios from 'axios';
import Cookies from 'universal-cookie'
export default function AdminPanel() {
  const { state } = useContext(Createcontext)
  const cookies = new Cookies();
  const [pendingstore, setPendingStore] = useState([])
  const token_data = cookies.get('Token_access')
  const columns = [

    {
      field: 'UserName',
      headerName: 'Name',
      minWidth: 150,
      editable: false,
      sortable: false,
      headerAlign: 'left',
    },
    {
      field: 'MobileNo',
      headerName: 'Contact',
      minWidth: 200,
      editable: false,
      headerAlign: 'center',
      sortable: false,
    },
    {
      field: 'StoreName',
      headerName: 'Store Name',
      type: 'number',
      minWidth: 150,
      editable: false,
      sortable: false,
      headerAlign: 'left',
      align: 'left',
    },
    {
      field: 'StoreType',
      headerName: 'Store Type',

      editable: false,
      sortable: false,
      minWidth: 150,

    },
    {
      field: 'StoreStatus',
      headerName: 'Store Status',
      type: 'number',
      minWidth: 120,
      editable: false,
      sortable: false,
      // renderCell: (params) => {
      //     return <div className='padmingbtn'>
      //       <span className='pandingDot'></span>
      //       Pending
      //     </div>
      // }
    },
  ];
  // const rows = [
  //   { id: 1, userImage:'https://i.ibb.co/C2Bx9CN/image-29.png', UserName: 'Harsh jain', applyDate: 'Today 07:00 PM', email: 'daniel.garcia@gmail.com', Phone: '(382) 302-1319', StoreName: 'Lex Weed', StoreType: 'Store Front', StoreStatus: 'Pending' },
  //   { id: 2, userImage:'https://i.ibb.co/C2Bx9CN/image-29.png', UserName: 'Anaya Briggs', applyDate: 'Today 07:00 PM', email: 'daniel.garcia@gmail.com', Phone: '(382) 302-1319', StoreName: 'NYC Ounce CLub', StoreType: 'Delivery / Pickup', StoreStatus: 'Pending' },
  //   { id: 3, userImage:'https://i.ibb.co/C2Bx9CN/image-29.png', UserName: 'Daniel Garcia', applyDate: 'Today 07:00 PM', email: 'daniel.garcia@gmail.com', Phone: '(382) 302-1319', StoreName: 'LeaflyweedNYC', StoreType: 'Delivery / Pickup', StoreStatus: 'Pending' },
  //   { id: 4, userImage:'https://i.ibb.co/C2Bx9CN/image-29.png', UserName: 'Roosevelt Carter', applyDate: 'Today 07:00 PM', email: 'daniel.garcia@gmail.com', Phone: '(382) 302-1319', StoreName: 'NYC Ounce CLub', StoreType: 'Pick up', StoreStatus: 'Pending' },
  //   { id: 5, userImage:'https://i.ibb.co/C2Bx9CN/image-29.png', UserName: 'April Joseph', applyDate: 'Today 07:00 PM', email: 'daniel.garcia@gmail.com', Phone: '(382) 302-1319', StoreName: 'Lex Weed', StoreType: 'Store Front', StoreStatus: 'Pending' },
  //   { id: 6, userImage:'https://i.ibb.co/C2Bx9CN/image-29.png', UserName: 'Daniel Garcia', applyDate: 'Today 07:00 PM', email: 'daniel.garcia@gmail.com', Phone: '(382) 302-1319', StoreName: 'Lex Weed', StoreType: 'Delivery', StoreStatus: 'Pending' },
  // ];

  const rows = pendingstore

  const CustomFontTheme = createTheme({
    typography: {
      fontSize: 25
    },
    components: {
      MuiContainer: {
        styleOverrides: {
          root: {
            fontSize: 24,

          }
        }
      },
    },

  });
  const locationchart = {

    series: [14, 23, 21, 17, 15, 10, 12,],
    options: {
      colors: ["#1E40AF", "#1D4ED8", "#2563EB", "#3B82F6", "#60A5FA", "#93C5FD", "#BFDBFE"],
      chart: {
        type: 'polarArea',
      },
      stroke: {
        colors: ['#fff']
      },
      legend: {
        show: false,
        position: 'bottom'
      },
      fill: {
        opacity: 1
      },
      responsive: [{
        breakpoint: 480,
        options: {
          chart: {
            width: 200
          },
          legend: {
            show: false,
            position: 'bottom'
          }
        }
      }]
    },
  };
  const [Data, SetData] = useState({})
  //  Months//////////////////
  const [Data1, SetData1] = React.useState([])
  const [TopStore, SetTopStore] = React.useState([])

  let date = new Date()
  const TodayDate = date.getFullYear() + "-" + date.getMonth() + 1 + "-" + date.getDate()
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
    if (state.datesSelect === "Customics") {
      if (state.CustomeStartDate !== "" && state.CustomeEndDate !== "") {
        SetData({
          "SelectTime": state.datesSelect === "Year" ? "ThisYear" : state.datesSelect === "Months" ? 'ThisMonth' : state.datesSelect === "Today" ? 'Today' : state.datesSelect === "week" ? "week" : state.datesSelect === "Customics" && "costume",
          "StartDate": state.datesSelect === "Year" ? `${date.getFullYear()}-01-01` : state.datesSelect === "Months" ? monthStartDate : state.datesSelect === "week" ? StartDateWeek : state.datesSelect === "Today" ? TodayDate : state.datesSelect === "Customics" && state.CustomeStartDate,
          "EndDate": state.datesSelect === "Year" ? TodayDate : state.datesSelect === "Months" ? monthlastDate : state.datesSelect === "week" ? TodayDate : state.datesSelect === "Today" ? TodayDate : state.datesSelect === "Customics" && state.CustomeEndDate,
          "LastStartDate": state.datesSelect === "Year" ? `${lastYear}-01-01` : state.datesSelect === "Months" ? lastmonthStartDate : state.datesSelect === "week" ? GetpreviousWeekDate(7, 1) : state.datesSelect === "Today" ? yesterday.toISOString().split('T')[0] : state.datesSelect === "Customics" && CalculateDays('first'),  //yesterday.toISOString().split('T')[0]
          "EndStartDate": state.datesSelect === "Year" ? `${lastYear}-12-31` : state.datesSelect === "Months" ? lastmonthLastDate : state.datesSelect === "week" ? GetpreviousWeekDate(0, 0) : state.datesSelect === "Today" ? yesterday.toISOString().split('T')[0] : state.datesSelect === "Customics" && CalculateDays('Second')
        })
      }
    }
    else {
      SetData({
        "SelectTime": state.datesSelect === "Year" ? "ThisYear" : state.datesSelect === "Months" ? 'ThisMonth' : state.datesSelect === "Today" ? 'Today' : state.datesSelect === "week" ? "week" : state.datesSelect === "Customics" && "costume",
        "StartDate": state.datesSelect === "Year" ? `${date.getFullYear()}-01-01` : state.datesSelect === "Months" ? monthStartDate : state.datesSelect === "week" ? StartDateWeek : state.datesSelect === "Today" ? TodayDate : state.datesSelect === "Customics" && state.CustomeStartDate,
        "EndDate": state.datesSelect === "Year" ? TodayDate : state.datesSelect === "Months" ? monthlastDate : state.datesSelect === "week" ? TodayDate : state.datesSelect === "Today" ? TodayDate : state.datesSelect === "Customics" && state.CustomeEndDate,
        "LastStartDate": state.datesSelect === "Year" ? `${lastYear}-01-01` : state.datesSelect === "Months" ? lastmonthStartDate : state.datesSelect === "week" ? GetpreviousWeekDate(7, 1) : state.datesSelect === "Today" ? yesterday.toISOString().split('T')[0] : state.datesSelect === "Customics" && CalculateDays('first'),  //yesterday.toISOString().split('T')[0]
        "EndStartDate": state.datesSelect === "Year" ? `${lastYear}-12-31` : state.datesSelect === "Months" ? lastmonthLastDate : state.datesSelect === "week" ? GetpreviousWeekDate(0, 0) : state.datesSelect === "Today" ? yesterday.toISOString().split('T')[0] : state.datesSelect === "Customics" && CalculateDays('Second')
      })
    }
  }, [state.datesSelect, state.CustomeStartDate, state.CustomeEndDate])

  useEffect(() => {
    if (Object.keys(Data).length !== 0) {
      axios.post('https://api.cannabaze.com/AdminPanel/AllPendingStores/',
        Data
        , {
          headers: {
            'Authorization': `Bearer ${token_data}`
          }
        }).then((res) => {
          setPendingStore((previous) => res.data)
        })

        axios.post("https://api.cannabaze.com/AdminPanel/TopProduct/",
        Data,
        {
          headers: {
            'Authorization': `Bearer ${token_data}`
          }
        }).then(response => {
          SetData1(response.data)
  
        })
      axios.post("https://api.cannabaze.com/AdminPanel/TopStore/",
        Data,
        {
          headers: {
            'Authorization': `Bearer ${token_data}`
          }
        }).then(response => {
          SetTopStore(response.data)
  
        })
    


    }
  }, [Data])

  return (
    <div className='row dashboardSection'>

      <div className='col-12 StatusCardBorder' >
        <StatusBarCard></StatusBarCard>
      </div>
      <div className='col-12'>
        <div className='dashboardHerosection'>
          <div className='totalUser bg-white'>
            <Areagraph props={"dashboard"} />
          </div>
          <div className='topProducts'><Productstorelist link={'/topproduct'} title={"Top Product"} Data1={Data1} /></div>
          <div className='topProducts'><Productstorelist link={'/topstorelist'} title={"Top Store"} Data1={TopStore} /></div>
          <div className='topProducts'><Productstorelist title={"Visited Store"} /></div>
          <div className='topProducts'>
            <TotalSales  type={'dashboard'} />
          </div>
        </div>

      </div>
      <div className='col-12 d-flex justify-content-between flex-md-nowrap flex-wrap gap-md-0 gap-5'>
        <div className='storeOwnerTable'>
          <div className='ownerlist'>
            <Box
              sx={{

                width: '100%',
                '& .MuiDataGrid-columnHeaders': {
                  backgroundColor: '#fff',
                  color: '#B5B7C0'
                },
                '& .MuiButton-root': {
                  color: "#FFFFFF",
                  display: "flex",
                  width: "200px"
                },
                "& .MuiDataGrid-root": {
                  border: 'none',
                },
                // check
                ".MuiDataGrid-root .MuiDataGrid-columnHeader:focus-within": {
                  outline: "none"
                },

                "@media(max-width:767px)": {
                  '& .MuiButton-root': {
                    display: "contents",
                    width: "150px",
                    margin: "2px",
                    fontSize: "14px"
                  },

                },
                "@media(max-width:546px)": {
                  '& .MuiButton-root': {
                    display: "contents",
                    width: "150px",
                    fontSize: "9px"
                  },

                },
                "@media(min-width:768px)": {
                  '& .MuiButton-root': {
                    width: "110px",
                    margin: "2px",
                    fontSize: "14px"
                  },

                  "&.MuiDataGrid-root .MuiDataGrid-columnHeaderDraggableContainer": {
                    width: "120px"
                  }
                }
              }}>
              <ThemeProvider theme={CustomFontTheme}>
                <div style={{ width: '100%' }}>
                  <DataGrid rows={rows} columns={columns}
                    getRowId={(row) => row.UserName}
                    hideFooterPagination
                    hideFooterSelectedRowCount
                    rowsPerPageOptions={[5, 10, 20]}
                    autoHeight
                    disableColumnMenu
                    disableColumnFilter
                    disableColumnSelector
                    sx={{
                      "&.MuiDataGrid-root .MuiDataGrid-cell:focus-within": {
                        outline: "none",
                      },
                      "&.MuiDataGrid-root  .MuiDataGrid-columnHeader:focus": {
                        outline: "none"
                      },
                      "&.MuiDataGrid-root  .MuiDataGrid-cell:focus": {
                        outline: "none",

                      },
                      "&.MuiDataGrid-root .MuiDataGrid-row:hover": {
                        backgroundColor: "#FFFFFF"
                      },

                      width: '100%',
                      "@media(max-width:768px)": {
                        ".MuiDataGrid-toolbarContainer": {
                          gap: "10px",

                        }
                      },
                      "@media(max-width:546px)": {
                        ".MuiDataGrid-toolbarContainer": {
                          gap: "5px",

                        }
                      },
                      ".MuiDataGrid-toolbarContainer": {
                        flexDirection: "block",

                        backgroundColor: "#31B665",
                        width: {
                          xs: "100%",
                          sm: "100%",
                          md: "100%",
                          lg: "100%",
                          xl: "100%"

                        },
                      },
                      "&.MuiDataGrid-root .MuiDataGrid-columnSeparator": {
                        visibility: "hidden"
                      },
                      "&.MuiDataGrid-root .MuiDataGrid-columnHeaderDraggableContainer": {
                        width: "120px"
                      }

                    }}
                  />
                </div>
              </ThemeProvider>
            </Box>
          </div>
          <div className='viewButton'>
            <Link to={'/'}> <span>View All</span></Link>
          </div>
        </div>
        <div className='locationGraph'>
          <div className='locationGraph_header'>
            <h3 className='locationGraph_headertitle'>Popular Location</h3>
            <Link><span>View Details</span></Link>
          </div>
          <div className='locationContent'>
            <div className='locationList'>
              <div className='locationListHeader'>
                <span>Location</span>
                <span>Amount</span>
              </div>
              <div className='locationListItem'>

                <span className='locationName'>   <span className='colorCircle' style={{ backgroundColor: '#1E40AF' }}></span> New York</span>
                <span className='locationAmount'>6,806</span>
              </div>
              <div className='locationListItem'>

                <span className='locationName'>   <span className='colorCircle' style={{ backgroundColor: '#1D4ED8' }}></span> Phoenix</span>
                <span className='locationAmount'>6,806</span>
              </div>
              <div className='locationListItem'>

                <span className='locationName'>   <span className='colorCircle' style={{ backgroundColor: '#2563EB' }}></span> Chicago</span>
                <span className='locationAmount'>2000</span>
              </div>
              <div className='locationListItem'>

                <span className='locationName'>   <span className='colorCircle' style={{ backgroundColor: '#3B82F6' }}></span> Philadelphia </span>
                <span className='locationAmount'>1600</span>
              </div>
              <div className='locationListItem'>

                <span className='locationName'>   <span className='colorCircle' style={{ backgroundColor: '#60A5FA' }}></span>  Los Angeles </span>
                <span className='locationAmount'>806</span>
              </div>
              <div className='locationListItem'>

                <span className='locationName'>   <span className='colorCircle' style={{ backgroundColor: '#93C5FD' }}></span> Dallas</span>
                <span className='locationAmount'>566</span>
              </div>
              <div className='locationListItem'>

                <span className='locationName'>   <span className='colorCircle' style={{ backgroundColor: '#BFDBFE' }}></span> Oklahoma City </span>
                <span className='locationAmount'>566</span>
              </div>
            </div>
            <div className='locationGrapharea'>
              <ReactApexChart options={locationchart.options} series={locationchart.series} type="polarArea" />
            </div>
          </div>
        </div>
      </div>
      <div className='col-12 my-3'>
        <Recentorder />
      </div>

    </div>
  )
}
