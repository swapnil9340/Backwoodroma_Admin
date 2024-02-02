import React from 'react'
import  ClickAwayListener  from '@mui/base/ClickAwayListener';
import { IoCheckmarkCircleOutline } from "react-icons/io5";

const Successfullypopup = ({setsucsesopen}) => {
    const [isopen , setisopen] = React.useState(false)
  return (
    <div>
       
    <ClickAwayListener onClickAway={()=>{setsucsesopen(false)}}>
        <div className='sucsconfirmpopup'>
            <div className='sucspopup'>
                {/* <span className='closebtn'>X</span> */}
                <div className='Iconssucs'>
                    <span className='dangericon'> <IoCheckmarkCircleOutline /></span>
                </div>
                <p >successfully your Changes has been saved</p>
                <div className='d-flex gap-4'>
                    {/* <button className='flex-fill popupbtn'>sucs</button> */}
                    <button className='flex-fill popupbtn' onClick={()=>{setsucsesopen(false)}}>Done</button>
                </div>
            </div>
        </div>
    </ClickAwayListener>

</div>
  )
}

export default Successfullypopup