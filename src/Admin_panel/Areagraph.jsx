import React from 'react'
import Chart from "react-apexcharts";
import {Select,MenuItem} from '@mui/material';
import useStyles from "../Style";
import Cookies from 'universal-cookie';
import axios from 'axios';
const Areagraph = () => {
  const cookies = new Cookies();
  const token_data = cookies.get('Token_access')
  const [CharteDate, SetChartDate] = React.useState({ 'January': [0, 0], 'February': [0, 0], 'March': [0, 0], 'April': [0, 0], "May": [0, 0], "June": [0, 0], 'July': [0, 0], 'August': [0, 0], 'September': [0, 0], 'October': [0, 0], 'November': [0, 0], 'December': [0, 0] })
  const [month, Setmonth] = React.useState({})
  const [timeintervalchart, settimeintervalchart] = React.useState('ThisYear')
  let date = new Date()
  const TodayDate = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate()
    console.log(TodayDate , date)
  const [salesperformance, setSalesperformance] = React.useState({})
  const classes = useStyles()
    const Chartstate = {
      
        series: [{
          name: "STOCK ABC",
          data: timeintervalchart !== "ThisMonth" ? [CharteDate].map((data, index) => Object.values(data))[0].map((d) => d[0]) : [month].map((data, index) => Object.values(data))[0].map((d) => d[1]) ,
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
            type: 'year',
            categories: timeintervalchart !== "ThisMonth" ? Object.keys(CharteDate) : Object.keys(month)
          },
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

      React.useEffect(() => {
        axios.post('https://api.cannabaze.com/AdminPanel/TotalUserGraph/',
          {
            SelectTime: timeintervalchart,
            'StartDate': timeintervalchart === 'ThisYear'
              ? date.getFullYear() + "-" + "01" + "-" + "01"
              : timeintervalchart === 'ThisMonth'
                ? date.getFullYear() + "-" + (date.getMonth() + 1 )+ "-" + "01"
                : timeintervalchart === 'ThisWeek'
                  ? new Date(date.setDate(date.getDate() - date.getDay() + (date.getDay() === 0 ? -6 : 1))).toISOString().slice(0, 10)
                  : timeintervalchart === 'Today' && TodayDate,
            'EndDate': TodayDate
    
          }
          , {
            headers: {
              'Authorization': `Bearer ${token_data}`
            }
          }
        ).then((res) => {
          if (timeintervalchart === "ThisMonth") {
            res.data.map((data) => {
              if (!data.Date.slice(3, data.Date.length - 3) > 10) {
                Setmonth(month => ({ ...month, [data.Date.slice(4, data.Date.length - 3)]: [data.User] }))
              } else {
    
                Setmonth(month => ({ ...month, [data.Date.slice(4, data.Date.length - 3)]: [data.User] }))
              }
            })
          }
          else {
            res.data.map((data) => {
              SetChartDate(CharteDate => ({ ...CharteDate, [data.Date]: [data.User] }))
            })
          }
        })
      }, [timeintervalchart])


      function labelsgenerateds() {
        let labelsdat = Object.keys(salesperformance).map((item, index) => {
          return `${item} : $ ${Object.values(salesperformance)[index]}`
        })
        return labelsdat
      }
      const data = {
        // labels: ['In Progress Product : 26', 'Pending Product : 56' ],
        labels: labelsgenerateds(),
        datasets: [
          {
    
            data: Object.values(salesperformance),
            backgroundColor: [
              '#31B665',
              '#6DD19C',
    
            ],
            borderColor: [
              'rgba(255, 255, 255, 1)',
              'rgba(255, 255, 255, 1)',
            ],
            borderWidth: 1,
          },
        ],
      };
      function handleChnagechart(e) {
        // SetChartDate({})
        if (e?.target?.value === "ThisYear") {
          // settimeintervalchart((timeintervalchart=>=>e?.target?.value))
          SetChartDate(CharteDate => ({ 'January': [0, 0], 'February': [0, 0], 'March': [0, 0], 'April': [0, 0], "May": [0, 0], "June": [0, 0], 'July': [0, 0], 'August': [0, 0], 'September': [0, 0], 'October': [0, 0], 'November': [0, 0], 'December': [0, 0] }))
          settimeintervalchart(e?.target?.value)
    
        }
        else if (e?.target?.value === "ThisWeek") {
          SetChartDate(CharteDate => ({ 'Monday': [0, 0], 'Tuesday': [0, 0], 'Wednesday': [0, 0], 'Thursday': [0, 0], "Friday": [0, 0], "Saturday": [0, 0], 'Sunday': [0, 0] }))
          settimeintervalchart(e?.target?.value)
        }
        else if (e?.target?.value === "ThisMonth"  ) {
          const monthDays = function () {
            var d = new Date(new Date().getFullYear(), new Date().getMonth() + 1, 0);
            return d.getDate();
          }
    
          for (let i = 0; i < monthDays(); i++) {
            Setmonth(month => ({ ...month, [i + 1]: [0, 0] }))
          }
          settimeintervalchart(e?.target?.value)
        }
      }
  return (
    <div>
        <div className='d-flex justify-content-between'> <h3 className='graphtitle'> Total User</h3>  <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              className={classes.dashboardselect}
              onChange={(e) => { handleChnagechart(e) }}
              value={timeintervalchart}
            >
              <MenuItem value={'Today'}>Today</MenuItem>
              <MenuItem value={'ThisWeek'}>This Week</MenuItem>
              <MenuItem value={'ThisMonth'}>This Month</MenuItem>
              <MenuItem value={'ThisYear'}>This year</MenuItem>
            </Select>  </div>
         <Chart  data={data} options={Chartstate.options} series={Chartstate.series} type="area"  />
     </div>
  )
}

export default Areagraph