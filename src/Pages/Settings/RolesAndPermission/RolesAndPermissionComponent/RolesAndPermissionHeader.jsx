import { AiOutlineLeft } from "react-icons/ai"
import { IconButton } from "@mui/material"
import LoadingButton from "@mui/lab/LoadingButton"
import Box from "@mui/material/Box"
import useStyles from "../../../../Style"
import { CiSettings } from "react-icons/ci"
import { BsPlusLg } from "react-icons/bs"
import { Link } from "react-router-dom"
const RolesAndPermissionHeader = ({firstHeading,secHeading}) => {
    const classes = useStyles()
    return (
        <div className="col-12 rolesAndPermissionHeader_MainContainer ">
            <div className=" col-md-7 rolesAndPermissionHeader_Container">
                <Link to="/RoleAndPermission"><span><IconButton ><AiOutlineLeft /></IconButton></span></Link>
                <section className="rolesAndPermissionJustify">
                    <h1 className="rolesPermissionFont">{firstHeading}</h1>
                    <p className="rolesPermissionsubHeadingFont">{secHeading}<span className="learnMoreLink">Learn more</span></p>
                </section>

            </div>
            <div className=" col-md-5 col-12 roleAndPermissionBtnContainer">
                {firstHeading!=="Manage Roles"?
               (
                <Box className={`loadingBtnBoxHeight ${classes.rolePermissionLoadingBtn}`}>
                <Link to="/ManageRole"><LoadingButton startIcon={<CiSettings size={16}/>} variant="outlined">Manage Role</LoadingButton></Link>
              </Box>
               ) :""   
            }
                  
                    <Box className={`loadingBtnBoxHeight ${classes.rolePermissionLoadingBtn}`}>
                        <LoadingButton variant="outlined" startIcon={<BsPlusLg size={14}/>}>Invite Collaborators</LoadingButton>
                    </Box>


            </div>

        </div>


    )
}
export default RolesAndPermissionHeader