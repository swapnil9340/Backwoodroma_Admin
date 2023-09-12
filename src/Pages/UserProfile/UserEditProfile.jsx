import React from "react"
// import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import useStyles from "../../Style";
import { AiFillCamera } from "react-icons/ai"
import { LoadingButton } from "@mui/lab";
import { Box } from "@mui/material";
import { MdModeEditOutline } from "react-icons/md";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { FaUser } from "react-icons/fa"
import { BiMobile } from "react-icons/bi"
import { AiOutlineMail } from "react-icons/ai"
import MuiPhoneNumber from 'mui-phone-number';
const UserEditProfile = () => {
    const classes = useStyles()
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    return (
        <React.Fragment>
            <img src="./image/blank_Image.webp" alt="" 
            onClick={handleClickOpen}
            className="d-inline-block align-text-top brand UserImage" />
        
            <Dialog className={classes.userEditProfileDialog} open={open} onClose={handleClose}>
                <div className="container-fluid">

                    <div className="row">
                       

                        <div className="col-12 userEditProfileContainer">
                            <div className="col-12 userEditCloseBtn">
                            </div>
                            <form>
                            <div className="col-12 editProfile_headings">
                                <div className="col-6 userEditProfileHeadingCol">
                                    <p className="EditProfileHeadingStyle">Profile</p>
                                </div>
                                <div className="col-6 editProfileEdit_Icons">
                                
                                   <Box className={classes.UserEditButton}>

                                        <LoadingButton
                                            endIcon={<MdModeEditOutline color='#707070' size={20} />}
                                        >EDIT</LoadingButton>
                                    </Box>


                                </div>

                            </div>
                            <div className="col-12 userProfileEdit_imageContainer">
                                <section className="d-flex">
                                    <div className="imageContainer">
                                        <LazyLoadImage className="userEditProfleImage" src="./image/blank_Image.webp" />
                                    </div>
                                    <div className=" inputLabel_image">
                                        <label htmlFor="Add photo" className="userEdit_photo_label">
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
                                        </label>
                                    </div>
                                </section>


                            </div>
                            <div className="col-12 userEditNameFlex">
                                <div className="col-4 userEditNameIconFlex ">
                                    <span><FaUser color="#747474" size={18} /></span><span><label className="UserEditProfile_label" htmlFor="UserName">Name</label></span>
                                </div>
                                <div className="col-8">
                                    <TextField id="UserName"
                                        type="text"
                                        className={`${classes.FilledTextFieldStyle}`}
                                        placeholder="Maxell"
                                        variant="filled" fullWidth />
                                </div>

                            </div>
                            <div className="col-12 userEditNameFlex">
                                <div className="col-4 userEditNameIconFlex">
                                    <span><BiMobile color="#747474" size={18} /></span><span><label className="UserEditProfile_label" htmlFor="PhoneNumber">Mobile Number</label></span>
                                </div>
                                <div className="col-8">
                                    <MuiPhoneNumber
                                        id="PhoneNumber"
                                        fullWidth
                                        defaultCountry={'in'}
                                    />
                                </div>

                            </div>
                            <div className="col-12 userEditNameFlex">
                                <div className="col-4 userEditNameIconFlex ">
                                    <span><AiOutlineMail color="#747474" size={18} /></span><span><label className="UserEditProfile_label" htmlFor="UserEmail">Email</label></span>
                                </div>
                                <div className="col-8">
                                    <TextField id="UserEmail"
                                        type="text"
                                        className={`${classes.FilledTextFieldStyle}`}
                                        placeholder="maxwell@gmail.com"
                                        variant="filled" fullWidth />
                                </div>

                            </div>
                            <div className="col-12 userEditbtnFlex">
                                <div className="col-4">
                                    <Box className={classes.userEditCancel_loadingBtn}>
                                        <LoadingButton variant="outlined" onClick={handleClose}>Cancel</LoadingButton>
                                    </Box>

                                </div>
                                <div className="col-4">
                                    <Box className={`${classes.userEdit_loadingBtn}`}>
                                        <LoadingButton>Save</LoadingButton>
                                    </Box>
                                </div>


                            </div>
                            </form>
                        </div>

                    </div>

                </div>
            </Dialog>

        </React.Fragment>
    )
}
export default UserEditProfile