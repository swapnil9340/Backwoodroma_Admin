import React from 'react'
import { ThemeProvider } from "@mui/material/styles";
import { DataGrid } from '@mui/x-data-grid';
import Box from '@mui/material/Box';
import { createTheme } from "@mui/material/styles";
import IconButton from '@mui/material/IconButton';
import {Link} from 'react-router-dom'
const Rolelist = () => {
    const [pageSize, setPageSize] = React.useState(5);
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
        { field: 'No', headerName: 'No', editable: false,  minWidth: 110, flex: 1, headerClassName: 'super-app-theme--header', headerAlign: 'left',sortable:false },

        { field: 'Name', headerName: 'Name', editable: false,  minWidth: 110, flex: 1, headerClassName: 'super-app-theme--header', headerAlign: 'left',sortable:false },
        {
            field: 'CreatedAt', headerName: 'Created At', type: 'number',sortable:false, editable: true,flex: 1, headerClassName: 'super-app-theme--header', headerAlign: 'right', align:"center",
         
        },
        {
            field: 'Edit', headerName: 'Edit', type: 'button', editable: false, sortable:false,flex: 1, headerClassName: 'super-app-theme--header', headerAlign: 'rigth',align:"rigth",
           
        },

    ];
    const rows = [{id:1,No:1,Name:'Co Admin' , CreatedAt:'12-09-23' , }]
  return (
    <div className='roletablepage'>
        <div className='row'>
        <div className=' Add_Category  my-4 d-flex align-items-center justify-content-between'>
                        <h2>Roles </h2>
                        <Link to={'/'}><button className='customiconbtn' >Add Roles</button> </Link>
                    </div>
                    <div className='col-12'>
                        <Box sx={{
                            height: 400,
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
                                                
                                                pageSize={pageSize}
                                                onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
                                                rowsPerPageOptions={[5, 10, 20]}
                                                pagination
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
                    </div>
        </div>
    </div>
  )
}
export default Rolelist