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
    const [userdata , setuserdata]= useState([]);
    const [pageSize, setPageSize] = React.useState(5);
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
                <Box  className={classes.DataTableBoxStyle}
                            >
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
                                        pageSize={pageSize}
                                onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
                                rowsPerPageOptions={[5, 10, 20]}
                                pagination
                                        disableRowSelectionOnClick
                                        disableColumnMenu
                                        disableColumnFilter
                                        disableColumnSelector
                                        autoHeight
                                        checkboxSelection={false}
                                        rowSelection={false}
                                        className={classes.DataTableStyle}
                                    />
                                </ThemeProvider>
                            </Box>
                </div>
            </div>
    </div>
  )
}

export default Allstall