import { BsThreeDotsVertical } from "react-icons/bs"
import React from "react"
const PromotionalBannerList = () => {
    const PromotionListRef=React.useRef(null)
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
        { id: 1, imageUrl: "image", title: "Post title", country: "India", state: "MP", status: "Active" },
        { id: 2, imageUrl: "image", title: "Post title", country: "India", state: "MP", status: "Active" },]
        const PromotionBannerPopArray=[{id:1,name:"View Post"},{id:2,name:"Share Post"},
        {id:3,name:"View Report"},
        {id:4,name:"Share Report"}]
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-10 PromotionalBannerList">
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
                                                <td>{items.imageUrl}</td>
                                                <td>{items.title}</td>
                                                <td>{items.country}</td>
                                                <td>{items.state}</td>
                                                <td>{items.status}</td>
                                                <td>
                                                    <div className="promotionThreeDot">
                                                    <BsThreeDotsVertical className="" onClick={() => handleThreeDot(items.id)} />

                                                    </div>
                                                    {items.id===SelectId && OpenSelect?(
                                                        <div className="promotionThreeDotPopup" ref={PromotionListRef}>
                                                            <ol className="promotionOL_list">
                                                                {
                                                                    PromotionBannerPopArray.map((val,index)=>{
                                                                        return(
                                                                          <React.Fragment key={index}>
                                                                            <li>{val.name}</li>

                                                                          </React.Fragment>
                                                                        )
                                                                    })
                                                                }
                                                              
                                                            </ol>
                                                            
                                                        </div>
                                                    ):""}
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