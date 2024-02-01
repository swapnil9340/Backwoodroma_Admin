import React,{useState} from 'react'
import './Searchbar.css'
import { IoSearch } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import axios from 'axios'
import Cookies from 'universal-cookie';

const Searchbar = ({color , searchtext ,searchdata=[],type, setSearchtext}) => {
  const cookies = new Cookies();
  const token_data = cookies.get('Token_access')
 
  return (
    <div className='searchbar' style={{backgroundColor:color}}>
          {
            Boolean(searchtext?.length === 0) &&   <span className='searchicon'><IoSearch size={22} color='#7E7E7E'/></span>
          }
      
          <input type='text' placeholder='Search' onChange={(e)=>{setSearchtext(e.target.value)}} value={searchtext}  />
          {
            Boolean(searchtext?.length !== 0) && <span className='searchicon' onClick={()=>setSearchtext('')}><RxCross2 color='#7E7E7E9' size={22}/></span>
          }
        <div className='searchList'>
           {/* <ul>
           {searchdata.length !== 0 &&
                searchdata?.map((items)=>{
                  return  <li> 
                  <dvi className='searchbarlist'>
                    <div className='Listimage'>
                      <img src={items.IdCard}/>
                    </div>
                    <div className='listtext'>
                      <h4 className='d-flex justify-content-between align-items-center'>
                        <span>{items.username}</span>
                        <span>#{items.OrderId}</span>
                      </h4>
                      <p>{items.SellerName}</p>
                    </div>
                  </dvi>
                </li>
                })
           }
           
           
           </ul> */}
        </div>
    </div>
  )
}

export default Searchbar