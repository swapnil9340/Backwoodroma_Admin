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
import Successfullypopup from '../../Components/Component/Successfullypopup'
import Unsuccesspopup from '../../Components/Component/Unsuccesspopup'
import Deletepopup from '../../Components/Component/Deletepopup'
import axios from "axios";
import { IoEyeSharp } from "react-icons/io5";
import useStyles from "../../Style"
import {SectionCard} from "../../molecules/SectionCard/Index"
import { useNavigate } from "react-router-dom"
import { DataGrid  } from '@mui/x-data-grid';
import { FaEdit } from 'react-icons/fa';
import { RiDeleteBin6Line } from 'react-icons/ri';
import Icon from "@material-ui/core/Icon";
import Bannerupdatemodel from "./Bannerupdatemodel"
import Cookies from 'universal-cookie';
import Createcontext from '../../Hooks/Context/Context'
const Offeredlist = ({Setloader}) => {
    const classes = useStyles()
    const navigate=useNavigate()
    const Swal = require('sweetalert2')
    const { state, dispatch } = useContext(Createcontext);
    const [pageSize, setPageSize] = React.useState(10)
    const cookies = new Cookies();
    const token_data = cookies.get('Token_access')
    const [bannertype , Setbannertype] = useState("Home Banner")
    const [openupdate, setOpenupdate] = React.useState(false);
    const PromotionListRef = React.useRef(null)
    const [SelectId, SetSelectedId] = React.useState()
    const [sucsesopen , setsucsesopen] = useState(false)
    const [unsucsesopen , setunsucsesopen] = useState(false)
    const [deleteoptn , setdeleteoprn] = useState(false)
    const [isdelete , setsisDelete] = useState(false)
    const [deleteid , setdeleteid] = useState('')
    const config = {
        headers: { Authorization: `Bearer ${token_data}` }
    };
    const [detailstype, setdetailstype] = React.useState('Promotional')
    const [datatable, Setdatatable] = React.useState([])

    const [editdata, Seteditdata] = React.useState([])
        React.useEffect(() => {

           
            axios.get('https://api.cannabaze.com/AdminPanel/Get-HomePageBanner/' , config ).then((response) => {
               let a = response.data.map((item,index)=>{return{...item , sno:index+1}})
              
                Setdatatable(a);
              
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
                    axios.delete(`https://api.cannabaze.com/AdminPanel/delete-HomePageBanner/${id}`, config).then((res)=>{
                        
                        axios.get('https://api.cannabaze.com/AdminPanel/Get-HomePageBanner/' , config ).then((response) => {
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
                        }).then(()=>{
                            Setloader(false)
                        });;
                    })
                
                }
            });
        }
        function handelstatus( data){
            let sts = data.status === "Active"? "Hide":"Active"
            Setloader(true)
           
            axios.post( `https://api.cannabaze.com/AdminPanel/update-HomePageBanner/${data.id}` ,{
                "status" : sts
            } ,config).then((res)=>{

              
                axios.get('https://api.cannabaze.com/AdminPanel/Get-HomePageBanner/' , config ).then((response) => {
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
            { field: 'sno', headerName: 'S No.', width: 90  },
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
                headerName: 'Desktop Banner',
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
                           
                           <Box
                           sx={{
                               "&.MuiBox-root":{
                                  display:'flex',
                                  justifyContent:'center',
                                  alignItems:'center',
                                  gap:'10px'
                               },
                               '& .MuiOutlinedInput-root': {
                                   '&.Mui-focused fieldset': {
                                       borderWidth: "1px",
                                       borderColor: 'black',
                                   },
                               },
                               '& . MuiDataGrid-root .MuiDataGrid-cell:focus': {
                                   outline: "#e0e0e0"
                               }
                           }}
                       >

                                {   state.Roles.EditBanners    &&
                                    
                                    
                                  <FaEdit  color='31B665' onClick={()=>{editdat(params.row)}}  size={22}/> 
                                    
                                      
                                   }
                                     {   state.Roles.DeleteBanners    &&
                                         
                                    
                                      <RiDeleteBin6Line color='31B665' onClick={(e)=>{ setdeleteoprn(true) ; setdeleteid(params.row.id)}}  size={22}/>
                                   
                                    }
                                
                            
</Box>
                            
                            
                           
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
        React.useEffect(()=>{
            if(isdelete){
                axios.delete(`https://api.cannabaze.com/AdminPanel/delete-HomePageBanner/${deleteid}`, config).then((res)=>{
                    setsucsesopen(true)          
                axios.get('https://api.cannabaze.com/AdminPanel/Get-HomePageBanner/' , config ).then((response) => {
                    Setdatatable(response.data);
                    Setloader(false)
                });
            
            }).catch((error)=>{
                setunsucsesopen(true)
            })
        
            }
        },[isdelete])
  return (
    <div>
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
            <Bannerupdatemodel openupdate={openupdate} bannertype={bannertype} setOpenupdate={setOpenupdate} Setloader={Setloader} data={editdata}/>
            {   sucsesopen && <Successfullypopup  setsucsesopen={setsucsesopen} />}
            {   unsucsesopen && <Unsuccesspopup setsucsesopen={setunsucsesopen} />}
            {   deleteoptn &&  <Deletepopup setdeleteoprn={setdeleteoprn} setsisDelete={setsisDelete} />}
</div>
  )
}

export default Offeredlist