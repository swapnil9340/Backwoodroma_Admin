import React from "react"
import RolesAndPermissionHeader from "./RolesAndPermissionComponent/RolesAndPermissionHeader"
const RoleAndPermission = () => {
    return (
        <React.Fragment>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-10  RoleAndPermissionContainer">
                        <div className="col-lg-10 col-12">
                            <RolesAndPermissionHeader />
                        </div>

                    </div>

                </div>

            </div>


        </React.Fragment>
    )
}
export default RoleAndPermission