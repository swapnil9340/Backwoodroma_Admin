import  React,{useState , useEffect,useContext} from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Link } from "react-router-dom";
import useStyles from '../../Style';
import Cookies from "universal-cookie";
import { ThemeProvider , Box ,createTheme } from "@mui/material";
import { ImDropbox } from "react-icons/im";
import Axios from 'axios'
import Createcontext from '../../Hooks/Context/Context'
import { IoAlertCircleOutline } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import { BsTelephone } from "react-icons/bs";
const Allrecentorder = () => {
  const [recentorder, setRecentorder] = useState([])
  const [error, seterror] = useState(false)
  const cookies = new Cookies();
  const token_data = cookies.get("Token_access");
  const [pageSize, setPageSize] = React.useState(10)

  function noimagefun(ev){
    // ev.target.src = "image/blank_Image.webp"
    seterror((error)=>{
      return true
    })
  }

        useEffect(() => {
          Axios.get('https://api.cannabaze.com/AdminPanel/AllRecentOrder/', {
            headers: {
              'Authorization': `Bearer ${token_data}`
            }
          }).then((res) => {
        
            setRecentorder(res.data)
          })
        }, [])
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
            {
              field: 'OrderId',
              headerName: 'Order ID',
              minWidth: 150,
              editable: false,
              sortable: false,
              headerAlign: 'left',
              valueGetter: (params) =>
                `#${params.row.OrderId}`,
            },
            {
              field: 'username',
              headerName: 'Name',
              minWidth: 150,
              editable: false,
              sortable: false,
              headerAlign: 'left',
              flex: 1,
              renderCell: (params) => {
                return <div className='pendingUserProfile'>
                  <div className='userImage'>
                    <div className='userImageCircle'>
                  <img src={params.row.UserProfileImage}  onError={noimagefun} alt='' />
                       
                    </div>
                  </div>
                  <div>
                    <h4 className='userName'>{params.row.username}</h4>
        
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
                  {params?.row?.email && <li className='content_item'> <span className='contactIcon'><MdOutlineEmail color='#6B6F7A' /></span>{params.row.email}</li>}
                  {params?.row?.MobileNo && <li className='content_item'> <span className='contactIcon'><BsTelephone color='#6B6F7A' /></span>{params.row.MobileNo}</li>}
                </ul>
              }
            },
            {
              field: 'SellerName',
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
              field: 'Order_Type',
              headerName: 'Store Type',
              flex: 1,
              editable: false,
              sortable: false,
              minWidth: 120,
              headerAlign: 'center',
              align: 'center',
            },
            {
              field: 'Quantity',
              headerName: 'Quantity',
              type: 'number',
              minWidth: 120,
              editable: false,
              sortable: false,
              headerAlign: 'center',
              align: 'center',
              flex: 1,
              renderCell: (params) => {
                let a = 0
                params?.row?.Product?.forEach((items) => {
                  a += items.Cart_Quantity
                })
                return <span>{a}</span>
              }
            },
            {
              field: 'subtotal',
              headerName: 'Total Amount',
              type: 'number',
              minWidth: 120,
              editable: false,
              sortable: false,
              headerAlign: 'center',
              align: 'center',
              flex: 1,
              valueGetter: (params) =>
                `$ ${params.row.subtotal}`,
            },
            {
              field: 'Order_Status',
              headerName: 'Order Status',
              type: 'number',
              minWidth: 120,
              editable: false,
              sortable: false,
              flex: 1,
              headerAlign: 'center',
              align: 'center',
              renderCell: (params) => {
                return <div className={`${params.row.Order_Status === "Pending" ? 'ResendOrder' : "ResendOrder1 "} padmingbtn `}>
                  <span className={` pandingDot`} > {params.row.Order_Status} </span>
                </div>
        
              }
            },
            {
              field: 'imGE',
              headerName: '',
              type: 'number',
              minWidth: 120,
              editable: false,
              sortable: false,
              flex: 1,
              headerAlign: 'center',
              align: 'center',
              renderCell: (params) => {
                return <IoAlertCircleOutline  color='#31b655' fontSize={23}/>
              }
            },
          ];

          const rows = recentorder
  return (
    <div className=' my-4 '>
    <div className='py-4 section_card'>
        <div  className='d-flex justify-content-between align-content-center px-4'> 
            <h3 pagetitle='pagetitle'><ImDropbox color='#31B655' size={25}/>All Recent Order </h3>
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
                                getRowId={(row) => row.OrderId}
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

export default Allrecentorder