import React, { useContext } from 'react';
import Button from '@mui/material/Button';
import axios from "axios"
import Cookies from 'universal-cookie';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import TextField from '@mui/material/TextField';
import { useSnackbar } from 'notistack';
import Createcontext from "../../../Hooks/Context/Context"
import InputAdornment from '@mui/material/InputAdornment';
import { styled } from '@mui/material/styles';
import { FaEdit } from "react-icons/fa";
import useStyles from '../../../Style';

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
export default function NewsCategoryEditbox(props) {
    const classes = useStyles()
    const { state ,dispatch } = useContext(Createcontext)
    const { enqueueSnackbar } = useSnackbar();
    const cookies = new Cookies();
    const token_data = cookies.get('Token_access')
    const [open, setOpen] = React.useState(false);
    const [error, seterror] = React.useState()
    const [massage, setmassage] = React.useState()

    const [data, setdata] = React.useState({
        id: props?.data?.id,
        Category: props?.data?.name,
    });


    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        setmassage("")
        seterror("")
    };
    const handlechanges = (event) => {
        const value = event.target.value;
        setdata({
            ...data,
            [event.target.name]: value
        });
        setmassage("")
         seterror("")

    }

   

    function SubmitEditData() {
        const form = {
            "name": data.Category.toUpperCase(),
        }
        axios.post(`https://api.cannabaze.com/AdminPanel/update-NewsCategory/${data.id}`, form, {

            headers: {
                'Authorization': `Bearer ${token_data}`
            }

        }).then(response => {
            enqueueSnackbar('Edit News Category success !', { variant: 'success' });
            setOpen(false);
            dispatch({ type: 'api', api: !state.api })
        }).catch(
            function (error) {
                setmassage(error.response.data.name)
                seterror("red")

            }
        )
    }


    return (
        <div>
            <span  onClick={handleClickOpen}>
              <FaEdit size={16}/>
            </span>
            <BootstrapDialog
                onClose={handleClose}
                aria-labelledby="Customizeed-dialog-title"
                open={open}
                sx={{
                    "& .MuiDialog-container": {
                        "& .MuiPaper-root": {
                            width: {
                                xs: "70%",
                                sm: "70%",
                                md: "400px",
                            

                            },
                         
                            maxWidth: "none", 
                            borderRadius: "15px",
                            overflowX: "hidden",
                            border: "1px solid #31B665"
                        },
                    },
                }}
            >
                <DialogContent>
                    <div className='container-fluid '>
                        <div className='row'>
                            <div className='col-12'  >
                                <div className='col-12 my-4 center'>
                                     <h2> Edit News Category</h2>
                                </div>
                                <div className='col-10 mx-auto text-start'>
                                        <label> Name:  <span className=' text-danger'>*</span></label>
                                        <TextField placeholder='Add Category' fullWidth id="outlined-basic" variant="outlined" value={data?.Category?.toUpperCase()}
                                            onChange={handlechanges} name="Category" InputProps={{ startAdornment: <InputAdornment position="start"> </InputAdornment>, style: { fontSize: 14 } }}
                                            label={massage} className={classes.textFieldFocusBorderColor}
                                        />
                                </div>
                                <div className='col-12 text-center mt-4'>
                                    <button className='topbutton' onClick={SubmitEditData} style={{ fontSize: 15 }}>
                                        Save Changes
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </DialogContent>
                <DialogActions>
                    <Button color="success" onClick={()=>{props?.seteditopen()}}>Exit</Button>
                </DialogActions>
           
            </BootstrapDialog>
        </div>
    );
}