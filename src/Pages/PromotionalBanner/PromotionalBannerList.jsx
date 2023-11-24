import { BsThreeDotsVertical } from "react-icons/bs"
import { IoMdArrowBack } from "react-icons/io"
import { IconButton } from "@mui/material"
import React ,{useState} from "react"
import { LoadingButton } from "@mui/lab"
import Select from '@mui/material/Select';
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Box from "@mui/material/Box"
import List from "@material-ui/core/List";
import { FaEyeSlash } from "react-icons/fa";
import ListItem from "@material-ui/core/ListItem";
import axios from "axios";
import { IoEyeSharp } from "react-icons/io5";
import useStyles from "../../Style"
import {GrFormAdd} from "react-icons/gr"
import { useNavigate } from "react-router-dom"
import { DataGrid  } from '@mui/x-data-grid';
import { FaEdit } from 'react-icons/fa';
import { AiFillDelete } from 'react-icons/ai';
import Icon from "@material-ui/core/Icon";
import Bannerupdatemodel from "./Bannerupdatemodel"
const PromotionalBannerList = () => {
    const navigate=useNavigate()
    const Swal = require('sweetalert2')
    const [bannertype , Setbannertype] = useState("Promotional Banner")
    const [openupdate, setOpenupdate] = React.useState(false);
    const classes = useStyles()
    const PromotionListRef = React.useRef(null)
    const [SelectId, SetSelectedId] = React.useState()
    const [loader, Setloader] = React.useState(false)
    const config = {
      
        headers: { Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzMyMTY2MzgzLCJpYXQiOjE3MDA2MzAzODMsImp0aSI6ImNjNDFhYjc2ZjZiZDRlNDhiNjViNjY1OWNlMzc3MThhIiwidXNlcl9pZCI6MX0.9UWz_3hpbiA4v2ji4Xhac9lzHMkumWD3RACnENRvHcQ` }
    };
    const [datatable, Setdatatable] = React.useState([])
    const [editdata, Seteditdata] = React.useState([])
   
        React.useEffect(() => {
            axios.get("https://api.cannabaze.com/AdminPanel/Get-PromotionalBanners/" , config ).then((response) => {
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
                    Setloader(true)
                    const config = {
                        headers: { Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzMyMTY2MzgzLCJpYXQiOjE3MDA2MzAzODMsImp0aSI6ImNjNDFhYjc2ZjZiZDRlNDhiNjViNjY1OWNlMzc3MThhIiwidXNlcl9pZCI6MX0.9UWz_3hpbiA4v2ji4Xhac9lzHMkumWD3RACnENRvHcQ` }
                    };
                    let basedeleturl = `https://api.cannabaze.com/AdminPanel/delete-HomePageBanner/${id}`
                        
                    if(bannertype === "Promotional Banner"){
                        basedeleturl =`https://api.cannabaze.com/AdminPanel/delete-PromotionalBanners/${id}`
                    }
                    axios.delete(basedeleturl, config).then((res)=>{
                        
                        axios.get("https://api.cannabaze.com/AdminPanel/Get-PromotionalBanners/" , config ).then((response) => {
                            Setdatatable(response.data);
                            Setloader(false)
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
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
        function handelstatus( data){
            let sts = data.status
            if(data.status === "Active"){
                sts = "Hide"
            }else{
                sts = "Active"
            }
            Setloader(true)
            axios.post(`https://api.cannabaze.com/AdminPanel/update-PromotionalBanners/${data.id}` ,{
                "status" : sts
            } ,config).then((res)=>{
                axios.get("https://api.cannabaze.com/AdminPanel/Get-PromotionalBanners/" , config ).then((response) => {
                Setdatatable(response.data);
                Setloader(false)
            });
            })
        }
        function editdat(data){
            Seteditdata(data)
            setOpenupdate(true)
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
                    <span onClick={()=>{handelstatus(params.row)}}>
                    
                    {params.row.status === "Active" ? <IoEyeSharp  size={25} color="#31B655"/> : <FaEyeSlash  size={25} color="#31B655"/>}
                    </span>
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

                                
                                    <ListItem button className={classes.orderEditListitem} onClick={()=>{editdat(params.row)}} >
                                    
                                    <Icon className={classes.orderEditListIcon }><FaEdit  color='31B665'/> </Icon>
                                    
                                        Edit
                                    </ListItem>
                                    <ListItem button className={classes.orderEditListitem} onClick={(e)=>{ Deletebanner(params.row.id)}}>
                                    
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
                            <FormControl className={classes.formControl}>
                                <Select
                                    value={bannertype}
                                    onChange={(e)=>{Setbannertype(e.target.value)}}
                                    disableUnderline
                                >
                                   
                                    <MenuItem  value={"Promotional Banner"}>
                                        Promotional Banner
                                    </MenuItem>
                                    <MenuItem  value={"Offer Banner"}>
                                       Offer Banner
                                    </MenuItem>
                                   
                                </Select>
                                </FormControl>
                        </div>
                        <Box className={`col-5 promotionalAddBannerListBtnCol  ${classes.promotionalListBtnss}`}>
                            <LoadingButton startIcon={<GrFormAdd />} onClick={()=>navigate("/PromotionalBanner")}>Add Banner</LoadingButton>
                        </Box>
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
            {loader && <div className="loadercontainer">
              <div class="loader4"></div>
            </div>}
            <Bannerupdatemodel openupdate={openupdate} setOpenupdate={setOpenupdate} Setloader={Setloader} data={editdata}/>
        </div>
    )
}
export default PromotionalBannerList