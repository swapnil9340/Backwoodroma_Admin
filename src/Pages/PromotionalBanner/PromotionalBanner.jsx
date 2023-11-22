import React,{useState} from "react"
import { IoMdArrowBack } from "react-icons/io"
import { IconButton } from "@mui/material"
import Box from "@mui/material/Box"
import TextField from "@mui/material/TextField"
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import CloseIcon from '@mui/icons-material/Close';
import { MdOutlineCloudUpload } from "react-icons/md"
import useStyles from "../../Style";
import LoadingButton from "@mui/lab/LoadingButton";
import { useNavigate } from "react-router-dom"
import axios from "axios";

const PromotionalBanner = () => {
    const navigate=useNavigate()
    const [fromdaa ,setformdata] = useState({
        title:'',
        country:"",
        state:"",
        link :"",
        mobile_immage:[],
        destop_immage:[],
    })
    const classes = useStyles()
     
      function uploaddestopFile(e) {
        let ImagesArray=e.target.files;
        setformdata({...fromdaa ,  destop_immage:[...ImagesArray]});
      }
      function deletedestopFile(e) {
          const s = fromdaa?.destop_immage?.filter((item, index) => index !== e);
          setformdata({...fromdaa , destop_immage:s});
      }
      React.useEffect(() => {
        axios.get("https://api.cannabaze.com/UserPanel/Get-PromotionalBanners/").then((response) => {
         console.log(response.data);
        });
      }, []);
      function submitFunction(){
        axios.post('https://api.cannabaze.com/AdminPanel/Add-PromotionalBanners/' ,{
            'Banner':fromdaa.destop_immage,
            'Country':fromdaa.country,
            'Link':fromdaa.link,
            'State':fromdaa.state,
            'Title':fromdaa.title,
            'mobile':fromdaa.mobile_immage,
        }).then((res)=>{
           console.log(res)
        })
      }
      console.log(fromdaa)
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

                              
                                    <h2 className="promotionHeads">Promotional Banner</h2>
                                    <div className="feild_box">
                                    <FormControlLabel
                                        className={classes.promotionalCheckBoxFontSize}
                                        control={
                                            <Checkbox
                                                className={classes.muiPromotioCheckBox}
                                                name="PromotionalBanner"
                                            />
                                        }
                                        label="Promotional Banner"
                                    />
                                    <FormControlLabel
                                        className={classes.promotionalCheckBoxFontSize}
                                        control={
                                            <Checkbox
                                                className={classes.muiPromotioCheckBox}
                                                name="OfferBanner" />
                                        }
                                        label="Offer Banner"
                                    />


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
                                                        disabled={setformdata?.destop_immage?.length === 2}
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
                                                    {setformdata?.destop_immage?.length > 0 &&
                                                        setformdata?.destop_immage?.map((item, index) => {
                                                            console.log(item)
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
                                                    {fromdaa.mobile_immage?.length > 0 &&
                                                        fromdaa.mobile_immage?.map((item, index) => {
                                                            console.log(item)
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
                                            <LoadingButton onClick={submitFunction} >Add Banner</LoadingButton>
                                        </Box>
                                    </div>
                                </div>
                          
                       
                
                </div>

            </div>
        </div>
    )
}
export default PromotionalBanner