import React, { useContext ,useRef} from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Cookies from 'universal-cookie';
import axios from "axios"
import Axios from "axios"
import Createcontext from "../../Hooks/Context/Context"
import InputAdornment from '@mui/material/InputAdornment';
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
    }
}));


export default function PopUp() {
    const inputRef = useRef(null);

    const { dispatch } = useContext(Createcontext)
    const [open, setOpen] = React.useState(false);
    const [image, SetImage] = React.useState();
    const [SubCategory, setSubCategory] = React.useState([]);
    const [Category, setCategory] = React.useState([]);
    const [Status, setStatus] = React.useState('Active');
    const [NameCategory, setNameCategory] = React.useState([]);
    const [error, seterror] = React.useState('')
    const [massage, setmassage] = React.useState()
    const handleimage = (event) => {
        SetImage(event.target.files[0])
    };
    const handleStatus = (event) => {
        setStatus(event.target.value);
    };
    const handleChange = (event) => {
       
        setCategory(event.target.value);


    };
    const resetFileInput = () => {
        // resetting the input value
        inputRef.current.value = null;
        SetImage(null)
      };
    const handleName = (event) => {
        setNameCategory(event.target.value.toUpperCase());
        setmassage("")
        seterror("")

    };

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
        setmassage("")
        seterror("")
    };

    React.useEffect(() => {
        const cookies = new Cookies();
        const token_data = cookies.get('Token_access')

        axios("https://api.cannabaze.com/AdminPanel/ActiveCategory/", {

            headers: {
                'Authorization': `Bearer ${token_data}`
            }

        }).then(response => {

            setSubCategory(response.data.data)
            setCategory(response.data.data[0].id)

        })
    }, [])



    const Submit = () => {
        const cookies = new Cookies();
        const token_data = cookies.get('Token_access')

        const config = {
            headers: { Authorization: `Bearer ${token_data}` }
        };
        const formdata = new FormData();
        formdata.append( "name", NameCategory);
        formdata.append("category_id", Category);
        formdata.append('Status',Status );
        formdata.append('SubCategoryImage',image );
 
        Axios.post(
            'https://api.cannabaze.com/AdminPanel/Add-SubCategory/',
            formdata,
            config
        ).then(() => {
            setOpen(false);
            dispatch({ type: 'api', api: true })
            setNameCategory('')
        }).catch(
            function (error) {
                setmassage(error.response.data.name)
                seterror("red")
                return Promise.reject(error)
            }
        )
    };
    return (
        <div>
          
            <Headerbutton  onClick={handleClickOpen}>+ Add Sub Category</Headerbutton>
            <BootstrapDialog
                onClose={handleClose}
                aria-labelledby="Customizeed-dialog-title"
                open={open}
                sx={{
                    "& .MuiDialog-container": {
                        "& .MuiPaper-root": {
                            // width: "50%",
                            // height: "65%",
                            width: {
                                xs: "80%",
                                sm: "70%",
                                md: "50%",
                                lg: "40%",
                                xl: "40%"

                            },
                            height: {
                                xs: "80%",
                                sm: "50%",
                                md: "50%",
                                lg: "50%",
                                xl: "60%"
                            },
                            maxWidth: "none",
                            borderRadius: "15px",
                            overflowX: "hidden",
                            border: "1px solid #31B665"
                      
                        },
                    },
                }}
            >

                <DialogContent sx={{
                    "&.MuiDialogContent-root": {
                        overflowX: "hidden",
                        overflowY: "scroll",
                    }
                }} dividers>
                    <div className='container-fluid '>
                        <div className='row '>

                            <div className='col-12    ' >

                                <div className='col-12 Add_Category center'  style={{marginTop:"5%"}}>
                                    <div className="col "> <h2> Add Sub Category</h2></div>

                                </div>
                                <div className='' style={{ marginTop: "5%" }}>
                                    <div className='col-10 top label  con  '>
                                        <div className='col'>
                                        


                                            <label className='label'>
                                                <span className='required'>*</span>
                                                Name:
                                            </label>
                                        </div>
                                        <div className='col'>
                                            <TextField InputProps={{ startAdornment: <InputAdornment position="start"> </InputAdornment>, style: { fontSize: 15 } }} placeholder='Add  Sub Category' id="outlined-basic" variant="outlined" value={NameCategory} style={{ minWidth: 150, fontSize: 15 }}
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
                                                        fontSize: 14,
                                                        // color: "red",
                                                        "&.Mui-focused": {
                                                            marginLeft: 0,
                                                            // color: "red",
                                                        }
                                                    }
                                                }}
                                            />
                                        </div>
                                    </div>
                                    <div className='col-10 top label  con '>
                                        <div className='col top'>

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
                                        <div className='col mt-4'>
                                        {
                                            image && <><img src={URL.createObjectURL(image)} alt="" style={{ width: "120px", height: "110px" }} />
                                            <Button  onClick={resetFileInput}>Cancell </Button></>
                                            
                                        }
                                        </div>

                                    </div>
                                    <div className='col-10 top label  con'>
                                        <div className='col'>
                                            {/* <div className='col-sm-4'> */}

                                            <label className='label'>
                                             Main Category:
                                            </label>
                                        </div>
                                        <div className='col'>
                                            <Select
                                                value={Category}
                                                onChange={handleChange}

                                                inputProps={{ 'aria-label': 'Without label' }} style={{ minWidth: 110, height: "5vh", fontSize: 15 }}>

                                                {
                                                    SubCategory.map((category) => {
                                                        return (
                                                            <MenuItem style={{ fontSize: 15 }} key={category.id} value={category.id}  >
                                                                {category.name}
                                                            </MenuItem>
                                                        )
                                                    })
                                                }
                                            </Select>
                                        </div>
                                    </div>
                                    <div className='col-10 top label  con'>
                                        <div className='col'>
                                            {/* <div className='col-sm-4'> */}

                                            <label className='label'>

                                                Status:
                                            </label>
                                        </div>
                                        <div className='col'>
                                            <Select
                                                value={Status}
                                                onChange={handleStatus}
                                                displayEmpty
                                                inputProps={{ 'aria-label': 'Without label' }} style={{ minWidth: 100, height: "5vh", fontSize: 15 }}
                                            >
                                                <MenuItem value="" style={{ fontSize: 15 }}>
                                                    <em>Select option</em>
                                                </MenuItem>
                                                <MenuItem value={"Active"} style={{ fontSize: 15 }}>Active</MenuItem>
                                                <MenuItem value={"Hide"} style={{ fontSize: 15 }}>Hide</MenuItem>

                                            </Select>
                                        </div>
                                    </div>
                                    <div className='col-12 center top' >
                                        <Headerbutton autoFocus onClick={Submit}>Save changes</Headerbutton>
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