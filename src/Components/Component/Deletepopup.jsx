import React from 'react'
import { RiDeleteBin6Line } from "react-icons/ri";
import { RxCrossCircled } from "react-icons/rx";
import  ClickAwayListener  from '@mui/base/ClickAwayListener';
const Deletepopup = ({setdeleteoprn ,setsisDelete}) => {
 
  return (

     <div className='deleteconfirmpopup'>
            <ClickAwayListener onClickAway={()=>{setdeleteoprn(false)}}>
                    <div className='deletepopup'>
                        {/* <span className='closebtn'>X</span> */}
                        <div className='Iconsdelete'>
                            <span className='dangericon'> <RxCrossCircled/></span>
                        </div>
                        <p >Are You Sure You want to Delete</p>
                        <div className='d-flex gap-4'>
                            <button className='flex-fill popupbtn' onClick={()=>{ setsisDelete(true); setdeleteoprn(false)}}>Delete</button>
                            <button className='flex-fill popupbtn' onClick={()=>{ setdeleteoprn(false)}}>Cancel</button>
                        </div>
                    </div>
            </ClickAwayListener>
    </div>

  )
}

export default Deletepopup