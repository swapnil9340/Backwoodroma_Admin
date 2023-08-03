import { makeStyles } from '@mui/styles';
const useStyles = makeStyles({
  FilledTextFieldStyle: {
    "& .MuiFilledInput-root:hover": {
      background: "#F2F1F1"
    },
    "& .MuiInputBase-input.MuiFilledInput-input": {
      padding: "18px",
    },
    "& .MuiFilledInput-underline:after": {
      borderBottomColor: "#31B665"
    },
    "& input::placeholder": {
      fontSize: "12px"
    },
  
    " && .MuiFilledInput-underline:hover::before": {
      borderColor: "#31B665",
    },
    "& input": {
      "&:-webkit-autofill": {
        WebkitBoxShadow: "0 0 0 1000px #F2F1F1 inset"

      }
    }
  },
  textFieldFocusBorderColor: {
    "& .MuiOutlinedInput-root": {
      " &.Mui-focused fieldset": {
        borderColor: "#31B665",
      },
      '&:hover fieldset': {
        borderColor: '#31B665', // - Set the Input border when parent has :hover
      },
    }
  },
  signupMuiPhone: {
    "&.MuiTextField-root": {
      width: "50%",
      marginTop: "15px"

    },
    "@media(max-width:700px)": {
      "&.MuiTextField-root": {
        width: "100%",

      },
    }
  },
  signupNameTextFieldWidth: {
    "&.MuiTextField-root": {
      width: "42%",

    },
    "& .MuiOutlinedInput-root": {
      " &.Mui-focused fieldset": {
        borderColor: "#31B665",
      },
      '&:hover fieldset': {
        borderColor: '#31B665', // - Set the Input border when parent has :hover
      },
    },

    "@media(max-width:700px)": {
      "&.MuiTextField-root": {
        width: "100%",

      },
    }
  },
  signuproleSelectDropdown: {
    "&.MuiFormControl-root": {
      width: "42%"
    },
    "@media(max-width:700px)": {
      "&.MuiFormControl-root": {
        width: "100%"
      },
    },
    "& .MuiOutlinedInput-root": {
      " &.Mui-focused fieldset": {
        borderColor: "#31B665",
      },
      '&:hover fieldset': {
        borderColor: '#31B665', // - Set the Input border when parent has :hover
      },
    }


  },
  signupStatusSelectDropdown: {
    "&.MuiFormControl-root": {
      width: "50%"
    },
    "@media(max-width:700px)": {
      "&.MuiFormControl-root": {
        width: "100%"
      },
    },
    "& .MuiOutlinedInput-root": {
      " &.Mui-focused fieldset": {
        borderColor: "#31B665",
      },
      '&:hover fieldset': {
        borderColor: '#31B665', // - Set the Input border when parent has :hover
      },
    }


  },
  SignuploadingBtnTextAndBack: {
    "& .MuiButton-text": {
      fontSize: ".5rem",
    },
    "& .MuiLoadingButton-root": {
      fontSize: "14px",
      width: "25%",
      height: "38px",
      borderRadius: "4px",
      backgroundColor: "#ffff",
      color: "#31B665",
      textTransform: "none",
      border: "2px solid #31B665"
    },
    "& .MuiButtonBase-root:hover": {
      color: "#ffff",
      backgroundColor: "#00b96a",
      border: "2px solid #31B665"
    },
  },

  Username: {
    '& .MuiOutlinedInput-root': {
      '&.Mui-focused fieldset': {
        borderWidth: "1px",
        borderColor: '#31B665',
      },
    },
    "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
      borderColor: "#31B665"
    },
  },
  SubmitLoginButton:{
    '& .MuiLoadingButton-root':{
      
        color:'#31B665',
        marginTop:"10px",
        fontSize:"15px",
        textTransform:"none",
      },
      '& .MuiLoadingButton-root:hover':{
      
        color:'#FFFFFF',
        backgroundColor:"#31B665",
        marginTop:"10px",
        fontSize:"15px",
        
      },

     '& .MuiLoadingButton-outlined':{
      outlined:"#31B665"
     }
   
 
    },
    loadingBtnBoxHeight:{
    height:"100%",
    width:"100%",
    display:"flex",
    alignItems:"center"
    },
    generalRoleViewBTn:{
      '& .MuiLoadingButton-root':{
      
        color:'#31B665',
        fontSize:"10px",
        width:"30%",
        border:"1px solid #31B665",
        borderRadius:"20px",
        height:"24px",
        
      },
      '& .MuiLoadingButton-root:hover':{
        border:"1px solid #31B665",
        backgroundColor:"#31B665",
        color:"#FFFFFF"
      },
      "@media(max-width:600px)":{
        '& .MuiLoadingButton-root':{
          width: "63px",
          height: "20px",
          fontSize:" 7px",
          padding: "4px"


        }
      },
     '& .MuiLoadingButton-outlined':{
      outlined:"#31B665"
     }
    },
    rolePermissionLoadingBtn:{
      '& .MuiLoadingButton-root':{
      
        color:'#31B665',
        marginTop:"10px",
        fontSize:"10px",
        width:"100%",
        border:"1px solid #31B665",
        borderRadius:"20px",
        height:"35px",
        
      },
      '& .MuiLoadingButton-root:hover':{
        border:"1px solid #31B665",
      },
      "@media(max-width:600px)":{
        '& .MuiLoadingButton-root':{
          width: "131px",
          height: "30px",
          fontSize:" 7px",
          padding: "9px"


        }
      },
     '& .MuiLoadingButton-outlined':{
      outlined:"#31B665"
     }
    },
      signupTextFieldWidth: {
    "&.MuiTextField-root": {
      width: "50%",
      marginTop: "15px"
    },
    "@media(max-width:700px)": {
      "&.MuiTextField-root": {
        width: "100%",

      },
    },
    "& .MuiOutlinedInput-root": {
      " &.Mui-focused fieldset": {
        borderColor: "#31B665",
      },
      '&:hover fieldset': {
        borderColor: '#31B665', // - Set the Input border when parent has :hover
      },
    }
  }, 
   RoleAndPermissionSearchBarTextfield: {
    "&.MuiTextField-root":{
      width:"75%"
    },
    "@media(max-width:500px)":{
      "&.MuiTextField-root":{
        width:"100%"
      },
    },
    "&.MuiTextField-root fieldset": {
      borderRadius:"25px",
    },
  
    "& .MuiOutlinedInput-root": {
      " &.Mui-focused fieldset": {
        borderColor: "#31B665",
      },
      '&:hover fieldset': {
        borderColor: '#31B665', // - Set the Input border when parent has :hover
      borderRadius:"25px"

      },
    }
  },
  roleDetailsTextFieldStyle: {
    "& .MuiOutlinedInput-root": {
      " &.Mui-focused fieldset": {
        borderColor: "#31B665",
      },
      '&:hover fieldset': {
        borderColor: '#31B665', // - Set the Input border when parent has :hover
      },
    }
  }, 
userEditProfileDialog: {
  "& .MuiDialog-container": {
    "& .MuiPaper-root": {
      minWidth: "42%",
      padding:"50px",
      height: "auto",  // Set your width here
      borderRadius: "20px",
      background: "#FFFFFF",
      "@media(max-width:992px)": {
        minWidth: "60%",
        padding:"20px",
        },
      "@media(max-width:600px)": {
      minWidth: "90%",
      padding:"20px",
      }
    },

  },

},
UserEditButton:{
  '& .MuiLoadingButton-root':{
      color:'#595959',
      marginTop:"10px",
      fontSize:"15px",
      textTransform:"none",
    },
    '& .MuiLoadingButton-root:hover':{
      color:'#595959',
    },

   '& .MuiLoadingButton-outlined':{
    outlined:"#31B665"
   }
 

  },
  userEdit_loadingBtn: {
    "& .MuiButton-text": {
      fontSize: ".5rem",
    },
    "& .MuiLoadingButton-root": {
      width: "100%",
      height: "50px",
      borderRadius: "5px",
      backgroundColor: "#FFFFFF",
      color: "#707070",
      textTransform: "none",
      border: "1px solid #31B665",
      fontWeight: "700",
      fontSize: "14px"
    },
    "& .MuiButtonBase-root:hover": {
      color: "#FFFFFF",
      backgroundColor: "#31B665",
      border: "1px solid #31B665"
    },
  },

}
)
export default useStyles