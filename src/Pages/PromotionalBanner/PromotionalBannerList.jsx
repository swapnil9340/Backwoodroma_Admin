import { BsThreeDotsVertical } from "react-icons/bs"
import { IoMdArrowBack } from "react-icons/io"
import { IconButton } from "@mui/material"
import React from "react"
import { LoadingButton } from "@mui/lab"
import Box from "@mui/material/Box"
import useStyles from "../../Style"
import {GrFormAdd} from "react-icons/gr"
import { LazyLoadImage } from "react-lazy-load-image-component"
import userprofile from "./image/userprofile.jpg"
import { useNavigate } from "react-router-dom"
// import {AiOutlinePlus} from "react-icons/ai"
const PromotionalBannerList = () => {
    const navigate=useNavigate()
    const classes = useStyles()
    const PromotionListRef = React.useRef(null)
    const [SelectId, SetSelectedId] = React.useState()
    const [OpenSelect, SetOpenSelected] = React.useState(false)
    const handleThreeDot = (ids) => {
        SetSelectedId(ids)
        SetOpenSelected(!OpenSelect)
    }
    React.useEffect(() => {
        const handleClickOutsidePromotionList = (event) => {
            if (PromotionListRef.current && !PromotionListRef.current.contains(event.target)) {
                if (SelectId) {
                    SetSelectedId((SelectId) => !SelectId)
                }
            }
        };
        document.addEventListener('click', handleClickOutsidePromotionList, true);
        return () => {
            document.removeEventListener('click', handleClickOutsidePromotionList, true);
        };
    }, [SelectId]);
    const PromotionalBannerListArray = [
        { id: 1,imgUrl:{userprofile}  ,title: "Post title", country: "India", state: "MP", status: "Active" },
        { id: 2,imgUrl:{userprofile} , title: "Post title", country: "India", state: "MP", status: "Active" },]
    const PromotionBannerPopArray = [{ id: 1, name: "View Post" }, { id: 2, name: "Share Post" },
    { id: 3, name: "View Report" },
    { id: 4, name: "Share Report" }]
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-10 PromotionalBannerList">
                    <div className="col-12 promotional_bannerList_BackBtn">
                        <div className="col-md-3 col-3">
                            <IconButton onClick={()=>navigate("/")}><IoMdArrowBack /></IconButton><span className="promotionBackBtnHead">Back</span>
                        </div>
                        <div className="col-4">
                            <h2>Promotional Banner</h2>
                        </div>
                        <Box className={`col-5 promotionalAddBannerListBtnCol  ${classes.promotionalListBtnss}`}>
                            <LoadingButton startIcon={<GrFormAdd />} onClick={()=>navigate("/PromotionalBanner")}>Add Banner</LoadingButton>
                        </Box>
                    </div>
                    <div className="col-12 promotionalBannerListContainer table-responsive">
                        <table className="table border">
                            <thead className="align-middle promotionalTableHeader">
                                <tr>
                                    <th>
                                        <div className="promotionalBannerTableTh_div">
                                            <span>Post Image</span>
                                        </div>
                                    </th>
                                    <th>
                                        <div className="promotionalBannerTableTh_div">
                                            <span>Post Title</span>
                                        </div>
                                    </th>
                                    <th>
                                        <div className="promotionalBannerTableTh_div">
                                            <span>Country</span>
                                        </div>
                                    </th>
                                    <th>
                                        <div className="promotionalBannerTableTh_div">
                                            <span>State</span>
                                        </div>
                                    </th>
                                    <th>
                                        <div className="promotionalBannerTableTh_div">
                                            <span>Status</span>

                                        </div>
                                    </th>
                                    <th>
                                        <div className="promotionalBannerTableTh_div">

                                        </div>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {PromotionalBannerListArray.map((items, index) => {
                                    return (
                                        <React.Fragment key={index}>
                                            <tr className="promotionalListBodyRow align-middle">
                                                <td><LazyLoadImage src={userprofile} className="promotionalBannerImageSize"/></td>
                                                <td>{items.title}</td>
                                                <td>{items.country}</td>
                                                <td>{items.state}</td>
                                                <td>{items.status}</td>
                                                <td className="Promotional_listParent_td">
                                                    <div className="promotionThreeDot">
                                                        <BsThreeDotsVertical className="" onClick={() => handleThreeDot(items.id)} />

                                                    </div>
                                                    {items.id === SelectId && OpenSelect ? (
                                                        <div className="promotionThreeDotPopup" ref={PromotionListRef}>
                                                            <ol className="promotionOL_list">
                                                                {
                                                                    PromotionBannerPopArray.map((val, index) => {
                                                                        return (
                                                                            <React.Fragment key={index}>
                                                                                <li>{val.name}</li>

                                                                            </React.Fragment>
                                                                        )
                                                                    })
                                                                }

                                                            </ol>

                                                        </div>
                                                    ) : ""}
                                                </td>
                                            </tr>
                                        </React.Fragment>
                                    )
                                })}
                            </tbody>

                        </table>


                    </div>

                </div>


            </div>

        </div>
    )
}
export default PromotionalBannerList