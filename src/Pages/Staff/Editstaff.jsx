import React, { useState , useContext, useEffect } from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import MuiPhoneNumber from "material-ui-phone-number";
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

import Successfullypopup from '../../Components/Component/Successfullypopup'
import Unsuccesspopup from '../../Components/Component/Unsuccesspopup'
import Cookies from 'universal-cookie';
import Axios from "axios"
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { EditorState, ContentState } from 'draft-js';
import axios from 'axios'
import htmlToDraft from 'html-to-draftjs';
import Createcontext from "../../Hooks/Context/Context"
import { FaEdit } from "react-icons/fa";
import useStyles from '../../Style';
import { fi } from 'date-fns/locale';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
        padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
        padding: theme.spacing(1),
    },
    '& .MuiOutlinedInput-root': {
        '&.Mui-focused fieldset': {
            borderWidth: "1px",
            borderColor: 'black',
        },
        '& .MuiButtonBase-root': {
            fontSize: "1.5625rem",
            color: "#31B665"
        },
    },
}));
function BootstrapDialogTitle(props) {
}
export default function Editstaff(props) {
    const cookies = new Cookies();
    const token_data = cookies.get("Token_access");
    const { dispatch } = useContext(Createcontext)
    const [open, setOpen] = React.useState(false);
    const [roleoptions, Setroleoptions] = React.useState([]);
    const [sucsesopen , setsucsesopen] = useState(false)
    const [unsucsesopen , setunsucsesopen] = useState(false)
    const classes = useStyles()
    const [Brand, setBrand] = React.useState({
        Roles: props.data.Roles ,
        name:  props.data.Name,
        email: props.data.Email,
        Phone: props.data.MobileNo
    });
    const handleChange = (event) => {
        const value = event.target.value;
        setBrand({
            ...Brand,
            [event.target.name]: value
        });

    };
    React.useEffect(() => {
        axios.get("https://api.cannabaze.com/AdminPanel/Get-RolesAndPermission/", {
            headers: {
              Authorization: `Bearer ${token_data}`,
            },
          })
          .then((res) => {
            Setroleoptions(res?.data);
            let dataas = res?.data.filter((item)=>{
              
               if(Boolean(props?.data?.Roles.includes(item.RoleTitle))){
                 return item.id
               }
            }).map((item)=>item.id)  
           
            setBrand({...Brand , Roles:dataas})
          });
      }, []);

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    const Submit = () => {
        const config = {
            headers: { Authorization: `Bearer ${token_data}` }
        };
        Axios.post(
            `https://api.cannabaze.com/AdminPanel/UpdateAdminProfile/${props.data.ID}`,
            Brand,
            config
        ).then(() => {
           
            setsucsesopen(true)
            dispatch({ type: 'api', api: true })
        }).catch((error)=>{
            setunsucsesopen(true)
        })
        
    };
   useEffect(()=>{
    console.log(sucsesopen , unsucsesopen )
    if( !sucsesopen ){
        setOpen(false)
    }
   },[sucsesopen , unsucsesopen])
    return (
        <div>
           
                <FaEdit  onClick={handleClickOpen} size={20} color='#31B655'/>
        
            <BootstrapDialog
                onClose={handleClose}
                aria-labelledby="Customizeed-dialog-title"
                open={open}
                sx={{
                    "& .MuiDialog-container": {
                        "& .MuiPaper-root": {                        
                            width: {
                                xs: "100%",
                                sm: "80%",
                                md: "75%",
                                lg: "60%",
                                xl: "50%"

                            },
                          
                            maxWidth: "none",  // Set your width here
                            border: "1px solid #31B665",
                            borderRadius: "15px",

                        },
                    },
                }}
            >
                  { sucsesopen && <Successfullypopup  setsucsesopen={setsucsesopen} link={'/allstaff'} popupset={setOpen}/>}
                { unsucsesopen && <Unsuccesspopup setsucsesopen={setunsucsesopen} link={'/allstaff'} popupset={setOpen}/>}
                <BootstrapDialogTitle id="Customizeed-dialog-title" onClose={handleClose}>
                    Modal title
                </BootstrapDialogTitle>
                <DialogContent dividers>
                    <div className='container-fluid '>
                        <div className='row'>

                            <div className='col-12' >

                                <div className='col-12 Add_State  center'>
                                    <h2 className='popupTitle'> Edit staff</h2>
                                   
                                </div>

                                <div className='addSubcategoryForm'>

                                <div className='inputFeildasf  '>
                                
                                        <label className='label'>
                                             Roles:
                                        </label>
                                 
                                        {/* <TextField type="text" placeholder='Role Name' id="Roles" variant="outlined" name='Roles' value={Brand.Roles} className={classes.popuptextfeild}
                                            onChange={handleChange} /> */}

                                            <Select
                                                className={classes.popupselectFeild}
                                                multiple
                                                id="Roles" name='Roles'
                                                value={Brand.Roles} 
                                                onChange={(e)=>{setBrand({...Brand  ,Roles: e.target.value })}}
                                            >
                                                {roleoptions.map((item, index) => {
                                                return (
                                                    <MenuItem  key={index} className={classes.selectrolesoptions} value={item.id}>{item.RoleTitle} </MenuItem>
                                                );
                                                })}
                                            </Select>
                                 
                                </div>
                                <div className='inputFeildasf  '>
                                
                                <label className='label'>
                                     Name:
                                </label>
                         
                                <TextField type="text" placeholder='User Name' id="name" variant="outlined" name='name' value={Brand.name} className={classes.popuptextfeild}
                                    onChange={handleChange} />
                         
                                </div>
                                <div className='inputFeildasf  '>
                                        
                                        <label className='label'>
                                            Email:
                                        </label>
                                
                                        <TextField type="text" placeholder='Email' id="email" variant="outlined" name='email' value={Brand.email} className={classes.popuptextfeild}
                                            onChange={handleChange} />
                                
                                </div>
                                <div className='inputFeildasf  '>
                                        
                                        <label className='label'>
                                        Phone Number:
                                        </label>
                                
                                        {/* <TextField type="text" placeholder='Phone Number' id="Phone" variant="outlined" name='Phone' value={Brand.Phone} className={classes.popuptextfeild}
                                            onChange={handleChange} /> */}
                                            <MuiPhoneNumber
                                        name={'Phone'}
                                        value={Brand.Phone}
                                        size="small"
                                        id="Phone"
                                        defaultCountry={"us"}
                                        style={{ width: "100%" }}
                                        margin="normal"
                                        onChange={(e)=>{setBrand({...Brand , Phone:e })}}
                                        />
                                                        
                                </div>
                               
                             
                           
                                <div className='col-12 center top' >
                                    <button className='topbutton' autoFocus onClick={Submit} >
                                        Save changes
                                    </button>
                                </div>
                              </div>
                            </div>

                        </div>

                    </div>
                </DialogContent>
                <DialogActions>
                    <Button autoFocus color='success' onClick={handleClose}>
                        Exit
                    </Button>
                </DialogActions>
            </BootstrapDialog>

              
        </div>
    );
}