import  React,{useState} from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Link } from "react-router-dom";
import useStyles from '../../Style';
import Cookies from "universal-cookie";
import { ThemeProvider , Box ,createTheme } from "@mui/material";
import axios from 'axios'
import "./Stall.css"
const Allstall = () => {
    const classes= useStyles()
    const cookies = new Cookies();
    const token_data = cookies.get("Token_access");
    const [userdata , setuserdata]= useState([])
    const columns = [
      { field: 'ID', headerName: 'ID', width: 90 },
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
    <div className='allusers'>
        <div  className='d-flex justify-content-between align-content-center pb-5'> 
           <h3 className='pageheading'>All Staff</h3>
           <div className='btnsgroup'>
            <Link to={'/add-staff'}>
              <button className="topbutton"> Add Staff</button>
            </Link>
           </div>
        </div>
        <div className='d-flex justify-content-end py-3 align-content-center'>
      
        </div>
            <div className='allusertable'>
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
                              <DataGrid
                                  rows={rows}
                                  columns={columns}
                                  getRowId={(row) => row.ID}
                                  initialState={{
                                  pagination: {
                                      paginationModel: {
                                      pageSize: 5,
                                      },
                                  },
                                  }}
                                  pageSizeOptions={[5, 10, 25, 50]}
                                  disableRowSelectionOnClick
                                  disableColumnMenu
                                  disableColumnFilter
                                  disableColumnSelector
                                  autoHeight
                                  checkboxSelection={false}
                                  rowSelection={false}
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
                    </ThemeProvider>
                        </Box>
            </div>
    </div>
</div>
  )
}

export default Allstall