import React from 'react'
import { Outlet } from 'react-router-dom';
import Sidebar from '../Components/Navbar/Sidebar';
import Navbar from '../Components/Navbar/Navbar';
const Layout = () => {
  const [sidebaropen , setsidebaropen] = React.useState(false);

  return (
    <div className='mainLayout'>
   
      <div className='d-flex w-100'>
        <Sidebar sidebaropen={sidebaropen} setsidebaropen={setsidebaropen}  />
          <div className='main_display'>
            <div className='mycontainer'>
              <Navbar sidebaropen={sidebaropen} setsidebaropen={setsidebaropen}></Navbar>
              <Outlet/>
            </div>
          </div>
      </div>
    </div>
  )
}

export default Layout