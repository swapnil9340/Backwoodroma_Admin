import React from 'react'
import TextField from '@mui/material/TextField';
import { CiUser } from "react-icons/ci"
import { CiLock } from "react-icons/ci"
import {Select , MenuItem} from '@mui/material';
import Box from '@mui/material/Box';
import MuiPhoneNumber from 'material-ui-phone-number';
import { AiOutlineMail } from "react-icons/ai"
import { useForm, Controller } from "react-hook-form";
import LoadingButton from '@mui/lab/LoadingButton';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import useStyles from '../../Style';
import { useNavigate, useLocation } from 'react-router-dom';
import "./Stall.css"

const Addusers = () => {
    const classes = useStyles()
    const Navigate = useNavigate()
    let param = useLocation()
    const { register, handleSubmit,watch, errors, control, reset } = useForm();
    const [loading, setLoading] = React.useState(false);
    const [popup, SetPopup] = React.useState(false)
    const [dulicate, Setduplicate] = React.useState([])
    const [email, Setemail] = React.useState()
    const [Otppopup, Setotppopup] = React.useState(true)
    const [showPassword, setShowPassword] = React.useState(false);
    const handleClickShowPassword = () => setShowPassword((show) => !show);
   console.log(errors)
    const onSubmit = (data) => {
        const Details = {
            DateOfBirth: data.DateOfBirth,
            Gender: data.Gender,
            Mobile: data.Mobile,
            email: data.email,
            password: data.password,
            username: data.username,
            user_type: "Vendor"
        }
    }
  return (
    <div className='adduserForm_container d-flex justify-content-center w-100 py-sm-4 py-5' >
        <div className='formsadduser'>


            <form onSubmit={handleSubmit(onSubmit)}>
    
                <div className="row center">
                    <h6 className='login_title text-start'>Add User</h6>
                </div>

                <div className="row newLogin_label m-2">
                    <h6 htmlFor='userName'>Name</h6>
                    <TextField id="userName" variant="standard" placeholder='Type User Name'
                        fullWidth
                        className={classes.StandardTextFieldStyle}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <CiUser />
                                </InputAdornment>
                            ),
                        }}
                        type="text"
                        name="username"
                        onChange={() => Setduplicate('')}
                       {...register('username',{
                            required: "username is required*.",
                            minLength: {
                                value: 2,
                                message: "Please enter valid name"
                            },
                            maxLength: {
                                value: 150,
                                message: "Please enter shot valid name"
                            }
                        }
                        )}
                        helperText={errors?.username?.message || dulicate?.username}
                        error={Boolean(errors?.username) || Boolean(dulicate?.username)}
                    />
                </div>

                <div className="row newLogin_label m-2">
                    <h6>Mobile</h6>


                    <Controller
                        render={({ name, onChange, value }) => (
                            <MuiPhoneNumber
                                name={name}
                                value={value}
                                size="small"
                                onChange={onChange}
                                id="Mobile"
                                defaultCountry={"in"}
                                style={{ width: "100%" }}
                                margin="normal"
                                error={Boolean(errors?.Mobile)}
                                helperText={errors?.Mobile?.message}
                                className={classes.StandardTextFieldStyle}  />
                        )}
                        name="Mobile"
                        control={control}
                        className={classes.StandardTextFieldStyle}
                        defaultValue=""
                        fullWidth
                        rules={
                            {
                                required: "Enter valid phone number",
                                minLength: {
                                    value: 8,
                                    message: "Please enter minimum 10 digits"
                                },
                                maxLength: {
                                    value: 20,
                                    message: "Please enter valid mobile number"
                                }
                            }
                        }
                    />
                </div>
                <div className="row newLogin_label m-2">
                    <h6 htmlFor='email'>Email</h6>


                    <TextField id="email" variant="standard" placeholder='Type Your Email'
                        fullWidth
                        type="email"
                        className={classes.StandardTextFieldStyle}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <AiOutlineMail />
                                </InputAdornment>
                            ),
                        }}
                        name="email"
                        onChange={() => Setduplicate('')}
                       {...register('email',{
                            required: "email  is required*.",

                        })}
                        helperText={errors?.email?.message || dulicate?.email}
                        error={Boolean(errors?.email) || Boolean(dulicate?.email)}

                    />



                </div>
                <div className="row newLogin_label m-2">
                    <h6 htmlFor='password'>Password</h6>
                    <TextField id="password" variant="standard" placeholder='Type Your Password'
                        fullWidth
                        type={showPassword ? 'text' : 'password'}
                        name="password"
                        className={classes.StandardTextFieldStyle}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <CiLock />
                                </InputAdornment>
                            ),
                            endAdornment: <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword}
                                >
                                    {showPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </InputAdornment>
                        }}
                     {...register('password',{
                            required: "password  is required*.",
                            minLength: {
                                value: 8,
                                message: 'Password must be more than 8 characters'
                            },
                            pattern: {
                                value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                                message: "At least one uppercase letter, one lowercase letter, one number and one special character"
                            }
                        },
                        )}
                        helperText={errors?.password?.message}
                        error={Boolean(errors?.password)}
                    />
                </div>
                <div className="row newLogin_label m-2">
                    <h6 htmlFor='password'>Confirm Password</h6>
                    <TextField id="password" variant="standard" placeholder='Confirm Password'
                        fullWidth
                        type={showPassword ? 'text' : 'password'}
                        name="cpassword"
                        className={classes.StandardTextFieldStyle}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <CiLock />
                                </InputAdornment>
                            ),
                            endAdornment: <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword}
                                >
                                    {showPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </InputAdornment>
                        }}
                    {...register('cpassword',{
                            required: "Confirm password  is required*.",
                            minLength: {
                                value: 8,
                                message: 'Password must be more than 8 characters'
                            },
                            pattern: {
                                value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                                message: "At least one uppercase letter, one lowercase letter, one number and one special character"
                            }
                        },
                        )}
                        helperText={errors?.cpassword?.message}
                        error={Boolean(errors?.cpassword)}
                    />
                </div>
                {/* <div className="row newLogin_label m-2">
                    <h6>Date Of Birth</h6>

                
                        <MuiPickersUtilsProvider utils={DateFnsUtils} >
                            <Controller
                                render={(props) => (
                                    <DatePicker
                                        defaultValue={dayjs(new Date())}
                                        maxDate={new Date()}
                                        className={classes.datepickerFeild}
                                        inputVariant="outlined"
                                        variant="standard"
                                        format="MM/dd/yyyy"
                                        margin="normal"
                                        fullWidth
                                        value={props.value}
                                        onChange={props.onChange}
                                        InputProps={{
                                            startAdornment: (
                                                <InputAdornment position="start">
                                                    <FaBirthdayCake className='newSignup_icon' />
                                                </InputAdornment>
                                            ),
                                        }}
                                        error={Boolean(errors.DateOfBirth)}
                                        helperText={errors.DateOfBirth?.message}
                                    />
                                )}
                                name="DateOfBirth"

                                control={control}
                                rules={{
                                    required: "Date of birth required.",
                                }}

                            />
                        </MuiPickersUtilsProvider>
                


                </div> */}
                <div className="row newLogin_label m-2">
                <h6>Rolls</h6>

                    <Select
                                                        
                        displayEmpty
                        fullWidth
                        className={classes.select}
                        name="Roles"
                        size='small'
                  {...register('Roles',{
                            required: "email  is required*.",

                        })}
                        // renderValue={()=> value !== "" ?  : () => "placeholder text"}
                    >
                        <MenuItem  value={"consumer"}> consumer </MenuItem>
                        <MenuItem value={"vendor"}>vendor</MenuItem>
                        <MenuItem value={"admin"}>admin</MenuItem>
                    </Select>
                </div>
                <div className='row newLogin_label d-flex justify-content-between align-items-center m-2'>
                    <h6 className='d-content'>Status</h6>

                        {/* <input type='checkbox' {...register("adduserstatus", { required: true })} /> */}
                            <label className="switch">
                            <input type="checkbox"   {...register("adduserstatus", { required: true })} />
                            <span className="slider round"></span>
                            </label>
                </div>


                <div className='row mt-2'>
                    <div className='col-lg-12  '>
                        <Box
                            className={`center ${classes.loginBtnStyle}`}
                        >
                            <LoadingButton
                                type="submit"
                                loading={loading}
                            >
                            Add Staff
                            </LoadingButton>
                        </Box>

                    </div>


                </div>
            </form>

        

        </div>
    </div>
  )
}

export default Addusers