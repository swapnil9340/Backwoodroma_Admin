import React,{useState} from 'react'
import { FaArrowLeft } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import TextField from '@mui/material/TextField';
import CloseIcon from '@mui/icons-material/Close';
import { MdOutlineCloudUpload } from "react-icons/md"
import IconButton from '@material-ui/core/IconButton';
import './Aboutus.css'
import {
  createMuiTheme,
  makeStyles,
  createStyles,
  Theme as AugmentedTheme,
  ThemeProvider
} from "@material-ui/core/styles";
const Aboutus = () => {
  const useStyles = makeStyles(theme =>
    createStyles({
      root: {
        color: "white",
        "& .MuiOutlinedInput-root": {
       
          "& .MuiOutlinedInput-input":{
            fontSize:'16px',
            padding:'8px 15px',

          },
          "& fieldset": {
            borderColor: "rgba(0, 0, 0, 0.23)" // default
          },
          "&.Mui-focused fieldset": {
            border: "2px solid #31B655" // customized
          }
        }
      }
    })
  );
    let navigate = useNavigate()
    const [Image , SetImage] = useState('')  
    function uploadSingleFile(e) {
      let ImagesArray=e.target.files;
      SetImage([...Image, ...ImagesArray]);
  }
  function deleteFile(e) {
      const s = Image.filter((item, index) => index !== e);
      SetImage(s);

  }
  const classes = useStyles();

  return (
    <div className='container-fluid'>
    <div className='row'>
        <div className='col-10  category_main_row' >

        <div className='aboutusbanner'>
          <div className='container-fluid'>
              <div className='backbtn' onClick={()=>{navigate(-1)}}>
                <FaArrowLeft /> Back
              </div>
              <div className='banner-from'>
                  <h2 className='form_title'>About Us</h2>

                  <div className='feild_box'>
                    <h4 className='custom_label'>Title</h4>
                    <TextField   sx={{
                      width:'100%',
                      "&.Mui-focused": {
                        border: "2px solid red",
                        '& .MuiOutlinedInput-notchedOutline': {
                          border: 'none'
                        }
                      }
                    }}  classes={{
                      root: classes.root
                    }} id="outlined-basic" variant="outlined" />
                  </div>
                  <div className='feild_box'>
                    <h4 className='custom_label'>Banner Image</h4>
                    <form className="bannerImagebox row ">
              <div className="col-12">
                  <div className="form-group">
                      <input
                          type="file"
                          disabled={Image.length === 5}
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
                      {Image.length > 0 &&
                          Image.map((item, index) => {
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
                  <div className='feild_box'>
                    <h4 className='custom_label'>Description</h4>
                    <textarea className='bannerddescription'></textarea>
                  </div>
                  <div className='save_btn'></div>
              </div>
          </div>
        </div>
        </div>
    </div>
</div>
   
  )
}
export default Aboutus