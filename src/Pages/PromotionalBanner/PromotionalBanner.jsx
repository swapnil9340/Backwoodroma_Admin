import React,{useState} from "react"
import { IoMdArrowBack } from "react-icons/io"
import { IconButton } from "@mui/material"
import Box from "@mui/material/Box"
import TextField from "@mui/material/TextField"
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import CloseIcon from '@mui/icons-material/Close';
import { MdOutlineCloudUpload } from "react-icons/md"
import useStyles from "../../Style";
import Cookies from 'universal-cookie';
import { useNavigate } from "react-router-dom"
import axios from "axios";
import RadioGroup from '@mui/material/RadioGroup';
import FormControl from '@mui/material/FormControl';
import Compressor from 'compressorjs';
import { SlSocialDropbox } from "react-icons/sl";
import {SectionCard} from '../../molecules/SectionCard/Index';
const PromotionalBanner = () => {
    const navigate=useNavigate()
    const Swal = require('sweetalert2')
    const cookies = new Cookies();
    const token_data = cookies.get('Token_access')
    const [bannertpe,setbannertype]=useState("Promotional Banner")
   
    const [fromdaa ,setformdata] = useState({
        title:'',
        country:"",
        state:"",
        link :"",
        mobile_immage:[],
        destop_immage:[],
    })
    const classes = useStyles()
    const [loader, Setloader] = React.useState(false)
    const config = {
    "Content-Type": "multipart/form-data",
    headers: { Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzMyODczNjg3LCJpYXQiOjE3MDEzMzc2ODcsImp0aSI6IjllYTgwZGMyY2ZmZjQ0M2ZiYzY2MzQ2OTRmMjk1YWMyIiwidXNlcl9pZCI6MX0.nNt9qi_HGToLpmXMx5fzduz0ptk11VStkCZwVbxpjSg` }
    };
    function uploaddestopFile(e) {
    let ImagesArray=e.target.files;
    
    if(ImagesArray[0].size/1000  > 50){
        new Compressor(ImagesArray[0], {
            quality: 0.8,
            success: (compressedResult) => {      
            
                setformdata({...fromdaa ,  destop_immage: [compressedResult]});
            },
        });
    }else{
        setformdata({...fromdaa ,  destop_immage: [ImagesArray[0]]});
    }
    
    }
    function deletedestopFile(e) {
        const s = fromdaa?.destop_immage?.filter((item, index) => index !== e);
        setformdata({...fromdaa , destop_immage:s});
    }
    function submitFunction(){
    let baseurl =''
    if(bannertpe === 'Promotional Banner'){
        baseurl ='https://api.cannabaze.com/AdminPanel/Add-PromotionalBanners/' 
    }else{
        baseurl ="https://api.cannabaze.com/AdminPanel/Add-HomePageBanner/"
    }
    let form_data = new FormData();
        
    if(fromdaa.destop_immage.length !==0 &&  fromdaa.mobile_immage.length !==0){
        Setloader(true)
        form_data.append('Banner', fromdaa?.destop_immage[0], fromdaa?.destop_immage[0].name);
        form_data.append('Country', fromdaa.country);
        form_data.append('Link' ,fromdaa.link);
        form_data.append('State',fromdaa.state );
        form_data.append('Title',fromdaa.title);
        form_data.append('mobile', fromdaa?.mobile_immage[0], fromdaa?.mobile_immage[0].name);
        axios.post( baseurl , form_data , config).then((res)=>{
            Setloader(false)
            navigate('/PromotionalBannerList')
        }).catch((error)=>{
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Something went wrong!",
                timer: 3000,
                }).then(()=>{
                Setloader(false)
                navigate('/PromotionalBannerList')
                });
            
        })
    }else{
        window.alert("Please fill all Require Feild")
    }
    }
    function uploadSingleFile(e) {
    let ImagesArray=e.target.files;
    
    setformdata({...fromdaa ,mobile_immage: [...ImagesArray]});
    }
    function deleteFile(e) {
        const s = fromdaa?.mobile_immage?.filter((item, index) => index !== e);
        setformdata({...fromdaa , mobile_immage:s});
    }
    return (
      <React.Fragment>
            <SectionCard className="p-5"> 
               
            <h2 className='d-flex align-items-center pagetitle'> <SlSocialDropbox color='#31B655' size={25}/>Banner Upload</h2>
                          
                            <div className=" PromotionalMainContainer ">          
                                            <div className="feild_box">
                                                <div className="col-xxl-1  col-lg-2 col-md-3 col-3">
                                                    <label htmlFor="title" className="label_custom">Title</label>
                                                </div>
                                                <TextField id="title" onChange={(e)=>{setformdata({...fromdaa , title : e.target.value})}} className={classes.textFieldFocusBorderColor} variant="outlined" fullWidth size="small" />
                                            </div>
                                            <div className="feild_box ">
                                            <label htmlFor="country" className="label_custom">Country</label>
                                                <select className="promotionSelectWidth"  onChange={(e)=>{setformdata({...fromdaa , country : e.target.value})}} name="country" id="country">
                                                    <option value="USA">USA</option>
                                                    <option value="cannada">Cannada</option>
                                                </select>
                                            </div>
                                            <div className="feild_box ">
                                                <label htmlFor="state" className="label_custom">State</label>
                                                <select className="promotionSelectWidth" onChange={(e)=>{setformdata({...fromdaa , state : e.target.value})}} name="state" id="state">
                                                    <option value="India">Uttar Pradesh</option>
                                                    <option value="India">Madhya Pradesh</option>
                                                </select>
                                            </div>
                                            <div className="feild_box">
                                            
                                            <label htmlFor="link" className="label_custom">Link</label>
                                    
                                            <TextField id="link" type="link" className={classes.textFieldFocusBorderColor} onChange={(e)=>{setformdata({...fromdaa , link : e.target.value})}}  variant="outlined" fullWidth size="small" />
                                            </div>
                                            <div className="feild_box">
                                                
                                                <FormControl>
                                                    <RadioGroup
                                                        value={bannertpe}
                                                        aria-labelledby="demo-radio-buttons-group-label"
                                                        defaultValue="Promotional Banner"
                                                        name="radio-buttons-group"
                                                        className={classes.muiPromotioCheckBox}
                                                        onChange={(e)=>{setbannertype(e.target.value)}}
                                                    >
                                                        <FormControlLabel  className={classes.promotionalCheckBoxFontSize} value="Promotional Banner" control={<Radio />} label="Promotional Banner" />
                                                        <FormControlLabel  className={classes.promotionalCheckBoxFontSize} value="Offer Banner" control={<Radio />} label="Offer Banner" />
                                                    </RadioGroup>
                                                </FormControl>
                                            </div>
                                             <div className="d-flex gap-5">
                                                <div className="feild_box  image_input_box">
                                                    <label className="label_custom">Mobile Image<sup className="requiesign">*</sup></label>

                                                    <form className="bannerImagebox row ">
                                                        <div className="col-12">
                                                            <div className="form-group">
                                                                <input
                                                                    type="file"
                                                                    disabled={fromdaa?.mobile_immage?.length === 5}
                                                                    style={{ display: "none" }}
                                                                    onChange={uploadSingleFile}
                                                                    multiple
                                                                    id="mobilefile"
                                                                    accept="image/*"
                                                                />

                                                                <label htmlFor="mobilefile"  >
                                                                 
                                                                        
                                                                        <div className='product_imagebox image_logosize1 mt-2'>
                                                                        {
                                                                            fromdaa.mobile_immage?.length > 0 ?
                                                                            fromdaa.mobile_immage?.map((item, index) => {
                                                                                return (
                                                                                    <div key={index} className="Display uploadedImg">
                                                                                    
                                                                                        <img src={URL.createObjectURL(item)} alt="" className="w-100"  />
                                                                                    
                                                                                    <span className="removeUploadedImg">
                                                                                            <IconButton onClick={() => deleteFile(index)}>
                                                                                                <CloseIcon />
                                                                                            </IconButton>
                                                                                        </span>
                                                                                    </div>
                                                                                );
                                                                            })
                                                                            :
                                                                            <div className='d-flex gap-3 align-items-center justify-content-center'>
                                                                            
                                                                                
                                                                                        <MdOutlineCloudUpload color="#222529" ></MdOutlineCloudUpload>
                                                                                    
                                                                            
                                                                                    <p className="m-0">Drop files here or click to upload</p>
                                                                            
                                                                            </div>
                                                                        }
                                                                        </div>
                                                                    
                                                                    
                                                                </label>
                                                            </div>
                                                        </div>
                                                        {/* <div className="col-12">
                                                            <div className="form-group preview Display mt-4">
                                                             
                                                            </div>

                                                        </div> */}
                                                    </form>
                                                </div>
                                                <div className="feild_box  image_input_box">
                                                    <label className="label_custom">Desktop Image<sup className="requiesign">*</sup></label>

                                                    <form className="bannerImagebox row ">
                                                        <div className="col-12">
                                                            <div className="form-group">
                                                                <input
                                                                    type="file"
                                                                    style={{ display: "none" }}
                                                                    onChange={uploaddestopFile}
                                                                    multiple
                                                                    id="file"
                                                                    accept="image/*"
                                                                />

                                                                <label htmlFor="file"   >
                                                                    <div className='product_imagebox image_logosize1 mt-2'>
                                                                        {
                                                                              fromdaa?.destop_immage?.length > 0 ?
                                                                                fromdaa?.destop_immage?.map((item, index) => {
                                                                                    return (
                                                                                        <div key={index} className="Display uploadedImg">
                                                                                            <img src={URL.createObjectURL(item)} alt="" className="w-100" />
                                                                                            
                                                                                            <span className="removeUploadedImg">
                                                                                                <IconButton onClick={() => deletedestopFile(index)}>
                                                                                                    <CloseIcon />
                                                                                                </IconButton>
                                                                                            </span>
                                                                                        </div>
                                                                                    );
                                                                                })
                                                                                :
                                                                            <div className='d-flex gap-3 align-items-center justify-content-center'>
                                                                                
                                                                                        <MdOutlineCloudUpload color="#222529"></MdOutlineCloudUpload>
                                                                                   
                                                                                
                                                                                    <p className="m-0">Drop files here or click to upload</p>
                                                                               
                                                                            </div>
                                                                        }
                                                                    </div>
                                                                </label>
                                                            </div>
                                                        </div>
                                                     
                                                    </form>
                                                </div>
                                            </div>
                                            <div className="mt-3">
                                                <Box className={` ${classes.PromotionalBtn}`}>
                                                    <button className="cancel_btn" onClick={()=>navigate("/PromotionalBannerList")}>Cancel</button>
                                                    <button className="topbutton" onClick={submitFunction}>Add Banner</button>
                                                </Box>
                                            </div>
                            </div>
            </SectionCard>

           
            {loader && <div className="loadercontainer">
              <div class="loader4"></div>
            </div>}
            </React.Fragment>
    )
}
export default PromotionalBanner