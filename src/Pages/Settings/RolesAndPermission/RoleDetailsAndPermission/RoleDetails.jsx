import TextField from "@mui/material/TextField"
const RoleDetails = () => {
    return (
        <div className="col-12 RoleDetails_container">
            <div className="col-12 roleDetails_header">
                <div className="col-12">
                    <h1>Role Details</h1>
                    <p>Role details are shown in email invites and on the dashboard.</p>
                </div>
               
            </div>
            <div className="col-12 RoleDetailInputField">
                    <div className="col-12 roleDetailInputField_container">
                        <label htmlFor="role">Role</label>
                        <div className="col-6">
                            <TextField id="role" placeholder="Role" variant="outlined" fullWidth size="small"/>
                        </div>

                    </div>

                </div>

        </div>
    )
}
export default RoleDetails