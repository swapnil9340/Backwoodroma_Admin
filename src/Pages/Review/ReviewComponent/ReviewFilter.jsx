import React from 'react';
import {HiArrowsUpDown} from "react-icons/hi2"
import { LoadingButton } from '@mui/lab';
const ReviewFilter = () => {
    return (
        <React.Fragment>
            <div className="col-12 reviewFilter">
                <div className="col-8">
                    <h1 className='reviewFilterHeadings'>Review</h1>
                </div>
                <div className="col-4 reviewFilterBtns">
                    <LoadingButton
                        sx={{
                            "&.MuiButtonBase-root ": {
                                border: "1px solid #D5D5D5",
                                color: "#111111",
                                width:"120px"
                            }
                        }}
                        size="large" variant="outlined" >
                      <HiArrowsUpDown size={18}/>
                    </LoadingButton>
                </div>
            </div>
        </React.Fragment>
    )
}
export default ReviewFilter