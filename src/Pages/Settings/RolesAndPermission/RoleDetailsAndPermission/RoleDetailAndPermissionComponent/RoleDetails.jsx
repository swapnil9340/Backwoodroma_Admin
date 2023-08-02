import TextField from "@mui/material/TextField"
import useStyles from "../../../../../Style"
const RoleDetails = () => {
    const classes = useStyles()
    return (
        <div className="col-12 RoleDetails_container">
            <div className="col-12 roleDetails_header">
                <div className="col-12">
                    <h1 className="roleDetailsHeading">Role Details</h1>
                    <p className="roleDetailsSechaedings">Role details are shown in email invites and on the dashboard.</p>
                </div>

            </div>
            <div className="col-lg-6 col-12 RoleDetailInputField">
                <div className="col-12 roleDetailInputField_container">
                    <div className="col-lg-3  col-3">
                        <label className="roleLabelStyle" htmlFor="role">Role*</label>
                    </div>
                    <div className="col-lg-9  col-8">
                        <TextField className={classes.roleDetailsTextFieldStyle} id="role" placeholder="Role" variant="outlined" fullWidth size="small" />
                    </div>


                </div>
                <div className="col-12 roleDetailInputField_container">
                    <div className=" col-lg-3  col-3">
                        <label className="roleLabelStyle" htmlFor="description">Description</label>
                    </div>
                    <div className="col-lg-9  col-8">
                        <textarea id="description" rows="3"></textarea>
                    </div>
                </div>


            </div>

        </div>
    )
}
export default RoleDetails