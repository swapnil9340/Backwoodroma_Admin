import { IoImagesOutline } from 'react-icons/io5';
import CloseIcon from '@mui/icons-material/Close';
import { BsPlusSquare } from "react-icons/bs"
import { IconButton } from '@mui/material';
import React from 'react';
function MultiImage({ Image, SetImage }) {
    const [setFile] = React.useState([]);

    function uploadSingleFile(e) {
        // let ImagesArray = Object.entries(e.target.files).map((e) =>
        //     URL.createObjectURL(e[1])
        // );
        // console.log(e.target.files[0]);
        let ImagesArray=e.target.files
        console.log(ImagesArray)


        SetImage([...Image ,...ImagesArray]);
           

        const d =  Object.entries(Image).map((e) => {
            return URL.createObjectURL(e[1])
        })
        setFile(d)
       
        
    }


   

    function deleteFile(e) {
        const s = Image.filter((item, index) => index !== e);
        SetImage(s);
        
    }

    return (
        <form className="product_Col">

            <div className="col-2">
                <div className="form-group">
                    <input
                        type="file"
                        disabled={Image.length === 5}
                        className="form-control file "
                        onChange={uploadSingleFile}
                        multiple

                        id="file"
                    />

                    <div className='border product_imagebox image_logosize1 mt-2'>


                        <label htmlFor="file" className="color"   >
                            {
                                Image ? <div className="color">
                                    <BsPlusSquare ></BsPlusSquare>
                                </div> : <IoImagesOutline ></IoImagesOutline>
                            }
                        </label>



                    </div>



                </div>
            </div>
            <div className="col-8">
                <div className="form-group preview product_Col">
                    {Image.length > 0 &&
                        Image.map((item, index) => {
                            return (
                                <div key={item} className="product_Col">
                                    <img src={URL.createObjectURL(Image[0])} alt="" style={{ width: "90px", height: "81px", borderRadius: "10px" }} />
                                    
                                   <span className="MultipulImage">
                                   <IconButton onClick={() => deleteFile(index)}>
                                        <CloseIcon />
                                    </IconButton>
                                   </span>
                                </div>
                            );
                        })}
                </div>

            </div>
       
        </form>
    );
};


export default MultiImage;
