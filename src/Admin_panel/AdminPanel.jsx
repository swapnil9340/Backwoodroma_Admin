import React, { useContext } from 'react'
import DonetChartTotalsale from './DonetChartTotalsale'
import RightPenalscore from './RightPenalscore'
import StatusBarCard from './StatusBarCard'
import ReactApexChart from 'react-apexcharts';
import Createcontext from '../Hooks/Context/Context'
import Productstorelist from './Productstorelist';
import './Adminpanel.css'
export default function AdminPanel() {
  const { state  } = useContext(Createcontext)
  const Chartstate = {
      
    series: [{
      name: "STOCK ABC",
      data: [12,5,4,2,13,5,22,7]
    }],
    options: {
      chart: {
        height: 350,
        type: 'area',
        toolbar:{
            show:false
        }
      },
      dataLabels: {
        enabled: false,
        style: {
          colors: ['#F44336', '#E91E63', '#9C27B0']
        }
      },
      stroke: {
        curve: 'smooth'
      },
      xaxis: {
        
        categories: ["Jan", "Jan", "Jan", "Jan", "Jan", "Jan", "Jan", "Jan", ]
      },
      // tooltip: {
      //   x: {
      //     format: 'dd/MM/yy HH:mm'
      //   },
      // },
      fill: {
     
        type: 'gradient',
        gradient: {
          shade: '#31B655',
          type: "horizontal",
          shadeIntensity: 0.5,
          gradientToColors: undefined, // optional, if not defined - uses the shades of same color in series
          inverseColors: true,
          opacityFrom: 0.1,
          opacityTo: 0.8,
          stops: [0, 50, 100],
          colorStops: []
        }
      },
      colors:['#31B655']

    },
  };
  return (

    <div className='row'>

      <div className='col-12' >
        <StatusBarCard></StatusBarCard>
      </div>
      <div className='col-12'>
        <div className='flex justify-between '>
          <div className='totalUser w-[35%] h-[400px]'>
           
                <ReactApexChart options={Chartstate.options} series={Chartstate.series} type="area"  />
           
          </div>
          <div className='topProducts w-[15%] p-[15px] border-1 bg-white rounded-[8px]'><Productstorelist/></div>
          <div className='topProducts w-[15%] p-[15px] border-1 bg-white rounded-[8px]'><Productstorelist/></div>
          <div className='topProducts w-[15%] p-[15px] border-1 bg-white rounded-[8px]'><Productstorelist/></div>
        </div>
       
      </div>
       {/* <div className='col-sm-6  top'>
        {/* <RightPenalscore></RightPenalscore> */}
       {/* </div> */} 
    </div>

  )
}
