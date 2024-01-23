import React from 'react'
import ReactApexChart from 'react-apexcharts';
import {Select,MenuItem} from '@mui/material';
import useStyles from "../Style";

const Areagraph = () => {
  const [timeintervalchart, settimeintervalchart] = React.useState('ThisYear')
  const classes = useStyles()
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
    <div>
        <div className='d-flex justify-content-between'> <h3 className='graphtitle'> Total User</h3>  <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              className={classes.dashboardselect}
              onChange={(e) => { settimeintervalchart(e?.target?.value) }}
              value={timeintervalchart}
            >
              <MenuItem value={'Today'}>Today</MenuItem>
              <MenuItem value={'ThisWeek'}>This Week</MenuItem>
              <MenuItem value={'ThisMonth'}>This Month</MenuItem>
              <MenuItem value={'ThisYear'}>This year</MenuItem>
            </Select>  </div>
         <ReactApexChart options={Chartstate.options} series={Chartstate.series} type="area"  />
     </div>
  )
}

export default Areagraph