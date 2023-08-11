import axios from 'axios'
import React, { useState } from 'react'
import IconButton from '@mui/material/IconButton';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Cookies from 'universal-cookie';
import { Link, useNavigate } from 'react-router-dom';
import { TextField } from '@mui/material';
import { AiFillEye } from 'react-icons/ai';
import { AiFillEyeInvisible } from "react-icons/ai"
import InputAdornment from '@material-ui/core/InputAdornment';
import useStyles from '../../Style'
import { LoadingButton } from '@mui/lab';


export default function Login_logout() {
    const navigate = useNavigate();
    const cookies = new Cookies();
    const [otpvalid, setotpvalid] = useState({});
    const [inputs, setInputs] = useState({});
    const [show, setOpen] = useState(false);
    const [isLoggedIn, loading] = useState(false)
    const [OTP, setotp] = useState("");
    const [values, setValues] = React.useState({
        password: "",
        showPassword: false,
    });
    
    const classes = useStyles()
    const data = {
        email: inputs.Email,
        username: inputs.username,
        password: inputs.password
    }
    const otp_data = {
        email: inputs.Email,
        OTP: OTP.OTP,

    }
 
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }))
    }
    const handleotp = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setotp(values => ({ ...values, [name]: value }))
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        axios.post("https://sweede.app/AdminPanel/Login/", data,

            loading(true)
        ).then((response) => {
            loading(false)
            alert(response.data.message)
            setOpen(true)
            loading(false)


        }).catch((error) => {
            if (error) {
                alert(
                    "Invalid credentials"
                )
                loading(false)

            }
        })
        setTimeout(alertFunc, 5 * 60 * 1000)
    }


    function alertFunc() {
        setOpen(false);
    }


    const otp_send = () => {

        setOpen(false);
        axios.post("https://sweede.app/AdminPanel/VerifyOtp/", otp_data,

        ).then((response) => {
            if (response.data.data === "invalid Otp") {
                setOpen(true);
                setotpvalid(response.data.data)
            }
            else {
                let date = new Date();
                date.setTime(date.getTime() + (60 * 60 * 8000))
                cookies.set('Token_access', response.data.tokens.access, { expires: date })
                navigate("/");
            }
        })
    };



    const handleClose = () => {
        setOpen(false);


    }


    const handleClickShowPassword = () => {
        setValues({ ...values, showPassword: !values.showPassword });
    };

    return (
        <>

            <div className='container  center '>
                <div className='row'>
                    <div className='col-12 login_logout_center'>

                    <div className='col-lg-4  col-md-6 col-11'>
                        <div className='col-12 center login_border'>
                            <p className="Login_font">ADMIN PANEL</p>
                            <p className='color Login_font'> Login to access your account</p>
                        </div>
                        <div className='col-12 '>

                            <div className='col-12  d-flex top  '>
                                <div className='col-3'>

                                    <label className='label' htmlFor='name'>
                                        <span className='required '>*</span>
                                        Name:
                                    </label>
                                </div>
                                <div className='col-9 display'>
                                    <TextField placeholder='User Name'
                                    fullWidth
                                    id="name" variant="outlined"
                                        name="username"  inputProps={{ style: { fontSize: 15, height: 5 } }}
                                        onChange={handleChange}
                                        value={inputs.username || ""}
                                        className={classes.Username}
                                    />
                                </div>
                            </div>

                            <div className='col-12  d-flex top  '>
                                <div className='col-3'>

                                    <label className='label' htmlFor='email'>
                                        <span className='required'>*</span>
                                        Email:
                                    </label>
                                </div>
                                <div className='col-9 display'>
                                    <TextField placeholder='Email Address'
                                    fullWidth
                                    id="email" variant="outlined" name="Email"
                                        type="email" style={{  fontSize: 15 }} inputProps={{ style: { fontSize: 15, height: 5 } }}
                                        value={inputs.Email || ""}
                                        onChange={handleChange}
                                        className={classes.Username}
                                    />
                                </div>
                            </div>
                            <div className='col-12  d-flex top  '>
                                <div className='col-3'>

                                    <label className='label' htmlFor='password'>
                                        <span className='required'>*</span>
                                        Password:
                                    </label>
                                </div>
                                <div className='col-9  display '>
                                    <TextField placeholder='Password' type={values.showPassword ? "text" : "password"} id="password" variant="outlined"
                                        name="password" fullWidth inputProps={{ style: { fontSize: 15, height: 5 } }}
                                        onChange={handleChange}
                                        className={classes.Username}
                                        InputProps={{
                                            endAdornment: (
                                                <InputAdornment position='end'>
                                                    <IconButton
                                                        aria-label="toggle password visibility"
                                                        onClick={handleClickShowPassword}
                                                    >
                                                        {values.showPassword ? <AiFillEye size={20} color='#747474' /> : <AiFillEyeInvisible size={20} color='#747474' />}
                                                    </IconButton>
                                                </InputAdornment>

                                            )
                                        }}

                                        value={inputs.password || ""}

                                    />

                                </div>
                            </div>
                            <div className='top'>
                                <input type="checkbox" name='checkbox' value={inputs.checkbox || ""} onChange={handleChange} />
                                <label className='RememberMeCheckBox'>
                                    Remember me
                                </label>
                            </div>
                            <div className={classes.SubmitLoginButton}>

                                <LoadingButton
                                 loading={isLoggedIn}
                                 loadingPosition="start"
                                  onClick={handleSubmit}> Submit </LoadingButton>

                            </div>

                            <div className='col-12  mt-4'>

                                <Link to={"/Forgot"}> <button className='color btn login_logoutBtn_width'>Forgot Password?</button></Link>
                            </div>
                        </div>
                    </div>
<<<<<<< HEAD
=======
                    <div className='col-12 '>

                        <div className='col-12  label top  con'>
                            <div className='col-sm-5'>

                                <label className='label'>
                                    <span className='required'>*</span>
                                    Name:
                                </label>
                            </div>
                            <div className='col display'>
                                <TextField placeholder='User Name' id="outlined-basic" variant="outlined"
                                    name="username" style={{ width: 286 }} inputProps={{ style: { fontSize: 15, height: 5 } }}
                                    onChange={handleChange}
                                    value={inputs.username || ""}
                                    className={classes.Username}
                                />
                            </div>
                        </div>

                        <div className='col-12  label top  con'>
                            <div className='col-sm-5'>

                                <label className='label'>
                                    <span className='required'>*</span>
                                    Email:
                                </label>
                            </div>
                            <div className='col display'>
                                <TextField placeholder='Email Address ' id="outlined-basic" variant="outlined" name="Email"
                                    type="email" style={{ width: 286, fontSize: 15 }} inputProps={{ style: { fontSize: 15, height: 5 } }}
                                    value={inputs.Email || ""}
                                    onChange={handleChange}
                                    className={classes.Username}
                                />
                            </div>
                        </div>
                        <div className='col-12  label top  con'>
                            <div className='col-sm-5'>

                                <label className='label'>
                                    <span className='required'>*</span>
                                    Password:
                                </label>
                            </div>
                            <div className='col  display '>
                                <TextField placeholder='Password' type={values.showPassword ? "text" : "password"} id="outlined-basic" variant="outlined"
                                    name="password" style={{ minWidth: 190 }} inputProps={{ style: { fontSize: 15, height: 5 } }}
                                    onChange={handleChange}
                                    className={classes.Username}
                                    InputProps={{
                                        endAdornment: (
                                            <InputAdornment position='end'>
                                                <IconButton
                                                    aria-label="toggle password visibility"
                                                    onClick={handleClickShowPassword}
                                                >
                                                    {values.showPassword ? <AiFillEye size={20} color='#747474' /> : <AiFillEyeInvisible size={20} color='#747474' />}
                                                </IconButton>
                                            </InputAdornment>

                                        )
                                    }}

                                    value={inputs.password || ""}

                                />

                            </div>
                        </div>
                        <div className='top'>
                            <input type="checkbox" name='checkbox' value={inputs.checkbox || ""} onChange={handleChange} />
                            <label className='RememberMeCheckBox'>
                                Remember me
                            </label>
                        </div>
                        <div className={classes.SubmitLoginButton}>

                            <LoadingButton  loading={isLoggedIn} onClick={handleSubmit}> Submit </LoadingButton>
                            

                        </div>

                        <div className='col-12   check'>

                            <Link to={"/Forgot"}> <button className='color btn'>Forgot Password?</button></Link>
                        </div>
>>>>>>> 5499e7956 (qweqew)
                    </div>

                </div>
                <div>

                    <Dialog open={show} onClose={handleClose} disableEscapeKeyDown>
                        <DialogTitle>Enter Otp</DialogTitle>
                        <DialogContent>
                            <DialogContentText>

                                {
                                    otpvalid === "invalid Otp" &&

                                    <div className='col-12 center colorotp'>
                                        <p>{otpvalid}</p>
                                    </div>
                                }
                                Please Enter Otp Which Is Sent On Your Register Email


                            </DialogContentText>


                            <input className='otp' placeholder='Enter Otp' type="number" id="otp" name="OTP" min="4" max="4" value={OTP.OTP || ""} onChange={handleotp} />
                        </DialogContent>
                        <DialogActions>
                            {
                                otpvalid === "invalid Otp" ? <p>
                                    <button className='btn Sub_button size ' onClick={handleSubmit}>resend</button>
                                    <button className='btn Sub_button  size' onClick={otp_send}>Verify</button>
                                </p>
                                    : <button className='btn Sub_button  size' onClick={otp_send}>Verify</button>
                            }


                        </DialogActions>
                    </Dialog>
                </div>



            </div>
        </>


    )
}
