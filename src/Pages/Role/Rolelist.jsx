import React, { useEffect , useContext } from 'react'
import { ThemeProvider } from "@mui/material/styles";
import { DataGrid } from '@mui/x-data-grid';
import Box from '@mui/material/Box';
import { createTheme } from "@mui/material/styles";
import IconButton from '@mui/material/IconButton';
import { MdOutlineDeleteOutline  } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import {Link , useNavigate} from 'react-router-dom';
import Createcontext from '../../Hooks/Context/Context'
import Cookies from 'universal-cookie';
import axios from 'axios';
import useStyles from '../../Style';
import { Headerbutton } from '../../molecules/Button/index'
const Rolelist = () => {
    let navigate = useNavigate();
    const [pageSize, setPageSize] = React.useState(5);
    const [RoleData, SetRoleData] = React.useState([]);
    const classes = useStyles()
    const { state, dispatch } = useContext(Createcontext)
    const Swal = require('sweetalert2')
    const cookies = new Cookies();
    const token_data = cookies.get('Token_access')
    const CustomFontTheme = createTheme({
        typography: {
            fontSize: 24
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
    function calculateTImefromDate(value){
        let diffTime = Math.abs(new Date().valueOf() - new Date(value).valueOf());
        let months = Math.trunc( diffTime / (24*60*60*1000)/30);
        let days = diffTime / (24*60*60*1000);
        let hours = (days % 1) * 24;
        let minutes = (hours % 1) * 60;
        let secs = (minutes % 1) * 60;
        [days, hours, minutes, secs] = [Math.floor(days), Math.floor(hours), Math.floor(minutes), Math.floor(secs)]
       
       if(months !==0){
          return months + " Month ago"
       }else if(days !== 0)
        {
          return days + " days ago"
        }
        else if(hours !== 0){
          return hours + " hours ago"
        }
        else if(minutes !== 0){
          return minutes + " minutes ago"
        }
        else {
          return secs + " secs ago"
        }
  
    }
    function deleterole(row){
       if(state.Roles.DeleteRoles){
          Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
           
                    axios.delete(`https://api.cannabaze.com/AdminPanel/Delete-RolesAndPermission/${row.id}`,{
                        headers: {
                            'Authorization': `Bearer ${token_data}`
                        }
                    }).then((res)=>{
                        axios.get('https://api.cannabaze.com/AdminPanel/Get-RolesAndPermission/',{
                            headers: {
                                'Authorization': `Bearer ${token_data}`
                            }
                        }).then((res)=>{
                            SetRoleData(res?.data)
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                                });
                        })
                    })
           
              
            }
          });
        }
    }

    useEffect(()=>{
        axios.get('https://api.cannabaze.com/AdminPanel/Get-RolesAndPermission/',{
            headers: {
                'Authorization': `Bearer ${token_data}`
            }
        }).then((res)=>{
            SetRoleData(res?.data)
        })


    },[])

    const columns = [
        { 
            field: 'id' , 
            headerName: 'number', 
            filterable: false,
            renderCell: (index) => index.api.getRowIndex(index.row.id) + 1,
        },
        { field: 'RoleTitle', headerName: 'Name', editable: false,  minWidth: 110, flex: 1, headerClassName: 'super-app-theme--header',  headerAlign: 'center',   align: 'center',
sortable:false },
        {
            field: 'created_at', headerName: 'Created At', type: 'number',sortable:false, editable: true,flex: 1, headerClassName: 'super-app-theme--header',  headerAlign: 'center',   align: 'center',

            renderCell: (params) => {
               return <span>{calculateTImefromDate(params.row.created_at)}</span>
            }
        },
        {
            field: 'Edit', headerName: 'Edit', type: 'button', editable: false, sortable:false,flex: 1, headerClassName: 'super-app-theme--header',  headerAlign: 'center',  align: 'center',

            renderCell: (params) => {
                 return  state?.Roles?.DeleteRoles ? <span onClick={()=>navigate('/addrole' , {state:{...params.row , type:'edit'}})}><FaEdit /></span> : null
            }
        },
        {
            field: 'Delete', headerName: 'Delete', editable: false, sortable:false,flex: 1, headerClassName: 'super-app-theme--header',  headerAlign: 'center',  align: 'center',
            renderCell: (params) => {
                return   <span onClick={()=>deleterole(params.row)}><MdOutlineDeleteOutline   size={30} color='red'/>
               </span>
            }
        },

    ];
    const rows = RoleData
//  const Token_access = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzM2NTcwOTQ1LCJpYXQiOjE3MDUwMzQ5NDUsImp0aSI6IjkzMTFlYTFkYTViNjRlOTk4NGY2YjUxN2M2MzI5NGM4IiwidXNlcl9pZCI6MX0.dZlMMBW7B93MWh1xSRklg1c7FRL7tKQttM0J9RjZKq0'
  return (
    <div className='section_card'>
        <div className='row'>
                    <div className=' Add_Category  my-4 d-flex align-items-center justify-content-between px-4'>
                        <h2 className='pagetitle'>Roles </h2>
                       {/* <button className='customiconbtn' onClick={()=>navigate('/addrole' , {state:{ type:'add'}})} >Add Roles</button> */}
                       <Headerbutton  onClick={()=>navigate('/addrole' , {state:{ type:'add'}})}>Add Roles</Headerbutton>
                    </div>
                    <div className='col-12'>
                        <Box className={classes.DataTableBoxStyle}  >
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
                                                className={classes.DataTableStyle}
                                                autoHeight
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