import { LazyLoadImage } from "react-lazy-load-image-component"
import React from "react"
import FormControl from '@mui/material/FormControl';
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import TextField from '@mui/material/TextField';
import { WidthFull } from "@mui/icons-material";
import MuiPhoneNumber from 'mui-phone-number';
import useStyles from "../../Style";
import { AiFillEye } from "react-icons/ai"
import { InputAdornment } from "@mui/material";
import Checkbox from '@mui/material/Checkbox';
import { LoadingButton } from "@mui/lab";
import Box from "@mui/material/Box";
const Signup = () => {
    const classes = useStyles()
    const [Role, SetRole] = React.useState("")
    const HandleRole = (e) => {
        SetRole(e.target.value)
    }
    return (
        <React.Fragment>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-10 SignupContainer">
                        <div className="col-12 SignupHeading_container">
                            <div className="signupLogo_container">
                                <LazyLoadImage className="signupLogo_image" src="./image/signup_logo.png" alt="image_not found" />
                            </div>
                        </div>
                        <div className="col-12 signupFields_container">
                            <div className="col-10  signupFieldInner_Container">
                                <form>
                                    <div className="col-12 signup_headings">
                                        <h1 className="signup_headings">SIGN UP</h1>
                                    </div>
                                    <div className="col-12 signup_user_main_container">
                                        <div className="section  signup_image_mainContainer">
                                            <div className="siginup_imgCont">
                                                <LazyLoadImage className="signupUser_image" src="./image/blank_Image.webp" alt="image_not found" />

                                            </div>
                                        </div>
                                        <div className="section signupDropdown_rightSection">
                                            <div className="col-12 roleDropDownContainer">
                                                <div>
                                                    <p className="roleHead">Role</p>

                                                </div>
                                                <FormControl
                                                    className={classes.signuproleSelectDropdown}
                                                >
                                                    <Select
                                                        size="small"
                                                        id="RoleDropdown"
                                                        value={Role}
                                                        onChange={HandleRole}
                                                    >

                                                        <MenuItem value={"Admin(Co Founder)"}>Admin(Co Founder)</MenuItem>

                                                        <MenuItem value={"Content Manager"}>Content Manager</MenuItem>
                                                        <MenuItem value={"Vendor Management"}>Vendor Management</MenuItem>
                                                        <MenuItem value={"Store Management"}>Store Management</MenuItem>

                                                    </Select>
                                                </FormControl>

                                            </div>
                                            <div className="col-12 signupNameFields">
                                                <div>
                                                    <label className="signup_name" htmlFor="name">Name</label>
                                                </div>
                                                <TextField id="name"
                                                    variant="outlined"
                                                    size="small"
                                                    className={classes.signupNameTextFieldWidth}
                                                />
                                            </div>

                                        </div>
                                    </div>
                                    <div className="col-12  signup_userNameCol">
                                        <div>
                                            <label className="userName" htmlFor="UserName">User Name</label>

                                        </div>
                                        <TextField variant="outlined"
                                            className={classes.signupTextFieldWidth}
                                            id="UserName"
                                            size="small"
                                            placeholder="User Name"
                                        />
                                    </div>
                                    <div className="col-12 signupPhoneCol">
                                        <div>
                                            <label htmlFor="phoneNo">Phone Number</label>
                                        </div>
                                        <MuiPhoneNumber
                                            className={classes.signupMuiPhone}
                                            defaultCountry={'in'}
                                            id="phoneNo"
                                        />
                                    </div>
                                    <div className="col-12 userEmialFieldCol">
                                        <div>
                                            <label className="Useremail" htmlFor="Useremail">Email Address</label>
                                        </div>
                                        <TextField variant="outlined"
                                            className={classes.signupTextFieldWidth}
                                            id="Useremail"
                                            size="small"
                                            placeholder="User email"
                                        />
                                    </div>
                                    <div className="col-12 passwordFiledCol ">
                                        <div>
                                            <label className="password" htmlFor="password">Password</label>
                                        </div>

                                        <TextField variant="outlined"
                                            className={classes.signupTextFieldWidth}
                                            id="password"
                                            size="small"
                                            placeholder="Password"
                                            InputProps={{
                                                endAdornment: (
                                                    <InputAdornment position="end">
                                                        <AiFillEye size={22} />
                                                    </InputAdornment>
                                                )

                                            }}
                                        />
                                    </div>
                                    <div className="col-12 passwordFiledCol ">
                                        <div>
                                            <label className="password" htmlFor="ConfirmPassword">Confirm Password</label>
                                        </div>

                                        <TextField variant="outlined"
                                            size="small"
                                            className={classes.signupTextFieldWidth}
                                            id="ConfirmPassword"
                                            placeholder="Confirm Password"
                                            InputProps={{
                                                endAdornment: (
                                                    <InputAdornment position="end">
                                                        <AiFillEye size={22} />
                                                    </InputAdornment>
                                                )

                                            }}
                                        />
                                    </div>
                                    <div className="col-12 ">
                                        <p className="status">Status</p>
                                        <FormControl
                                            className={classes.signupStatusSelectDropdown}
                                        >
                                            <Select
                                                size="small"
                                                id="RoleDropdown"
                                                value={Role}
                                                onChange={HandleRole}
                                            >
                                                <MenuItem value={"Active"}>Active</MenuItem>
                                                <MenuItem value={"Hide"}>Hide</MenuItem>
                                            </Select>
                                        </FormControl>

                                    </div>
                                    <div className="col-12 signupConditionCol">
                                        <Checkbox defaultChecked /><p className="signiningCondPara">By Signing Up I agree with<span className="signTermCond">Term and conditions</span> </p>
                                    </div>
                                    <Box className={`signUp_loading_btn ${classes.SignuploadingBtnTextAndBack}`}>
                                        <LoadingButton>Sign Up</LoadingButton>

                                    </Box>
                                    <div className="col-6 center alreadyAccount">
                                        <p className="signiningCondPara">Already have an Account?<span className="signTermCond">Sign In</span> </p>
                                    </div>
                                </form>
                            </div>

                        </div>

                    </div>
                </div>


            </div>
        </React.Fragment>
    )
}
export default Signup
