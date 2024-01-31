import React from 'react'
import {Link} from 'react-router-dom';
import { MdTrendingUp } from "react-icons/md";
import ReactApexChart from 'react-apexcharts';
import { FaArrowTrendDown } from "react-icons/fa6";
const TotalSales = () => {
    const  Saalesstate = {
          
      chart: {
        type: 'pie',
      },
      labels: ['Label 1', 'Label 2', 'Label 3'], // Add your labels here
      legend: {
        position: 'bottom', // Change legend position if needed
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              // width: 300,
            },
            legend: {
              position: 'bottom',
            },
          },
        },
        {
          breakpoint: 1900,
          options: {
            chart: {
              width:'100%',
              height: 500,
            },
            legend: {
              position: 'bottom',
            },
          },
        },
        {
          breakpoint: 1450,
          options: {
            chart: {
              height: 260,
            },
            legend: {
              position: 'left',
            },
          },
        },
        {
          breakpoint: 1100,
          options: {
            chart: {
              height: 300,
            },
            legend: {
              position: 'bottom',
            },
          },
        },
      ],
      plotOptions: {
        pie: {
          dataLabels: {
            style: {
              fontSize: '14px', // Change label font size
              fontFamily: 'Arial, sans-serif', // Change label font family
            },
            enabled: true,
            formatter: function (val, opts) {
              return `${opts.w.globals.labels[opts.seriesIndex]}: ${val}%`;
            },
            offsetY: 0, // Adjust label position vertically
          },
        },
      },
      }
      const series = [44, 55, 13];
  return (
    <div className='totalSalesChart'>
              <div className='totalSalesChartHeader'>
                <span className='headingtext'>Total Sales</span>
                <Link className='headingtext'>View Details</Link>
              </div>
              <h3 className='totalsalesamount'>73,276,931.28</h3>
              <div className='growthIndicater'><span className='icon'><FaArrowTrendDown /><MdTrendingUp /> 11.2%</span></div>
              <div className="Saleschart_container">
                <ReactApexChart options={Saalesstate} series={series} type="pie"  />
              </div>
     </div>
  )
}

export default TotalSales