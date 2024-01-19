import React, { useContext } from 'react'
import { MdTrendingUp } from "react-icons/md";
import { FaArrowTrendDown } from "react-icons/fa6";
import StatusBarCard from './StatusBarCard'
import ReactApexChart from 'react-apexcharts';
import Createcontext from '../Hooks/Context/Context'
import Productstorelist from './Productstorelist';
import './dashboard.css';
import { Link } from 'react-router-dom';
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
  const  Saalesstate = {
          
    series: [50, 35, 15],
    options: {
      chart: {
        width:'200',
        type: 'pie',
        dataLabels: {
          position: 'bottom'
        }
      },
      labels: ['Team A', 'Team B', 'Team C'],
      responsive: [{
        breakpoint: 480,
        options: {
          chart: {
            width: 200
          },
          legend: {
            position: 'bottom'
          }
        }
      }],
      legend: {
        fontSize: '16px',
        fontWeight:600,
        position:'bottom',
        formatter: function(seriesName, opts) {
            return [seriesName, " - ", opts.w.globals.series[opts.seriesIndex]]
        }
      },
    },
}
  return (

    <div className='row'>

      <div className='col-12' >
        <StatusBarCard></StatusBarCard>
      </div>
      <div className='col-12'>
        <div className='dashboardHerosection'>
          <div className='totalUser bg-white'>
            <h3 className='graphtitle'> Total User</h3>
                <ReactApexChart options={Chartstate.options} series={Chartstate.series} type="area"  /> 
          </div>
          <div className='topProducts'><Productstorelist title={"Top Product"}/></div>
          <div className='topProducts'><Productstorelist title={"Top Store"}/></div>
          <div className='topProducts'><Productstorelist title={"Visited Store"}/></div>
          <div className='topProducts'>
            <div className='totalSalesChart'>
              <div className='totalSalesChartHeader'>
                <span className='headingtext'>Total Sales</span>
                <Link className='headingtext'>View Details</Link>
              </div>
              <h3 className='totalsalesamount'>73,276,931.28</h3>
              <div className='growthIndicater'><span className='icon'><FaArrowTrendDown /><MdTrendingUp /> 11.2%</span></div>
              <div className="Saleschart_container">
                <ReactApexChart options={Saalesstate.options} series={Saalesstate.series} type="pie"  />
              </div>
            </div>
          </div>
        </div>
       
      </div>
       {/* <div className='col-sm-6  top'>
        {/* <RightPenalscore></RightPenalscore> */}
       {/* </div> */} 
    </div>

  )
}
