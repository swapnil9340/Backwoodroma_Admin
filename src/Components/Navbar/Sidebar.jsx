import React, { useState } from "react";
import { NavLink  } from "react-router-dom";
import { FaHouseUser  } from "react-icons/fa";
import {  MdLocalActivity  ,MdPreview  , MdStorefront} from "react-icons/md"
import { AiTwotoneSetting ,AiOutlineAppstore} from "react-icons/ai"
import {GrProductHunt} from "react-icons/gr";
import {FiPackage} from "react-icons/fi";
import { IoAnalytics } from "react-icons/io5";
import Icon from "@material-ui/core/Icon";
import './Sidebar.css';
import useStyles from "../../Style"
const Sidebar = ({sidebaropen , setsidebaropen}) => {

  const [openDropdown, setOpendropdown]= useState('')
  const classes = useStyles()
const checkActive = (match, location) => {
  if(!location) return false;
  const {pathname} = location;
  return pathname === "/";
}
function closebar(){
if(window.innerWidth < 994){
setsidebaropen(false)
}
}
function manuchange(value){
  if(openDropdown=== ""){
      setOpendropdown(value)
  }else if( openDropdown === value){
      setOpendropdown('')
  }else{
      setOpendropdown(value)
  }
  
}

  function iconOnly(){
    
  }
  return (
    <div className={`sidebar ${sidebaropen ? "opensidebar" : ''}` }>

        <ul>
              <NavLink
                  to={'/'}
                    onClick={closebar}
                  isActive={checkActive}
              >
                  <li button className={ ' active_bar '}>
                  
                      <Icon
                        className={classes.sidebarIcon + ''}
                      >  <AiOutlineAppstore/>
                      </Icon>
                  <span
                      primary={'Dashboard'}
                      className={" sidebar_text"} >Dashboard</span>
                  </li>
              </NavLink>
            
                <li button className={`${openDropdown === "Category"? "sidebarDropdown dropright": "sidebarDropdown dropdownarroe"}`} onClick={()=>{  manuchange('Category')}}>
                
                        <Icon className={ classes.sidebarIcon + ''} ><GrProductHunt></GrProductHunt>  </Icon>
                        <span className={"sidebar_text "}>Category</span>
                

                </li>
                <div  className={`submanusidebar ${openDropdown === "Category"? "d-block": "d-none"}`}>
                    <NavLink
                        to={'/category'}
                        onClick={closebar}
                        activeClassName="active"
                    >
                        <li button className={ ' active_bar suboption'}>
                        
                       
                        <span className={" sidebar_text"}
                        >Category</span>
                        </li>
                    </NavLink>
                    <NavLink
                        to={'/subCategory'}
                        onClick={closebar}
                        activeClassName="active"
                    >
                        <li button className={ ' active_bar  suboption'}>
                        
                            {/* <Icon
                            className={ classes.sidebarIcon + ' sidebar_text'}
                            >
                            <FaRegUser ></FaRegUser>
                            </Icon> */}
                        <span className={" sidebar_text"}
                        >Sub Category</span>
                        </li>
                    </NavLink>
                    
                  
                </div>  
                <li button className={`${openDropdown=== "Location"? "sidebarDropdown dropright": "sidebarDropdown dropdownarroe"} ''`} onClick={()=>{  manuchange("Location") }}>
                    <Icon className={ classes.sidebarIcon + ''} ><IoAnalytics></IoAnalytics>  </Icon>
                    <span className={"sidebar_text"}>Location</span>
                </li>
                <div  className={`submanusidebar ${openDropdown=== "Location"? "d-block": "d-none"}`}>
                    <NavLink
                        to={'/Countries'}
                        onClick={closebar}
                        activeClassName="active"
                    >
                        <li button className={ ' active_bar  suboption'}>
                        
                            {/* <Icon
                            className={ classes.sidebarIcon + ' sidebar_text'}
                            >
                            <FaRegUser ></FaRegUser>
                            </Icon> */}
                            <span className={" sidebar_text"}>Country</span>
                        </li>
                    </NavLink>
                    <NavLink
                        to={'/States'}
                        onClick={closebar}
                        activeClassName="active"
                    >
                        <li button className={ ' active_bar suboption'}>
                        
                            {/* <Icon
                            className={ classes.sidebarIcon + ' sidebar_text'}
                            >
                            <FaClipboardList ></FaClipboardList>
                            </Icon> */}
                        <span className={" sidebar_text"}
                        >State</span>
                        </li>
                    </NavLink>
                    <NavLink
                        to={'/City'}
                        onClick={closebar}
                        activeClassName="active"
                    >
                        <li button className={ ' active_bar suboption'}>
                        
                        
                        <span className={" sidebar_text"} >City</span>
                        </li>
                    </NavLink>
                
                </div>
              <NavLink
                  to={'/Store'}
                  onClick={closebar}
                  
                  isActive={checkActive}
                  activeClassName="active-link"
              >
                  <li button className={ ' active_bar '}>
                  
                      <Icon
                        className={classes.sidebarIcon + ' '}
                      >
                      <FiPackage/>
                      </Icon>
                  <span
                    
                      className={ " sidebar_text"}
                  >Store</span>
                  </li>
              </NavLink>
              <NavLink
                  to={'/Brand'}
                  onClick={closebar}
                  
                  isActive={checkActive}
                  activeClassName="active-link"
              >
                  <li button className={ ' active_bar '}>
                  
                      <Icon
                        className={classes.sidebarIcon + ''}
                      >
                      <MdLocalActivity></MdLocalActivity>
                      </Icon>
                  <span
                    
                      className={ " sidebar_text"}
                      
                  >Brand</span>
                  </li>
              </NavLink>
              <NavLink
                  to={'/Tax'}
                  onClick={closebar}
                  activeClassName="active"
              >
                  <li button className={ ' active_bar '}>
                  
                      <Icon
                        className={classes.sidebarIcon + ''}
                      >
                        <MdStorefront></MdStorefront>
                      </Icon>
                  <span
                      
                      className={ ' sidebar_text'}
                  >Tax</span>
                  </li>
              </NavLink>
              <NavLink
                  to={'/Signup'}
                  onClick={closebar}
                  activeClassName="active"
              >
                  <li button className={ ' active_bar '}>
                  
                      <Icon
                        className={classes.sidebarIcon + ''}
                      >
                        <AiTwotoneSetting></AiTwotoneSetting >
                      </Icon>
                  <span
                    
                      className={ ' sidebar_text'}
                      disableTypography={true}
                  >Signup</span>
                  </li>
              </NavLink>
              <NavLink
                  to={'/Vendor'}
                  onClick={closebar}
                  activeClassName="active"
              >
                  <li button className={ ' active_bar '}>
                  
                      <Icon
                        className={classes.sidebarIcon + ''}
                      >
                        <AiTwotoneSetting></AiTwotoneSetting >
                      </Icon>
                  <span
                    
                      className={ ' sidebar_text'}
                      disableTypography={true}
                  >Vendor</span>
                  </li>
              </NavLink>
              <NavLink
                  to={'/PromotionalBannerList'}
                  onClick={closebar}
                  activeClassName="active"
              >
                  <li button className={ ' active_bar '}>
                  
                      <Icon
                        className={classes.sidebarIcon + ''}
                      >
                        <AiTwotoneSetting></AiTwotoneSetting >
                      </Icon>
                  <span
                    
                      className={ ' sidebar_text'}
                      disableTypography={true}
                  >Banner</span>
                  </li>
              </NavLink>
                  <li button className={`${openDropdown=== "News"? "sidebarDropdown dropright": "sidebarDropdown dropdownarroe"} ''`} onClick={()=>{  manuchange("News") }}>
                  
                          <Icon className={ classes.sidebarIcon + ''} ><FaHouseUser></FaHouseUser>  </Icon>
                          <span className={"sidebar_text"}>News</span>
                  

                  </li>
                  <div  className={`submanusidebar ${openDropdown=== "News"? "d-block": "d-none"}`}>
                      <NavLink
                          to={'/News'}
                          onClick={closebar}
                          activeClassName="active"
                      >
                          <li button className={ ' active_bar  suboption'}>
                          
                              {/* <Icon
                              className={ classes.sidebarIcon + ' sidebar_text'}
                              >
                              <FaRegUser ></FaRegUser>
                              </Icon> */}
                          <span className={" sidebar_text"}
                          >All News</span>
                          </li>
                      </NavLink>
                      <NavLink
                          to={'/Review'}
                          onClick={closebar}
                          activeClassName="active"
                      >
                          <li button className={ ' active_bar suboption'}>
                          
                              {/* <Icon
                              className={ classes.sidebarIcon + ' sidebar_text'}
                              >
                              <FaClipboardList ></FaClipboardList>
                              </Icon> */}
                          <span className={" sidebar_text"}
                          >Review</span>
                          </li>
                      </NavLink>
                      <NavLink
                          to={'/aboutus'}
                          onClick={closebar}
                          activeClassName="active"
                      >
                          <li button className={ ' active_bar suboption'}>
                          
                          
                          <span className={" sidebar_text"}
                          >About us</span>
                          </li>
                      </NavLink>
                      <NavLink
                          to={'/NewsCategory'}
                          onClick={closebar}
                          activeClassName="active"
                      >
                          <li button className={ ' active_bar suboption'}>
                          
                          
                          <span className={" sidebar_text"}
                          >Category</span>
                          </li>
                      </NavLink>
                      <NavLink
                          to={'/NewsSubCategory'}
                          onClick={closebar}
                          activeClassName="active"
                      >
                          <li button className={ ' active_bar suboption'}>
                          
                          
                          <span className={" sidebar_text"}
                          >Sub Category</span>
                          </li>
                      </NavLink>
                  </div>

                    <li button className={`${openDropdown=== "Role"? "sidebarDropdown dropright": "sidebarDropdown dropdownarroe"} ''`} onClick={()=>{  manuchange("Role") }}>
                  
                  <Icon className={ classes.sidebarIcon + ''} ><FaHouseUser></FaHouseUser>  </Icon>
                  <span className={"sidebar_text"}>Staff</span>
          

                    </li>
                    <div  className={`submanusidebar ${openDropdown=== "Role"? "d-block": "d-none"}`}>
                        <NavLink
                            to={'/addstaff'}
                            onClick={closebar}
                            activeClassName="active"
                        >
                            <li button className={ ' active_bar  suboption'}>
                            
                                {/* <Icon
                                className={ classes.sidebarIcon + ' sidebar_text'}
                                >
                                <FaRegUser ></FaRegUser>
                                </Icon> */}
                            <span className={" sidebar_text"}
                            >Add Staff</span>
                            </li>
                        </NavLink>
                        <NavLink
                            to={'/allstaff'}
                            onClick={closebar}
                            activeClassName="active"
                        >
                            <li button className={ ' active_bar suboption'}>
                            
                                {/* <Icon
                                className={ classes.sidebarIcon + ' sidebar_text'}
                                >
                                <FaClipboardList ></FaClipboardList>
                                </Icon> */}
                            <span className={" sidebar_text"}
                            >All Stall</span>
                            </li>
                        </NavLink>
                        <NavLink
                            to={'/Roles'}
                            onClick={closebar}
                            activeClassName="active"
                        >
                            <li button className={ ' active_bar suboption'}>
                            
                            
                            <span className={" sidebar_text"}
                            >Role</span>
                            </li>
                        </NavLink>
                    
                    </div>
              <NavLink
                  to={'/Settings'}
                  onClick={closebar}
                  activeClassName="active"
              >
                  <li button className={ ' active_bar '}>
                  
                      <Icon
                      className={ classes.sidebarIcon + ''}
                      >
                        <MdPreview></MdPreview>
                      </Icon>
                  <span className={" sidebar_text"}
                  >Settings</span>
                  </li>
              </NavLink>
            
        </ul>
    </div>
  )
}

export default Sidebar