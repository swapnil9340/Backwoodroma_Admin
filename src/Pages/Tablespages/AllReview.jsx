import  React,{useState , useEffect,useContext} from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Link } from "react-router-dom";
import useStyles from '../../Style';
import Cookies from "universal-cookie";
import { ThemeProvider , Box ,createTheme } from "@mui/material";
import { SlSocialDropbox } from "react-icons/sl";
import Axios from 'axios'
import Createcontext from '../../Hooks/Context/Context'
import { IoAlertCircleOutline } from "react-icons/io5";
import { MdTrendingUp } from "react-icons/md";
import { FaArrowTrendDown } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";
import { BsTelephone } from "react-icons/bs";
const AllReview = () => {

    const [recentorder, setRecentorder] = useState([])
    const [error, seterror] = useState(false)
    const cookies = new Cookies();
    const token_data = cookies.get("Token_access");
    const [pageSize, setPageSize] = React.useState(10)
  
    
  
          useEffect(() => {
            Axios.post('https://api.cannabaze.com/AdminPanel/TopStore/', 
            {"SelectTime":"Year","StartDate":"2024-01-01","EndDate":"2024-01-29","LastStartDate":"2023-01-01","EndStartDate":"2023-12-31"},{
              headers: {
                'Authorization': `Bearer ${token_data}`
              }
            }).then((res) => {
              let a = res.data?.map((item , index)=>{
                 return {...item , id: index}
              })
              setRecentorder( a )
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
                headerName: 'No.',
                minWidth: 150,
                editable: false,
                sortable: false,
                headerAlign: 'left',
                valueGetter: (params) =>
                  `#${params.row.OrderId}`,
              },
              {
                field: 'VendorName',
                headerName: 'Name',
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
                headerName: 'E-mail',
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
                field: 'Rating',
                headerName: 'Rating',
                type: 'number',
                minWidth: 150,
                editable: false,
                sortable: false,
                headerAlign: 'center',
                align: 'center',
                flex: 1,
              },
              {
                field: 'Reviews',
                headerName: 'Reviews',
                flex: 1,
                editable: false,
                sortable: false,
                minWidth: 120,
                headerAlign: 'center',
                align: 'center',
              },
              {
                field: 'Date',
                headerName: 'Date',
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
                field: 'Action',
                headerName: 'Action',
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
             
            ];
  
            const rows = recentorder
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

export default AllReview