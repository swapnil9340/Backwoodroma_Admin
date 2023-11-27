import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import React,{useState} from "react"
import { IconButton } from "@mui/material"
import TextField from "@mui/material/TextField"
import CloseIcon from '@mui/icons-material/Close';
import { MdOutlineCloudUpload } from "react-icons/md"
import useStyles from "../../Style";
import LoadingButton from "@mui/lab/LoadingButton";
import Cookies from 'universal-cookie';
import axios from "axios";
const Bannerupdatemodel = ({openupdate ,setOpenupdate ,data ,bannertype,Setloader}) => {
    const [fromdaa ,setformdata] = useState({
        title:data.Title,
        country:data.Country,
        state:data.State,
        link :data.Link,
        mobile_immage:[],
        destop_immage:[],
    })
    const cookies = new Cookies();
    const token_data = cookies.get('Token_access')
    const classes = useStyles()
      const config = {
        "Content-Type": "multipart/form-data",
        headers: { Authorization: `Bearer ${token_data}` }
      };
      function uploaddestopFile(e) {
        let ImagesArray=e.target.files;
        console.log(e.target.files)
        setformdata({...fromdaa ,  destop_immage:[...ImagesArray]});
      }
      function deletedestopFile(e) {
          const s = fromdaa?.destop_immage?.filter((item, index) => index !== e);
          setformdata({...fromdaa , destop_immage:s});
      }
      function submitFunction(){
        let baseurl =''
        if(bannertype === 'Promotional Banner'){
            baseurl =`https://api.cannabaze.com/AdminPanel/update-PromotionalBanners/${data.id}` 
        }else{
            baseurl ="https://api.cannabaze.com/AdminPanel/Add-HomePageBanner/"
        }
        let form_data = new FormData();
           console.log(fromdaa ,'fromdaa')
            if( fromdaa.title !== data.Title && fromdaa.title !== undefined  ){

                form_data.append('Title',fromdaa.title);

            } if(fromdaa.country !== data.Country  && fromdaa.country !== undefined){
                form_data.append('Country', fromdaa.country);

            } if(fromdaa.state !== data.State  && fromdaa.state !== undefined){
                form_data.append('State',fromdaa.state );

            } if(fromdaa.link !== data.Link  && fromdaa.link !== undefined ){
                form_data.append('Link' ,fromdaa.link);

            } if(fromdaa.mobile_immage !== data.mobile  && fromdaa.mobile_immage !== undefined && fromdaa.mobile_immage?.length !== 0){
                form_data.append('mobile', fromdaa?.mobile_immage[0] );
            } if(fromdaa.destop_immage !== data.Banner   && fromdaa.destop_immage !== undefined && fromdaa.destop_immage?.length !== 0 ){
                form_data.append('Banner', fromdaa?.destop_immage[0] );
            }
            
            Setloader(true)
            axios.post( baseurl , form_data , config).then((res)=>{
             
             Setloader(false)
             setOpenupdate(false)
        })
      }
      function uploadSingleFile(e) {
        let ImagesArray=e.target.files;
        console.log(e.target.files)
        setformdata({...fromdaa ,mobile_immage: [...ImagesArray]});
      }
      function deleteFile(e) {
          const s = fromdaa?.mobile_immage?.filter((item, index) => index !== e);
          setformdata({...fromdaa , mobile_immage:s});
      }
  return (
    <div>
        <Modal
        open={openupdate}
        onClose={()=>{setOpenupdate(false)}}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        >
        <Box  className={classes.model_content_banner}>
        <div className=" PromotionalMainContainer ">

                            
        <h2 className="promotionHeads">Update Banner</h2>
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
                            accept="image/*"
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
                        {fromdaa?.destop_immage?.length > 0 ?
                            fromdaa?.destop_immage?.map((item, index) => {
                                return (
                                    <div key={index} className="Display uploadedImg">
                                        <img src={URL.createObjectURL(item)} alt=""  style={{width: "100px", height: "100px", borderRadius: "1px"  }} />
                                        
                                        <span className="removeUploadedImg">
                                            <IconButton onClick={() => deletedestopFile(index)}>
                                                <CloseIcon />
                                            </IconButton>
                                        </span>
                                    </div>
                                );
                            })
                            :
                            <div className="Display uploadedImg">
                            <img src={data.Banner} alt="" className={classes.modelImagedestop} />
                         
                        </div>
                        }
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
                            accept="image/*"
                            disabled={fromdaa?.mobile_immage?.length === 5}
                            style={{ display: "none" }}
                            onChange={uploadSingleFile}
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
                        {fromdaa.mobile_immage?.length > 0 ?
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
                            }) :
                            <div  className="Display uploadedImg">
                            <img src={data.mobile} alt="" className={classes.modelImagemobile} />
                           
                        </div>
                        }
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
                <LoadingButton onClick={submitFunction}>Update Banner</LoadingButton>
            </Box>
        </div>

</div>
        </Box>
        </Modal>
   </div>
  )
}

export default Bannerupdatemodel