import React from 'react'
import Createcontext from "../Hooks/Context/Context"
import { Link } from 'react-router-dom';
import { MdTrendingUp } from "react-icons/md";
import ReactApexChart from 'react-apexcharts';
import { FaArrowTrendDown } from "react-icons/fa6";
import axios from "axios";
import Cookies from 'universal-cookie';
const TotalSales = ({type}) => {
  const cookies = new Cookies();
  const { state } = React.useContext(Createcontext)
  const [Data, SetData] = React.useState({})
  const token_data = cookies.get('Token_access')
  const [totel, setTotal] = React.useState([])
  //  Months//////////////////
  let date = new Date()
  const TodayDate = date.getFullYear() + "-" + date.getMonth() + 1 + "-" + date.getDate()
  const currentYear = new Date().getFullYear();
  const lastYear = currentYear - 1;
  const monthStartDate = new Date(date.getFullYear(), date.getMonth(), 2).toISOString().split('T')[0]
  const monthlastDate = TodayDate
  const lastmonthStartDate = new Date(date.getFullYear(), date.getMonth() - 1, 2).toISOString().split('T')[0]
  const firstDayOfCurrentMonth = new Date(date.getFullYear(), date.getMonth(), 1);
  const lastmonthLastDate = new Date(firstDayOfCurrentMonth - 1).toISOString().split('T')[0]
  // End /////////////////
  //    Week Calculate //////////////////////// 
  const WeekCalculate = date.getDate() - date.getDay() + (date.getDay() === 0 ? - 6 : 1);
  const StartDateWeek = new Date(date.setDate(WeekCalculate)).toISOString().split('T')[0]
  // const previous =  new Date(date.setDate(date.getDate() - 1)).toISOString().split('T')[0]
  function GetpreviousWeekDate(d, j) {
    //   const today = new Date();
    const dayOfWeek = date.getDay();  // 0 (Sunday) to 6 (Saturday)
    const diff = dayOfWeek + d - j;
    const startOfPreviousWeek = new Date(date);
    startOfPreviousWeek.setDate(date.getDate() - diff);
    return startOfPreviousWeek.toISOString().split('T')[0];
  }

  let yesterday = new Date(TodayDate)
  yesterday.setDate(yesterday.getDate() - 1)
  function convert(str) {
    var date = new Date(str),
      mnth = ("0" + (date.getMonth() + 1)).slice(-2),
      day = ("0" + date.getDate()).slice(-2);
    return [date.getFullYear(), mnth, day].join("-");
  }


  function CalculateDays(date1) {
    if (date1 === "first") {
      const datefirst = new Date(state.CustomeStartDate)
      const datesecond = new Date(state.CustomeEndDate)
      const diffTime = Math.abs(datesecond - datefirst);
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      var StartEndDate = new Date(state.CustomeEndDate);
      StartEndDate.setDate(StartEndDate.getDate() - diffDays - 1);
      var EndStartDate = new Date(state.CustomeStartDate);
      EndStartDate.setDate(EndStartDate.getDate() - diffDays - 1);
      return convert(EndStartDate.toString())
    }
    else {
      const datefirst = new Date(state.CustomeStartDate)
      const datesecond = new Date(state.CustomeEndDate)
      const diffTime = Math.abs(datesecond - datefirst);
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      var StartEndDate = new Date(state.CustomeEndDate);
      StartEndDate.setDate(StartEndDate.getDate() - diffDays - 1);
      var EndStartDate = new Date(state.CustomeStartDate);
      EndStartDate.setDate(EndStartDate.getDate() - diffDays - 1);
    
      return convert(StartEndDate.toString())
    }



  }
  React.useEffect(() => {
    if (state.datesSelect === "Customics") {
      if (state.CustomeStartDate !== "" && state.CustomeEndDate !== "") {
        SetData({
          "SelectTime": state.datesSelect === "Year" ? "ThisYear" : state.datesSelect === "Months" ? 'ThisMonth' : state.datesSelect === "Today" ? 'Today' : state.datesSelect === "week" ? "week" : state.datesSelect === "Customics" && "costume",
          "StartDate": state.datesSelect === "Year" ? `${date.getFullYear()}-01-01` : state.datesSelect === "Months" ? monthStartDate : state.datesSelect === "week" ? StartDateWeek : state.datesSelect === "Today" ? TodayDate : state.datesSelect === "Customics" && state.CustomeStartDate,
          "EndDate": state.datesSelect === "Year" ? TodayDate : state.datesSelect === "Months" ? monthlastDate : state.datesSelect === "week" ? TodayDate : state.datesSelect === "Today" ? TodayDate : state.datesSelect === "Customics" && state.CustomeEndDate,
          "LastStartDate": state.datesSelect === "Year" ? `${lastYear}-01-01` : state.datesSelect === "Months" ? lastmonthStartDate : state.datesSelect === "week" ? GetpreviousWeekDate(7, 1) : state.datesSelect === "Today" ? yesterday.toISOString().split('T')[0] : state.datesSelect === "Customics" && CalculateDays('first'),  //yesterday.toISOString().split('T')[0]
          "EndStartDate": state.datesSelect === "Year" ? `${lastYear}-12-31` : state.datesSelect === "Months" ? lastmonthLastDate : state.datesSelect === "week" ? GetpreviousWeekDate(0, 0) : state.datesSelect === "Today" ? yesterday.toISOString().split('T')[0] : state.datesSelect === "Customics" && CalculateDays('Second')
        })
      }
    }
    else {
      SetData({
        "SelectTime": state.datesSelect === "Year" ? "ThisYear" : state.datesSelect === "Months" ? 'ThisMonth' : state.datesSelect === "Today" ? 'Today' : state.datesSelect === "week" ? "week" : state.datesSelect === "Customics" && "costume",
        "StartDate": state.datesSelect === "Year" ? `${date.getFullYear()}-01-01` : state.datesSelect === "Months" ? monthStartDate : state.datesSelect === "week" ? StartDateWeek : state.datesSelect === "Today" ? TodayDate : state.datesSelect === "Customics" && state.CustomeStartDate,
        "EndDate": state.datesSelect === "Year" ? TodayDate : state.datesSelect === "Months" ? monthlastDate : state.datesSelect === "week" ? TodayDate : state.datesSelect === "Today" ? TodayDate : state.datesSelect === "Customics" && state.CustomeEndDate,
        "LastStartDate": state.datesSelect === "Year" ? `${lastYear}-01-01` : state.datesSelect === "Months" ? lastmonthStartDate : state.datesSelect === "week" ? GetpreviousWeekDate(7, 1) : state.datesSelect === "Today" ? yesterday.toISOString().split('T')[0] : state.datesSelect === "Customics" && CalculateDays('first'),  //yesterday.toISOString().split('T')[0]
        "EndStartDate": state.datesSelect === "Year" ? `${lastYear}-12-31` : state.datesSelect === "Months" ? lastmonthLastDate : state.datesSelect === "week" ? GetpreviousWeekDate(0, 0) : state.datesSelect === "Today" ? yesterday.toISOString().split('T')[0] : state.datesSelect === "Customics" && CalculateDays('Second')
      })
    }
  }, [state.datesSelect, state.CustomeStartDate, state.CustomeEndDate])

  React.useEffect(() => {
    if(type === 'dashboard'){
      axios.post("https://api.cannabaze.com/AdminPanel/TotalSalesPieChart/",
      Data,
      {
        headers: {
          'Authorization': `Bearer ${token_data}`
        }
      }).then(response => {
        setTotal(response.data)

      })
    }else if(type === 'vendor'){
      axios.post("https://api.cannabaze.com/AdminPanel/TotalSalesVendorPieChart/",
      Data,
      {
        headers: {
          'Authorization': `Bearer ${token_data}`
        }
      }).then(response => {
        setTotal(response.data)

      })
    }

  }, [Data])


  const Saalesstate = {

    chart: {
      type: 'pie',
    },
    labels: ['Pickup', 'Store', 'Delivery'], // Add your labels here
    legend: {
      position: 'bottom', // Change legend position if needed
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 300,
          },
          legend: {
            width: "100%",
            position: 'bottom',
          },
        },
      },
      {
        breakpoint: 2500,
        options: {
          chart: {
            // width:'100%',
            height: 320,
          },
          legend: {
            position: 'bottom',
          },
        },
      },
      {
        breakpoint: 1950,
        options: {
          chart: {
            // width:'100%',
            height: 320,
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
            // height: 320,
          },
          legend: {
            display: "block",
            position: 'bottom',
          },
        },
      },
      {
        breakpoint: 1200,
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
    legend: {
      display: "block",
      fontSize: '15px',
      fontWeight: 600,
      position: 'bottom',
      strokeWidth: 0,
      width: '100%',
      height: "90vh",
      formatter: function (seriesName, opts) {
        return [seriesName, " - ", opts.w.globals.series[opts.seriesIndex]]
      },

    },
  }
  const series = [totel.Curbsibe, totel.Pickup, totel.Delivery];



  return (
    <div className='totalSalesChart'>
      <div className='totalSalesChartHeader'>
        <span className='headingtext'> Total Sales</span>
        <Link className='headingtext'>View Details</Link>
      </div>
      <h3 className='totalsalesamount'>{totel?.TotalSales}</h3>
      <div className={totel.Growth ? 'growthIndicater1':'growthIndicater'  }>
        <span className='icon'>
          {
            totel.Growth ? <FaArrowTrendDown color='red' /> : <MdTrendingUp />
          }
          {isNaN(Math?.abs(totel?.Percentage)) ? 0 : Math?.abs(totel?.Percentage)}%
        </span>
      </div>
      <div className="Saleschart_container">
        <ReactApexChart legendDisplay="list" options={Saalesstate} series={series} type="pie" />
      </div>
    </div>
  )
}

export default TotalSales