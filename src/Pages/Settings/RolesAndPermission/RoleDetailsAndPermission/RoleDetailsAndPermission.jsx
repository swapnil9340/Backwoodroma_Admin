import RoleDetails from "./RoleDetailAndPermissionComponent/RoleDetails"
import RolePermission from "./RoleDetailAndPermissionComponent/RolePermission"
import RolesAndPermissionHeader from "../RolesAndPermissionComponent/RolesAndPermissionHeader"

const RoleDetailsAndPermission=()=>{
    return(
    
             
            <div className="row">
         
                <div className="RoleDetailsAndPermission_container">
                <div className="col-12 my-5">
                <RolesAndPermissionHeader firstHeading={"Admin (Co-Owner)"}
                      /> 
                </div>
                 <RoleDetails/>
                 <RolePermission/>
                </div>

            </div>

      
    )
}
export default RoleDetailsAndPermission