import React,{useEffect, useState} from "react";
import RoleDetails from "./RoleDetailAndPermissionComponent/RoleDetails"
import RolePermission from "./RoleDetailAndPermissionComponent/RolePermission"
import './RoleAndPermission.css'
import { FaAnglesLeft } from "react-icons/fa6";
import { useForm ,FormProvider} from "react-hook-form"
import Cookies from 'universal-cookie';
import Axios from 'axios';
import {useNavigate , useLocation} from 'react-router-dom'
const RoleDetailsAndPermission=()=>{
    const navigate=useNavigate()
    const location = useLocation()
    const cookies = new Cookies();
    const token_data = cookies.get('Token_access')
    const [loading , setloading] = useState(false)
    const [descchceck , setdescchceck] = useState(false)
    const [rolepermision,setrolepermision]= useState({
        "RoleTitle": "",
        "Description": '',
        "AddStore": false,
        "ViewStore": false,
        "EditStore": false,
        "DeleteStore": false,
        "AddVendor": false,
        "ViewVendor": false,
        "DeleteVendor": false,
        "EditVendor": false,
        "AddBrand": false,
        "ViewBrand": false,
        "EditBrand": false,
        "DeleteBrand": false,
        "AddUsers": false,
        "ViewUsers": false,
        "EditUsers": false,
        "DeleteUsers": false,
        "AddCustomers": false,
        "ViewCustomers": false,
        "EditCustomers": false,
        "DeleteCustomers": false,
        "AddBanners": false,
        "ViewBanners": false,
        "EditBanners": false,
        "DeleteBanners": false,
        "AddCategory": false,
        "ViewCategory": false,
        "EditCategory": false,
        "DeleteCategory": false,
        "AddSubcategory": false,
        "ViewSubcategory": false,
        "EditSubcategory": false,
        "DeleteSubcategory": false,
        "AddBlogs": false,
        "ViewBlogs": false,
        "EditBlogs": false,
        "DeleteBlogs": false,
        "AddComments": false,
        "ViewComments": false,
        "EditComments": false,
        "DeleteComments": false,
        "AddReports": false,
        "ViewReports": false,
        "EditReports": false,
        "DeleteReports": false,
        "AddInqueries": false,
        "ViewInqueries": false,
        "EditInqueries": false,
        "DeleteInqueries": false,
        "AddMessages": false,
        "ViewMessages": false,
        "EditMessages": false,
        "DeleteMessages": false,
        "AddSalesAndAnalytics": false,
        "ViewSalesAndAnalytics": false,
        "EditSalesAndAnalytics": false,
        "DeleteSalesAndAnalytics": false,
        "AddStaff": false,
        "ViewStaff": false,
        "EditStaff": false,
        "DeleteStaff": false,
        "AddRoles": false,
        "ViewRoles": false,
        "EditRoles": false,
        "DeleteRoles": false,
    })
    const method = useForm()

    function Submitdata(data){
        setloading(true)
     
            if(location?.state?.type  === 'edit'){
              


                Axios.post(`https://api.cannabaze.com/AdminPanel/Update-RolesAndPermission/${location?.state?.id}`, rolepermision ,{
                    headers: {
                        'Authorization': `Bearer ${token_data}`
                    }
            
                }).then((res)=>{
                    
                    navigate('/Roles')
                })
            }else {
                Axios.post('https://api.cannabaze.com/AdminPanel/Add-RolesAndPermission/', rolepermision ,{
                    headers: {
                        'Authorization': `Bearer ${token_data}`
                    }
            
                }).then((res)=>{
                    
                    navigate('/Roles')
                })
          
            }

        
    }

    useEffect(()=>{
       if(location?.state?.type === "edit"){

        setrolepermision(location?.state)
       }
    },[location])
   
    return(
            <div className="row">
                <div className="RoleDetailsAndPermission_container">
                    <div className=""><span className="backbtn" onClick={()=>{navigate(-1)}}><FaAnglesLeft/> Back </span> </div>
                    <FormProvider {...method}>
                        <form onSubmit={method.handleSubmit(Submitdata)}>
                            <RoleDetails setrolepermision={setrolepermision} rolepermision={rolepermision} descchceck={descchceck} />
                            <RolePermission setrolepermision={setrolepermision} rolepermision={rolepermision} setdescchceck={setdescchceck} descchceck={descchceck}/>
                            <div className="text-center py-5 gap-4">
                                <button className="topbutton" type="submit">     {location?.state?.type  === 'add'? 'Save' : 'Update'}</button>
                                <button className="topbutton text-danger mx-3">Cancel</button>
                            </div>
                        </form>
                    </FormProvider>
                </div>
            </div>
    )
}
export default RoleDetailsAndPermission