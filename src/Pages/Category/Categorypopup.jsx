import React, {useRef, useContext } from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Axios from "axios"
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import { useForm, Controller } from "react-hook-form";
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Cookies from 'universal-cookie';
import Createcontext from "../../Hooks/Context/Context"
import InputAdornment from '@mui/material/InputAdornment';
import { RxCross2 } from "react-icons/rx";
import useStyles from '../../Style'
import {Headerbutton} from '../../molecules/Button/index'

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
    },
    '& .MuiButtonBase-root': {
        fontSize: "1.5625rem",
        color: "#31B665"
    },


}));



export default function Categorypopup() {
    const classes = useStyles()
    const { register, handleSubmit, watch, errors,setError,clearErrors,getValues,setValue, control } =   useForm();
    const inputRef = useRef(null);
    const { dispatch } = useContext(Createcontext)
    const cookies = new Cookies();
    const token_data = cookies.get('Token_access')
    const [open, setOpen] = React.useState(false);
    const [Category, setCategory] = React.useState('Active');
    const [image, SetImage] = React.useState('');
    const [NameCategory, setNameCategory] = React.useState('');
    const [error, seterror] = React.useState()
    const [massage, setmassage] = React.useState()
    const [loadingbtn, Setloadingbtn] = React.useState(false);
    const handleChange = (event) => {
        setCategory(event.target.value);
    };
    const handleName = (event) => {
        setNameCategory(event.target.value.toUpperCase());
        setmassage("")
    };

    const handleimage = (event) => {
        SetImage(event.target.files[0])
    };
    const resetFileInput = () => {
        // resetting the input value
        inputRef.current.value = null;
        SetImage(null)
      };
    
    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
        seterror("")
        setmassage("")

    };



    const handlechanges = () => {
        const formdata = new FormData();
        formdata.append( "name", NameCategory);
        formdata.append("Status", Category);
        formdata.append('categoryImages',image );
        const config = {
            headers: { Authorization: `Bearer ${token_data}` }
        };

        Setloadingbtn(true)
        Axios.post(
            'https://api.cannabaze.com/AdminPanel/Add-Category/',
            formdata,
            config
        ).then(() => {
            setOpen(false);
            setNameCategory("");
            setCategory("Active");
            dispatch({ type: 'api', api: true })
            seterror("")
        Setloadingbtn(false)

        }).catch(
            function (error) {
                setmassage(error.response.data.name)
                seterror("red")
                Setloadingbtn(false)

            }
        )

    };

    return (
        <div>
           
            <Headerbutton onClick={handleClickOpen}>+ Add Category</Headerbutton>
            <BootstrapDialog
                onClose={handleClose}
                aria-labelledby="Customizeed-dialog-title"
                open={open}
                sx={{
                    "& .MuiDialog-container": {
                        "& .MuiPaper-root": {
                            // width: "40%",
                            width: {
                                xs: "80%",
                                sm: "60%",
                                md: "50%",
                                lg: "40%",
                                xl: "636px",

                            },
                            height: {
                                xs: "80%",
                                sm: "50%",
                                md: "50%",
                                lg: "50%",
                                xl: "676px"
                            },
                            // overflow:"scroll",
                            maxWidth: "none",
                            borderRadius: "15px",
                            overflowX: "hidden",

                            border: "1px solid #31B665"
                            // Set your width here
                        },
                    },
                }}
            >
                <DialogContent dividers
                    sx={{
                        padding:'0 !important',
                       
                    }}
                >
                    <div className='categoryeditpopupcontainer ' >
                    <span onClick={handleClose} className='popupCloseBtn'><RxCross2 /></span>
                       
                        
                        <div className='row  w-100 h-100 '>

                            <div className='col-12' >
                              
                                   <h2 className='categorypopuptitle'> Add Category  </h2>
                                    .
                            
                                <div className='' >
                                  
                                 
                                    <div className=''>
                                        <div className='categoryeditpopupimageBox'>
                                        {
                                            image && <><img src={URL.createObjectURL(image)} alt="" style={{ width: "120px", height: "110px" }} />
                                          </>
                                            
                                        }
                                        </div>

                                    </div>
                                    <div className=''>
                                        
                                        <div className='col text-center'>
                                        <input  type="file" id="formFile" ref={inputRef} className='d-none' accept="image/*"  variant="outlined" style={{ Width: "10%", fontSize: 15 }}
                                            onChange={handleimage}
                                        />
                                          <label className='popupimagebutton' htmlFor='formFile'>
                                   
                                             Upload Image
                                            </label>
                                        </div>
                                    </div>
                                    <div className='categorypopuptextfrild  '>
                                      

                                            <TextField
                                                
                                                placeholder='Add Category' id="outlined-basic" variant="outlined" value={NameCategory || ""}
                                                onChange={handleName}
                                                label={massage}
                                                className={classes.categorypopuptext}

                                            />


                                    </div>
                                    <div className='categorypopuptextfrild  '>
                                       
                                        <div className='col ' >
                                            <Select value={Category} className={classes.categorypopupselect} onChange={handleChange} displayEmpty inputProps={{ 'aria-label': 'Without label', }}
                                                style={{ minWidth: "20%", height: "5vh", fontSize: 15, }}>

                                                <MenuItem value={"Active"} style={{ fontSize: 15, backgroundColor: "#A3A3A3" }}>Active</MenuItem>
                                                <MenuItem value={"Hide"} style={{ fontSize: 15 }}>  Hide</MenuItem>

                                            </Select>
                                        </div>
                                    </div>
                                    <div className='col center top' >
                                        <Headerbutton onClick={handlechanges}>
                                            
                                            {loadingbtn ? <div className="lds-ring"><div></div><div></div><div></div><div></div></div>: "Add Category"}
                                        </Headerbutton>
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>
                </DialogContent>
              
            </BootstrapDialog>

        </div>
    );
}