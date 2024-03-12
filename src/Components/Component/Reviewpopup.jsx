import React from 'react'
import { SlSocialDropbox } from "react-icons/sl";
import { GoStarFill } from "react-icons/go";
import { ClickAwayListener } from '@mui/base';

const Reviewpopup = ({state ,setisopen}) => {
   
    function getdateformate(date){
        return `${new Date(date).getDate()}/${new Date(date).getMonth()+1}/${new Date(date).getFullYear()}`
    }
  return (
  
    
   <div className='Reviewpopupcontainer'>
         <ClickAwayListener  onClickAway={()=>setisopen({})}>
            <div className='reviewpopupcontent'>
                <h2 className='reviewpopuptitle'><SlSocialDropbox/> {state["ProductName"] !== undefined  ? state.ProductName :state.StoreName  }</h2>
                <div className='reviewBox'>
                    <div className='reviewHeader'> <span className='reviewTitle'> {state.username} </span>  <span>{ 
                                Array(state?.rating).fill().map(()=>{
                                return <GoStarFill  size={18} color='rgba(0, 172, 79, 1)'/>
                                }) }{
                                Array(5- state?.rating).fill().map(()=>{
                                    return <GoStarFill  size={18} color='rgba(0, 172, 79, 0.41)'/>

                                })  }
                        </span>
                    </div>
                    <h3 className='reviewnm'>{state.Title}</h3>
                    <p className='reviewdescription'>{state.comment}</p>
                    <p className='reviewdate'>{getdateformate(state.created_at)}</p>
                </div>
                {
                    state?.Reply !== null &&  <div className='reviewBox'>
                    <h3 className='reviewnm'>{state.StoreName}</h3>
                    <p className='reviewdescription'>{state.Reply}</p>
                    <p className='reviewdate'>{getdateformate(state.ReplyTime)}</p>
                </div>
                }
            </div>
         </ClickAwayListener>
    </div>
  
  )
}

export default Reviewpopup