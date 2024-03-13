import React, { useRef, useContext } from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import { LuUpload } from "react-icons/lu";
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Cookies from 'universal-cookie';
import Axios from "axios"
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { EditorState, ContentState } from 'draft-js';
import { convertToHTML } from 'draft-convert';
import htmlToDraft from 'html-to-draftjs';
import Createcontext from "../../Hooks/Context/Context"
import { FaEdit } from "react-icons/fa";
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



const getInitialState = (defaultValue) => {
    if (defaultValue) {
        const blocksFromHtml = htmlToDraft(defaultValue);
        const { contentBlocks, entityMap } = blocksFromHtml;
        const contentState = ContentState.createFromBlockArray(contentBlocks, entityMap);
        return EditorState.createWithContent(contentState);
    } else {
        return EditorState.createEmpty();
    }
};


export default function BrandEdit(props) {
    const defaultValue = props.data.Brand_description
    const { dispatch } = useContext(Createcontext)
    const inputRef = useRef(null);
    const [editorState, setEditorState] = React.useState(getInitialState(defaultValue));
    const [convertedContent, setConvertedContent] = React.useState(null);
    const [open, setOpen] = React.useState(false);
    const [image, SetImage] = React.useState('');
    const classes = useStyles()
    const [Brand, setBrand] = React.useState({
        Link: props.data.Link,
        Status: props.data.Status,
        name: props.data.name,
        Brand_Logo: props.data.Brand_Logo
    });
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

    };




    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    const resetFileInput = () => {
        // resetting the input value
        inputRef.current.value = null;
        SetImage('')
    };
    const formdata = new FormData();

    image ? formdata.append('Brand_Logo', image) : Brand.Brand_Logo === "" && formdata.append('Brand_Logo', Brand.Brand_Logo)



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
            `https://api.cannabaze.com/AdminPanel/update-Brand/${props.data.id}`,
            formdata,
            config
        ).then(() => {
            setOpen(false);

            dispatch({ type: 'api', api: true })
        })
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
                                sm: "100%",
                                md: "100%",
                                lg: "70%",
                                xl: "70%"

                            },
                            height: {
                                xs: "75%",
                                sm: "75%",
                                md: "75%",
                                lg: "100%",
                                xl: "100%"
                            },
                            maxWidth: "none",  // Set your width here
                            border: "1px solid #31B665",
                            borderRadius: "15px",

                        },
                    },
                }}
            >
                <BootstrapDialogTitle id="Customizeed-dialog-title" onClose={handleClose}>
                    Modal title
                </BootstrapDialogTitle>
                <DialogContent dividers>
                    <div className='container-fluid '>
                        <div className='row'>

                            <div className='col-12' >

                                <div className='col-12 Add_State  center'>
                                    <h2 className='popupTitle'> Edit Brand</h2>
                                   
                                </div>

                                <div className='addSubcategoryForm'>

                                <div className='inputFeildasf  '>
                                
                                        <label className='label'>
                                            Brand Name:
                                        </label>
                                 
                                        <TextField type="text" placeholder='Add Brand Name' id="outlined-basic" variant="outlined" name='name' value={Brand.name} className={classes.popuptextfeild}
                                            onChange={handleChange} />
                                 
                                </div>

                                <div className='inputFeildasf'>
                                
                                        <label className='label'>
                                            Brand Link:
                                        </label>
                                  
                                        <TextField type="text" placeholder='Edit Link' id="outlined-basic" variant="outlined" name='Link' value={Brand.Link} className={classes.popuptextfeild}
                                            onChange={handleChange} />

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
                                            <MenuItem value="" style={{ fontSize: 15 }}>
                                                <em>Select option</em>
                                            </MenuItem>
                                            <MenuItem value={"Active"} style={{ fontSize: 15 }}>Active</MenuItem>
                                            <MenuItem value={"Hide"} style={{ fontSize: 15 }}>Hide</MenuItem>

                                        </Select>
                                   

                                </div>

                                <div className='inputFeildasf'>
                                  
                                        <label className='label'>
                                            Brand Logo:
                                        </label>
                                   
                                        <input type="file" ref={inputRef} onChange={handleimage} id="formFile" name='formFile' variant="outlined" className='d-none' />
                                   
                                        <label className='Imagelabel' htmlFor='formFile'  onDragOver={handleDragOver} onDrop={handleDrop}>
                                        <LuUpload  size={24} color='#31B655'/> Drop files here or click to upload
                                     </label>
                                </div>
                                <div className='col  brand_edit_img'>
                                    {
                                        image ? <><img src={URL.createObjectURL(image)} alt="" style={{ width: "100px", height: "100px" }} />
                                            <Button onClick={resetFileInput} color='success' >Cancel </Button></>
                                            :
                                            <>
                                                <img src={Brand.Brand_Logo} alt="" style={{ width: "50px", height: "50px" }} />
                                                <Button name="Brand_Logo" value="" color='success' onClick={handleChange} >Cancel </Button>
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

                                        <Editor
                                            editorState={editorState}
                                            onEditorStateChange={setEditorState}
                                            toolbarClassName="toolbarClassName"
                                            wrapperClassName="wrapperClassName"
                                            editorClassName="editorClassName"
                                        />
                                    </div>
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