import React, {useRef, useContext } from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Axios from "axios"
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Cookies from 'universal-cookie';
import Createcontext from "../../Hooks/Context/Context"
import InputAdornment from '@mui/material/InputAdornment';
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

      
        Axios.post(
            'http://52.3.255.128:8000/AdminPanel/Add-Category/',
            formdata,
            config
        ).then(() => {
            setOpen(false);
            setNameCategory("");
            setCategory("Active");
            dispatch({ type: 'api', api: true })
            seterror("")
        }).catch(
            function (error) {
                setmassage(error.response.data.name)
                seterror("red")

            }
        )

    };

    return (
        <div>
            <Button size="large" variant="outlined" onClick={handleClickOpen}>
                + Add Category
            </Button>
            <BootstrapDialog
                onClose={handleClose}
                aria-labelledby="customized-dialog-title"
                open={open}
                sx={{
                    "& .MuiDialog-container": {
                        "& .MuiPaper-root": {
                            // width: "40%",
                            width: {
                                xs: "60%",
                                sm: "60%",
                                md: "50%",
                                lg: "40%",
                                xl: "40%"

                            },
                            height: {
                                xs: "50%",
                                sm: "50%",
                                md: "50%",
                                lg: "50%",
                                xl: "60%"
                            },
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
                        "&.MuiDialogContent-root": {
                            overflowX: "hidden",
                            overflowY: "hidden",
                        }
                    }}
                >
                    <div className='container-fluid ' >
                        <div className='row'>

                            <div className='col-12' >
                                <div className='col-12 Add_Category center' style={{ marginTop: "6%" }}>
                                    <div className="col "> <h2> Add Category
                                    </h2>
                                    </div>
                                </div>
                                <div className='' style={{ marginTop: "6%" }}>
                                    <div className='col-10 top label  con'>
                                        <div className='col '>

                                            <label className='label'>
                                                <span className='required'>*</span>
                                                Name:
                                            </label>
                                        </div>
                                        <div className='col'>

                                            <TextField
                                                InputProps={{ startAdornment: <InputAdornment position="start"> </InputAdornment>, style: { fontSize: 14, height: 40 } }}
                                                placeholder='Add Category' id="outlined-basic" variant="outlined" value={NameCategory || ""}
                                                onChange={handleName}
                                                label={massage}
                                                sx={{
                                                    '& .MuiOutlinedInput-root': {
                                                        '& fieldset': {
                                                            borderColor: error,
                                                            height: 55,
                                                        },
                                                    },
                                                    "& label": {
                                                        fontSize: 13,
                                                        color: "red",
                                                        "&.Mui-focused": {
                                                            marginLeft: 0,
                                                            color: "red",
                                                        }
                                                    }
                                                }}

                                            />


                                        </div>
                                    </div>
                                    <div className='col-10 top label  con'>
                                        <div className='col'>

                                            <label className='label'>
                                                Image:
                                            </label>
                                        </div>
                                        <div className='col'>
                                        <input  type="file" id="formFile" ref={inputRef} accept="image/*"  variant="outlined" style={{ Width: "10%", fontSize: 15 }}
                                            onChange={handleimage}
                                        />
                                        </div>
                                    </div>
                                    <div className='col-10 top label  con center'>
                                        <div className='col'>
                                        {
                                            image && <><img src={URL.createObjectURL(image)} alt="" style={{ width: "120px", height: "110px" }} />
                                            <Button  onClick={resetFileInput}>Cancell </Button></>
                                            
                                        }
                                        </div>

                                    </div>
                                    <div className='col-10 top label  con'>
                                        <div className='col'>

                                            <label className='label'>
                                                Status:
                                            </label>
                                        </div>
                                        <div className='col ' >
                                            <Select value={Category} onChange={handleChange} displayEmpty inputProps={{ 'aria-label': 'Without label', }}
                                                style={{ minWidth: "20%", height: "5vh", fontSize: 15, }}>

                                                <MenuItem value={"Active"} style={{ fontSize: 15, backgroundColor: "#A3A3A3" }}>Active</MenuItem>
                                                <MenuItem value={"Hide"} style={{ fontSize: 15 }}>  Hide</MenuItem>

                                            </Select>
                                        </div>
                                    </div>
                                    <div className='col center top' >
                                        <button className='btn Sub_button' onClick={handlechanges}>
                                            Add Category
                                        </button>
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>
                </DialogContent>
                <DialogActions>
                    <Button autoFocus onClick={handleClose}>
                        Exit
                    </Button>
                </DialogActions>
            </BootstrapDialog>

        </div>
    );
}