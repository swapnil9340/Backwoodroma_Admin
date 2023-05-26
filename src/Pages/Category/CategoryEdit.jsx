import React, { useContext  , useRef} from 'react';
import Button from '@mui/material/Button';
import axios from "axios"
import Cookies from 'universal-cookie';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { useSnackbar } from 'notistack';
import Createcontext from "../../Hooks/Context/Context"
import { styled } from '@mui/material/styles';
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


}));

export default function CategEditbox(props) {
  
    const inputRef = useRef(null);
    const [image, SetImage] = React.useState('');
    const { dispatch } = useContext(Createcontext)
    const { enqueueSnackbar } = useSnackbar();
    const cookies = new Cookies();
    const token_data = cookies.get('Token_access')
    const [open, setOpen] = React.useState(false);
    const [error, set] = React.useState('')
    const [massage, setmassage] = React.useState()
    const [data, setdata] = React.useState({
        id: props.data.id,
        Category: props.data.name,
        Status: props.data.Status,
        categoryImages:props.data.categoryImages


    });

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
        setmassage("")
        set('')

    };
    const handlechanges = (event) => {

        
        const value = event.target.value;
        setdata({
            ...data,
            [event.target.name]: value
        });

    }



    function SubmitEditData() {
        // const form = {
        //     "name": data.Category,
        //     "Status": data.Status
        // }
        const formdata = new FormData();
        formdata.append("name", data.Category.toUpperCase());
        formdata.append("Status",data.Status);
         image ? formdata.append('categoryImages',image)  :  data.categoryImages ==='' &&  formdata.append('categoryImages',data.categoryImages)


        axios.post(`http://backend.sweede.net/AdminPanel/update-Category/${data.id}`, formdata, {

            headers: {
                'Authorization': `Bearer ${token_data}`
            }

        }).then(response => {
            if (response) {
                dispatch({ type: 'api', api: true })
                enqueueSnackbar('Edit Category success !', { variant: 'success' });
                setOpen(false);
            }
        }).catch(
            function (error) {
                setmassage(error.response.data.name)

                set("red")

            }
        )
    }


    return (
        <div>
            <Button color="success" onClick={handleClickOpen}>
                Edit
            </Button>
            <BootstrapDialog
                onClose={handleClose}
                aria-labelledby="customized-dialog-title"
                open={open}
                sx={{
                  
                    "& .MuiDialog-container": {
                        "& .MuiPaper-root": {
                            width: {
                                xs: "60%",
                                sm: "60%",
                                md: "50%",
                                lg: "40%",
                                xl: "40%"

                            },
                            height: {
                                xs: "55%",
                                sm: "55%",
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
                <DialogContent>
                    <div className='container-fluid '>
                        <div className='row '>

                            <div className='col-12   ' style={{marginTop:"6%"}} >

                                <div className='col-12 Add_Category center'>
                                    <div className="col "> <h2> Edit Category
                                    </h2>
                                    </div>
                                </div>
                                <div className='col-10 top label  con'>
                                    <div className='col'>

                                        <label className='label'>
                                            <span className='required'>*</span>
                                            Name:
                                        </label>
                                    </div>
                                    <div className='col'>
                                        <TextField placeholder='Add Category' id="outlined-basic" variant="outlined" value={data.Category.toUpperCase()}
                                            style={{ minWidth: "11vw" }}
                                            label={massage}
                                            InputProps={{ startAdornment: <InputAdornment position="start"> </InputAdornment>, style: { fontSize: 14 } }}
                                            onChange={handlechanges} name="Category"
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
                                            image ? <> <img src={URL.createObjectURL(image)} alt="" style={{ width: "120px", height: "110px" }} />
                                                <Button  onClick={resetFileInput} color='success' >Cancel </Button></>
                                                :
                                                <>
                                                    <img src={"http://backend.sweede.net/" + data.categoryImages} alt="" style={{ width: "120px", height: "110px" }} />
                                                    <Button  name="categoryImages" value='' color='success'onClick={handlechanges} >Cancel </Button>
                                                </>
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
                                        <Select name='Status' value={data.Status} onChange={handlechanges} displayEmpty inputProps={{ 'aria-label': 'Without label', }}  style={{minWidth: "40%", height: "5vh", fontSize: 15, }} >
                                            <MenuItem value={"Active"} style={{ fontSize: 15 }}>Active</MenuItem>
                                            <MenuItem value={"Hide"} style={{ fontSize: 15 }}>  Hide</MenuItem>
                                        </Select>
                                    </div>
                                </div>
                                <div className='col-12 center top' >
                                    <button className='btn Sub_button' onClick={SubmitEditData} style={{ fontSize: 15 }}>
                                        Save Changes
                                    </button>
                                </div>



                            </div>




                        </div>

                    </div>
                </DialogContent>
                <DialogActions>
                    <Button color="success" onClick={handleClose}>Exit
                    </Button>
                </DialogActions>

            </BootstrapDialog>
        </div>
    );
}