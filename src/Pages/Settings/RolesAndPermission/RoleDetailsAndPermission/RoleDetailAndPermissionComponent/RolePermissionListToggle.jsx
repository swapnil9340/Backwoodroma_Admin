import React from "react"
import { AiOutlineExclamation } from "react-icons/ai"
import {HiExclamationCircle} from "react-icons/hi"
import { IconButton } from "@mui/material"
const RolePermissionListToggle = ({RolePermissionArray}) => {


    // console.log(RolePermissionArray)
    return (
        <div className="col-12 RolePermissionListToggle_container">
            {RolePermissionArray?.map((items,index)=>{
                return(
                    <React.Fragment key={index}>
                       
                    <div className="col-12 checkCondition_container">
                    <div className="">
                        <input id={items.roleTypeHeading} type="checkbox" />
                    </div>
                    <div className="col-10">
                        <label className="rolePermissionLabel" htmlFor={items.roleTypeHeading}>{items.roleTypeHeading}</label>
                        <div className="col-12">
                            <p>{items.secSubHeading}</p>
                        </div>
                        {items.editSite&&(
                            <div className="col-12">
                            <p><span><IconButton  size="small"><HiExclamationCircle  color="orange" size={18}/></IconButton></span>This permission is required because <span>{items.editSite}</span> is turned on.</p>
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