import React, { useRef, useContext } from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import {SectionCard} from '../../molecules/SectionCard/Index'
import { TextField } from "@material-ui/core";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Cookies from "universal-cookie";
import Axios from "axios";
import axios from "axios";
import { Editor } from "react-draft-wysiwyg";
import draftToHtml from "draftjs-to-html";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { EditorState } from "draft-js";
import { MdFileUpload } from "react-icons/md";
import InputAdornment from "@mui/material/InputAdornment";
import Createcontext from "../../Hooks/Context/Context";
import Box from "@mui/material/Box";
import { useForm } from "react-hook-form";
// import { Controller } from "react-hook-form";
import LoadingButton from "@mui/lab/LoadingButton";
const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
  "& .MuiOutlinedInput-root": {
    "&.Mui-focused fieldset": {
      borderWidth: "1px",
      borderColor: "black",
    },
    "& .MuiButtonBase-root": {
      fontSize: "1.5625rem",
      color: "#31B665",
    },
  },
}));

function BootstrapDialogTitle(props) {}

export default function Newspop() {
  const form = useForm({
    defaultValue: {
      Title: "",
      Meta_title: "",
    },
  });

  const { register, handleSubmit, formState, watch, reset } = form;
  const { errors } = formState;
  const { dispatch } = useContext(Createcontext);
  const inputRef = useRef(null);
  const [open, setOpen] = React.useState(false);
  const cookies = new Cookies();
  const token_data = cookies.get("Token_access");
  const [editorState, setEditorState] = React.useState(() =>
    EditorState.createEmpty()
  );
  const [convertedContent, setConvertedContent] = React.useState("");
  const [Category, SetCategory] = React.useState([]);
  const [SubCategory, SetSubCategory] = React.useState([]);
  const [Image, SetImage] = React.useState("");
  const [loading, Setloading] = React.useState(false);

  const [News, setNews] = React.useState({
    Title: "",
    Category_id: "",
    Link: "",
    Meta_Description: "",
    Meta_title: "",
    StrainType: "None",
    SubCategory_id: "",
    Url_slug: "",
    Alt_Text: "",
  });

  const [error, seterror] = React.useState({
    Title: "",
    Image: " ",
    Meta_Description: "",
    Url_slug: "",
    Meta_title: "",
    Alt_Text: "",
    Link: "",
  });
  const [massage, setmassage] = React.useState({
    Title: "",
    Image: "",
    Meta_Description: "",
    Url_slug: "",
    Meta_title: "",
    Alt_Text: "",
    Link: "",
  });
  const toolbar = {
    options: [
      "blockType",
      "inline",
      "list",
      // "textAlign",
      "link",
      // "embedded",
      "image",
    ],
    blockType: {
      inDropdown: true,
      options: ["H2", "H3", "H4", "Normal", "Blockquote"],
      className: undefined,
      component: undefined,
      dropdownClassName: undefined,
    },
    inline: {
      inDropdown: false,
      className: undefined,
      component: undefined,
      dropdownClassName: undefined,
      options: ["bold", "italic", "underline"],
    },
    link: {
      options: ["link", "unlink"],
      showOpenOptionOnHover: false,
    },
    list: {
      options: ["ordered", "unordered"],
    },
    image: {
      className: undefined,
      component: undefined,
      popupClassName: undefined,
      urlEnabled: true,
      uploadEnabled: true,
      alignmentEnabled: true,
      uploadCallback: undefined,
      previewImage: false,
      inputAccept:
        "application/pdf,text/plain,application/vnd.openxmlformatsofficedocument.wordprocessingml.document,application/msword,application/vnd.ms-excel",
      alt: { present: true, mandatory: true },
      defaultSize: {
        height: "100",
        width: "100",
      },
    },
  };

  const localization = {
    locale: "en-us",
    translations: {
      "generic.add": "Add",
      "generic.cancel": "Cancel",

      "components.controls.blocktype.normal": "Normal",
      "components.controls.blocktype.h2": "Heading 1",
      "components.controls.blocktype.h3": "Heading 2",
      "components.controls.blocktype.h4": "Heading 3",
      "components.controls.blocktype.blockquote": "Blockquote",

      "components.controls.embedded.embedded": "Embedded",
      "components.controls.embedded.embeddedlink": "Embedded Link",
      "components.controls.embedded.enterlink": "Enter link",

      "components.controls.link.linkTitle": "Link Title",
      "components.controls.link.linkTarget": "Link Target",
      "components.controls.link.linkTargetOption": "Open link in new window",
      "components.controls.link.link": "Link",
      "components.controls.link.unlink": "Unlink",

      "components.controls.image.image": "Image",
      "components.controls.image.fileUpload": "File Upload",
      "components.controls.image.byURL": "URL",
      "components.controls.image.dropFileText":
        "Drop the file or click to upload",
    },
  };
  const handleContentStateChange = (contentState) => {
    setConvertedContent(draftToHtml(contentState));
  };

  const handleEditorStateChange = (editorState) => {
    setEditorState(editorState);
  };

  // React.useEffect(() => {
  //     let html = convertToHTML(editorState.getCurrentContent());
  //     setConvertedContent(html);
  // }, [editorState]);

  const handleimage = (event) => {
    SetImage(event.target.files[0]);
    setmassage("");
    seterror({ Image: "white" });
  };
  const handleChange = (event) => {
    const value = event.target.value;
    setNews({
      ...News,
      [event.target.name]: value,
    });
    setmassage("");
    seterror("");
  };

  const handleClickOpen = () => {
    setOpen(true);
  };
  const resetFileInput = () => {
    // resetting the input value
    inputRef.current.value = null;
    SetImage(null);
  };

  const handleClose = () => {
    setOpen(false);
    setNews((Brand) => ({
      ...Brand,
      Title: "",
      Link: "",
      Meta_Description: "",
      Meta_title: "",
      Url_slug: "",
      Alt_Text: "",
    }));

    SetImage("");
  };

  React.useEffect(() => {
    axios("https://api.cannabaze.com/AdminPanel/Get-NewsCategory/", {
      headers: {
        Authorization: `Bearer ${token_data}`,
      },
    }).then((response) => {
      SetCategory(response?.data);

      setNews((Category) => ({
        ...Category,
        Category_id: response?.data[0]?.id,
      }));
    });

    axios("https://api.cannabaze.com/AdminPanel/Get-NewsSubCategory/", {
      headers: {
        Authorization: `Bearer ${token_data}`,
      },
    }).then((response) => {
      SetSubCategory(response?.data?.data);
      setNews((Category) => ({
        ...Category,
        SubCategory_id: response?.data?.data[0]?.id,
      }));
    });
  }, [token_data]);

  const Submit = (data) => {
    const formdata = new FormData();
    formdata.append("Title", data.Title);
    formdata.append("Category_id", News.Category_id);
    formdata.append("Meta_Description", data.Meta_Description);
    formdata.append(
      "Meta_title",
      News.Meta_title === "" ? News.Title : News.Meta_title
    );
    formdata.append("SubCategory_id", News.SubCategory_id);
    formdata.append(
      "Url_slug",
      News.Url_slug === "" ? News.Title : News.Url_slug
    );
    formdata.append("Alt_Text", data.Alt_Text);
    formdata.append("Image", Image);
    formdata.append("Description", convertedContent);
    Setloading(true);
    const config = {
      headers: { Authorization: `Bearer ${token_data}` },
    };
    Axios.post(
      "https://api.cannabaze.com/AdminPanel/Add-News/",
      formdata,
      config
    )
      .then(() => {
        dispatch({ type: "api", api: true });
        setOpen(false);
        setNews((Brand) => ({
          ...Brand,
          Title: "",
          Link: "",
          Meta_Description: "",
          Meta_title: "",
          Url_slug: "",
          Alt_Text: "",
        }));

        setEditorState(() => EditorState.createEmpty());
        reset();
        SetImage("");
        Setloading(false);
      })
      .catch(function (error) {
        Setloading(false);
        if (error.response.data.error) {
          setmassage({ Link: error.response.data.error.Link[0] });
          seterror({ Link: "red" });
        }
        for (const [key, value] of Object.entries(error.response.data)) {
          switch (key) {
            case "Title":
              setmassage({ Title: value });
              seterror({ Title: "red" });
              break;
            case "Image":
              setmassage({ Image: value });
              seterror({ Image: "red" });
              break;
            case "Meta_Description":
              setmassage({ Meta_Description: value });
              seterror({ Meta_Description: "red" });
              break;
            case "Url_slug":
              setmassage({ Url_slug: value });
              seterror({ Url_slug: "red" });
              break;
            case "Meta_title":
              setmassage({ Meta_title: value });
              seterror({ Meta_title: "red" });
              break;
            case "Alt_Text":
              setmassage({ Alt_Text: value });
              seterror({ Alt_Text: "red" });
              break;

            default:
              return "foo";
          }
        }
      });
  };

  const file = document.querySelector("#file");
  if (file) {
    file.addEventListener("change", (e) => {
      // Get the selected file
      const [file] = e.target.files;
      // Get the file name and size
      const { name: fileName, size } = file;
      // Convert size in bytes to kilo bytes
      const fileSize = (size / 1000).toFixed(2);
      // Set the text content
      const fileNameAndSize = `${fileName} - ${fileSize}KB`;
      document.querySelector(".file-name").textContent = fileNameAndSize;
    });
  }
console.log(error.Image)
  React.useEffect(() => {
    setNews({
      ...News,
      Title: watch("Title"),
      Url_slug: watch("Title")?.replace(/\s/g, "-"),
      Meta_title: watch("Title"),
    });
  }, [watch("Title")]);

  return (
    <div className="container-fluid ">
      <SectionCard className="row">
        <form onSubmit={handleSubmit(Submit)}>
          <div className="row justify-content-between">
            <div className="col-lg-7  ">
              <div className="col-12 Add_Category center">
              
                  <h2> Add News</h2>
           
              </div>
              <div className="addnewinputbox">
              
                  <label >
                    <span className="required"></span>
                    Title:
                  </label>              
                  <TextField
                    type="Text"
                    fullWidth
                    placeholder="Title"
                    id="outlined-basic"
                    name="Title"
                    InputProps={{
                      disableUnderline: true,
                      startAdornment: (
                        <InputAdornment position="start"> </InputAdornment>
                      ),
                      style: { fontSize: 14  , height:'56px'},
                    }}
                    label={massage.Title}
                    inputRef={register({
                      required: "Title is Required",
                    })}
                    error={Boolean(errors?.Title)}
                    helperText={errors?.Title?.message}
                  />
             
              </div>
              <div className="col  justify-content-between" style={{display:"flex"}}> 
                <div className="col-5 addnewinputbox" >
                  <div className="">
                    <label >Category:</label>
                  </div>
                  <div className="">
                    <Select
                    fullWidth
                      name="Category_id"
                      value={News.Category_id}
                      onChange={handleChange}
                      displayEmpty
                      size="small"
                      inputProps={{  disableUnderline: true, "aria-label": "Without label" }}
                      sx={{
                        "& fieldset": {
                          border: "none",
                        },
                      }}
                    >
                      <MenuItem value="" style={{ fontSize: 15 }}>
                        <em>Select option</em>
                      </MenuItem>
                      {Category.map((Category, index) => {
                        return (
                          <MenuItem
                            value={Category.id}
                            style={{ fontSize: 15 }}
                            key={index}
                          >
                            {Category.name}
                          </MenuItem>
                        );
                      })}
                    </Select>
                  </div>
                </div>
                <div className="col-5 addnewinputbox">
                
                    <label >Sub Category:</label>
              
                    <Select
                      name="SubCategory_id"
                      value={News.SubCategory_id}
                      onChange={handleChange}
                      displayEmpty
                      fullWidth
                      size="small"
                      inputProps={{ "aria-label": "Without label" }}
                      style={{ minWidth: 130, fontSize: 15 }}
                      sx={{
                        "& fieldset": {
                          border: "none",
                        },
                      }}
                    >
                      <MenuItem value="" style={{ fontSize: 15 }}>
                        <em>Select option</em>
                      </MenuItem>
                      {SubCategory.map((SubCategory, index) => {
                        return (
                          <MenuItem
                            value={SubCategory.id}
                            style={{ fontSize: 15 }}
                            key={index}
                          >
                            {SubCategory.name}
                          </MenuItem>
                        );
                      })}
                    </Select>
             
                </div>
              </div>
              <div className=" addnewinputbox  ">
           
                <label >
                  <span className="required">*</span>
                  Description:
                </label>
   
                <Box
                  sx={{
                    "& .rdw-editor-toolbar": {
                      width: "100%",
                    },
                    "& .rdw-editor-wrapper": {
                      height: "240px",
                      // width: "991px",
                    },
                    ".rdw-editor-main": {
                      background: "",
                      border: "1px solid #c4c4c4",
                      padding: "3px",
                    },
                  }}
                >
                  <Editor
                    editorState={editorState}
                    toolbar={toolbar}
                    localization={localization}
                    onEditorStateChange={handleEditorStateChange}
                    onContentStateChange={handleContentStateChange}
                    toolbarClassName="toolbarClassName"
                    wrapperClassName="wrapperClassName"
                    editorClassName="editorClassName"
                  />
                </Box>
            
              </div>
            </div>
            <div className="col-lg-4">      
                <div className="  ">
                <div className="col-12 Add_Category center">
              
              <h2> SEO</h2>
       
          </div>
                </div>
                <div className=" addnewinputbox">
              
                    <label >
                    <span className="required">*</span>
                    Meta Title:
                    </label>
               
                    <TextField
                    type="Text"
                    placeholder="Meta Title"
                    id="outlined-basic"
                    name="Meta_title"
                    // variant="outlined"
                    value={News.Meta_title}
                    style={{ minWidth: 190, fontSize: 15 ,height:"56px"}}
                    onChange={handleChange}
                    fullWidth
                    InputProps={{
                      disableUnderline: true,
                        startAdornment: (
                        <InputAdornment position="start"> </InputAdornment>
                        ),
                        style: { fontSize: 14 },
                    }}
                    label={massage.Meta_title}
                    sx={{
                        "& .MuiOutlinedInput-root": {
                        "& fieldset": {
                            borderColor: error.Meta_title,
                            height: 55,
                        },
                        },
                        "& label": {
                        fontSize: 13,
                        color: "red",
                        "&.Mui-focused": {
                            marginLeft: 0,
                            color: "red",
                        },
                        },
                    }}
                    />
              
                </div>
                <div className=" addnewinputbox">
               
                    <label >
                    <span className="required">*</span>
                    Meta Description :
                    </label>
                
                    <TextField
                    type="Text"
                    placeholder="Meta Description"
                    id="outlined-basic"
                    name="Meta_Description"
                    // variant="outlined"
                    // onChange={handleChange}
                    style={{ minWidth: 190, fontSize: 15 , height:"56px" }}
                    InputProps={{
                      disableUnderline: true,
                        startAdornment: (
                        <InputAdornment position="start"> </InputAdornment>
                        ),
                        style: { fontSize: 14 },
                    }}
                    label={massage.Meta_Description}
                    sx={{
                        "& .MuiOutlinedInput-root": {
                        "& fieldset": {
                            borderColor: error.Meta_Description,
                            height: 55,
                        },
                        },
                        "& label": {
                        fontSize: 13,
                        color: "red",
                        "&.Mui-focused": {
                            marginLeft: 0,
                            color: "red",
                        },
                        },
                    }}
                    inputRef={register({
                        required: "Meta_Description is Required",
                    })}
                    error={Boolean(errors?.Meta_Description)}
                    helperText={errors?.Meta_Description?.message}
                    />
      
                </div>
                <div className="  addnewinputbox ">
               
                    <label >
                    <span className="required">*</span>
                    Url slug :
                    </label>
               
                    <TextField
                    type="Text"
                    placeholder=" Url slug"
                    name="Url_slug"
                    value={News.Url_slug}
                    id="outlined-basic"
                    // variant="outlined"
                    style={{ minWidth: 190, fontSize: 15 , height:"56px" }}
                    onChange={handleChange}
                    InputProps={{
                      disableUnderline: true,
                        startAdornment: (
                        <InputAdornment position="start"> </InputAdornment>
                        ),
                        style: { fontSize: 14 },
                    }}
                    label={massage.Url_slug}
                    sx={{
                        "& .MuiOutlinedInput-root": {
                        "& fieldset": {
                            borderColor: error.Url_slug,
                            height: 55,
                        },
                        },
                        "& label": {
                        fontSize: 13,
                        color: "red",
                        "&.Mui-focused": {
                            marginLeft: 0,
                            color: "red",
                        },
                        },
                    }}
                    />
              
                </div>
                <div className="  addnewinputbox ">
           
                    <label >
                    <span className="required">*</span>
                    Featured Image:
                    </label>
                
                    <div
                    className=" col-12 image_uploade center"
                    style={{  border:  "1px solid " + error.Image }}
                    >
                    <div className="top MdFileUpload">
                        {Image ? (
                        <div style={{ display: "flex" }}>
                            <img
                            src={URL.createObjectURL(Image)}
                            alt=""
                            style={{
                                width: "90px",
                                height: "81px",
                                borderRadius: "10px",
                            }}
                            />
                            <Button color="success" onClick={resetFileInput}>
                            Cancell{" "}
                            </Button>
                        </div>
                        ) : (
                        <MdFileUpload
                            style={{
                            backgroundColor: "#31B665",
                            borderradius: "66px",
                            }}
                        ></MdFileUpload>
                        )}
                    </div>
                    <div className="col-12 center  top Sku">
                        <div className="file-input">
                        <input
                            type="file"
                            id="file"
                            ref={inputRef}
                            className="file"
                            onChange={handleimage}
                        />
                        <label htmlFor="file">
                            <span>UPLOAD</span>{" "}
                            <span style={{ color: "red" }}>{massage.Image}</span>
                            <p className="file-name"></p>
                        </label>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="  addnewinputbox ">
               
                    <label >
                    <span className="required">*</span>
                    Alt Text:
                    </label>
               
                    <TextField
                    type="text"
                    placeholder="Add Alt Text"
                    name="Alt_Text"
                    id="outlined-basic"
                    // variant="outlined"
                    style={{ minWidth: 190, fontSize: 15 , height:"56px" }}
                    InputProps={{
                      disableUnderline: true,
                        startAdornment: (
                        <InputAdornment position="start"> </InputAdornment>
                        ),
                        style: { fontSize: 14 },
                    }}
                    label={massage.Alt_Text}
                    sx={{
                        "& .MuiOutlinedInput-root": {
                        "& fieldset": {
                            borderColor: error.Alt_Text,
                            height: 55,
                        },
                        },
                        "& label": {
                        fontSize: 13,
                        color: "red",
                        "&.Mui-focused": {
                            marginLeft: 0,
                            color: "red",
                        },
                        },
                    }}
                    inputRef={register({
                        required: "Alt_Text is Required",
                    })}
                    error={Boolean(errors?.Alt_Text)}
                    helperText={errors?.Alt_Text?.message}
                    />
                </div>
                </div>
            </div>
         

          <div className="col-12 center top">
            <LoadingButton
              loading={loading}
              autoFocus
              type="submit"
              style={{
                backgroundColor: !loading && "rgb(49, 182, 101)",
                color: "white",
                fontSize: "14px",
              }}
            >
              Add News
            </LoadingButton>
          </div>
        </form>
      </SectionCard>
    </div>
  );
}
