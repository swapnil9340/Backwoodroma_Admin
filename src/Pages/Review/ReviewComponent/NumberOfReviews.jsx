import React from "react"
import Rating from '@mui/material/Rating';
import Box from '@mui/material/Box';
import LinearProgressWithLabel from "./ReviewProgressBarComponent/LinearProgressWithLabel";
import { AiFillStar } from "react-icons/ai"
const NumberOfReviews = () => {
    const [progress, setProgress] = React.useState();
    setProgress(100)

   

    return (
        <React.Fragment>
            <div className="col-12 NumberOfReview_container">
                <div className="col-4 NumberOfReview_container_Card1">
                    <div className="col-12 headingsCol">
                        <h1 className="totalReviewHeadings">Total Reviews</h1>
                    </div>
                    <div className="col-12 headingsCol">
                        <p className="totalReviwsCount">15 K</p>
                    </div>
                    <div className="col-12 headingsCol">
                        <p className="bottomHeadings">Growth in reviews on this year</p>
                    </div>
                </div>
                <div className="col-4 NumberOfReview_container_Card2">
                    <div className="col-12 NumberOfReviewHeading_Col">
                        <h1 className="avgRatingHeadings">Average Rating</h1>
                    </div>
                    <div className="col-12 NumberOfReviewRating_Col">
                        <span className="reviewRatingPoint">4.8</span> 
                        <Rating 
                        sx={{
                            '& .MuiRating-iconFilled': {
                                color: '#31B665',
                              },
                              "&.MuiRating-root":{
                                fontSize:"20px"
                              }
                        }}
                        name="read-only" value={4.5} precision={0.5} readOnly />
                    </div>
                    <div className="col-12 NumberOfReviewHeading_Col">
                        <p className="avgBottomHeading">Average rating on this year</p>
                    </div>
                </div>
                <div className="col-4 linearProgressCol ">
                    <div className="col-12 eachLinearSearchBradiv">
                        <AiFillStar size={16} color="#E0E0E0"/>
                        <span>5</span>
                        <Box sx={{ width: '50%' }}>
                            <LinearProgressWithLabel value={progress} />
                        </Box>
                    </div>

                    <div className="col-12 eachLinearSearchBradiv">
                        <AiFillStar size={16} color="#E0E0E0"/>
                        <span>4</span>
                        <Box sx={{ width: '40%' }}>
                            <LinearProgressWithLabel value={progress} />
                        </Box>
                    </div>                   
                     <div className="col-12 eachLinearSearchBradiv">
                        <AiFillStar size={16} color="#E0E0E0" />
                        <span>3</span>
                        <Box sx={{ width: '50%' }}>
                            <LinearProgressWithLabel value={progress} />
                        </Box>
                    </div>
                    <div className="col-12 eachLinearSearchBradiv">
                        <AiFillStar size={16} color="#E0E0E0"/>
                        <span>2</span>
                        <Box sx={{ width: '30%' }}>
                            <LinearProgressWithLabel value={progress} />
                        </Box>
                    </div>
                    <div className="col-12 eachLinearSearchBradiv">
                        <AiFillStar size={16} color="#E0E0E0"/>
                        <span>1</span>
                        <Box sx={{ width: '20%' }}>
                            <LinearProgressWithLabel value={progress} />
                        </Box>
                    </div>
                </div>
            </div>

        </React.Fragment>
    )
}
export default NumberOfReviews