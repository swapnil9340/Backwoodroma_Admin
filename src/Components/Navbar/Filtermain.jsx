import React, { useState ,useContext } from 'react'
import { RiFilter3Fill } from "react-icons/ri";
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import './Sidebar.css';
import {
  addDays
} from "date-fns";
import { DateRangePicker , defaultStaticRanges } from 'react-date-range';
import { ClickAwayListener } from '@material-ui/core';
import Createcontext from "../../Hooks/Context/Context" 
const Filtermain = () => {
  const { state ,dispatch } = useContext(Createcontext)
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [value, setValue] = useState(state.datesSelect)
  const [dpopen, setDpopen] = useState(false)
  const [dateopen, setDateopen] = useState(false)
  const [daterange, Setdaterange] = useState({
    startDate: new Date(),
    endDate:  addDays(new Date(), 7),
    key: 'selection',
  })

  function handlechnage(e) {
    setValue(e)
    if (e === "Customics") {
      setDateopen(true)
      dispatch({ type: 'datesSelect', datesSelect: e })
    } else {
      setDateopen(false)
      
    dispatch({ type: 'datesSelect', datesSelect: e })
    }
  }

  //  let selectionRange = {
  //   startDate: new Date(),
  //   endDate: new Date(),
  //   key: 'selection',
  // }

  function handleSelect(ranges) {
    console.log(ranges)
    Setdaterange({
      startDate: ranges?.selection?.startDate,
      endDate: ranges?.selection?.endDate,
      key: 'selection', }
    )
    function convert(str) {
      var date = new Date(str),
        mnth = ("0" + (date.getMonth() + 1)).slice(-2),
        day = ("0" + date.getDate()).slice(-2);
      return [date.getFullYear(), mnth, day].join("-");
    }
    dispatch({ type: 'CustomeStartDate', CustomeStartDate: convert(ranges?.selection?.startDate)})
    dispatch({ type: 'CustomeEndDate', CustomeEndDate: convert(ranges?.selection?.endDate)})

  }
  
  const handleClickAway = () => { setDpopen(false); setDateopen(false) }
  return (
    <ClickAwayListener onClickAway={handleClickAway}>
      <div className='mainfilter'>


        <div className='mainfilterbtn' onClick={() => { setDpopen(!dpopen); setDateopen(false) }}><span className='filterIcon'><RiFilter3Fill /></span> Filter </div>
        <div className='mainfilterdropdown' style={{ display: dpopen ? 'inline-block' : "none" }} >
          <ul>
            <li onClick={() => handlechnage("Today")}><input type='checkbox' checked={value === 'Today'} /> Today </li>
            <li onClick={() => handlechnage("week")}><input type='checkbox' checked={value === 'week'} /> Week </li>
            <li onClick={() => handlechnage("Months")}><input type='checkbox' checked={value === 'Months'} /> Months</li>
            <li onClick={() => handlechnage("Year")}><input type='checkbox' checked={value === 'Year'} /> Year</li>
            <li onClick={() => handlechnage("Customics")}><input type='checkbox' checked={value === 'Customics'} /> Customice</li>
          </ul>
        </div>
        <div className='calenderdropdown' style={{ display: dateopen ? 'inline-block' : "none" }} >

          <DateRangePicker
            ranges={[daterange]}
            onChange={handleSelect}
            showSelectionPreview={true}
            moveRangeOnFirstSelection={false}
            maxDate={new Date()}
            months={2}
            direction='horizontal'
          />
        </div>
      </div>
    </ClickAwayListener>

  )
}

export default Filtermain