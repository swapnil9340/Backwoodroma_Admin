import InputAdornment from "@mui/material/InputAdornment"
import useStyles from "../../../../Style"
import { TextField } from "@mui/material"
import { AiOutlineSearch } from "react-icons/ai"
import React,{useContext} from "react"
import RolePermissionArray from "./RolePermissionArray";
import Createcontext from '../../../../Hooks/Context/Context'
const RolePermission = ({rolepermision , setrolepermision ,setdescchceck ,descchceck}) => {
    const classes = useStyles()
    const { state, dispatch } = useContext(Createcontext)
    function checkedfunction(name , type='none'){
        setdescchceck(!descchceck)
        
       if(type === "All"){
        if((rolepermision[`View${name}`] && rolepermision[`Add${name}`]) && (rolepermision[`Delete${name}`] && rolepermision[`Edit${name}`])){
            setrolepermision({ ...rolepermision , [`View${name}`] : false , [`Delete${name}`] : false ,  [`Edit${name}`] : false, [`Add${name}`] :false })
        }else{
            setrolepermision({ ...rolepermision , [`View${name}`] : true , [`Delete${name}`] : true ,  [`Edit${name}`] : true, [`Add${name}`] : true })
        }
          
       }else{
           setrolepermision({ ...rolepermision , [name] : !rolepermision[name] })
       }
    }
  
    return (
        <div className="col-12 rolePermission_container">
            <form>
                <div className="col-12 rolePermisionHeaderContainer">
                    <div className=" col-7">
                        <h2 className="roleDetailsSechaedings">Permissions</h2>
                        <p className="roleDetailsSechaedings">People with this role can perform the following actions.</p>
                    </div>
                    {/* <div className=" col-5 roles_permission_Searchbar">
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
                    </div> */}

                </div>
                <div className="col-12 rolePermissionLists_container">
                    <div className="rolePermissionOrderList">
                       {
                        RolePermissionArray.map((item)=>{
                           
                            return  <div className="rolePermissionItems">
                                { !(  Object.values(state.Roles).includes(false) && item.RoleName ==="Roles" ) &&   <>  <div className="roleTitle">{item.RoleName === "SalesAndAnalytics" ? 'Sales & Analytics' : item.RoleName }</div>
                                                <div className="permissionChecked">
                                                        <div className="roleinputbox">
                                                        
                                                            <input type="checkbox"  id={`all${item.id}`} disabled={!(state.Roles[`Add${item.RoleName}`] && state.Roles[`View${item.RoleName}`] && state.Roles[`Edit${item.RoleName}`] && state.Roles[`Delete${item.RoleName}`]) }  className={!(state.Roles[`Add${item.RoleName}`] && state.Roles[`View${item.RoleName}`] && state.Roles[`Edit${item.RoleName}`] && state.Roles[`Delete${item.RoleName}`]) && "roleInputDisable"}    checked={(rolepermision[`View${item.RoleName}`] && rolepermision[`Add${item.RoleName}`]) && (rolepermision[`Delete${item.RoleName}`] && rolepermision[`Edit${item.RoleName}`])}  onClick={(e)=>checkedfunction(e.target.name , 'All')} name={`${item.RoleName}`} />
                                                            <label htmlFor={`all${item.id}`}>All</label>
                                                        </div>
                                                        <div className="roleinputbox">
                                                            <input type="checkbox" id={`view${item.id}`} disabled={!state.Roles[`View${item.RoleName}`]} className={!state.Roles[`View${item.RoleName}`] && "roleInputDisable"} checked={rolepermision[`View${item.RoleName}`]} name={`View${item.RoleName}`} value={rolepermision[`View${item.RoleName}`]} onChange={(e)=>checkedfunction(e.target.name)} />
                                                            <label htmlFor={`view${item.id}`}>View</label>

                                                        </div>
                                                        <div className="roleinputbox">
                                                            <input type="checkbox" id={`Add${item.id}`} disabled={!state.Roles[`Add${item.RoleName}`]}  className={!state.Roles[`Add${item.RoleName}`] && "roleInputDisable"} checked={rolepermision[`Add${item.RoleName}`]} name={`Add${item.RoleName}`} value={rolepermision[`Add${item.RoleName}`]} onChange={(e)=>checkedfunction(e.target.name)} />
                                                            <label htmlFor={`Add${item.id}`}>Add</label>

                                                        </div>
                                                        <div className="roleinputbox">
                                                            <input type="checkbox" id={`edit${item.id}`} disabled={!state.Roles[`Edit${item.RoleName}`]} className={!state.Roles[`Edit${item.RoleName}`] && "roleInputDisable"} checked={rolepermision[`Edit${item.RoleName}`]} name={`Edit${item.RoleName}`} value={rolepermision[`Edit${item.RoleName}`]} onChange={(e)=>checkedfunction(e.target.name)}/>
                                                            <label htmlFor={`edit${item.id}`}>Edit</label>

                                                        </div>
                                                        <div className="roleinputbox" >
                                                            <input type="checkbox" id={`delete${item.id}`} disabled={!state.Roles[`Delete${item.RoleName}`] }  className={!state.Roles[`Delete${item.RoleName}`] && "roleInputDisable"} checked={rolepermision[`Delete${item.RoleName}`]} name={`Delete${item.RoleName}`} value={rolepermision[`Delete${item.RoleName}`]} onChange={(e)=>checkedfunction(e.target.name)} />
                                                            <label htmlFor={`delete${item.id}`}>Delete</label>
                                                        </div>
                                                </div>
                                                </>
                                             
                                }
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