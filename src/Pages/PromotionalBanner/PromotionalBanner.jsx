import React from "react"
import { IoMdArrowBack } from "react-icons/io"
import { IconButton } from "@mui/material"
// import UserEditProfile from "../UserProfile/UserEditProfile"
import Box from "@mui/material/Box"
import TextField from "@mui/material/TextField"
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { LazyLoadImage } from "react-lazy-load-image-component";
import { AiFillCamera } from "react-icons/ai"
import useStyles from "../../Style";
import userprofile from "./image/userprofile.jpg"
import LoadingButton from "@mui/lab/LoadingButton";
import { useNavigate } from "react-router-dom"
const PromotionalBanner = () => {
    const navigate=useNavigate()
    const classes = useStyles()
    return (

        <div className="container-fluid">
            <div className="row">
                <form>
                    <div className="col-10 PromotionalBannerContainer ">
                        <div className="col-12 promtionalBannerHeader">
                            <div className="col-md-2 col-3">
                                <IconButton onClick={()=>navigate("/PromotionalBannerList")}><IoMdArrowBack /></IconButton><span className="promotionBackBtnHead">Back</span>
                            </div>
                            <div className="col-md-10 col-9">
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
                        </div>
                        <div className="col-12">
                            <h2 className="promotionHeads">Promotional Banner</h2>
                        </div>
                        <div className="col-md-10 col-12 px-4 PromotionalMainContainer bg-light mt-5 py-5">
                            <div className="col-10">
                                <div className=" col-12 promotionalBannerInputFiledsContainer mt-5">
                                    <div className="col-xxl-1  col-lg-2 col-md-3 col-3">
                                        <label htmlFor="title">Title</label>
                                    </div>
                                    <TextField id="title" className={classes.textFieldFocusBorderColor} variant="outlined" fullWidth size="small" />
                                </div>
                                <div className=" col-12 promotionalBannerSelectCol mt-5">
                                    <div className="col-xxl-1 col-lg-2 col-md-3 col-3"><label htmlFor="country">Country</label></div>
                                    <select className="promotionSelectWidth" name="country" id="country">
                                        <option value="India">India</option>
                                        <option value="Aus">Aus</option>
                                        <option value="SriLanka">SriLanka</option>

                                    </select>
                                </div>
                                <div className=" col-12 promotionalBannerSelectCol mt-5">
                                    <div className="col-xxl-1 col-lg-2 col-md-3 col-3"> <label htmlFor="state">State</label></div>
                                    <select className="promotionSelectWidth" name="state" id="state">
                                        <option value="India">Uttar Pradesh</option>
                                        <option value="India">Madhya Pradesh</option>


                                    </select>
                                </div>
                                <div className=" col-12  promotionalImageContainers mt-5 ">
                                    <div className="col-xxl-1 col-lg-2 col-md-3 col-3"><label>Image</label></div>

                                    <section className=" promotionalImageSection">
                                        <div className="imageContainer">
                                            <LazyLoadImage className="promotionalImage" src={userprofile} />
                                        </div>
                                        <div className=" inputLabel_image">
                                            <label htmlFor="Add photo" className="userEdit_photo_label">
                                                <div className='center'>
                                                    <AiFillCamera color="#000000" size={22} />
                                                </div>
                                                <div className="changePhoto_title mx-0">Banner Upload</div>

                                                <input
                                                    type="file"
                                                    accept="image/*"
                                                    hidden
                                                    id="Add photo"


                                                />
                                            </label>
                                        </div>
                                    </section>
                                </div>
                                <div className=" col-12  promotionalImageContainers mt-5 ">
                                    <div className="col-xxl-1  col-lg-2 col-md-3 col-3">
                                        <label htmlFor="link">Link</label>
                                    </div>
                                    <TextField id="link" className={classes.textFieldFocusBorderColor} variant="outlined" fullWidth size="small" />
                                </div>
                                <div className=" col-12  promotionalImageContainers mt-5 ">
                                    <Box className={`w-100 promotionBtn_center ${classes.PromotionalBtn}`}>
                                        <LoadingButton>Add Banner</LoadingButton>
                                    </Box>
                                </div>
                                </div>
                        </div>

                    </div>
                </form>
            </div>

        </div>

    )
}
export default PromotionalBanner