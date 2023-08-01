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
    const [dropDownState, SetDropDownState] = React.useState(false)
    const [AllRoleDropDown, SetAllRoleDropDown] = React.useState(false)
    const [SelectedList, SetSelectedList] = React.useState(1)
    const [SelectedAllRoleList, SetSelectedAllRoleList] = React.useState(1)
    const showArrayList = [{ id: 1, item: "All" }, { id: 2, item: "Pending" }, { id: 3, item: "expired" }]
    const allRoleArrayList = [{ id: 1, item: "All Role" }, { id: 2, item: "Owner" }]
    const handleDropdown = () => {
        SetDropDownState((val) => {
            return !val
        })
    }
    const handleAllRoleDropdown = () => {
        SetAllRoleDropDown((val) => {
            return !val
        })
    }
    const Redirect = (ids) => {
        SetSelectedList(ids)
    }
    const RedirectAllRole = (ids) => {
        SetSelectedAllRoleList(ids)
    }
    const RoleTableArray = [{ name: "selnox info" }, { name: "selnox infotech" }]
    return (
        <div className="col-12  rolesAndPermissionTableContainer">
            <div className="col-12 rolesAllDropdownMaincontainer">
                <div className="col-lg-2 col-5 showDropDownContainer">
                    <span>Show</span>
                    <div className="showDropdown d-flex" onClick={handleDropdown}>
                        <span>All</span>
                        <span><RiArrowDownSLine /></span>

                    </div>
                    {dropDownState ? (
                        <div className="showAllDropdownItem border">
                            <ol className="rolesAndPermission_Ordelist">
                                {showArrayList.map((val, index) => {
                                    return (
                                        <React.Fragment>
                                            <li
                                                style={{
                                                    backgroundColor: SelectedList === val.id ? "#31B665" : "#FFFFFF",
                                                    color: SelectedList === val.id ? "#FFFFFF" : "#B1B1B1"
                                                }}
                                                className="eachRoleList" onClick={() => Redirect(val.id)}>{val.item}</li>
                                        </React.Fragment>
                                    )
                                })}
                            </ol>
                        </div>
                    ) : ""}


                </div>
                <div className="col-lg-2 col-5 showDropDownContainer">
                    <span>Show</span>
                    <div className="showDropdown d-flex" onClick={handleAllRoleDropdown}>
                        <span>All</span>
                        <span><RiArrowDownSLine /></span>

                    </div>
                    {AllRoleDropDown ? (
                        <div className="showAllDropdownItem border">
                            <ol className="rolesAndPermission_Ordelist">
                                {allRoleArrayList.map((values, index) => {
                                    return (
                                        <React.Fragment key={index}>
                                            <li
                                                style={{
                                                    backgroundColor: SelectedAllRoleList === values.id ? "#31B665" : "#FFFFFF",
                                                    color: SelectedAllRoleList === values.id ? "#FFFFFF" : "#B1B1B1"
                                                }}
                                                className="eachRoleList" onClick={() => RedirectAllRole(values.id)}>{values.item}</li>
                                        </React.Fragment>
                                    )
                                })}
                                <hr />
                                <div className="roleAndPermissionList">
                                    <ol className="roleCreatelist">
                                        <li className="roleCreateLists">
                                            <span><IconButton><BsPlusLg /></IconButton></span><span>Create new role</span>
                                        </li>
                                        <li className="roleCreateLists">
                                            <span><IconButton><CiSettings /></IconButton></span><span>Manage roles</span>
                                        </li>
                                    </ol>

                                </div>
                            </ol>

                        </div>
                    ) : ""}


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
            <div className="col-12 table-responsive table-responsive-sm">

                <table className="table">
                    <thead className="rolesAndPermissionTableheader">
                        <tr>
                            <th scope="col">
                               <div className="roleAndPermissionTh_div_flex">
                               <span>Name</span> <span><IconButton><BsArrowUpShort size={16}/></IconButton></span>
                               </div>
                               
                            </th>
                            <th scope="col">
                               <div className="roleAndPermissionTh_div_flex">

                                <span>Role</span><span><IconButton><BsArrowUpShort size={16}/></IconButton></span>
                                </div>
                            </th>
                            <th scope="col">
                               <div className="roleAndPermissionTh_div_flex">
                                
                               <span> Joined On</span> <span><IconButton><BsArrowUpShort size={16}/></IconButton></span>
                               </div>
                            </th>
                            <th scope="col">
                               <div className="roleAndPermissionTh_div_flex">
                                
                            <span>Owner</span> <span><IconButton><BsArrowUpShort size={16}/></IconButton></span>
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
                                                <p>Owner</p>
                                            </div>
                                        </td>
                                        <td></td>
                                        <td>
                                            <div className="roleTdFlex">
                                                Change Owner
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