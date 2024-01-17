import React from 'react'
import './Searchbar.css'
import { FaSearch } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";

const Searchbar = () => {
  return (
    <div className='searchbar'>
        <span className='searchicon'><FaSearch size={25}/></span>
          <input type='text' placeholder='Search' />
        <span className='searchicon'><RxCross2  size={25}/></span>
    </div>
  )
}

export default Searchbar