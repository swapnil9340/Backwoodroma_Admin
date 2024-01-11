import * as React from 'react';
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
import "./Stall.css"
const Allstall = () => {
    const classes= useStyles()
    const columns = [
      { field: 'id', headerName: 'ID', width: 90 },
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
        field: 'Role',
        headerName: 'Role',
        sortable:false,
        minWidth: 80,
        editable: true,
        flex:1,
        headerAlign: "center",
        align: "center",
      },
      {
          field: 'CreatedAt',
          headerName: 'Created At',
          sortable: false,
          minWidth: 140,
          flex:1,
          headerAlign: "center",
          align: "center",
      },
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
      {
          field: 'Action',
          headerName: 'action',
          sortable:false,
          minWidth: 50,
          editable: true,
          headerAlign: "center",
          align: "center",
          renderCell: (params) => {
              const onClick = (e) => {
                e.stopPropagation(); // don't select this row after clicking
              };
              return (
              <>
                  <Select
                  IconComponent={BsThreeDotsVertical}
                  labelId="demo-simple-select-error-label"
                  sx={{
                      boxShadow: "none",
                      ".MuiOutlinedInput-notchedOutline": { border: 0 },
                      "&.MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline":
                      {
                          border: 0,
                          outline: "none",
                      },
                      "&.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                      {
                          border: 0,
                          outline: "none",
                      },
                      "&.Mui-focused .MuiSelect-icon": { color: "#31B665" },
                      "&:hover": {
                      ".MuiSelect-icon": {
                          color: "#31B665",
                      },
                      },
                  }}
                  >
                  <List className={classes.orderEditList}>
                      <ListItem
                      button
                      className={classes.orderEditListitem}
                      onClick={(e) => {
                          e.stopPropagation();
                      }}
                      >
                      <Link
                          className="productSelectEditLinkStyle"
                          to={"/EditProduct"}
                          state={params.row}
                      >
                          <Icon className={classes.orderEditListIcon}>
                          <FaEdit color="31B665" />{" "}
                          </Icon>
                          Edit
                      </Link>
                      </ListItem>
                      <ListItem
                      button
                      className={classes.orderEditListitem}
                      onClick={(e) => {
                          e.stopPropagation();
                      }}
                      >
                      <Icon className={classes.orderEditListIcon}>
                          <AiFillDelete color="31B665" />
                      </Icon>
                      Delete
                      </ListItem>
                  </List>
                  </Select>
              </>
              );
          },
      },
    ];
    
    const rows = [
      { id: 1, Name: 'Snow', Email: 'abc123@gmail.com', Role: "vendor",CreatedAt:'29 Sep 2023 11:45 am' ,Status:false,},
   
    ];
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