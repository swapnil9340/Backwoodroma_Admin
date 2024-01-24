import React from 'react'
import {Link} from 'react-router-dom';
import { MdTrendingUp } from "react-icons/md";
import ReactApexChart from 'react-apexcharts';
import { FaArrowTrendDown } from "react-icons/fa6";
const TotalSales = () => {
    const  Saalesstate = {
          
        series: [50, 35, 15],
        options: {
          chart: {
            width:400,
            type: 'pie',
            height: "400px",
            minHeight: '100%',
            dataLabels: {
              position: 'bottom'
            }
          },
          labels: ['Store', 'Pickup', 'Delivery'],
          responsive: [{
            breakpoint: 1440,
            options: {
              chart: {
                height:300,
              },
              legend: {
                position: 'bottom'
              }
            }
          },
          {
            breakpoint: 480,
            options: {
              chart: {
                width: 200
              },
              legend: {
                position: 'bottom'
              }
            }
          },
          {
            breakpoint: 480,
            options: {
              chart: {
                width: 200
              },
              legend: {
                position: 'bottom'
              }
            }
          },
          {
            breakpoint: 480,
            options: {
              chart: {
                width: 200
              },
              legend: {
                position: 'bottom'
              }
            }
          },
          {
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
            fontSize: '15px',
            fontWeight:600,
            position:'bottom',
            width:200,
            formatter: function(seriesName, opts) {
                return [seriesName, " - ", opts.w.globals.series[opts.seriesIndex]]
            },
         
          },
        
        },
      }
  return (
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
  )
}

export default TotalSales