import RoleDetails from "./RoleDetailAndPermissionComponent/RoleDetails"
import RolePermission from "./RoleDetailAndPermissionComponent/RolePermission"
const RoleDetailsAndPermission=()=>{
    return(
        <div className="container-fluid">
            <div className="row">
                <div className="col-10 RoleDetailsAndPermission_container">
                 <RoleDetails/>
                 <RolePermission/>
                </div>

            </div>

        </div>
    )
}
export default RoleDetailsAndPermission