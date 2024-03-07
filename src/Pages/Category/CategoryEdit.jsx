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
import { FaEdit } from "react-icons/fa";
import { MdOutlineEdit } from "react-icons/md";
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


}));

export default function CategEditbox(props) {
const classes = useStyles()
    const inputRef = useRef(null);
    const [image, SetImage] = React.useState('');
    const { dispatch } = useContext(Createcontext)
    const { enqueueSnackbar } = useSnackbar();
    const cookies = new Cookies();
    const token_data = cookies.get('Token_access')
    const [open, setOpen] = React.useState(false);
    const [loadingbtn, Setloadingbtn] = React.useState(false);
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

        function FirstLetterCaps(str){
            const text = str.toLowerCase()
             .split(' ')
             .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
             .join(' ');
             return text
        
         }
        const value = FirstLetterCaps(event.target.value);
     
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
         Setloadingbtn(true)

        axios.post(`https://api.cannabaze.com/AdminPanel/update-Category/${data.id}`, formdata, {

            headers: {
                'Authorization': `Bearer ${token_data}`
            }

        }).then(response => {
            if (response) {
                dispatch({ type: 'api', api: true })
                enqueueSnackbar('Edit Category success !', { variant: 'success' });
                setOpen(false);
            }
            Setloadingbtn(false)
        }).catch(
            function (error) {
                setmassage(error.response.data.name)
                Setloadingbtn(false)
                set("red")

            }
        )
    }


    return (
        <div>
            <span color="success" onClick={handleClickOpen}>
            <FaEdit size={22} color='#31B655'/>
            </span>
            <BootstrapDialog
                onClose={handleClose}
                aria-labelledby="Customizeed-dialog-title"
                open={open}
                sx={{
                  
                    "& .MuiDialog-container": {
                        "& .MuiPaper-root": {
                            width: {
                                xs: "60%",
                                sm: "60%",
                                md: "50%",
                                lg: "40%",
                            
                                xl: "636px",

                            },
                            height: {
                                xs: "55%",
                                sm: "55%",
                                md: "60%",
                             
                                xl: "676px"
                            },
                            maxWidth: "none",
                            borderRadius: "15px",
                            overflowX: "hidden",
                            border: "1px solid #31B665",
                            padding:'0'
                            // Set your width here
                        },
                    },
                    "& .MuiDialogContent-root":{
                        padding:'0 !important',
                    }
                }}
            >
                <DialogContent   sx={{padding:0}}>
                    <div className='categoryeditpopupcontainer'>
                      
                       <span onClick={handleClose} className='popupCloseBtn'><RxCross2 /></span>
                        <div className='row w-100 h-100 '>

                            <div className='col-12 text-center  '  >

                             
                                    <h2 className='categorypopuptitle'> <MdOutlineEdit />   Edit  </h2>
                                
                             
                               
                                <div className='  label'>
                                    <div className=' categoryeditpopupimageBox'>
                                    {
                                        image ? <> <img src={URL.createObjectURL(image)} alt="" style={{ width: "120px", height: "120px" }} />
                                            {/* <Button  onClick={resetFileInput} color='success' ><RxCross2 /> </Button> */}
                                            </>
                                            :
                                            <>
                                                <img src={ data.categoryImages} alt="" style={{ width: "120px", height: "120px" }} />
                                                {/* <Button  name="categoryImages" value='' color='success'onClick={handlechanges} ><RxCross2 /> </Button> */}
                                            </>
                                    }
                                    </div>

                                </div>
                                <div className='  label'>
                                        <div className='col top'>
                                        <input  type="file" id="formFile" name='formFile' ref={inputRef} accept="image/*" className='d-none'  variant="outlined" style=  {{    Width: "10%", fontSize: 15 }}
                                            onChange={handleimage}
                                        />
                                        <label className='popupimagebutton' htmlFor='formFile'>Upload Image </label>
                                           
                                        </div>
                                       
                                </div>
                                <div className=' categorypopuptextfrild'>
                                     <TextField placeholder='Category Name' id="outlined-basic" variant="outlined" value={data.Category}
                                            label={massage}
                                            // InputProps={{ startAdornment: <InputAdornment position="start"> </InputAdornment>, style: { fontSize: 14 } }}
                                            onChange={handlechanges} name="Category"
                                            className={classes.categorypopuptext}
                                        />
                                </div>
                                <div className='  categorypopuptextfrild '>
                                  
                                        {/* <label className=''> Status: </label> */}
                               
                                        <Select name='Status' value={data.Status} onChange={handlechanges} className={classes.categorypopupselect} displayEmpty inputProps={{ 'aria-label': 'Without label', }}>
                                            <MenuItem value={"Active"} style={{ fontSize: 15 }}>Active</MenuItem>
                                            <MenuItem value={"Hide"} style={{ fontSize: 15 }}>  Hide</MenuItem>
                                        </Select>
                               
                                </div>
                                <div className='center' >
                                    <Headerbutton  onClick={SubmitEditData}>
                                       {loadingbtn ? <div class="lds-ring"><div></div><div></div><div></div><div></div></div>: "Save"} 
                                    </Headerbutton>
                                </div>



                            </div>
                        </div>

                    </div>
                </DialogContent>
                {/* <DialogActions>
                    <Button color="success" onClick={handleClose}>Exit
                    </Button>
                </DialogActions> */}

            </BootstrapDialog>
        </div>
    );
}