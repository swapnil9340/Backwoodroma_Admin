import { LazyLoadImage } from "react-lazy-load-image-component"
import { BsArrowUpShort } from "react-icons/bs"
import { BsArrowDownShort } from "react-icons/bs"
import { IconButton } from "@mui/material"
import React from "react"
const RoleAndPermissionTable = () => {
    const RoleTableArray = [{ name: "selnox info" }, { name: "selnox infotech" }]
    return (
        <div className="col-12 table-responsive rolesAndPermissionTableContainer">
            <table className="table">
                <thead className="rolesAndPermissionTableheader">
                    <tr>
                        <th scope="col">Name<span><IconButton><BsArrowUpShort /></IconButton></span></th>
                        <th scope="col">Role<span><IconButton><BsArrowUpShort /></IconButton></span></th>
                        <th scope="col">Joined On <span><IconButton><BsArrowUpShort /></IconButton></span></th>
                        <th scope="col"></th>



                    </tr>

                </thead>
                <tbody>
                    {RoleTableArray.map((item, index) => {
                        return (
                            <React.Fragment key={index}>
                                <tr>
                                    <td scope="col">
                                        <div className="rolesAndPermissionImage">
                                            <div className="image">
                                                <LazyLoadImage src="./image/blank_Image.webp" className="roleAndTableImageSize" />
                                            </div>
                                            <div className="col rolesAndPermissionParagraphCol">
                                                <div className="rolesAndPermissionParagraph">
                                                    <p className="Rolesparagrpah roleUserName">{item.name}</p>
                                                    <p className="Rolesparagrpah roleEmail">selnoxreact@gmail.com</p>
                                                </div>

                                            </div>
                                        </div>
                                    </td>
                                    <td scope="col">
                                        Owner
                                    </td>
                                    <td scope="col"></td>
                                    <td scope="col">Change Owner</td>

                                </tr>
                            </React.Fragment>
                        )
                    })}


                </tbody>

            </table>

        </div>
    )
}
export default RoleAndPermissionTable