import React from "react"
import { AiOutlineExclamation } from "react-icons/ai"
const RolePermissionListToggle = ({RolePermissionArray}) => {
    // const RolePermissionArray = [
    //     {
    //         roleTypeHeading: "Edit Content",
    //         secSubHeading: "Can edit text, links and media sources. In older versions of the Editor, this is equivalent to the Edit Site permission.",
    //         editSite: "Edit Site",
    //     },
    //     {
    //         roleTypeHeading: "Edit Site",
    //         secSubHeading: "Can edit content, site design and app settings.",
    //     },
    //     {
    //         roleTypeHeading: "Publish Site",
    //         secSubHeading: "Can publish site. ‘Edit Content’ or ‘Edit Site’ permissions are also required.",
    //         editSite: "Manage privacy setting",
    //     },
    // ]
    console.log(RolePermissionArray)
    return (
        <div className="col-12 RolePermissionListToggle_container">
            {RolePermissionArray?.map((items,index)=>{
                return(
                    <React.Fragment key={index}>
                    <div className="col-12 checkCondition_container">
                    <div className="">
                        <input id="checkBox" type="checkbox" />
                    </div>
                    <div className="col-10">
                        <label htmlFor="checkBox">{items.roleTypeHeading}</label>
                        <div className="col-12">
                            <p>{items.secSubHeading}</p>
                        </div>
                        {items.editSite&&(
                            <div className="col-12">
                            <p><span><AiOutlineExclamation /></span>This permission is required because <span>{items.editSite}</span> is turned on.</p>
                        </div>
                        )}
                        
                    </div>
                </div>
                </React.Fragment>
                )
            })}
          

        </div>
    )
}
export default RolePermissionListToggle