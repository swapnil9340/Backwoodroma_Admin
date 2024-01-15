import React,{useState} from "react";
import RoleDetails from "./RoleDetailAndPermissionComponent/RoleDetails"
import RolePermission from "./RoleDetailAndPermissionComponent/RolePermission"
import './RoleAndPermission.css'
import { FaAnglesLeft } from "react-icons/fa6";
import Cookies from 'universal-cookie';

import Axios from 'axios';
import {useNavigate} from 'react-router-dom'
const RoleDetailsAndPermission=()=>{
    const navigate=useNavigate()
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
        "DeleteStaff": false
    })
    function Submitdata(){
        setloading(true)
        if(Boolean(rolepermision?.RoleTitle?.length)){
          Axios.post('https://api.cannabaze.com/AdminPanel/Add-RolesAndPermission/', rolepermision ,{
            headers: {
                'Authorization': `Bearer ${token_data}`
              }
    
           }).then((res)=>{
              console.log(res ,'res')  
              navigate('/Roles')
           })
        }else{

        }
    }
    return(
            <div className="row">
                <div className="RoleDetailsAndPermission_container">
                    <div className=""><span className="backbtn" onClick={()=>{navigate(-1)}}><FaAnglesLeft/> Back </span> </div>
                    <RoleDetails setrolepermision={setrolepermision} rolepermision={rolepermision} descchceck={descchceck} />
                    <RolePermission setrolepermision={setrolepermision} rolepermision={rolepermision} setdescchceck={setdescchceck} descchceck={descchceck}/>
                    <div className="text-center py-5 gap-4">
                        <button className="topbutton" onClick={Submitdata}>Save</button>
                        <button className="topbutton text-danger mx-3">Cancel</button>
                    </div>
                </div>
            </div>
    )
}
export default RoleDetailsAndPermission