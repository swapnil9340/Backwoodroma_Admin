import { makeStyles } from '@mui/styles';
const useStyles = makeStyles({
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
        
      },
     '& .MuiLoadingButton-outlined':{
      outlined:"#31B665"
     }
   
 
    }


}
)
export default useStyles