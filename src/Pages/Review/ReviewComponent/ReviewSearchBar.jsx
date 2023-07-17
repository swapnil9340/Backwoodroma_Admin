import React from "react"
import TextField from '@mui/material/TextField';
import { AiOutlineArrowLeft } from "react-icons/ai"
import Button from '@mui/material/Button';
import {AiOutlineSearch} from "react-icons/ai"
import {AiOutlineClose} from "react-icons/ai"
import { InputAdornment } from "@mui/material";
import IconButton from '@mui/material/IconButton';
import LoadingButton from '@mui/lab/LoadingButton';
const ReviewSearchBar = () => {
    const [value, setValue] = React.useState(false)
    return (
        <React.Fragment>
            <div className="col-12 ReviewSearchBar_container">
                <div className="col-2 reviewSearchBar_backArrowBtn">
                    <span><AiOutlineArrowLeft color="#000000" size={18} /></span><span className="review_backBtn">Back</span>
                </div>
                <div className="col-6">
                    <TextField 
                    placeholder="Search by User Name,Shop Name"
                    InputProps={{
                        endAdornment:(
                            <InputAdornment position="end">
                                <AiOutlineSearch size={22}/>
                            </InputAdornment>
                        ),
                        startAdornment: value && (
                            <IconButton
                              aria-label="close icons"
                              onClick={() => setValue(!value)}
                            ><AiOutlineClose/></IconButton>
                          )
                    }}
                    id="outlined-basic" type="search" variant="outlined" fullWidth />
                </div>
                <div className="col-4 reviewButtonView">
                    <LoadingButton 
                     sx={{
                        "&.MuiButtonBase-root ": {
                            border: "1px solid #D5D5D5",
                            color: "#111111",
                        }
                    }}
                    size="large" variant="outlined" >
                        view shop
                    </LoadingButton>
                </div>
            </div>

        </React.Fragment>
    )
}
export default ReviewSearchBar