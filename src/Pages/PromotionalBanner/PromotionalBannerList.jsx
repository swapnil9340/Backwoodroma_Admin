import { BsThreeDotsVertical } from "react-icons/bs"
import { SlSocialDropbox } from "react-icons/sl";
import React ,{useState ,useContext} from "react"
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
import {SectionCard} from "../../molecules/SectionCard/Index"
import { useNavigate } from "react-router-dom"
import { DataGrid  } from '@mui/x-data-grid';
import { FaEdit } from 'react-icons/fa';
import { AiFillDelete } from 'react-icons/ai';
import Icon from "@material-ui/core/Icon";
import Bannerupdatemodel from "./Bannerupdatemodel"
import Cookies from 'universal-cookie';
import Createcontext from '../../Hooks/Context/Context'
const PromotionalBannerList = () => {
    const navigate=useNavigate()
    const Swal = require('sweetalert2')
    const { state, dispatch } = useContext(Createcontext);
    const [pageSize, setPageSize] = React.useState(10)
    const cookies = new Cookies();
    const token_data = cookies.get('Token_access')
    const [bannertype , Setbannertype] = useState("Promotional Banner")
    const [openupdate, setOpenupdate] = React.useState(false);
    const classes = useStyles()
    const PromotionListRef = React.useRef(null)
    const [SelectId, SetSelectedId] = React.useState()
    const [loader, Setloader] = React.useState(false)
    const config = {
        headers: { Authorization: `Bearer ${token_data}` }
    };
    const [detailstype, setdetailstype] = React.useState(true)
    const [datatable, Setdatatable] = React.useState([])
    const [editdata, Seteditdata] = React.useState([])
    const [getdataurl,Setgetdataurl] = React.useState('https://api.cannabaze.com/AdminPanel/Get-PromotionalBanners/')
        React.useEffect(() => {

            if(!detailstype){
                Setgetdataurl(()=>"https://api.cannabaze.com/AdminPanel/Get-PromotionalBanners/")
            }else{
                Setgetdataurl(()=>'https://api.cannabaze.com/AdminPanel/Get-HomePageBanner/')
            }
            axios.get(getdataurl , config ).then((response) => {
                Setdatatable(response.data);
              
            });
        }, [openupdate ,detailstype ]);
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
                    // const config = {
                    //     headers: { Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzMyMTY2MzgzLCJpYXQiOjE3MDA2MzAzODMsImp0aSI6ImNjNDFhYjc2ZjZiZDRlNDhiNjViNjY1OWNlMzc3MThhIiwidXNlcl9pZCI6MX0.9UWz_3hpbiA4v2ji4Xhac9lzHMkumWD3RACnENRvHcQ` }
                    // };
                    let basedeleturl = `https://api.cannabaze.com/AdminPanel/delete-HomePageBanner/${id}`
                        
                    if(detailstype){
                        basedeleturl =`https://api.cannabaze.com/AdminPanel/delete-PromotionalBanners/${id}`
                    }
                    axios.delete(basedeleturl, config).then((res)=>{
                        
                        axios.get(getdataurl , config ).then((response) => {
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
           
            let basedeleturl = `https://api.cannabaze.com/AdminPanel/update-HomePageBanner/${data.id}`
            if(detailstype){
                basedeleturl =`https://api.cannabaze.com/AdminPanel/update-PromotionalBanners/${data.id}`
            }
            axios.post(basedeleturl ,{
                "status" : sts
            } ,config).then((res)=>{
                axios.get(getdataurl , config ).then((response) => {
                Setdatatable(response.data);
                Setloader(false)
            });
            }).catch((error)=>{
                Setloader(false)
                console.trace(error)
                Swal.fire({
                  icon: "error",
                  title: "Oops...",
                  text: "Something went wrong!",
                
                });
            })
        }
        function editdat(data){
            Seteditdata(data)
            setOpenupdate(true)
        }
        const columns= [
            { field: 'id', headerName: 'ID', width: 90  },
            {
            field: 'Title',
            headerName: 'Title',
            minWidth: 80,
            editable: false,sortable:false,
            flex: 1,
            },
            {
            field: 'Country',
            headerName: 'Country',sortable:false,
            minWidth: 80,
            editable: false,
            flex: 1,
            },
            {
            field: 'State',
            headerName: 'State',sortable:false,
            type: 'number',
            minWidth: 80,
            editable: false,
            flex: 1,
            headerAlign: 'left',
            align: 'left',
            },
            {
                field: 'Banner',
                headerName: 'Destop Banner',
                flex: 1,
                sortable: false,
                minWidth: 200,
                renderCell: (params) => {
                    const onClick = (e) => {
                        e.stopPropagation(); 
                    }            
                    return (
                       
                        <span>
                             <img src={params.row.Banner} alt="" style={{ width: "180px", height: "80px", borderRadius: "1px" }} />                                     
                        </span>
                         
                    )
                }
            },
            {
                    field: 'mobile',
                    headerName: 'Mobile Banner',
                    flex: 1,
                    sortable: false,
                    minWidth: 150,
                    renderCell: (params) => {
                        const onClick = (e) => {
                            e.stopPropagation(); 
                        }            
                        return (
                           <span>
                             <img src={params.row.mobile} alt="" style={{ width: "140px", height: "80px", borderRadius: "1px" }} />                                     
                           </span>
                        )
                    }
            },
            {
            field: 'Status',
            headerName: 'Status',
            flex: 1,
            sortable: false,
            minWidth: 80,
            headerAlign: 'center',
            align: 'center',
            renderCell: (params) => {
                const onClick = (e) => {
                    e.stopPropagation(); 
                }            
                return (
                    <span className="cursor-pointer" onClick={()=>{handelstatus(params.row)}}>
                    
                    {params.row.status === "Active" ? <IoEyeSharp  size={25} color="#31B655" className="cursor-pointer"/> : <FaEyeSlash className="cursor-pointer"  size={25} color="#31B655"/>}
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
                        state.Roles.EditBanners    &&  e.stopPropagation(); 
                    }            
                    return (
                        <>
                          {   (state.Roles.EditBanners || state.Roles.DeleteBanners  )   &&
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

                                {   state.Roles.EditBanners    &&
                                    <ListItem button className={classes.orderEditListitem} onClick={()=>{editdat(params.row)}} >
                                    
                                       <Icon className={classes.orderEditListIcon }><FaEdit  color='31B665'/> </Icon>
                                    
                                        Edit
                                    </ListItem>}
                                     {   state.Roles.DeleteBanners    &&
                                           <ListItem button className={classes.orderEditListitem} onClick={(e)=>{ Deletebanner(params.row.id)}}>
                                    
                                    <Icon className={classes.orderEditListIcon }><AiFillDelete color='31B665'/> </Icon>
                                    Delete
                                    </ListItem>}
                                
                            

                            
                                </List>
                            </Select>
                          }
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
       
        const getRowSpacing = React.useCallback((params) => {
            return {
              top: params.isFirstVisible ? 0 : 5,
              bottom: params.isLastVisible ? 0 : 5,
            };
          }, []);
    return (
        <div>
           
                       <div className="col-sm-4 col-6 py-5">
                           
                          

                           <div className='gap-4 d-flex'>
                                <button className='topbutton' onClick={()=>{setdetailstype(!detailstype)}} style={{backgroundColor:!detailstype ? '#fff' : "#31B655", color:detailstype ? '#fff' : "#31B655"}}>Promotional Banner</button>
                                <button className='topbutton' onClick={()=>{setdetailstype(!detailstype)}} style={{backgroundColor:detailstype ? '#fff' : "#31B655", color:!detailstype ? '#fff' : "#31B655"}}>Offer Banner</button>

                           </div>
                       </div>
                        <SectionCard className="row section_card  ">
                            <div className="d-flex justify-content-between px-4 align-items-center my-5" >
                                <h2 className='d-flex align-items-center pagetitle'> <SlSocialDropbox color='#31B655' size={25}/>{detailstype ? "Promotional Banner" : "Offer Banner"}</h2>
                            
                                {   state.Roles.AddBanners    &&
                                <div className="col-sm-5  col-6">
                                    <Box className={` promotionalAddBannerListBtnCol  ${classes.promotionalListBtnss}`}>
                                        <button className="topbutton" onClick={()=>navigate("/PromotionalBanner")}>+ Add Banner</button>
                                    </Box>
                                </div>}
                            </div>


                            <Box className={classes.DataTableBoxStyle} >
                                <DataGrid
                                    rows={rows}
                                    columns={columns}
                                    getRowSpacing={getRowSpacing}
                                    disableColumnMenu
                                    disableColumnFilter
                                    disableColumnSelector
                                    disableSelectionOnClick
                                    autoHeight
                                    pageSize={pageSize}
                                    onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
                                    rowsPerPageOptions={[ 10, 20]}
                                    pagination
                                    className={classes.DataTableStyle}
                                
                                />
                            </Box>
                        </SectionCard>
                  
                  
            {loader && <div className="loadercontainer">
              <div class="loader4"></div>
            </div>}
            <Bannerupdatemodel openupdate={openupdate} bannertype={bannertype} setOpenupdate={setOpenupdate} Setloader={Setloader} data={editdata}/>
        </div>
    )
}
export default PromotionalBannerList