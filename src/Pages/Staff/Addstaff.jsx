import React, { useEffect } from "react";
import TextField from "@mui/material/TextField";
import { CiUser } from "react-icons/ci";
import { CiLock } from "react-icons/ci";
import { Select, MenuItem } from "@mui/material";
import Box from "@mui/material/Box";
import MuiPhoneNumber from "material-ui-phone-number";
import { AiOutlineMail } from "react-icons/ai";
import { useForm, Controller } from "react-hook-form";
import LoadingButton from "@mui/lab/LoadingButton";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import Cookies from "universal-cookie";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import useStyles from "../../Style";
import { useNavigate, useLocation } from "react-router-dom";
import { FormControl } from "@mui/material";
import "./Stall.css";
import axios from "axios";
import { data } from "jquery";
const Addusers = () => {
  const classes = useStyles();
  const Navigate = useNavigate();
  let param = useLocation();
  const { register, handleSubmit, watch, errors, control } =   useForm();
  const [loading, setLoading] = React.useState(false);
  const [dulicate, Setduplicate] = React.useState([]);
  const [roleoptions, Setroleoptions] = React.useState([]);
  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const cookies = new Cookies();
  const token_data = cookies.get("Token_access");
 
  const onSubmit = (data) => {
    console.log(data, "data");
    // const Details = {
    //   DateOfBirth: data.DateOfBirth,
    //   Gender: data.Gender,
    //   Mobile: data.Mobile,
    //   email: data.email,
    //   password: data.password,
    //   username: data.username,
    //   user_type: "Vendor",
    // };

    axios.post('https://api.cannabaze.com/VendorPanel/register/',data ).then((res)=>{
        console.log(res)
    })
  };
function newdatageter(data){
    console.log(data)
}
  useEffect(() => {
    axios
      .get("https://api.cannabaze.com/AdminPanel/Get-RolesAndPermission/", {
        headers: {
          Authorization: `Bearer ${token_data}`,
        },
      })
      .then((res) => {
        Setroleoptions(res?.data);
      });
  }, []);

  return (
    <div className="adduserForm_container d-flex justify-content-center w-100 py-sm-4 py-5">
      <div className="formsadduser">
        <form onSubmit={handleSubmit((data)=>onSubmit(data))}>
          <div className="row center">
            <h6 className="Login_title text-start">Add User</h6>
          </div>

          <div className="row newLogin_label m-2">
            <h6 htmlFor="userName">Name</h6>
            <TextField
              //   id="userName"
              variant="standard"
              placeholder="Type User Name"
              fullWidth
              className={classes.StandardTextFieldStyle}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <CiUser />
                  </InputAdornment>
                ),
              }}
              name="username"
              // onChange={() => Setduplicate('')}
              inputRef={register({
                required: "This Field is required*.",
              })}
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
                  className={classes.StandardTextFieldStyle}
                />
              )}
              name="Mobile"
              control={control}
              className={classes.StandardTextFieldStyle}
              defaultValue=""
              fullWidth
              rules={{
                required: "Enter valid phone number",
                minLength: {
                  value: 8,
                  message: "Please enter minimum 10 digits",
                },
                maxLength: {
                  value: 20,
                  message: "Please enter valid mobile number",
                },
              }}
            />
          </div>
          <div className="row newLogin_label m-2">
            <h6 htmlFor="email">Email</h6>

            <TextField
              id="email"
              variant="standard"
              placeholder="Type Your Email"
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
              inputRef={register({
                required: "email  is required*.",
              })}
              helperText={errors?.email?.message || dulicate?.email}
              error={Boolean(errors?.email) || Boolean(dulicate?.email)}
            />
          </div>
          <div className="row newLogin_label m-2">
            <h6 htmlFor="password">Password</h6>
            <TextField
              id="password"
              variant="standard"
              placeholder="Type Your Password"
              fullWidth
              type={showPassword ? "text" : "password"}
              name="password"
              className={classes.StandardTextFieldStyle}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <CiLock />
                  </InputAdornment>
                ),
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
                
              }}
              defaultValue=""
              inputRef={register({
                required: "password  is required*.",
                minLength: {
                  value: 8,
                  message: "Password must be more than 8 characters",
                },
                pattern: {
                  value:
                    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                  message:
                    "At least one uppercase letter, one lowercase letter, one number and one special character",
                },
              })}
              autocomplete="new-password"
              helperText={errors?.password?.message}
              error={Boolean(errors?.password)}
            />
          </div>
          <div className="row newLogin_label m-2">
            <h6 htmlFor="password">Confirm Password</h6>
            <TextField
              id="cpassword"
              variant="standard"
              placeholder="Confirm Password"
              fullWidth
              type={showPassword ? "text" : "password"}
              name="cpassword"
              className={classes.StandardTextFieldStyle}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <CiLock />
                  </InputAdornment>
                ),
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
                
              }}
              autocomplete="new-password"
              inputRef={register({
                required:
                  watch("password") !== watch("cpassword") &&
                  "Confirm password mot match",
                validate: (val) => {
                  if (watch("password") != val) {
                    return "Your passwords do no match";
                  }
                },
              })}
              helperText={errors?.cpassword?.message}
              error={Boolean(errors?.cpassword)}
            />
          </div>
        
          <div className="row newLogin_label m-2">
            <h6>Rolls</h6>

            

            <FormControl fullWidth>
              <Controller
                render={(props) => (
                  <Select
                    {...props}
                    className={classes.selectformbox}
                    // renderValue={(selected) => selected.map(obj => names[obj - 1].value).join(", ")}
                    error={!!errors.Role}
                    helperText={errors.Role && errors.Role.message}
                    
                  >
                    {roleoptions.map((item, index) => {
                      return (
                        <MenuItem  key={index} className={classes.selectrolesoptions} value={item.id}>{item.RoleTitle} </MenuItem>
                      );
                    })}
                  </Select>
                )}
                // value={AddStore.Store_Type}
                // onChange={handleChange}
                name="Role"
                control={control}
                defaultValue={''}
                rules={{ required: 'Please Assign Role' }}
              />

              {/* {/ <FormHelperText>{method.errors.Store_Type?.message}</FormHelperText> /} */}
            </FormControl>
          </div>
          <div className="row newLogin_label d-flex justify-content-between align-items-center m-2">
            <h6 className="d-content">Status</h6>

            {/* <input type='checkbox' {...register("adduserstatus", { required: true })} /> */}
                <label className="switch">
                <input
                    type="checkbox"
                   
                />
                <span className="slider round"></span>
                </label>


          </div>

          <div className="row mt-2">
            <div className="col-lg-12  ">
              <Box className={`center ${classes.loginBtnStyle}`}>
                <LoadingButton type="submit" loading={loading}>
                  Add Staff
                </LoadingButton>
              </Box>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Addusers;
