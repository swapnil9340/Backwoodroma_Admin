import React from 'react'
import { Outlet } from 'react-router-dom';
import Sidebar from '../Components/Navbar/Sidebar';
import Navbar from '../Components/Navbar/Navbar';
const Layout = () => {
  const [sidebaropen , setsidebaropen] = React.useState(false);

  return (
    <div className='mainLayout'>
      <Navbar></Navbar>
      <div className='d-flex w-100'>
        <Sidebar sidebaropen={sidebaropen} setsidebaropen={setsidebaropen}  />
          <div className='flex-fill'>  <Outlet/>  </div>
      </div>
    </div>
  )
}

export default Layout