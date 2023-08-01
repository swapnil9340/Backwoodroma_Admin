import LoadingButton from "@mui/lab/LoadingButton"
import Box from "@mui/material/Box"
import { BiDotsHorizontalRounded } from "react-icons/bi"
import useStyles from "../../../../../Style"
import { IconButton } from "@mui/material"
import React from "react"
const RoleType = ({GeneralRoleArray,role}) => {
    const classes = useStyles()
    // const GeneralRoleArray = [
    //     {
    //         items: "Admin(Co owner)",
    //         description: "Has access to edit, publish and manage site, including billing, payment & financial info, domains and inviting people, but can't delete or transfer the site.",
    //         request: "Not assigned"
    //     },
    //     {
    //         items: "Website manager",
    //         description: "Has access to manage, edit & publish site, but cannot manage billing, delete, duplicate or transfer site.",
    //         request: "Not assigned"

    //     },
    //     {
    //         items: "Back Office Manager",
    //         description: "Can access the Dashboard to manage site settings and apps but cannot edit the site.",
    //         request: "Not assigned"

    //     }

    // ]
    return (
        <div className="col-12 GeneralRole_container">
            <div className="col-12 ">
                <p className="generalRoleHeadings">{role}</p>
            </div>
            <ol className="generalOl">
                {GeneralRoleArray.map((val, index) => {
                    return (
                        <React.Fragment key={index}>
                            <li className="generalListHeight">

                                <div className="col-12 generalRole_listContainer">
                                    <div className="col-lg-7 col-6 generalRoleListLeftList">
                                        <p className="generalRoleListHeading_Style">{val.items}</p>
                                        <span className="generalRoleListDes_style">{val.description}</span>
                                    </div>
                                    <div className="col-lg-2 col-3 generalListCenter">
                                        <p className="requestNotAssigned">{val.request}</p>
                                    </div>
                                    <div className="col-lg-3 col-3    generalBtn_ThreeDot">
                                       
                                            <Box className={classes.generalRoleViewBTn}>
                                                <LoadingButton variant="outlined">View</LoadingButton>
                                            </Box>
                                    

                                            <IconButton sx={{background:"#FFFFFF"}}><BiDotsHorizontalRounded color="#31B665" size={16}/></IconButton>
                                

                                    </div>

                                </div>
                            </li>
                        </React.Fragment>
                    )
                })}
            </ol>

        </div>
    )
}
export default RoleType