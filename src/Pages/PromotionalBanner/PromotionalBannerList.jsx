import { BsThreeDotsVertical } from "react-icons/bs"
import { IoMdArrowBack } from "react-icons/io"
import { IconButton } from "@mui/material"
import React from "react"
import { LoadingButton } from "@mui/lab"
import Select from '@mui/material/Select';
import Box from "@mui/material/Box"
import List from "@material-ui/core/List";
import Swal from 'sweetalert2'

import ListItem from "@material-ui/core/ListItem";
import axios from "axios";
import { IoEyeSharp } from "react-icons/io5";
import useStyles from "../../Style"
import {GrFormAdd} from "react-icons/gr"
import { LazyLoadImage } from "react-lazy-load-image-component"
import userprofile from "./image/userprofile.jpg"
import { useNavigate } from "react-router-dom"
import { DataGrid  } from '@mui/x-data-grid';
import { FaEdit } from 'react-icons/fa';
import { BiDuplicate } from 'react-icons/bi';
import { AiFillDelete } from 'react-icons/ai';
import Icon from "@material-ui/core/Icon";
const PromotionalBannerList = () => {
    const navigate=useNavigate()
    const Swal = require('sweetalert2')
    const classes = useStyles()
    const PromotionListRef = React.useRef(null)
    const [SelectId, SetSelectedId] = React.useState()
    const [datatable, Setdatatable] = React.useState([])
    const [OpenSelect, SetOpenSelected] = React.useState(false)
    const handleThreeDot = (ids) => {
        SetSelectedId(ids)
        SetOpenSelected(!OpenSelect)
    }
       React.useEffect(() => {
        axios.get("https://api.cannabaze.com/UserPanel/Get-PromotionalBanners/").then((response) => {
            Setdatatable(response.data);
            console.log(response.data , 'responsedata')
        });
       }, []);
      function Deletebanner(id){
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to Delete this Banner!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#31B655",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
                const config = {
                    headers: { Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzMyMTY2MzgzLCJpYXQiOjE3MDA2MzAzODMsImp0aSI6ImNjNDFhYjc2ZjZiZDRlNDhiNjViNjY1OWNlMzc3MThhIiwidXNlcl9pZCI6MX0.9UWz_3hpbiA4v2ji4Xhac9lzHMkumWD3RACnENRvHcQ` }
                  };
                axios.delete(`https://api.cannabaze.com/AdminPanel/delete-PromotionalBanners/${id}`, config).then((res)=>{
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your file has been deleted.",
                        icon: "success"
                      });
                }).catch((error)=>{
                    Swal.fire({
                        icon: "error",
                        title: "Oops...",
                        text: "Something went wrong!",
                        footer: '<a href="#">Why do I have this issue?</a>'
                      });
                })
            
            }
          });
      }
      const columns= [
        { field: 'id', headerName: 'ID', width: 90 },
        {
          field: 'Title',
          headerName: 'Title',
          minWidth: 80,
          editable: false,
        },
        {
          field: 'Country',
          headerName: 'Country',
          minWidth: 80,
          editable: false,
        },
        {
          field: 'State',
          headerName: 'State',
          type: 'number',
          minWidth: 80,
          editable: false,
         
        },
        {
          field: 'Status',
          headerName: 'status',
        
          sortable: false,
          minWidth: 80,
          renderCell: (params) => {
            const onClick = (e) => {
                e.stopPropagation(); 
            }            
            return (
                <>
                   <IoEyeSharp  size={25} color="#31B655"/>
                </>
            )
        }
        },
        {
            field: 'edit',
            headerName: 'Edit',
            editable: false,
            sortable: false,
            maxWidth: 100,
            headerAlign: 'center',
            align: 'center',
            flex: 1,
            renderCell: (params) => {
                const onClick = (e) => {
                    e.stopPropagation(); 
                }            
                return (
                    <>
                        <Select

                            IconComponent={BsThreeDotsVertical} labelId="demo-simple-select-error-label"
                            sx={{
                                boxShadow: "none",
                                ".MuiOutlinedInput-notchedOutline": { border: 0 },
                                "&.MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline":
                                {
                                    border: 0,
                                    outline: "none"

                                },
                                "&.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                                {
                                    border: 0,
                                    outline: "none"
                                },
                                "&.Mui-focused .MuiSelect-icon": { color: "#31B665" },
                                "&:hover": {
                                    ".MuiSelect-icon": {
                                        color: "#31B665"
                                    }
                                },
                            }}
                        >
                               <List className={classes.orderEditList}>

                              
                                <ListItem button className={classes.orderEditListitem}  onClick={(e)=>{e.stopPropagation()}}>
                                 
                                <Icon className={classes.orderEditListIcon }><FaEdit  color='31B665'/> </Icon>
                                   
                                    Edit
                                </ListItem>
                                <ListItem button className={classes.orderEditListitem} onClick={(e)=>{e.stopPropagation() ;Deletebanner(params.row.id)}}>
                                
                                   <Icon className={classes.orderEditListIcon }><AiFillDelete color='31B665'/> </Icon>
                                   Delete
                                </ListItem>
                               
                          

                           
                              </List>
                        </Select>
                    </>
                )
            }

        },
      ];
      
      const rows =datatable
      
    React.useEffect(() => {
        const handleClickOutsidePromotionList = (event) => {
            if (PromotionListRef.current && !PromotionListRef.current.contains(event.target)) {
                if (SelectId) {
                    SetSelectedId((SelectId) => !SelectId)
                }
            }
        };
        document.addEventListener('click', handleClickOutsidePromotionList, true);
        return () => {
            document.removeEventListener('click', handleClickOutsidePromotionList, true);
        };
    }, [SelectId]);
    const PromotionalBannerListArray = [
        { id: 1,imgUrl:{userprofile}  ,title: "Post title", country: "India", state: "MP", status: "Active" },
        { id: 2,imgUrl:{userprofile} , title: "Post title", country: "India", state: "MP", status: "Active" },]
        const PromotionBannerPopArray = [{ id: 1, name: "View Post" }, { id: 2, name: "Share Post" },
        { id: 3, name: "View Report" },
        { id: 4, name: "Share Report" }]
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-10 PromotionalBannerList">
                    <div className="col-12 promotional_bannerList_BackBtn">
                        <div className="col-md-3 col-3">
                            <IconButton onClick={()=>navigate("/")}><IoMdArrowBack /></IconButton><span className="promotionBackBtnHead">Back</span>
                        </div>
                        <div className="col-4">
                            <h2>Promotional Banner</h2>
                        </div>
                        <Box className={`col-5 promotionalAddBannerListBtnCol  ${classes.promotionalListBtnss}`}>
                            <LoadingButton startIcon={<GrFormAdd />} onClick={()=>navigate("/PromotionalBanner")}>Add Banner</LoadingButton>
                        </Box>
                    </div>
                    <div className="col-12 promotionalBannerListContainer table-responsive">
                        <table className="table border">
                            <thead className="align-middle promotionalTableHeader">
                                <tr>
                                    <th>
                                        <div className="promotionalBannerTableTh_div">
                                            <span>Post Image</span>
                                        </div>
                                    </th>
                                    <th>
                                        <div className="promotionalBannerTableTh_div">
                                            <span>Post Title</span>
                                        </div>
                                    </th>
                                    <th>
                                        <div className="promotionalBannerTableTh_div">
                                            <span>Country</span>
                                        </div>
                                    </th>
                                    <th>
                                        <div className="promotionalBannerTableTh_div">
                                            <span>State</span>
                                        </div>
                                    </th>
                                    <th>
                                        <div className="promotionalBannerTableTh_div">
                                            <span>Status</span>

                                        </div>
                                    </th>
                                    <th>
                                        <div className="promotionalBannerTableTh_div">

                                        </div>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {PromotionalBannerListArray.map((items, index) => {
                                    return (
                                        <React.Fragment key={index}>
                                            <tr className="promotionalListBodyRow align-middle">
                                                <td><LazyLoadImage src={userprofile} className="promotionalBannerImageSize"/></td>
                                                <td>{items.title}</td>
                                                <td>{items.country}</td>
                                                <td>{items.state}</td>
                                                <td>{items.status}</td>
                                                <td className="Promotional_listParent_td">
                                                    <div className="promotionThreeDot">
                                                        <BsThreeDotsVertical className="" onClick={() => handleThreeDot(items.id)} />

                                                    </div>
                                                    {items.id === SelectId && OpenSelect ? (
                                                        <div className="promotionThreeDotPopup" ref={PromotionListRef}>
                                                            <ol className="promotionOL_list">
                                                                {
                                                                    PromotionBannerPopArray.map((val, index) => {
                                                                        return (
                                                                            <React.Fragment key={index}>
                                                                                <li>{val.name}</li>

                                                                            </React.Fragment>
                                                                        )
                                                                    })
                                                                }

                                                            </ol>

                                                        </div>
                                                    ) : ""}
                                                </td>
                                            </tr>
                                        </React.Fragment>
                                    )
                                })}
                            </tbody>

                        </table>
                    

                    </div>
                    <div>
                    <Box sx={{height:"400px ", width: '100%' }}>
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
                            pageSizeOptions={[5]}
                            disableRowSelectionOnClick
                        />
                        </Box>
                     </div>
                </div>


            </div>

        </div>
    )
}
export default PromotionalBannerList