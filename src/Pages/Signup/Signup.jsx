import { LazyLoadImage } from "react-lazy-load-image-component"
import React from "react"
import FormControl from '@mui/material/FormControl';
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import TextField from '@mui/material/TextField';
import { WidthFull } from "@mui/icons-material";
const Signup = () => {
    const [Role, SetRole] = React.useState("")
    const HandleRole = (e) => {
        SetRole(e.target.value)
    }
    return (
        <React.Fragment>
            <div className="container-fluid">
                <div className="col-10 SignupContainer">
                    <div className="col-12 SignupHeading_container">
                        <div className="signupLogo_container">
                            <LazyLoadImage className="signupLogo_image" src="./image/signup_logo.png" alt="image_not found" />
                        </div>
                    </div>
                    <div className="col-12 signupFields_container">
                        <div className="col-10 signupFieldInner_Container">
                            <form>
                                <div className="col-12 signup_headings">
                                    <h1 className="signup_headings">Signup</h1>
                                </div>
                                <div className="col-12 signup_user_main_container">
                                    <div className="section  signup_image_mainContainer">
                                        <div className="siginup_imgCont">
                                            <LazyLoadImage className="signupUser_image" src="./image/blank_Image.webp" alt="image_not found" />

                                        </div>
                                    </div>
                                    <div className="section signupDropdown_rightSection">
                                        <div className="col-12 roleDropDownContainer">
                                            <p className="roleHead">Role</p>
                                            <FormControl sx={{ minWidth: "30%" }}>
                                                <Select
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
                                            <TextField variant="outlined"
                                                sx={{ minWidth: "30%" }}
                                            />
                                        </div>

                                    </div>
                                </div>
                                <div className="col-12 mt-2">
                                    <div>
                                    <label htmlFor="UserName">User Name</label>

                                    </div>
                                    <TextField variant="outlined"
                                      sx={{minWidth:"50%"}}
                                      id="UserName"
                                      placeholder="User Name"
                                    />
                                </div>
                            </form>
                        </div>

                    </div>

                </div>

            </div>
        </React.Fragment>
    )
}
export default Signup