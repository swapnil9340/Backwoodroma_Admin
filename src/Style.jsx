import { makeStyles } from '@mui/styles';
const useStyles = makeStyles({
    signupMuiPhone: {
        "&.MuiTextField-root": {
          width:"50%",
          marginTop:"15px"

        },
        "@media(max-width:700px)":{
          "&.MuiTextField-root":{
            width:"100%",
           
          },
        }
    },
    signupNameTextFieldWidth:{
    "&.MuiTextField-root":{
      width:"42%",
     
    },
   
    "@media(max-width:700px)":{
      "&.MuiTextField-root":{
        width:"100%",
       
      },
    }
    },
    signupTextFieldWidth:{
      "&.MuiTextField-root":{
        width:"50%",
      marginTop:"15px"
      },
      "@media(max-width:700px)":{
        "&.MuiTextField-root":{
          width:"100%",
         
        },
      }
      },
    signuproleSelectDropdown:{
      "&.MuiFormControl-root":{
        width:"42%"
      },
      "@media(max-width:700px)":{
        "&.MuiFormControl-root":{
          width:"100%"
        },
      }
 

    },
    signupStatusSelectDropdown:{
      "&.MuiFormControl-root":{
        width:"50%"
      },
      "@media(max-width:700px)":{
        "&.MuiFormControl-root":{
          width:"100%"
        },
      }
 

    },
    SignuploadingBtnTextAndBack: {
      "& .MuiButton-text": {
        fontSize: ".5rem",
      },
      "& .MuiLoadingButton-root": {
        fontSize:"14px",
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
})
export default useStyles