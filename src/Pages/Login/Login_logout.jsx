import axios from 'axios'
import React, { useState ,useContext } from 'react'
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
import Createcontext from "../../Hooks/Context/Context"
import { LoadingButton } from '@mui/lab';


export default function Login_logout() {
    const navigate = useNavigate();
    const cookies = new Cookies();
    const [otpvalid, setotpvalid] = useState({});
    const [inputs, setInputs] = useState({});
    const [show, setOpen] = useState(false);
    const [isLoggedIn, loading] = useState(false)
    const [OTP, setotp] = useState("");
    const { state ,dispatch } = useContext(Createcontext)

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

        axios.post("https://api.cannabaze.com/AdminPanel/Login/", data,

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
        axios.post("https://api.cannabaze.com/AdminPanel/VerifyOtp/", otp_data,

        ).then((response) => {
            if (response.data.data === "invalid Otp") {
                setOpen(true);
                setotpvalid(response.data.data)
            }
            else {

             
                if(!response.data.is_superuser && Boolean(response.data.permission.lenght === 0 ) ){
                    navigate("/*");
                }else{
                    let date = new Date();
                    date.setTime(date.getTime() + (60 * 60 * 8000))
                    cookies.set('Token_access', response.data.tokens.access, { expires: date })
                    navigate("/");
                }
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
         
            <div>
                    <div className='login_logout_center'>

                        <div className="login_form_container">
                           
                                <p className="Login_title">ADMIN PANEL</p>
                                <p className='login_description'> Login to access your account</p>
                           
                            <div className='login_form_feild'>

                                <div className='lg_ip_feild'>
                                   

                                        <label htmlFor='name'>
                                            Name<span className='required '>*</span>:
                                        </label>
                                 
                                        <TextField placeholder='User Name'
                                            fullWidth
                                            id="name" variant="outlined"
                                            name="username" inputProps={{ style: { fontSize: 15, height: 5 } }}
                                            onChange={handleChange}
                                            value={inputs.username || ""}
                                            className={classes.Username}
                                        />
                                </div>
                              
                                <div className='lg_ip_feild'>
                                  
                                        <label  htmlFor='email'>
                                            Email<span className='required'>*</span>:
                                        </label>
                                        <TextField placeholder='Email Address'
                                            fullWidth
                                            id="email" variant="outlined" name="Email"
                                            type="email" style={{ fontSize: 15 }} inputProps={{ style: { fontSize: 15, height: 5 } }}
                                            value={inputs.Email || ""}
                                            onChange={handleChange}
                                            className={classes.Username}
                                        />
                                    </div>
                            
                                <div className='lg_ip_feild'>
                                   

                                        <label  htmlFor='password'>
                                            Password<span className='required'>*</span>:
                                        </label>
                                  
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
                                <div className='lg_ip_feild d-flex w-100 justify-content-between align-items-center'>
                                   <div className='d-flex gap-1 align-items-center'>
                                        <input type="checkbox" name='checkbox' id='rememberme' value={inputs.checkbox || ""} onChange={handleChange} />
                                        <label className='RememberMeCheckBox' htmlFor='rememberme'>
                                            Remember me
                                        </label>
                                    </div>
                                    <div>
                                       <Link to={"/Forgot"} className='RememberMeCheckBox'> Forgot Password?</Link>
                                    </div>
                                </div>
                                <div className={classes.SubmitLoginButton}>

                                    <LoadingButton
                                        loading={isLoggedIn}
                                        loadingPosition="start"
                                        onClick={handleSubmit}> Submit </LoadingButton>

                                </div>
                             
                            </div>
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
                                        <button className='topbutton size ' onClick={handleSubmit}>resend</button>
                                        <button className='topbutton  size' onClick={otp_send}>Verify</button>
                                    </p>
                                        : <button className='topbutton  size' onClick={otp_send}>Verify</button>
                                }


                            </DialogActions>
                        </Dialog>
                    </div>

                    </div>
            )
}
