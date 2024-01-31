import  React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import useStyles from '../../Style';
import { ThemeProvider , Box ,createTheme } from "@mui/material";
import { SlSocialDropbox } from "react-icons/sl";
import {useLocation} from 'react-router-dom'
// import "./Stall.css"
const Topproducts = () => {
    const location = useLocation()
    const classes= useStyles()
    const columns = [
   
      { field: 'ProductImage', headerName: 'Product Image', minWidth: 120, 
            renderCell:(params)=>{
                return <span className='image_circle_tsp'><img src={params.row.Image}/></span> 
            }
      },
      {
        field: 'ProductName',
        headerName: 'Product Name',
        minWidth: 120,
        editable: false,
        sortable:false,
        flex:1,
        headerAlign: "center",
        align: "center",
      },
      {
        field: 'category',
        headerName: 'Category',
        minWidth: 120,
        editable: false,
        sortable:false,
        flex:1,
        headerAlign: "center",
        align: "center",
      },
      {
        field: 'ProductPrice',
        headerName: 'Price',
        minWidth: 120,
        editable: false,
        sortable:false,
        flex:1,
        headerAlign: "center",
        align: "center",
        valueFormatter: ({ value }) => `$${value}` 
      },
      {
        field: 'ProductSalesCount',
        headerName: 'Sale Unite',
        sortable:false,
        minWidth: 80,
        editable: false,
        flex:1,
        headerAlign: "center",
        align: "center",
        valueFormatter: ({ value }) => `${value} Qty` 
      },
      {
          field: 'Price',
          headerName: 'Total Sale Price',
          sortable:false,
          minWidth: 80,
          editable: false,
          flex:1,
          headerAlign: "center",
          align: "center",
          valueFormatter: ({ value }) => `$${value}` 
      },
      {
        field: 'StoreName',
        headerName: 'Store Name',
        sortable:false,
        minWidth: 80,
        editable: false,
        flex:1,
        headerAlign: "center",
        align: "center",
    },
    {
        field: 'Stock',
        headerName: 'Status',
        sortable:false,
        minWidth: 80,
        editable: false,
        flex:1,
        headerAlign: "center",
        align: "center",
        renderCell: (params) => {
            if (params.row.Stock === "IN Stock" ) {
              return <span className='statusactive'>In Stock</span>
            }else{
              return <span className='statusinactive'>Out Of stock</span>
            }
        },
    },
  
    ];
  
    const rows = location?.state
   

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
    <div className=' my-4 '>
            <div className='py-4 section_card'>
                <div  className='d-flex justify-content-between align-content-center px-4'> 
                    <h3 className='pagetitle'><SlSocialDropbox color='#31B655' size={25}/> Top Selling Product </h3>
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
                                    justifyContent:'center',
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
                                        getRowId={(row) => row.Product_id}
                                        initialState={{
                                        pagination: {
                                            paginationModel: {
                                            pageSize: 10,
                                            },
                                        },
                                        }}
                                        pageSizeOptions={[ 10, 25, 50]}
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

export default Topproducts