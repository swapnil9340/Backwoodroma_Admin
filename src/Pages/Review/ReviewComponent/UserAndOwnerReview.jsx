import React from "react"
import { AiFillDelete } from "react-icons/ai"
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Rating from '@mui/material/Rating';
import { Height } from "@mui/icons-material";
import IconButton from '@mui/material/IconButton';

const UserAndOwnerReview = () => {
    const UserOwnerArray=[{UserName:"Jack thomas",OwnerName:"Maxwell"},{UserName:"Jack thomas",OwnerName:"Maxwell"}]
    return (
        <React.Fragment>
            <div className="col-12 UserAndOwnerReview_mainCol">
                {UserOwnerArray.map((items,index)=>{
                    return(
                        <React.Fragment>
                <div className="col-12 UserAndOwnerReview_innerCol">
                    <div className="col-12 UserAndOwnerReview_deleteIconCol">
                        <IconButton
                            aria-label="close icons"
                        >
                            <AiFillDelete size={24} color="#000000" />
                        </IconButton>
                    </div>
                    <div className="col-12 userReviewContainer">
                        <section className="userReviewLeftSection">
                            <div className="userOwnerImgContainer">
                                <LazyLoadImage className="userOwnerImg" src="./image/blank_Image.webp" alt="imgnotavailable" />
                            </div>
                        </section>
                        <section className="userReviewRightSection">
                            <div className="col-12 userReviewRightHead_Col">
                                <h1 className="userReviewRightHeading">{items.UserName}</h1>
                            </div>
                            <div className="col-12 userReviewRightHead_Col">
                                <p className="userReviewRight_Paragraph">8 review</p>
                            </div>
                            <div className="col-12 d-flex userReviewRighRating_col">
                                <Rating
                                    sx={{
                                        '& .MuiRating-iconFilled': {
                                            color: '#31B665',
                                        },
                                    }}
                                    name="read-only" value={4.5} precision={0.5} readOnly />
                                <span className="reviewDate">4 months ago</span>
                            </div>
                            <div className="col-12 userRevievCommentCol">
                                <span className="userReviewss">John Hartman</span>
                                <span className="userReviewss"> "Very nice spot, friendly staff, quality service and nice vibes."</span>
                            </div>

                        </section>
                    </div>
                    <div className="col-12 ReviewOwner_container mt-4">
                        <section className="ownerReviewImage_section">
                            <div className="ownerReviewImageCont">
                                <LazyLoadImage className="ownerReviewImage" src="./image/blank_Image.webp" alt="imgnotavailable" />

                            </div>
                        </section>
                        <section className="ownerRightSectionss">
                            <div className="col-12 ownerRightHeadingCont">
                                <h1 className="ownerRightHeading">Maxwell</h1>
                            </div>
                            <div className="col-12 ownerRightHeadingCont">
                                <p className="ownerParaa">Owner</p>
                            </div>
                        </section>

                    </div>


                </div>
                        </React.Fragment>
                    )
                })}


            </div>

        </React.Fragment>
    )
}
export default UserAndOwnerReview