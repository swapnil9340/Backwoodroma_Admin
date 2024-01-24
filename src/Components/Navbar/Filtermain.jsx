import React,{useState} from 'react'
import { RiFilter3Fill } from "react-icons/ri";
import 'react-date-range/dist/styles.css'; 
import 'react-date-range/dist/theme/default.css';
import './Sidebar.css';
import { DateRangePicker } from 'react-date-range';
import { ClickAwayListener } from '@material-ui/core';

const Filtermain = () => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [value , setValue] = useState('Months')
  const [dpopen , setDpopen] = useState(false)
  const [dateopen , setDateopen] = useState(false)
  const [daterange , Setdaterange] = useState({
    startDate: new Date(),
    endDate: new Date(),
    key: 'selection',
  })

 function handlechnage(e){
   setValue(e)
   if(e=== "Customics"){
    setDateopen(true)
   }else{
    setDateopen(false)
   }
 }

//  let selectionRange = {
//   startDate: new Date(),
//   endDate: new Date(),
//   key: 'selection',
// }

function handleSelect(ranges){
  console.log(ranges);
  Setdaterange  ( {
    startDate: ranges?.selection?.startDate,
    endDate: ranges?.selection?.endDate,
    key: 'selection',
    }
    )
}
 console.log(value)
 const handleClickAway =()=>{setDpopen(false); setDateopen(false)}
  return (
    <ClickAwayListener onClickAway={handleClickAway}>
      <div className='mainfilter'>
    

          <div className='mainfilterbtn' onClick={()=>{setDpopen(!dpopen); setDateopen(false) }}><span className='filterIcon'><RiFilter3Fill /></span> Filter </div>
          <div className='mainfilterdropdown' style={{display: dpopen? 'inline-block' : "none"}} >
            <ul>
              <li onClick={()=>handlechnage("Today")}><input type='checkbox' checked={value === 'Today'}  /> Today </li>
              <li onClick={()=>handlechnage("week")}><input type='checkbox' checked={value === 'week'}  /> Week </li>
              <li onClick={()=>handlechnage("Months")}><input type='checkbox' checked={value === 'Months'}/> Months</li>
              <li onClick={()=>handlechnage("Year")}><input type='checkbox' checked={value === 'Year'}  /> Year</li>
              <li onClick={()=>handlechnage("Customics")}><input type='checkbox' checked={value === 'Customics'}  /> Customice</li>
            </ul>
          </div>
          <div className='calenderdropdown' style={{display: dateopen ? 'inline-block' : "none"}} >
          
              <DateRangePicker
        ranges={[daterange]}
        onChange={handleSelect}
          showMonthAndYearPickers={false}
          navigatorRenderer={()=>{ return false}}
          maxDate={new Date()}
        
        />
          </div>
      </div>
    </ClickAwayListener>

  )
}

export default Filtermain