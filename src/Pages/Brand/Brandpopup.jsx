import React, { useRef, useContext } from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import { LuUpload } from "react-icons/lu";
import MenuItem from '@mui/material/MenuItem';
import Cookies from 'universal-cookie';
import Axios from "axios"
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { EditorState } from 'draft-js';
import { convertToHTML } from 'draft-convert';
import InputAdornment from '@mui/material/InputAdornment';
import Createcontext from "../../Hooks/Context/Context"
import Box from '@mui/material/Box';
import useStyles from '../../Style';

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
export default function Brandpopup() {
    const { dispatch } = useContext(Createcontext)
    const [editorState, setEditorState] = React.useState(() => EditorState.createEmpty());
    const inputRef = useRef(null);
    const [convertedContent, setConvertedContent] = React.useState(null);
    const [open, setOpen] = React.useState(false);
    const classes = useStyles()
    const [image, SetImage] = React.useState('');
    const [Brand, setBrand] = React.useState({
        Link: "",
        Status: "Active",
        name: ""
    });
    const [error, seterror] = React.useState({
        name: "",


    })
    const [massage, setmassage] = React.useState({
        name: "",

    })
    React.useEffect(() => {
        let html = convertToHTML(editorState.getCurrentContent());
        setConvertedContent(html);
    }, [editorState]);

    const handleimage = (event) => {
        SetImage(event.target.files[0])
    };
    const handleChange = (event) => {
        const value = event.target.value;
        setBrand({
            ...Brand,
            [event.target.name]: value
        });
        setmassage("")
        seterror("")
    };
    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
        SetImage('')
        setBrand(Brand => ({ ...Brand, name: "" }))
        setmassage("")
        seterror("")
    };

    const resetFileInput = () => {
        // resetting the input value
        inputRef.current.value = null;
        SetImage(null)
    };
    const formdata = new FormData();
    formdata.append('Brand_Logo', image);
    formdata.append('Brand_description', convertedContent);
    formdata.append('Link', Brand.Link);
    formdata.append('Status', Brand.Status);
    formdata.append('name', Brand.name);

    const Submit = () => {
        const cookies = new Cookies();
        const token_data = cookies.get('Token_access')

        const config = {
            headers: { Authorization: `Bearer ${token_data}` }
        };
        Axios.post(
            'https://api.cannabaze.com/AdminPanel/Add-Brand/',
            formdata,
            config
        ).then(() => {
            setOpen(false);
            dispatch({ type: 'api', api: true })
            setBrand(Brand => ({ ...Brand, name: "", Link: "" }))

        })
            .catch(
                function (error) {
                    if (error.response.data.name) {

                        setmassage({ name: error.response.data.name })
                        seterror({ name: "red" })
                    }
                    else {

                        setmassage({ name: error.response.data.name[0] })
                        seterror({ name: "red" })
                    }



                }
            )
    };
    const handleDragOver = (event) => {
        event.preventDefault()
      }
      
      // Function to handle image drop
      const handleDrop = (event) => {
        event.preventDefault()
        const file = event.dataTransfer.files[0]
        if (file) {
            SetImage(file)
        }
      }
    return (
        <div>
            <button className="topbutton" onClick={handleClickOpen}>
                + Add Brand
            </button>
            <BootstrapDialog
                onClose={handleClose}
                aria-labelledby="Customizeed-dialog-title"
                open={open}
                sx={{
                    "& .MuiDialog-container": {
                        "& .MuiPaper-root": {
                            // width: "90%",
                            // height: "100%",
                            width: {
                                xs: "100%",
                                sm: "100%",
                                md: "70%",
                                lg: "60%",
                                xl: "50%"

                            },
                          
                            maxWidth: "none",  // Set your width here
                            border: "1px solid #31B665",
                            borderRadius: "15px"
                        },
                    },
                }}  >
                <BootstrapDialogTitle id="Customizeed-dialog-title" onClose={handleClose}>
                    Modal title
                </BootstrapDialogTitle>
                <DialogContent dividers>
                    <div className='container-fluid '>
                        <div className='row '>

                            <div className='col-12    ' >

                                <div className='text-center'>
                                  <h2 className='popupTitle'> Brand  </h2>
                                </div>
                                <div className='addSubcategoryForm'>
                                <div className='inputFeildasf'>
                                 
                                        <label className='label'>
                                            Brand Name:
                                        </label>
                                 
                                        <TextField type="text" placeholder='Add Brand Name' id="outlined-basic" variant="outlined" name='name' value={Brand.name} style={{ minWidth: 190, fontSize: 15 }}
                                            onChange={handleChange}
                                            InputProps={{ startAdornment: <InputAdornment position="start"> </InputAdornment>, style: { fontSize: 14 } }}
                                            label={massage.name}
                                            className={classes.popuptextfeild} 
                                        />
                                  
                                </div>

                                <div className='inputFeildasf'>
                                   
                                        <label className='label'>
                                            Brand Link:
                                        </label>
                                   

                                        <TextField type="text" placeholder='Add LicenceNo' id="outlined-basic" variant="outlined" name='Link' value={Brand.Link}
                                            onChange={handleChange}
                                            InputProps={{ startAdornment: <InputAdornment position="start"> </InputAdornment>, style: { fontSize: 14 } }}
                                            className={classes.popuptextfeild} 
                                        />

                                </div>
                                <div className='inputFeildasf'>
                                   
                                   <label className='label'>
                                       Status:
                                   </label>
                             
                                   <Select
                                       name='Status'
                                       value={Brand.Status}
                                       onChange={handleChange}
                                       displayEmpty
                                       size='small'
                                       inputProps={{ 'aria-label': 'Without label' }}
                                       className={classes.popupselectFeild}
                                   >
                                       <MenuItem value={"Active"} style={{ fontSize: 15 }}>Active</MenuItem>
                                       <MenuItem value={"Hide"} style={{ fontSize: 15 }}>Hide</MenuItem>

                                   </Select>
                         

                                </div>
                                <div className='inputFeildasf'>
                                    
                                        <label className='label'>
                                            Brand Logo:
                                        </label>
                                   

                                        <input type="file" id='formFile' name='formFile' ref={inputRef} onChange={handleimage} variant="outlined" className='d-none'/>
                                        <label className='Imagelabel' htmlFor='formFile'  onDragOver=
                                    
                                    
                                    {handleDragOver} onDrop={handleDrop}>
                                        <LuUpload  size={24} color='#31B655'/> Drop files here or click to upload
                                     </label>
                                    {
                                        image && <>
                                            <img src={URL.createObjectURL(image)} alt="" style={{ width: "120px", height: "110px" }} />
                                            <Button color='success' onClick={resetFileInput}>Cancell </Button>
                                        </>
                                    }
                                </div>

                              
                                <div className='inputFeildasf'>
                                    <div className='col m-2'>
                                        <label className='label'>
                                            Brand Description:
                                        </label>
                                    </div>
                                    <div className='col'>
                                    <Box
                                         sx={{
                                            "& .rdw-editor-toolbar":{
                                                width:"100%"
                                            },
                                            ".rdw-editor-main":{
                                                background:"",
                                                border:"1px solid #c4c4c4",
                                                padding:"3px"
                                            }
                                        }}
                                         >
                                        <Editor
                                            editorState={editorState}
                                            onEditorStateChange={setEditorState}
                                            toolbarClassName="toolbarClassName"
                                            wrapperClassName="wrapperClassName"
                                            editorClassName="editorClassName"
                                        />
                                        </Box>
                                    </div>
                                </div>
                              
                                <div className='col-12 center top' >
                                    <button className='topbutton' autoFocus onClick={Submit} >
                                        Add Brand
                                    </button>
                                </div>
</div>
                            </div>

                        </div>

                    </div>
                </DialogContent>
                <DialogActions>
                    <Button autoFocus color='success' style={{ fontSize: 15 }} onClick={handleClose}>
                        Exit
                    </Button>
                </DialogActions>
            </BootstrapDialog>
        </div>
    );
}