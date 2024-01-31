import  React,{useState} from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Link } from "react-router-dom";
import useStyles from '../../Style';
import Cookies from "universal-cookie";
import { ThemeProvider , Box ,createTheme } from "@mui/material";
import { SlSocialDropbox } from "react-icons/sl";

import axios from 'axios'
import "./Stall.css"
const Allstall = () => {
    const classes= useStyles()
    const cookies = new Cookies();
    const token_data = cookies.get("Token_access");
    const [userdata , setuserdata]= useState([])
    const columns = [
      { field: 'ID', headerName: 'User ID', width: 90 },
      {
        field: 'Name',
        headerName: 'Name',
        minWidth: 120,
        editable: false,
        sortable:false,
        flex:1,
        headerAlign: "center",
        align: "center",
      },
      {
        field: 'Email',
        headerName: 'Email',
        minWidth: 120,
        editable: false,
        sortable:false,
        flex:1,
        headerAlign: "center",
        align: "center",
      },
      {
        field: 'MobileNo',
        headerName: 'Phone Number',
        minWidth: 120,
        editable: false,
        sortable:false,
        flex:1,
        headerAlign: "center",
        align: "center",
      },
      {
        field: 'Roles',
        headerName: 'Roles',
        sortable:false,
        minWidth: 80,
        editable: false,
        flex:1,
        headerAlign: "center",
        align: "center",
        renderCell: (params) => {
            const onClick = (e) => {
              e.stopPropagation(); // don't select this row after clicking
            };
            return <span>{params.row.Roles.join()}</span>
        }
      },
      {
          field: 'Status',
          headerName: 'Status',
          sortable:false,
          minWidth: 80,
          editable: false,
          flex:1,
          headerAlign: "center",
          align: "center",
      },
 
    ];
    React.useEffect(()=>{
      axios.get('https://api.cannabaze.com/AdminPanel/AllStaff/',{
            headers: {
              Authorization: `Bearer ${token_data}`,
            },
      }).then((res)=>{
        setuserdata(res.data)
      })
    },[token_data])
    const rows = userdata


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
                    <h3 className='pagetitle'><SlSocialDropbox color='#31B655' size={25}/> All Staff</h3>
                    <div className='btnsgroup'>
                    <Link to={'/addstaff'}>
                        <button className="topbutton"> Add Staff</button>
                    </Link>
                    </div>
                </div>
                <div className='d-flex justify-content-end py-3 align-content-center'>
                
                </div>
                <div className='allusertable'>
                <Box sx={{
                                height: 600,
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
                                "&.MuiDataGrid-root":{
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
                                        getRowId={(row) => row.ID}
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

export default Allstall