import React from "react"
import { AiFillDelete } from "react-icons/ai"
import { LazyLoadImage } from 'react-lazy-load-image-component';
const UserAndOwnerReview = () => {
    return (
        <React.Fragment>
            <div className="col-12 UserAndOwnerReview_mainCol">
                <div className="col-12 UserAndOwnerReview_innerCol">
                    <div className="col-12 UserAndOwnerReview_deleteIconCol">
                        <AiFillDelete size={24} color="#000000" />

                    </div>
                    <div className="col-12 userReviewContainer">
                        <section className="userReviewLeftSection">
                           <LazyLoadImage src="./image/blank_Image.webp" width={"100px"} height={"100px"} alt="imgnotavailable"/>
                        </section>
                        <section className="userReviewRightSection">
                            

                        </section>

                    </div>


                </div>

            </div>

        </React.Fragment>
    )
}
export default UserAndOwnerReview