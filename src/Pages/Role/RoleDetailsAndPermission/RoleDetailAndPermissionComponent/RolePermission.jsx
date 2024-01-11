import InputAdornment from "@mui/material/InputAdornment"
import useStyles from "../../../../Style"
import { TextField } from "@mui/material"
import { AiOutlineSearch } from "react-icons/ai"
import React from "react"
import RolePermissionArray from "./RolePermissionArray"
const RolePermission = () => {
    console.log(RolePermissionArray ,'RolePermissionArray')
    // let PermissionSum=0;
    // for(let i=0;i<RolePermissionArray.length;i++){
    //     PermissionSum+=RolePermissionArray[i].key2.length
    // }
    const [Values, SetValues] = React.useState([])

    const classes = useStyles()
    return (
        <div className="col-12 rolePermission_container">
            <form>
                <div className="col-12 rolePermisionHeaderContainer">
                    <div className=" col-7">
                        <h2 className="roleDetailsSechaedings">Permissions</h2>
                        <p className="roleDetailsSechaedings">People with this role can perform the following actions.</p>
                    </div>
                    <div className=" col-5 roles_permission_Searchbar">
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
                    <div className="rolePermissionOrderList">
                       {
                        RolePermissionArray.map((item)=>{
                            return <div className="rolePermissionItems">
                                <div className="roleTitle">{item.RoleName}</div>
                                <div className="permissionChecked">
                                        <div className="roleinputbox">
                                           
                                            <input type="checkbox" id={`all${item.id}`}  name={`all${item.id}`} />
                                            <label htmlFor={`all${item.id}`}>All</label>
                                        </div>
                                        <div className="roleinputbox">
                                            <input type="checkbox" id={`view${item.id}`} name={`view${item.id}`} />
                                            <label htmlFor={`view${item.id}`}>View</label>

                                        </div>
                                        <div className="roleinputbox">
                                            <input type="checkbox" id={`Add${item.id}`} name={`Add${item.id}`} />
                                            <label htmlFor={`Add${item.id}`}>Add</label>

                                        </div>
                                        <div className="roleinputbox">
                                            <input type="checkbox" id={`edit${item.id}`} name={`edit${item.id}`} />
                                            <label htmlFor={`edit${item.id}`}>Edit</label>

                                        </div>
                                        <div className="roleinputbox">
                                            <input type="checkbox" id={`delete${item.id}`} name={`delete${item.id}`} />
                                            <label htmlFor={`delete${item.id}`}>Delete</label>

                                        </div>
                                      
                                </div>
                            </div>
                        })
                       }
                    </div>

                </div>
            </form>
        </div>
    )
}
export default RolePermission