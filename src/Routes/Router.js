import React from 'react'
import { BrowserRouter, Route, Routes    } from "react-router-dom";
import Navbar from '../Components/Navbar/Navbar';
import Home from '../Pages/Home/Home';
import Loginlogout from '../Pages/Login/Login_logout';
import Forgot from '../Pages/Login/Forgot';
import Protected from"./Protected";
import Category from '../Pages/Category/Category';
import SubCategory from "../Pages/SubCategory/SubCategory";
import countries from "../Pages/Countries/Countries";
import State from "../Pages/States/State";
import City  from "../Pages/City/City"
import  Tax from "../Pages/Tax/Tax"
import Store from '../Pages/Store/Store';
import Brand from '../Pages/Brand/Brand';
import News from '../Pages/News/News';
import NewsCategory from "../Pages/News/NewsCategory/NewsCategory"
import NewsSubCategory from "../Pages/News/NewsSubCategory/NewsSubCategory"
import Vendor from "../Pages/Vendor/Vendor"
import Pagenotfound from "../Pages/Pagenotfound"
import Review from '../Pages/Review/Review';
import Signup from '../Pages/Signup/Signup';
import Settings from '../Pages/Settings/Settings';
import RoleAndPermission from '../Pages/Settings/RolesAndPermission/RoleAndPermission';
import ManageRole from '../Pages/Settings/RolesAndPermission/ManageRole/ManageRole';
import RoleDetailsAndPermission from '../Pages/Settings/RolesAndPermission/RoleDetailsAndPermission/RoleDetailsAndPermission';
import UserEditProfile from '../Pages/UserProfile/UserEditProfile';
import PromotionalBanner from '../Pages/PromotionalBanner/PromotionalBanner';
import PromotionalBannerList from '../Pages/PromotionalBanner/PromotionalBannerList';
import Aboutus from '../Pages/Aboutus/Aboutus';
export default function Router() {
 
 

  return (
    

      <BrowserRouter basename ="/" >
        <Navbar></Navbar>
        <Routes  >
         <Route  path="/Login" element={<Protected Component={Loginlogout } />}/>
         <Route  exact path="/" element={<Protected Component={Home } />} /> 
         <Route  path="/category" element={<Protected Component={Category } />} /> 
         <Route  path="/subCategory" element={<Protected Component={SubCategory } />} /> 
         <Route  path="/Countries" element={<Protected Component={countries} />} /> 
         <Route  path="/States" element={<Protected Component={State} />} /> 
         <Route  path="/City" element={<Protected Component={City} />} /> 
         <Route  path="/Tax" element={<Protected Component={Tax} />} /> 
         <Route  path="/aboutus" element={<Protected Component={Aboutus} />} /> 
         <Route  path="/Store" element={<Protected Component={Store} />} />   
         <Route  path="/Brand" element={<Protected Component={Brand} />} />   
         <Route  path="/News" element ={<Protected Component ={News}/>}/>
         <Route path='/Review' element={<Protected Component ={Review}/>}/>
         <Route path='/Signup' element={<Protected Component={Signup}/>} />
         <Route  path="/NewsCategory" element ={<Protected Component ={NewsCategory}/>}/>
         <Route  path="/NewsSubCategory" element ={<Protected Component ={NewsSubCategory}/>}/>
         <Route  path="/Vendor" element ={<Protected Component ={Vendor}/>}/>



        <Route path='/Settings' element={<Protected Component={Settings}/>}/>
        <Route   path='/Forgot' element={<Forgot />}/>
        <Route path='/RoleAndPermission' element={<Protected Component={RoleAndPermission}/>}/>
        <Route path='/ManageRole' element={<Protected Component={ManageRole}/>}/>
        <Route path='/RoleDetailsAndPermission' element={<Protected Component={RoleDetailsAndPermission}/>}/>
        <Route path='/UserEditProfile' element={<Protected Component={UserEditProfile}/>}/>
        {/* <Route path='/PromotionalBanner' element={<Protected Component={PromotionalBanner}/>}/> */}
        <Route path='/PromotionalBanner' element={<PromotionalBanner/>}/>
        {/* <Route path='/PromotionalBannerList' element={<Protected Component={PromotionalBannerList}/>}/> */}
        <Route path='/PromotionalBannerList' element={<PromotionalBannerList/>} />

        <Route   path='*' element={ <Pagenotfound></Pagenotfound>} />
       
        </Routes>
      </BrowserRouter>
      
  
  )
}
