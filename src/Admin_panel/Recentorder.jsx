import React, { useContext } from 'react'
import { ThemeProvider   } from "@mui/material/styles";
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';
import { DataGrid } from '@mui/x-data-grid';
import { DisabledByDefault } from '@mui/icons-material';
import { createTheme } from "@mui/material/styles";
import { FaEnvelope } from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";
const Recentorder = () => {
   
    const columns = [
        {
            field: 'orderID',
            headerName: 'Order ID',
            minWidth: 150,
            editable: false,
            sortable:false,
            headerAlign:'left',
            valueGetter: (params) =>
            `#${params.row.orderID}`,
          },
        {
          field: 'Name',
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
                          <img src={params.row.userImage}  alt=''/>
                        </div>
                      </div>
                      <div>
                        <h4 className='userName'>{params.row.UserName}</h4>
                        <h4 className='joinDate'>{params.row.applyDate}</h4>
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
                <li className='content_item'> <span className='contactIcon'><FaEnvelope color='#6B6F7A'/></span>{params.row.email}</li>
                <li className='content_item'> <span className='contactIcon'><BsFillTelephoneFill color='#6B6F7A'/></span>{params.row.Phone}</li>
              </ul>
          }
        },
        {
          field: 'StoreName',
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
          field: 'StoreType',
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
          },
          {
            field: 'totelAmount',
            headerName: 'Total Amount',
            type: 'number',
            minWidth: 150,
            editable: false,
            sortable:false,
            headerAlign:'left',
            align:'left',
            flex:1,
          },
        {
          field: 'StoreStatus',
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
      
      const rows = [
        { id: 1,  orderID:'876364', Quantity:'20 Qty', totelAmount: 140.00 ,userImage:'https://i.ibb.co/C2Bx9CN/image-29.png', UserName: 'Harsh jain', email: 'daniel.garcia@gmail.com', Phone: '(382) 302-1319', StoreName: 'Lex Weed', StoreType: 'Store Front', StoreStatus: 'Pending' },
        { id: 2,  orderID:'876364', Quantity:'20 Qty', totelAmount: 140.00 ,userImage:'https://i.ibb.co/C2Bx9CN/image-29.png', UserName: 'Anaya Briggs', email: 'daniel.garcia@gmail.com', Phone: '(382) 302-1319', StoreName: 'NYC Ounce CLub', StoreType: 'Delivery / Pickup', StoreStatus: 'Pending' },
        { id: 3,  orderID:'876364', Quantity:'20 Qty', totelAmount: 140.00 ,userImage:'https://i.ibb.co/C2Bx9CN/image-29.png', UserName: 'Daniel Garcia', email: 'daniel.garcia@gmail.com', Phone: '(382) 302-1319', StoreName: 'LeaflyweedNYC', StoreType: 'Delivery / Pickup', StoreStatus: 'Pending' },
        { id: 4,  orderID:'876364', Quantity:'20 Qty', totelAmount: 140.00 ,userImage:'https://i.ibb.co/C2Bx9CN/image-29.png', UserName: 'Roosevelt Carter', email: 'daniel.garcia@gmail.com', Phone: '(382) 302-1319', StoreName: 'NYC Ounce CLub', StoreType: 'Pick up', StoreStatus: 'Pending' },
        { id: 5,  orderID:'876364', Quantity:'20 Qty', totelAmount: 140.00 ,userImage:'https://i.ibb.co/C2Bx9CN/image-29.png', UserName: 'April Joseph', email: 'daniel.garcia@gmail.com', Phone: '(382) 302-1319', StoreName: 'Lex Weed', StoreType: 'Store Front', StoreStatus: 'Pending' },
        { id: 6,  orderID:'876364', Quantity:'20 Qty', totelAmount: 140.00 ,userImage:'https://i.ibb.co/C2Bx9CN/image-29.png', UserName: 'Daniel Garcia', email: 'daniel.garcia@gmail.com', Phone: '(382) 302-1319', StoreName: 'Lex Weed', StoreType: 'Delivery', StoreStatus: 'Pending' },
      ];

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
  return (
    <div className='py-5 bg-white'>
         <Box sx={{
                         
                         width: '100%',
                         '& .MuiDataGrid-columnHeaders': {
                             backgroundColor: '#E1FFED',
                         },
                         '& .MuiButton-root': {
                             color: "#FFFFFF",
                             display: "flex",
                             width: "200px"
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
                                         height: 400,
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