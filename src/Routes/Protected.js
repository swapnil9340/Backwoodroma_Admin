import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Cookies from 'universal-cookie';
import Createcontext from "../../src/Hooks/Context/Context"
import { redirect } from 'react-router-dom'

function Protected(props) {
  const { dispatch} = useContext(Createcontext)
  const Navigate = useNavigate()
  const {Component} = props ;
 
  React.useEffect(()=>{
      const cookies = new Cookies();
      const  login=cookies.get("Token_access")
      console.log(!login)
      if(!login)
      {
       
            Navigate("/login")
            // dispatch({type:'Login',login: false})
          }
         else{
          if(login){
            Navigate("/")

          }
          // dispatch({type:'Login',login: true})
         }          
          
        } ,[Component ,Navigate ,dispatch])
  return (

    <div><Component/></div>
  )
}
export default  Protected;