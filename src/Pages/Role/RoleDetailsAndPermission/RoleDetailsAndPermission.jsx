import RoleDetails from "./RoleDetailAndPermissionComponent/RoleDetails"
import RolePermission from "./RoleDetailAndPermissionComponent/RolePermission"
import './RoleAndPermission.css'
import { FaAnglesLeft } from "react-icons/fa6";
import {useNavigate} from 'react-router-dom'
const RoleDetailsAndPermission=()=>{
    const navigate=useNavigate()
    return(
            <div className="row">
                <div className="RoleDetailsAndPermission_container">
                    <div className=""><span className="backbtn" onClick={()=>{navigate(-1)}}><FaAnglesLeft /> Back</span> </div>
                    <RoleDetails/>
                    <RolePermission/>
                </div>
            </div>
    )
}
export default RoleDetailsAndPermission