import React, { useContext ,useEffect } from 'react'
import {SectionCard} from '../../molecules/SectionCard/Index'
import {Counterbox} from '../../molecules/Counterbox/Index'
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { ThemeProvider } from "@mui/material/styles";
import { createTheme } from "@mui/material/styles";
import Box from '@mui/material/Box';
import Createcontext from "../../Hooks/Context/Context"
import Eelete from "../Category/Delete";
import { FiAlertCircle } from "react-icons/fi";
import { RiDeleteBin6Line } from "react-icons/ri";
import {  AiOutlineEyeInvisible } from 'react-icons/ai';
import Cookies from 'universal-cookie';
import { LuEye } from "react-icons/lu";
import { FaRegStar } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import Tooltip from '@mui/material/Tooltip';
import useStyles from '../../Style';
import {useParams} from 'react-router-dom';
import Axios from 'axios';
const UserProfile = () => {
    const classes= useStyles()
    const param = useParams()
    const { state } = useContext(Createcontext)
    const [ typecounter, Settypecounter ] = React.useState(false)
    const [ userDetails, SetuserDetails ] = React.useState({})
    const [ orderdata, setorderdata ] = React.useState({})
    const [ reviewdata, setreviewdata ] = React.useState({})
   
    const cookies = new Cookies();
    const token_data = cookies.get('Token_access')
    const [pageSize, setPageSize] = React.useState(10)
      useEffect(() => {
      
        Axios.get(`https://api.cannabaze.com/AdminPanel/UserOrderandReview/${param.id}`, 
        {
          headers: {
            'Authorization': `Bearer ${token_data}`
          }
        }).then((res) => {
           let a ={}
           res.data.forEach((item)=>{
            a= {...a , ...item}
           })
           SetuserDetails(a)
        })
      }, [])

      useEffect(() => {
        !typecounter ?
            Axios.get(`https://api.cannabaze.com/AdminPanel/OrderbyUser/${param.id}`, 
            {
            headers: {
                'Authorization': `Bearer ${token_data}`
            }
            }).then((res) => {
                setorderdata(res.data)
            })
            :
            Axios.get(`https://api.cannabaze.com/AdminPanel/ReviewbyUser/${param.id}`, 
            {
                headers: {
                    'Authorization': `Bearer ${token_data}`
                }
            }).then((res) => {
                setreviewdata(res.data)
            })    
      }, [typecounter])
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
        { field: 'OrderId', headerName: 'Order ID', editable: false,  minWidth: 150,  valueGetter: (params) => `#${params.row.OrderId}`
,        headerClassName: 'super-app-theme--header', headerAlign: 'left', sortable:false },
        {
            field: 'SellerName', headerName: 'Seller Name', minWidth: 220,type: 'button', editable: false, sortable:false, headerClassName: 'super-app-theme--header', headerAlign: 'rigth',align:"rigth",
           
        },
        {
            field: 'Qty', headerName: 'Qty', type: 'number',minWidth: 150,sortable:false, editable: false, headerClassName: 'super-app-theme--header', headerAlign: 'left', align:"left",
            valueFormatter:(value)=>{return `2 Qty`}
        },
        {
            field: 'Order_Type', headerName: 'Order Type',minWidth: 150, type: 'button', editable: false, sortable:false, headerClassName: 'super-app-theme--header', headerAlign: 'rigth',align:"rigth",
          
        },
        {
            field: 'subtotal', headerName: 'Total Amount', type: 'number',minWidth: 150,sortable:false, editable: false, headerClassName: 'super-app-theme--header', headerAlign: 'left', align:"left",
           
        }, 
        {
            field: 'OrderDate', headerName: 'Date', type: 'number',minWidth: 150,sortable:false, editable: false, headerClassName: 'super-app-theme--header', headerAlign: 'left', align:"left",
            renderCell: (params) => {
                const date = new Date(params?.row?.OrderDate);
                return `${date?.getDate()}-${date?.getMonth() + 1}-${date?.getFullYear()}`
            }
        },
        {
            field: 'Order_Status', headerName: 'Order Status', type: 'number',minWidth: 150,sortable:false, editable: false, headerClassName: 'super-app-theme--header', headerAlign: 'left', align:"left",
        },
        {
            field: 'custom', headerName: '  ', type: 'number',minWidth: 150,sortable:false, editable: false, headerClassName: 'super-app-theme--header', headerAlign: 'left', align:"left",
            renderCell: (params) => {
                return <FiAlertCircle  size={18} color='rgba(0, 172, 79, 1)'/>
            }
        },
      
    ];
    const rows = orderdata


    const columns1 = [
        { field: 'StoreName', headerName: 'Store Name', editable: false,  minWidth: 150,  headerClassName: 'super-app-theme--header', headerAlign: 'left', sortable:false },
        {
            field: 'Rating', headerName: 'Rating', minWidth: 220,type: 'button', editable: false, sortable:false, headerClassName: 'super-app-theme--header', headerAlign: 'rigth',align:"rigth",
            renderCell: (params) => {
                return <span>{ 
                          Array(params.row.rating).fill().map(()=>{
                             return <FaStar  size={18} color='rgba(0, 172, 79, 1)'/>
                          }) }{
                          Array(5- params.row.rating).fill().map(()=>{
                              return <FaRegStar  size={18} color='rgba(0, 172, 79, 0.41)'/>

                          })  }
                   </span>
              }
        },
        {
            field: 'comment', headerName: 'Reviews', type: 'number',minWidth: 300,sortable:false, editable: false, headerClassName: 'super-app-theme--header', headerAlign: 'left', align:"left",
        },
        {
            field: 'created_at', headerName: 'Date',minWidth: 150, type: 'button', editable: false, sortable:false, headerClassName: 'super-app-theme--header', headerAlign: 'rigth',align:"rigth",
            renderCell: (params) => {
                const date = new Date(params?.row?.created_at);
                return `${date?.getDate()}-${date?.getMonth() + 1}-${date?.getFullYear()}`
            }
        },
        {
            field: 'sda', headerName: 'Actions',minWidth: 150, type: 'button', editable: false, sortable:false, headerClassName: 'super-app-theme--header', headerAlign: 'rigth',align:"rigth",
            renderCell: (params) => {
               
                return <span><RiDeleteBin6Line  size={18} color='rgba(0, 172, 79, 1)' /><FiAlertCircle  size={18} color='rgba(0, 172, 79, 1)' /></span>

            }
        },

    ];
    const rows1 =reviewdata
  return (
    <div className='UserProfile'>
        <div className='UserProfileWrapper'>
            <div className='userDiscription'>
             
                  <div className='p-4'>
                    <div className='userCircle'>
                        <img src={userDetails?.image}   onerror="this.src='https://i.ibb.co/DQ0Mc1Z/Ellipse-492.png';" />
                    </div>
                    <h2 className='userName'>{userDetails?.username}</h2>
                    <div className='contact_info'>
                    {userDetails?.email && <Counterbox bgcolor=' rgba(81, 176, 157, 0.15)' padding="3px 5px" color='rgba(81, 176, 157, 1)' size='14px' height='1.5' fontweight='500'> {userDetails?.email}</Counterbox>}
                    {userDetails?.DateOfBirth && <Counterbox bgcolor=' rgba(81, 176, 157, 0.15)' padding="3px 5px" color='rgba(81, 176, 157, 1)' size='14px' height='1.5' fontweight='500'> {userDetails?.DateOfBirth}</Counterbox>}
                    {userDetails?.MobilePhone &&  <Counterbox bgcolor=' rgba(81, 176, 157, 0.15)' padding="3px 5px" color='rgba(81, 176, 157, 1)' size='14px' height='1.5' fontweight='500'> {userDetails?.MobilePhone}</Counterbox>}
                    {userDetails?.PhotoId &&  <Counterbox bgcolor=' rgba(81, 176, 157, 0.15)' padding="3px 5px" color='rgba(81, 176, 157, 1)' size='14px' height='1.5' fontweight='500'> {userDetails?.PhotoId}</Counterbox>}
                    </div>
                    <div className='UsertotalcardWrapper'>
                        <SectionCard className='Usertotalcard'> 
                              <h4 className='UsertotalcardTitle'>Total Order</h4>
                            <Counterbox bgcolor=' rgba(81, 176, 157, 0.15)' padding="8px 5px" color='rgba(0, 172, 79, 1)' size='28px' height='42px' fontweight='500'> {userDetails?.order} </Counterbox>
                        </SectionCard>
                        <SectionCard className='Usertotalcard'>
                             <h4 className='UsertotalcardTitle'>Total Reviews</h4>
                            <Counterbox bgcolor=' rgba(81, 176, 157, 0.15)' padding="8px 12px" color='rgba(0, 172, 79, 1)' size='28px' height='42px' fontweight='500'> {userDetails?.reviews}  </Counterbox>
                        </SectionCard>
                    </div>
                  </div>
              
            </div>
       
            <div className='userTable'>
                <SectionCard>
                   <div>
                      <div className='counterType'>
                        <span className={!typecounter ? 'selectedItem' : 'notselected'} onClick={()=>{Settypecounter(!typecounter)}}>Order Details</span>
                        <span className={typecounter ? 'selectedItem' : 'notselected'} onClick={()=>{Settypecounter(!typecounter)}}>Reviews</span>
                      </div>
                      <div>
                      {!typecounter ?
                            <Box className={classes.DataTableBoxStyle}>
                                <ThemeProvider theme={CustomFontTheme}>
                                    <div style={{ width: '100%' }}>
                                    <DataGrid       rows={rows}
                                                    columns={columns} 
                                                    pageSize={pageSize}
                                                    getRowId={(row) => row.OrderId}
                                                    onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
                                                    rowsPerPageOptions={[ 10, 20]}
                                                    pagination
                                                    disableColumnMenu
                                                    disableColumnFilter
                                                    disableColumnSelector
                                                    className={classes.DataTableStyle}
                                                    disableSelectionOnClick 
                                                    autoHeight
                                        />
                                    </div>
                                </ThemeProvider>
                            </Box>
                            :
                            <Box className={classes.DataTableBoxStyle}>
                                <ThemeProvider theme={CustomFontTheme}>
                                    <div style={{ width: '100%' }}>
                                            <DataGrid       rows={rows1}
                                                    columns={columns1} 
                                                    pageSize={pageSize}
                                                    getRowId={(row) => row.id}
                                                    onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
                                                    rowsPerPageOptions={[ 10, 20]}
                                                    pagination
                                                    disableColumnMenu
                                                    disableColumnFilter
                                                    disableColumnSelector
                                                    disableSelectionOnClick 
                                                    className={classes.DataTableStyle}
                                                    autoHeight
                                            />
                                            </div>
                                </ThemeProvider>
                            </Box>
                      }
                      </div>
                   </div>

                </SectionCard>
            </div>
        </div>
    </div>
  )
}

export default UserProfile