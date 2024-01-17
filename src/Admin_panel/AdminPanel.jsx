import React,{useContext} from 'react'
import DonetChartTotalsale from './DonetChartTotalsale'
import RightPenalscore from './RightPenalscore'
import StatusBarCard from './StatusBarCard'
import TotalUserLineChart from './TotalUserLineChart'
import Createcontext from '../Hooks/Context/Context'
export default function AdminPanel() {
  const { state  } = useContext(Createcontext)
console.log(state ,'state')
  return (
    <div className=''>
      <div className='row'>
        <div className=''></div>
        <div className='col-sm-6 border top' >
          <StatusBarCard></StatusBarCard>
          <div className='row'>
            <div className='col-sm-6 top admin_col'>
              <TotalUserLineChart></TotalUserLineChart>
            </div>
            <div className='col-sm-6 top admin_col'>
              <DonetChartTotalsale></DonetChartTotalsale>
            </div>
          </div>
        </div>
        <div className='col-sm-6 border top'>
          <RightPenalscore></RightPenalscore>
        </div>
      </div>
    </div>
  )
}
