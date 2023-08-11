import React from "react"
import { BiUser } from "react-icons/bi"
<<<<<<< HEAD
import {  useNavigate } from "react-router-dom"
=======

import {  useNavigate } from "react-router-dom"



>>>>>>> 5499e7956 (qweqew)
const Settings = () => {
    const navigate= useNavigate()
    const array = [{ head: "Roles and Permission" }]

    return (
        <React.Fragment>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-10 Settings_container ">
                        <div className="col-10 settingHeading_contentContainer">

                            <div className="col-12 settings_heading_container">
                                <h1 className="settingsHeadings">Settings</h1>

                            </div>
                            <div className="col-12 settingsAllCard_container">
                                {array.map((items, index) => {
                                    return (
                                        <React.Fragment key={index}>
                                 
                                            <div className="col-xl-3 col-lg-4 col-md-6 col-12 rolesAndContainerCard  mx-2 my-2" onClick={()=>navigate("/RoleAndPermission")}>
                                                <div className="col-12 d-flex rolesCard">
                                                    <section>
                                                        <span><BiUser /></span>
                                                    </section>
                                                    <section>
                                                        <h1 className="roleHeadingFont">{items.head}</h1>
                                                        <p>Invite people to work on this site and set their permission</p>

                                                    </section>

                                                </div>

                                            </div>
                                         
                                        </React.Fragment>
                                    )
                                })}


                            </div>
                        </div>




                    </div>

                </div>

            </div>

        </React.Fragment>
    )
}
export default Settings