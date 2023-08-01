import React from "react"
import RolesAndPermissionHeader from "./RolesAndPermissionComponent/RolesAndPermissionHeader"
import RoleAndPermissionTable from "./RolesAndPermissionComponent/RolesAndPermissionTable"
const RoleAndPermission = () => {
    return (
        <React.Fragment>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-10  RoleAndPermissionContainer">
                        <div className="col-lg-10 col-12">
                            <RolesAndPermissionHeader 
                            firstHeading={"Roles & Permissions"} 
                            secHeading={"Invite collaborators to work on this site, assign them roles and set their permissions."}
                            />
                        </div>
                        <div className="col-lg-10 col-12">
                            <RoleAndPermissionTable />
                        </div>

                    </div>

                </div>

            </div>


        </React.Fragment>
    )
}
export default RoleAndPermission