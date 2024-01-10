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
      width:'100%',
      "& .MuiOutlinedInput-input": {
        backgroundColor:'White',
        padding:'8px 15px',
        fontSize:'16px',
      },
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
  orderEditListIcon:{
    fontSize:'18px !important',
    height:'25px !important',
    padding:'0 !important',
    verticalAlign: "start",
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
    textAlign:'center',
    '& .MuiLoadingButton-root':{
      color:'#FFFFFF',
      backgroundColor:"#31B665",
        margin:'0 auto',
        marginTop:"10px",
        fontSize:"15px",
        width:"49%",
        height:"30px",
        textTransform:"none",
       
      },
      '& .MuiLoadingButton-root:hover':{
        color:'#31B665',
       borderWidth:'1px',
       borderColor:'#31B665',
       border:'solid',
        marginTop:"10px",
        fontSize:"15px",
        backgroundColor:'#fff',
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
      backgroundColor: "#F7F7F7",
      color: "#707070",
      textTransform: "none",
      border: "1px solid #31B665",
      fontWeight: "700",
      fontSize: "14px"
    },
    "& .MuiButtonBase-root:hover": {
      color: "#31B665",
      backgroundColor: "#FFFFFF",
      border: "1px solid #31B665"
    },
  },
  userEditCancel_loadingBtn: {
    "& .MuiButton-text": {
      fontSize: ".5rem",
    },
    "& .MuiLoadingButton-root": {
      width: "100%",
      height: "50px",
      borderRadius: "5px",
      backgroundColor: "#F7F7F7",
      color: "#979797",
      textTransform: "none",
      border: "1px solid #F7F7F7",
      fontWeight: "700",
      fontSize: "14px"
    },
    "& .MuiButtonBase-root:hover": {
      color: "#979797",
      backgroundColor: "#FFFFFF",
      border: "1px solid #979797"
    },
  },
  promotionalCheckBoxFontSize:{
    '& .MuiFormControlLabel-label': { 
      fontSize: '20px',color:"#000000" ,
      "@media(max-width:600px)":{
      fontSize: '14px',

      }
    }
  },
  muiPromotioCheckBox:{
    "& .MuiSvgIcon-root": {
      fill: "#31B665",
      display:"flex",
      fontSize:"25px"
    },
   },
  PromotionalBtn:{
    '& .MuiLoadingButton-root':{
      color:'#31B665',
      marginTop:"10px",
      fontSize:"14px",
      width:"40%",
      border:"1px solid #31B665",
      borderRadius:"8px",
      height:"35px",
      textTransform:"none"
    },
    '& .MuiLoadingButton-root:hover':{
      border:"1px solid #31B665",
      color:"#FFFFFF",
      backgroundColor:"#31B665"
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
  model_content_banner:{
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: "auto",
    backgroundColor: '#fff',
    borderRadius: '8px',
    boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px',
    height:'90vh',
    padding:'10px',
    "@media(max-width:600px)":{
      width: "90%",
    },
  },
  modelImagedestop:{
    width: "400px",
    height: "100px",
    borderRadius: "1px",
    "@media(max-width:600px)":{
      width: "90%",
    },
  },
  modelImagemobile:{
    width: "200px",
    height: "100px",
    borderRadius: "1px",
   
  },
  bannerlisttable:{
    height:500,
    width: '100%',
    "& .MuiDataGrid-columnHeaders": {
        background: "#E1FFED",
        fontSize:'18px',
    },
    '&  .MuiDataGrid-columnSeparator--sideRight': {
        display: 'none',
    },
    '&.MuiDataGrid-root .MuiDataGrid-cell:focus': {
        outline: 'none',
    },
    '& .MuiDataGrid-row': {
        fontSize:'14px',
    },
    '& .MuiDataGrid-row:hover': {
        backgroundColor: '#F0F0F0',
    },
    '@media(maxWidth: 568px)' : {
        "& .MuiDataGrid-columnHeaders": {
            background: "#E1FFED",
            fontSize:'14px',
        }, 
    }
  },
  bannerSelector:{
    
      backgroundColor:'#31B655',
      width:'200px',
    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
        borderColor: '#31B655',
    },
    "& .MuiSelect-select":{
      fontSize:'16px',
      color:'#fff',
      padding: "12px 15x",
      fontWeight:'600',
    },
    '.MuiSvgIcon-root': {
        color: '#fff'
    },
    '&:before': {
        borderBottom: `1px solid #31B655`
    },
    '&:hover': {
        ':before': {
            borderBottom: `1px solid #31B655`
        }
    },
    '& .MuiMenuItem-root': {
        backgroundColor: 'dark.primary'
    },
    '& .MuiMenu-paper': {
        backgroundColor: 'dark.primary'
    },
    '@media(maxWidth: 568px)' : {
        width:'auto',
       },
       "& .MuiSelect-select":{
        fontSize:'12px',
        color:'#fff',
        padding: "8px 15px "
      },
  },
  promotionalListBtnss:{
    '& .MuiLoadingButton-root':{
      color:'#FFFFFF',
      fontSize:"14px",
      width:"26%",
      border:"1px solid #404040",
      backgroundColor:"#404040",
      borderRadius:"8px",
      height:"35px",
      textTransform:"none",
      display: "flex",
      justifyContent: "flex-start"
    },
    '& .MuiLoadingButton-root:hover':{
      border:"1px solid #404040",
      color:"#FFFFFF",
      backgroundColor:"#404040"
    },
    "@media(max-width:600px)":{
      '& .MuiLoadingButton-root':{
        width: "131px",
        height: "30px",
        fontSize:" 7px",
        padding: "9px"


      }
    },
    "@media(max-width:480px)":{
      '& .MuiLoadingButton-root':{
        width: "auto",
        height: "auto",
        fontSize:" 12px",
        padding: "6px 15px"
      }
    },
  },
  sidebarIcon:{
    height : '40px !important', 
    width : '40px !important', 
    display:'flex',
    fontSize:'2.4rem !important',
    alignItems:'center',
    justifyContent:'center',
    '& .MuiIcon-root':{
      height : '40px !important', 
      width : '40px !important', 
      display:'flex',
      
    }
  },
}
)
export default useStyles