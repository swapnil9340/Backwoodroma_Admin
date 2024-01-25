import React, { useContext, useState,useEffect } from 'react'
import { ThemeProvider   } from "@mui/material/styles";
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';
import { DataGrid } from '@mui/x-data-grid';
import { DisabledByDefault } from '@mui/icons-material';
import { createTheme } from "@mui/material/styles";
import { FaEnvelope } from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";
import Searchbar from '../Components/Component/Searchbar';
import Axios from 'axios'
import Cookies from 'universal-cookie';
import { MdOutlineEmail } from "react-icons/md";
import { BsTelephone } from "react-icons/bs";
const Recentorder = () => {
      const [searchtext, setSearchtext] = useState('')
      const [searchdata, setSearchdata] = useState('')
      const cookies = new Cookies();
      const token_data = cookies.get('Token_access')
      const [recentorder,setRecentorder]= React.useState([])
      const columns = [
        {
            field: 'OrderId',
            headerName: 'Order ID',
            minWidth: 150,
            editable: false,
            sortable:false,
            headerAlign:'left',
            valueGetter: (params) =>
            `#${params.row.OrderId}`,
        },
        {
          field: 'username',
          headerName: 'Name',
          minWidth: 150,
          editable: false,
          sortable:false,
          headerAlign:'left',
          flex:1,
          renderCell: (params) => {
             return <div className='pendingUserProfile'>
                      <div className='userImage'>
                        <div className='userImageCircle'>
                          <img src={params.row.IdCard}  alt=''/>
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
          minWidth: 200,
          editable: false,
          headerAlign:'center',
          sortable:false,
          flex:1,
          renderCell: (params) => {
              return <ul className='pendingvendercontent'>
               {params?.row?.email  && <li className='content_item'> <span className='contactIcon'><MdOutlineEmail color='#6B6F7A'/></span>{params.row.email}</li>}
               {params?.row?.MobileNo  && <li className='content_item'> <span className='contactIcon'><BsTelephone color='#6B6F7A'/></span>{params.row.MobileNo}</li>}
              </ul>
          }
        },
        {
          field: 'SellerName',
          headerName: 'Store Name',
          type: 'number',
          minWidth: 150,
          editable: false,
          sortable:false,
          headerAlign:'left',
          align:'left',
          flex:1,
        },
        {
          field: 'Order_Type',
          headerName: 'Store Type',
          flex:1,
          editable: false,
          sortable:false,
          minWidth: 150,
         
        },
        {
            field: 'Quantity',
            headerName: 'Quantity',
            type: 'number',
            minWidth: 150,
            editable: false,
            sortable:false,
            headerAlign:'left',
            align:'left',
            flex:1,
            renderCell: (params) => {
              let a =0
              params?.row?.Product?.forEach((items)=>{
                   a += items.Cart_Quantity
              })
              return <span>{a}</span>
          }
        },
        {
          field: 'subtotal',
          headerName: 'Total Amount',
          type: 'number',
          minWidth: 150,
          editable: false,
          sortable:false,
          headerAlign:'left',
          align:'left',
          flex:1,
          valueGetter: (params) =>
          `$ ${params.row.subtotal}`,
        },
        {
          field: 'Order_Status',
          headerName: 'Order Status',
          type: 'number',
          minWidth: 120,
          editable: false,
          sortable:false,
          flex:1,
          headerAlign:'center',
            align:'center',
          renderCell: (params) => {
              return <div className='padmingbtn'>
                <span className='pandingDot'></span>
                Pending
              </div>
          }
        },
      ];
      React.useEffect(() => {
        const getData = setTimeout(() => {
          Axios
          .post(`https://api.cannabaze.com/AdminPanel/SearchRecentOrderDashboard/`,
          {"search": searchtext}  , 
          { 
            headers:{
              'Authorization': `Bearer ${token_data}`
            }
          })
          .then((response) => {
            // setSearchdata(response.data);
            setRecentorder(response.data.slice(0, 6))
          });
        }, 1000)
        return () => clearTimeout(getData)
        }, [searchtext])
      const rows =recentorder
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
      useEffect(()=>{
         Axios.get('https://api.cannabaze.com/AdminPanel/AllRecentOrder/',{
          headers:{
            'Authorization': `Bearer ${token_data}`
          }
         }).then((res)=>{
          setRecentorder(res.data.slice(0, 6))
         })
      },[])
  return (
    <div className='RecentOrderCard'>
         <div className='d-flex gap-4 py-4'>
           <h3 className='graphtitle'>Recent Order</h3>
           <div className='searchBarrecent'> <Searchbar searchtext={searchtext} type={'recentOrder'} searchdata={searchdata} setSearchtext={setSearchtext} ></Searchbar></div>
         </div>
        
         <Box sx={{
                         
                         width: '100%',
                         '& .MuiDataGrid-columnHeaders': {
                             backgroundColor: '#fff',
                             color:'#B5B7C0'
                         },
                         '& .MuiButton-root': {
                             color: "#FFFFFF",
                             display: "flex",
                             width: "200px"
                         },
                         "& .MuiDataGrid-root":{
                              border:'none',
                         },
                          // check
                          ".MuiDataGrid-root .MuiDataGrid-columnHeader:focus-within":{
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
                             <div style={{ width: '100%' }}>
                                 <DataGrid rows={rows} columns={columns} 
                                           
                                             hideFooterPagination
                                             hideFooterSelectedRowCount
                                             rowsPerPageOptions={[5, 10, 20]}
                                             disableColumnMenu
                                             disableColumnFilter
                                             disableColumnSelector
                                             hideFooter={true}
                                             getRowId={(row) => row.OrderId}
                                             autoHeight
                                             slotProps={{
                                                footer: false ,
                                              }}
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
         <div className='text-center py-3'><Link><span>View All</span></Link></div>
    </div>
  )
}

export default Recentorder