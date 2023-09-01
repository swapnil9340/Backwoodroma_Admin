import { LazyLoadImage } from "react-lazy-load-image-component"
import { BsArrowUpShort } from "react-icons/bs"
import { BsArrowDownShort } from "react-icons/bs"
import { RiArrowDownSLine } from "react-icons/ri"
import { IconButton, TextField } from "@mui/material"
import { AiOutlineSearch } from "react-icons/ai"
import InputAdornment from "@mui/material/InputAdornment"
import useStyles from "../../../../Style"
import React from "react"
import { CiSettings } from "react-icons/ci"
import { BsPlusLg } from "react-icons/bs"
const RoleAndPermissionTable = () => {
    const classes = useStyles()

    const RoleTableArray = [{ name: "selnox info" }, { name: "selnox infotech" }]
    return (
        <div className="col-12  rolesAndPermissionTableContainer mt-4">
            <form>
                <div className="col-12 rolesAllDropdownMaincontainer">
                    <div className="col-lg-2 col-5 roelFirstSelectTagsContainer">
                        <span>Show</span>
                        <select className="roleSelectTags">
                            <option>All</option>
                            <option>Pending</option>
                            <option>Expired</option>

                        </select>
                    </div>
                    <div className="col-lg-2 col-5 roelFirstSelectTagsContainer">
                        <span>Role</span>
                        <select className="roleSelectTags">
                            <option className="HtmloptionHoverBgColor">All Role</option>
                            <option>Owner</option>
                            <option>
                                Create new role
                            </option>
                            <option>
                                Manage roles
                            </option>

                        </select>
                    </div>

                    <div className="col-lg-3 col-12 rolesAndpermission_Searchbar">
                        <TextField
                            className={classes.RoleAndPermissionSearchBarTextfield}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <AiOutlineSearch size={18} color="#31B665" />
                                    </InputAdornment>
                                )
                            }}
                            type="text" size="small" />

                    </div>

                </div>
            </form>
            <div className="col-12 table-responsive table-responsive-sm">

                <table className="table">
                    <thead className="rolesAndPermissionTableheader">
                        <tr>
                            <th scope="col">
                                <div className="roleAndPermissionTh_div_flex">
                                    <span>Name</span> <IconButton><BsArrowUpShort size={16} /></IconButton>
                                </div>

                            </th>
                            <th scope="col">
                                <div className="roleAndPermissionTh_div_flex">

                                    <span>Role</span><IconButton><BsArrowUpShort size={16} /></IconButton>
                                </div>
                            </th>
                            <th scope="col">
                                <div className="roleAndPermissionTh_div_flex">

                                    <span> Joined On</span> <IconButton><BsArrowUpShort size={16} /></IconButton>
                                </div>
                            </th>
                            <th scope="col">
                                <div className="roleAndPermissionTh_div_flex">

                                    <span>Owner</span> <IconButton><BsArrowUpShort size={16} /></IconButton>
                                </div>

                            </th>
                        </tr>

                    </thead>
                    <tbody>
                        {RoleTableArray.map((item, index) => {
                            return (
                                <React.Fragment key={index}>
                                    <tr>
                                        <td>
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
                                        <td>
                                            <div className="roleTdFlex">
                                                <p className="roleTd_fontStyle">Owner</p>
                                            </div>
                                        </td>
                                        <td></td>
                                        <td>
                                            <div className="roleTdFlex">
                                                <p className="roleTdChangeOwner_fontStyle">Change Owner</p>
                                            </div>
                                        </td>

                                    </tr>
                                </React.Fragment>
                            )
                        })}


                    </tbody>

                </table>
            </div>

        </div>
    )
}
export default RoleAndPermissionTable