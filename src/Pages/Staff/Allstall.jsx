import  React,{useState} from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaEdit } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";
import Icon from "@material-ui/core/Icon";
import {Select, Button} from "@mui/material";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import { Link } from "react-router-dom";
import useStyles from '../../Style';
import Cookies from "universal-cookie";
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
        editable: true,
        sortable:false,
        flex:1,
        headerAlign: "center",
        align: "center",
      },
      {
        field: 'Email',
        headerName: 'Email',
        minWidth: 120,
        editable: true,
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
        editable: true,
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
    //   {
    //       field: 'CreatedAt',
    //       headerName: 'Created At',
    //       sortable: false,
    //       minWidth: 140,
    //       flex:1,
    //       headerAlign: "center",
    //       align: "center",
    //   },
      {
          field: 'Status',
          headerName: 'Status',
          sortable:false,
          minWidth: 80,
          editable: true,
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
  return (
    <div className=' my-4 '>
    <div className='allusers'>
        <div  className='d-flex justify-content-between align-content-center pb-5'> 
           <h3 className='pageheading'>All Staff</h3>
           <div className='btnsgroup'>
            <Link to={'/add-staff'}>
              <Button className={classes.addstafbtn}> Add Staff</Button>
            </Link>
           </div>
        </div>
        <div className='d-flex justify-content-end py-3 align-content-center'>
      
        </div>
            <div className='allusertable'>
            <DataGrid
                rows={rows}
                columns={columns}
                initialState={{
                pagination: {
                    paginationModel: {
                    pageSize: 5,
                    },
                },
                }}
                pageSizeOptions={[5, 10, 25, 50]}
                checkboxSelection
                disableRowSelectionOnClick
                disableColumnMenu
                disableColumnFilter
                disableColumnSelector
                autoHeight
            />
               
            </div>
    </div>
</div>
  )
}

export default Allstall