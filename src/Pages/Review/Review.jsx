import React from "react"
import ReviewSearchBar from "./ReviewComponent/ReviewSearchBar"
import ReviewFilter from "./ReviewComponent/ReviewFilter"
import NumberOfReviews from "./ReviewComponent/NumberOfReviews"
import UserAndOwnerReview from "./ReviewComponent/UserAndOwnerReview"
const Review = () => {
    return (
        <React.Fragment>
            <div className="container-fluid py-4">
                <div className="col-10 reviewMainContainer">
                    <ReviewSearchBar />
                    <ReviewFilter />
                    <NumberOfReviews />
                    <UserAndOwnerReview/>
                </div>

            </div>

        </React.Fragment>
    )
}
export default Review