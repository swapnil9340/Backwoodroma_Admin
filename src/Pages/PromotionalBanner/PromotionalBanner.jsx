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
import LoadingButton from "@mui/lab/LoadingButton";
import { useNavigate } from "react-router-dom"
import axios from "axios";
import RadioGroup from '@mui/material/RadioGroup';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
const PromotionalBanner = () => {
    const navigate=useNavigate()
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
      const config = {
        "Content-Type": "multipart/form-data",
        headers: { Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzMyMTY2MzgzLCJpYXQiOjE3MDA2MzAzODMsImp0aSI6ImNjNDFhYjc2ZjZiZDRlNDhiNjViNjY1OWNlMzc3MThhIiwidXNlcl9pZCI6MX0.9UWz_3hpbiA4v2ji4Xhac9lzHMkumWD3RACnENRvHcQ` }
      };
      function uploaddestopFile(e) {
        let ImagesArray=e.target.files;
        setformdata({...fromdaa ,  destop_immage:[...ImagesArray]});
      }
      function deletedestopFile(e) {
          const s = fromdaa?.destop_immage?.filter((item, index) => index !== e);
          setformdata({...fromdaa , destop_immage:s});
      }
    //   React.useEffect(() => {
    //     axios.get("https://api.cannabaze.com/UserPanel/Get-PromotionalBanners/").then((response) => {
    //      console.log(response.data);
    //     });
    //   }, []);
      function submitFunction(){
        let baseurl =''
        if(bannertpe === 'Promotional Banner'){
            baseurl ='https://api.cannabaze.com/AdminPanel/Add-PromotionalBanners/' 
        }else{
            baseurl ="https://api.cannabaze.com/AdminPanel/Add-HomePageBanner/"
        }
        let form_data = new FormData();
            form_data.append('Banner', fromdaa?.destop_immage[0], fromdaa?.destop_immage[0].name);
            form_data.append('Country', fromdaa.country);
            form_data.append('Link' ,fromdaa.link);
            form_data.append('State',fromdaa.state );
            form_data.append('Title',fromdaa.title);
            form_data.append('mobile', fromdaa?.mobile_immage[0], fromdaa?.mobile_immage[0].name);
   
        axios.post( baseurl , form_data , config).then((res)=>{
           console.log(res)
        })
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
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-10  category_main_row' >
                       
                            <div className="promtionalBannerHeader">
                                <div>
                                    <IconButton onClick={()=>navigate("/PromotionalBannerList")}><IoMdArrowBack /></IconButton><span className="promotionBackBtnHead">Back</span>
                                </div>
                              
                            </div>
                            <div className=" PromotionalMainContainer ">

                            
                                    <h2 className="promotionHeads">Banner</h2>
                                
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
                                            <div className="feild_box">
                                                <div className="col-xxl-1  col-lg-2 col-md-3 col-3">
                                                    <label htmlFor="title" className="label_custom">Title</label>
                                                </div>
                                                <TextField id="title" onChange={(e)=>{setformdata({...fromdaa , title : e.target.value})}} className={classes.textFieldFocusBorderColor} variant="outlined" fullWidth size="small" />
                                            </div>
                                            <div className="feild_box ">
                                            <label htmlFor="country" className="label_custom">Country</label>
                                                <select className="promotionSelectWidth"  onChange={(e)=>{setformdata({...fromdaa , country : e.target.value})}} name="country" id="country">
                                                    <option value="India">India</option>
                                                    <option value="Aus">Aus</option>
                                                    <option value="SriLanka">SriLanka</option>

                                                </select>
                                            </div>
                                            <div className="feild_box ">
                                                <label htmlFor="state" className="label_custom">State</label>
                                                <select className="promotionSelectWidth" onChange={(e)=>{setformdata({...fromdaa , state : e.target.value})}} name="state" id="state">
                                                    <option value="India">Uttar Pradesh</option>
                                                    <option value="India">Madhya Pradesh</option>


                                                </select>
                                            </div>
                                            <div className="feild_box ">
                                                <label className="label_custom">Destop Image</label>

                                                <form className="bannerImagebox row ">
                                                    <div className="col-12">
                                                        <div className="form-group">
                                                            <input
                                                                type="file"
                                                                disabled={fromdaa?.destop_immage?.length === 2}
                                                                style={{ display: "none" }}
                                                                onChange={uploaddestopFile}
                                                                multiple
                                                                id="file"
                                                            />

                                                            <label htmlFor="file" className="color"   >
                                                                <div className='product_imagebox image_logosize1 mt-2'>
                                                                    {
                                                                        <div className='col-12'>
                                                                            <div className='col-12 center' >
                                                                                <div className="color">
                                                                                    <MdOutlineCloudUpload ></MdOutlineCloudUpload>
                                                                                </div>
                                                                            </div>
                                                                            <div className='col-12  center'>
                                                                                <p>Upload</p>
                                                                            </div>
                                                                        </div>
                                                                    }
                                                                </div>
                                                            </label>
                                                        </div>
                                                    </div>
                                                    <div className="col-12">
                                                        <div className="form-group preview Display mt-4">
                                                            {fromdaa?.destop_immage?.length > 0 &&
                                                                fromdaa?.destop_immage?.map((item, index) => {
                                                                    return (
                                                                        <div key={index} className="Display uploadedImg">
                                                                            <img src={URL.createObjectURL(item)} alt="" style={{ width: "100px", height: "100px", borderRadius: "1px" }} />
                                                                            
                                                                            <span className="removeUploadedImg">
                                                                                <IconButton onClick={() => deletedestopFile(index)}>
                                                                                    <CloseIcon />
                                                                                </IconButton>
                                                                            </span>
                                                                        </div>
                                                                    );
                                                                })}
                                                        </div>

                                                    </div>
                                                </form>
                                            </div>
                                            <div className="feild_box ">
                                                <label className="label_custom">Mobile Image</label>

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
                                                            />

                                                            <label htmlFor="mobilefile" className="color"   >
                                                                <div className='product_imagebox image_logosize1 mt-2'>
                                                                    {
                                                                        <div className='col-12'>
                                                                            <div className='col-12 center' >
                                                                                <div className="color">
                                                                                    <MdOutlineCloudUpload ></MdOutlineCloudUpload>
                                                                                </div>
                                                                            </div>
                                                                            <div className='col-12  center'>
                                                                                <p>Upload</p>
                                                                            </div>
                                                                        </div>
                                                                    }
                                                                </div>
                                                            </label>
                                                        </div>
                                                    </div>
                                                    <div className="col-12">
                                                        <div className="form-group preview Display mt-4">
                                                            {fromdaa.mobile_immage?.length > 0 &&
                                                                fromdaa.mobile_immage?.map((item, index) => {
                                                                    return (
                                                                        <div key={index} className="Display uploadedImg">
                                                                            <img src={URL.createObjectURL(item)} alt="" style={{ width: "100px", height: "100px", borderRadius: "1px" }} />
                                                                            <span className="removeUploadedImg">
                                                                                <IconButton onClick={() => deleteFile(index)}>
                                                                                    <CloseIcon />
                                                                                </IconButton>
                                                                            </span>
                                                                        </div>
                                                                    );
                                                                })}
                                                        </div>

                                                    </div>
                                                </form>
                                            </div>
                                            <div className="feild_box">
                                            
                                                <label htmlFor="link" className="label_custom">Link</label>
                                        
                                                <TextField id="link" className={classes.textFieldFocusBorderColor} onChange={(e)=>{setformdata({...fromdaa , link : e.target.value})}}  variant="outlined" fullWidth size="small" />
                                            </div>
                                            <div className="">
                                                <Box className={`w-100 promotionBtn_center ${classes.PromotionalBtn}`}>
                                                    <LoadingButton onClick={submitFunction}>Add Banner</LoadingButton>
                                                </Box>
                                            </div>
                                
                            </div>
                </div>

            </div>
        </div>
    )
}
export default PromotionalBanner