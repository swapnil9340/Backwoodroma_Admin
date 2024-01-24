import React,{useState} from 'react'
import './Searchbar.css'
import { IoSearch } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import axios from 'axios'
import Cookies from 'universal-cookie';

const Searchbar = ({color}) => {
  const [searchtext, setSearchtext] = useState('')
  const cookies = new Cookies();
  const token_data = cookies.get('Token_access')
  React.useEffect(() => {
    const getData = setTimeout(() => {
      axios
      .post(`https://api.cannabaze.com/AdminPanel/SearchRecentOrderDashboard/`,
      {"search": searchtext}  , 
      { 
        headers:{
          'Authorization': `Bearer ${token_data}`
        }
      })
      .then((response) => {
        console.log(response.data);
      });
    }, 1000)

    return () => clearTimeout(getData)
  }, [searchtext])
  return (
    <div className='searchbar' style={{backgroundColor:color}}>
          {
            Boolean(searchtext.length === 0) &&   <span className='searchicon'><IoSearch size={22} color='#7E7E7E'/></span>
          }
      
          <input type='text' placeholder='Search' onChange={(e)=>{setSearchtext(e.target.value)}} value={searchtext}  />
          {
            Boolean(searchtext.length !== 0) && <span className='searchicon' onClick={()=>setSearchtext('')}><RxCross2 color='#7E7E7E9' size={22}/></span>
          }
        
    </div>
  )
}

export default Searchbar