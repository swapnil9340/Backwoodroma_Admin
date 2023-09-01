import InputAdornment from "@mui/material/InputAdornment"
import useStyles from "../../../../../Style"
import { TextField } from "@mui/material"
import { AiOutlineSearch } from "react-icons/ai"
import { FiChevronRight } from "react-icons/fi"
import RolePermissionListToggle from "./RolePermissionListToggle"
import React from "react"
import RolePermissionArray from "./RolePermissionArray"
const RolePermission = () => {
    let PermissionSum=0;
    for(let i=0;i<RolePermissionArray.length;i++){
        PermissionSum+=RolePermissionArray[i].key2.length
    }
    const [Values, SetValues] = React.useState([])

    const classes = useStyles()
    return (
        <div className="col-12 rolePermission_container">
            <form>
                <div className="col-12 rolePermisionHeaderContainer">
                    <div className="col-lg-9 col-md-8 col-6">
                        <h1 className="roleDetailsSechaedings">Permissions {PermissionSum}</h1>
                        <p className="roleDetailsSechaedings">People with this role can perform the following actions.</p>
                    </div>
                    <div className="col-lg-3 col-md-4 col-6 roles_permission_Searchbar">
                        <TextField
                            className={`${classes.RoleAndPermissionSearchBarTextfield}`}
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
                <div className="col-12 rolePermissionLists_container">
                    <ol className="rolePermissionOrderList">
                        {RolePermissionArray.map((items, index) => {
                            return (
                                <li className="rolePermissionListsStyles" key={index}  >
                                    <div className="rolePermissionIcon_listContainer" onClick={() => SetValues({...Values, [items.id]:!Values[items.id]})}>
                                        <span><FiChevronRight color="31B665" size={18} /></span>
                                        <span className="rolePermissionListName">{items.RoleName}</span>
                                    </div>
                                    {
                                        Values[items.id] === true && <RolePermissionListToggle RolePermissionArray={items.key2} />
                                    }



                                </li>
                            )
                        })}
                    </ol>

                </div>
            </form>
        </div>
    )
}
export default RolePermission