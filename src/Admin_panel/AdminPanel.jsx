import React, { useContext } from 'react'
import DonetChartTotalsale from './DonetChartTotalsale'
import RightPenalscore from './RightPenalscore'
import StatusBarCard from './StatusBarCard'
import TotalUserLineChart from './TotalUserLineChart'
import Createcontext from '../Hooks/Context/Context'
export default function AdminPanel() {
  const { state } = useContext(Createcontext)
  return (

    <div className='row'>

      <div className='col-12 ' >
        <StatusBarCard></StatusBarCard>
 
      </div>
      {/* <div className='col-sm-6  top'>
        {/* <RightPenalscore></RightPenalscore> */}
      {/* </div> */} 
    </div>

  )
}
