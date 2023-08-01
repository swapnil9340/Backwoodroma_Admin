import { AiOutlineLeft } from "react-icons/ai"
import { IconButton } from "@mui/material"
import LoadingButton from "@mui/lab/LoadingButton"
import Box from "@mui/material/Box"
import useStyles from "../../../../Style"
const RolesAndPermissionHeader = () => {
    const classes = useStyles()
    return (
        <div className="col-12 rolesAndPermissionHeader_MainContainer ">
            <div className=" col-7 rolesAndPermissionHeader_Container">
                <span><IconButton ><AiOutlineLeft /></IconButton></span>
                <section className="rolesAndPermissionJustify">
                    <h1 className="rolesPermissionFont">Roles & Permissions</h1>
                    <p className="rolesPermissionsubHeadingFont">Invite collaborators to work on this site, assign them roles and set their permissions.<span className="learnMoreLink">Learn more</span></p>
                </section>

            </div>
            <div className=" col-5 roleAndPermissionBtnContainer">
                {/* <div className="col-6"> */}
                    <Box className={`loadingBtnBoxHeight ${classes.rolePermissionLoadingBtn}`}>
                        <LoadingButton variant="outlined">Manage Role</LoadingButton>
                    </Box>
                {/* </div> */}
                {/* <div className="col-6"> */}
                    <Box className={`loadingBtnBoxHeight ${classes.rolePermissionLoadingBtn}`}>
                        <LoadingButton variant="outlined">Invite Collaborators</LoadingButton>
                    </Box>
                {/* </div> */}


            </div>

        </div>


    )
}
export default RolesAndPermissionHeader