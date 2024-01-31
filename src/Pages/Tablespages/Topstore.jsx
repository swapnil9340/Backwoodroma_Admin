import  React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { ThemeProvider , Box ,createTheme } from "@mui/material";
import { SlSocialDropbox } from "react-icons/sl";
import { MdTrendingUp } from "react-icons/md";
import { FaArrowTrendDown } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";
import { BsTelephone } from "react-icons/bs";
import {useLocation} from 'react-router-dom'
const Topstore = () => {
    const location = useLocation()
    const [pageSize, setPageSize] = React.useState(10)
  
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
          const columns = [
              // {
              //   field: 'OrderId',
              //   headerName: 'Vendor Name',
              //   minWidth: 150,
              //   editable: false,
              //   sortable: false,
              //   headerAlign: 'left',
              //   valueGetter: (params) =>
              //     `#${params.row.OrderId}`,
              // },
              {
                field: 'VendorName',
                headerName: 'Vendor Name',
                minWidth: 150,
                editable: false,
                sortable: false,
                headerAlign: 'left',
                flex: 1,
                renderCell: (params) => {
                  return <div className='pendingUserProfile'>
                    <div className='userImage'>
                      <div className='namecircles'>
                         {params.row?.VendorName?.charAt(0)}{params.row?.VendorName?.split(' ')[1]?.charAt(0)}     
                      </div>
                    </div>
                    <div>
                      <h4 className='userName'>{params.row.VendorName}</h4>
          
                    </div>
                  </div>
                }
              },
              {
                field: 'Contact',
                headerName: 'Contact',
                minWidth: 230,
                editable: false,
                headerAlign: 'center',
                sortable: false,
                flex: 1,
                renderCell: (params) => {
                  return <ul className='pendingvendercontent'>
                    {params?.row?.Email && <li className='content_item'> <span className='contactIcon'><MdOutlineEmail color='#6B6F7A' /></span>{params.row.Email}</li>}
                    {params?.row?.MobileNo && <li className='content_item'> <span className='contactIcon'><BsTelephone color='#6B6F7A' /></span>{params.row.MobileNo}</li>}
                  </ul>
                }
              },
              {
                field: 'StoreName',
                headerName: 'Store Name',
                type: 'number',
                minWidth: 150,
                editable: false,
                sortable: false,
                headerAlign: 'center',
                align: 'center',
                flex: 1,
              },
              {
                field: 'StoreType',
                headerName: 'Store Type',
                flex: 1,
                editable: false,
                sortable: false,
                minWidth: 120,
                headerAlign: 'center',
                align: 'center',
              },
              {
                field: 'StoreOrder',
                headerName: 'Store Order',
                type: 'number',
                minWidth: 120,
                editable: false,
                sortable: false,
                headerAlign: 'center',
                align: 'center',
                flex: 1,
                valueGetter:(params)=>`${ params.row.StoreOrder} Qty`
              },
              {
                field: 'SalesPrice',
                headerName: 'Store Sales',
                type: 'number',
                minWidth: 120,
                editable: false,
                sortable: false,
                headerAlign: 'center',
                align: 'center',
                flex: 1,
                valueGetter: (params) =>
                  `$ ${params.row.SalesPrice}`,
              },
              {
                field: 'GrowthRatio',
                headerName: 'Growth Ratio',
                type: 'number',
                minWidth: 120,
                editable: false,
                sortable: false,
                flex: 1,
                headerAlign: 'center',
                align: 'center',
                renderCell: (params) => {
                  return <div className={`${params.row.groth === "Pending" ? 'ResendOrder' : "ResendOrder1 "} padmingbtn `}>
                    <span className={` pandingDot`} >  {params.row.groth  ? <FaArrowTrendDown /> :<MdTrendingUp />} {params.row.SalesPrice} </span>
                  </div>
          
                }
              },
              // {
              //   field: 'imGE',
              //   headerName: '',
              //   type: 'number',
              //   minWidth: 120,
              //   editable: false,
              //   sortable: false,
              //   flex: 1,
              //   headerAlign: 'center',
              //   align: 'center',
              //   renderCell: (params) => {
              //     return <IoAlertCircleOutline  color='#31b655' fontSize={23}/>
              //   }
              // },
            ];
  
            const rows = location?.state
  return (
    <div className=' my-4 '>
    <div className='py-4 section_card'>
        <div  className='d-flex justify-content-between align-content-center px-4'> 
            <h3 className='pagetitle'><SlSocialDropbox color='#31B655' size={25}/>Popular store </h3>
            <div className='btnsgroup'>
            {/* <Link to={'/addstaff'}>
                <button className="topbutton">Top Product</button>
            </Link> */}
            </div>
        </div>
        <div className='d-flex justify-content-end py-3 align-content-center'>
        
        </div>
        <div className='allusertable'>
        <Box sx={{
                       
                        width: '100%',
                        '& .MuiDataGrid-columnHeaders': {
                            backgroundColor: '#F9FAFC',
                            color:'#5A5A5A',
                           
                        },
                        '& .MuiButton-root': {
                            color: "#FFFFFF",
                            display: "flex",
                          
                        },
                            // check
                        "& .MuiDataGrid-root":{
                           border:'none',
                        },
                       
                            "&.MuiDataGrid-root .MuiDataGrid-columnHeader:focus-within":{
                            outline:"none"
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
                            <DataGrid
                                rows={rows}
                                columns={columns}
                                getRowId={(row) => row.id}
                                pageSize={pageSize}
                                onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
                                pageSizeOptions={[ 10, 25, 50]}
                                pagination
                                disableRowSelectionOnClick
                                disableColumnMenu
                                disableColumnFilter
                                disableColumnSelector
                                autoHeight
                                checkboxSelection={false}
                                rowSelection={false}
                                sx={{
                                    "& .MuiDataGrid-columnHeader":{
                                        justifyContent:'center',
                                    },
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
                                "& .MuiDataGrid-columnHeaderTitle":{
                                    fontSize:'12px',
                                },
                                '& .MuiDataGrid-cellContent':{
                                    fontSize:'12px',
                                    color:'#000',
                                    fontWeight:'500',
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
                        </ThemeProvider>
                    </Box>
        </div>
    </div>
    </div>
  )
}

export default Topstore