import TextField from "@mui/material/TextField"
import useStyles from "../../../../Style"
import RolePermissionArray from './RolePermissionArray'
import { useEffect } from "react"
const  RoleDetails = ({rolepermision , setrolepermision ,descchceck}) => {
    const classes = useStyles()
    function changehandle(e){
        let key = e.target.name;
        let value = e.target.value

        setrolepermision({...rolepermision  , [key] : value})
    }
   
    useEffect(()=>{

        let descrip = ''
        RolePermissionArray.forEach((item)=>{
                
                let valsd=[]
                 let num =0
                if(rolepermision[`View${item.RoleName}`]){
                
                    num++
                    valsd.push("View")
                }
                if(rolepermision[`Delete${item.RoleName}`]){
                
                    num++
                    valsd.push("Delete")
                }
                if(rolepermision[`Add${item.RoleName}`]){
                
                    num++
                    valsd.push("Add")
                }
                if(rolepermision[`Edit${item.RoleName}`]){
                
                    num++
                    valsd.push("Edit")
                }
             
                if(Boolean(num)){
                    console.log(item.RoleName)
                    if(num === 4){
                        descrip = `${rolepermision.Description} , ${item.RoleName}(All)`
                    }else{
                        descrip = `${rolepermision.Description} , ${item.RoleName}(${valsd.join()})`
                    }
            }
            setrolepermision({...rolepermision  , Description : descrip})
        })
    },[descchceck])


    
    return (
        <div className="col-12 RoleDetails_container">
            <div className="col-12 roleDetails_header">
                <h2 className="roleDetailsSechaedings">Role Details</h2>
                <p className="roleDetailsSechaedings">Role details are shown in email invites and on the dashboard.</p>
            </div>
            <div className="col-lg-6 col-12 RoleDetailInputField">
                <div className="col-12 roleDetailInputField_container">
                    <div className="col-lg-3  col-3">
                        <label className="roleLabelStyle" htmlFor="role">Role*</label>
                    </div>
                    <div className="col-lg-9  col-8">
                        <TextField className={classes.textFeilddesign} onChange={(e)=>changehandle(e)}  value={rolepermision.RoleTitle} name={'RoleTitle'} id="role" placeholder="Role" variant="outlined" fullWidth size="small" />
                    </div>


                </div>
                <div className="col-12 roleDetailInputField_container">
                    <div className=" col-lg-3  col-3">
                        <label className="roleLabelStyle" htmlFor="description">Description</label>
                    </div>
                    <div className="col-lg-9  col-8">
                        <textarea id="description" rows="3" className="Description" name="Description" value={rolepermision.Description} onChange={(e)=>changehandle(e)}></textarea>
                    </div>
                </div>


            </div>

        </div>
    )
}
export default RoleDetails