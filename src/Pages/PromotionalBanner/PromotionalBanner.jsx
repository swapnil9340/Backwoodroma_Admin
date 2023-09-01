import React from "react"
import { IoMdArrowBack } from "react-icons/io"
import { IconButton } from "@mui/material"
// import UserEditProfile from "../UserProfile/UserEditProfile"
import TextField from "@mui/material/TextField"
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { LazyLoadImage } from "react-lazy-load-image-component";
// import { AiFillCamera } from "react-icons/ai"
import useStyles from "../../Style";
const PromotionalBanner = () => {
    const classes=useStyles()
    return (

        <div className="container-fluid">
            <div className="row">
                <div className="col-10 PromotionalBannerContainer ">
                    <div className="col-12 promtionalBannerHeader">
                        <div className="col-2">
                            <IconButton><IoMdArrowBack /></IconButton><span>Back</span>
                        </div>
                        <div className="col-10">
                            <FormControlLabel
                            className={classes.promotionalCheckBoxFontSize}
                                control={
                                    <Checkbox
                                 
                                     name="PromotionalBanner"
                                      />
                                }
                                label="Promotional Banner"
                            />
                            <FormControlLabel
                             className={classes.promotionalCheckBoxFontSize}
                                control={
                                    <Checkbox name="OfferBanner" />
                                }
                                label="Offer Banner"
                            />


                        </div>
                    </div>
                    <div className="col-12">
                        <h2 className="promotionHeads">Promotional Banner</h2>
                    </div>
                    <div className="col-10 PromotionalMainContainer bg-light mt-4">

                        <div className="col-8 promotionalBannerInputFiledsContainer mt-5 ">
                            <div className="col-lg-1 col-md-2 col-3"><lable>Title</lable></div>
                            <TextField variant="outlined" fullWidth size="small" />
                        </div>
                        <div className="col-8 promotionalBannerSelectCol mt-4">
                            <div className="col-lg-1 col-md-2 col-3"><label htmlFor="country">Country</label></div>
                            <select className="promotionSelectWidth" name="country" id="country">
                                <option value="India">India</option>
                                <option value="Aus">Aus</option>
                                <option value="SriLanka">SriLanka</option>

                            </select>
                        </div>
                        <div className="col-8 promotionalBannerSelectCol mt-4">
                            <div className="col-lg-1 col-md-2 col-3"> <label htmlFor="country">State</label></div>
                            <select className="promotionSelectWidth" name="country" id="country">
                                <option value="India">Uttar Pradesh</option>
                                <option value="India">Madhya Pradesh</option>


                            </select>
                        </div>
                        <div className="col-8">
                        <section className=" promotionalImageSection">
                                    <div className="imageContainer">
                                        <LazyLoadImage className="promotionalImage" src="./image/userprofile.jpg" />
                                    </div>
                                    <div className=" inputLabel_image">
                                        {/* <label htmlFor="Add photo" className="userEdit_photo_label">
                                            <div className='center'>
                                                <AiFillCamera color="#000000" size={22} />
                                            </div>
                                            <div className="changePhoto_title mx-0">Upload photo</div>

                                            <input
                                                type="file"
                                                accept="image/*"
                                                hidden
                                                id="Add photo"


                                            />
                                        </label> */}
                                    </div>
                                </section>
                        </div>

                    </div>

                </div>

            </div>

        </div>

    )
}
export default PromotionalBanner