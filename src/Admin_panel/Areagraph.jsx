import React from "react";
import Chart from "react-apexcharts";
import { Select, MenuItem } from "@mui/material";
import useStyles from "../Style";
import Cookies from "universal-cookie";
import axios from "axios";
import Createcontext from "../Hooks/Context/Context";
const Areagraph = ({ title, id }) => {
  console.log(title)
  const { state } = React.useContext(Createcontext);

  const cookies = new Cookies();
  const token_data = cookies.get("Token_access");
  const [CharteDate, SetChartDate] = React.useState({});


  const [month, Setmonth] = React.useState({});
  const [timeintervalchart, settimeintervalchart] = React.useState("ThisYear");
  let date = new Date();
  const TodayDate =
    date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();
  const [salesperformance, setSalesperformance] = React.useState({});
  const classes = useStyles();

  React.useEffect(() => {
    if (title === "Total User") {
      SetChartDate({ Jan: 0, Feb: 0, Mar: 0, Apr: 0, May: 0, Jun: 0, Jul: 0, Aug: 0, Sep: 0, Oct: 0, Nov: 0, Dec: 0, })
    }
    
    else if (title === "Sales Performance") {
      SetChartDate({ 'Jan': [0, 0], 'Feb': [0, 0], 'Mar': [0, 0], 'Apr': [0, 0], "May": [0, 0], "Jun": [0, 0], 'Jul': [0, 0], 'Aug': [0, 0], 'Sep': [0, 0], 'Oct': [0, 0], 'Nov': [0, 0], 'Dec': [0, 0] })
    }
    console.log(title === "Sales Performance")
  }, [state.datesSelect])

  React.useEffect(() => {
    let k = {}
    if(title === "Total User"){
      if (state.datesSelect === "Year") {
        SetChartDate((CharteDate) => ({
          Jan: 0,
          Feb: 0,
          Mar: 0,
          Apr: 0,
          May: 0,
          Jun: 0,
          Jul: 0,
          Aug: 0,
          Sep: 0,
          Oct: 0,
          Nov: 0,
          Dec: 0,
        }));
        settimeintervalchart(() => "ThisYear");
      }
      else if (state.datesSelect === "Months") {
        if (title === "Total User") {
          const monthDays = function () {
            var d = new Date(
              new Date().getFullYear(),
              new Date().getMonth() + 1,
              0
            );
            return d.getDate();
          };
          for (let i = 0; i < monthDays(); i++) {
            k[i + 1] = 0
            Setmonth((month) => (k));
          }
        }
        else if (title === "Sales Performance") {
          const monthDays = function () {
            var d = new Date(new Date().getFullYear(), new Date().getMonth() + 1, 0);
            return d.getDate();
          }
  
          for (let i = 0; i < monthDays(); i++) {
            Setmonth(month => ({ ...month, [i + 1]: [0, 0] }))
          }
        }
        settimeintervalchart(() => "ThisMonth");
  
      } else if (state.datesSelect === "week") {
        SetChartDate((CharteDate) => ({
          Monday: 0,
          Tuesday: 0,
          Wednesday: 0,
          Thursday: 0,
          Friday: 0,
          Saturday: 0,
          Sunday: 0,
        }));
        settimeintervalchart("ThisWeek");
      }
      else if (state.datesSelect === "Customics") {
        settimeintervalchart("Customics");
        function convert(str) {
          var date = new Date(str),
            mnth = ("0" + (date.getMonth() + 1)).slice(-2),
            day = ("0" + date.getDate()).slice(-2);
          return [date.getFullYear(), mnth, day].join("-");
        }
        function dateRange(startDate, endDate, steps = 1) {
          const dateArray = [];
          let currentDate = new Date(startDate);
  
          while (currentDate <= new Date(endDate)) {
            dateArray.push(convert(new Date(currentDate)).slice(-2))
            // Use UTC date to prevent problems with time zones and DST
            currentDate.setUTCDate(currentDate.getUTCDate() + steps);
          }
  
          return dateArray;
        }
        const dates = dateRange(state.CustomeStartDate, state.CustomeEndDate);
        // dates.map((data1) => {
        //   if(data1 < '10'){
        //     let  l = data1.slice(-1)
  
        //   return  k[l]= 0
        //   }
        //   else{
        //     console.log(data1)
        //    return k[data1]= 0
        //   }
  
        // })
        for (let i = 0; i < dates.length; i++) {
          k[i + 1] = 0
          Setmonth((month) => (k));
        }
        // settimeintervalchart("Customics");
      }
    }
    else if(title === "Sales Performance"){
      if (state.datesSelect === "Year") {
        SetChartDate((CharteDate) => ({ 'Jan': [0, 0], 'Feb': [0, 0], 'Mar': [0, 0], 'Apr': [0, 0], "May": [0, 0], "Jun": [0, 0], 'Jul': [0, 0], 'Aug': [0, 0], 'Sep': [0, 0], 'Oct': [0, 0], 'Nov': [0, 0], 'Dec': [0, 0] }));
        settimeintervalchart(() => "ThisYear");
      }
      else if (state.datesSelect === "Months") {
        if (title === "Total User") {
          const monthDays = function () {
            var d = new Date(
              new Date().getFullYear(),
              new Date().getMonth() + 1,
              0
            );
            return d.getDate();
          };
          for (let i = 0; i < monthDays(); i++) {
            k[i + 1] = 0
            Setmonth((month) => (k));
          }
        }
        else if (title === "Sales Performance") {
          const monthDays = function () {
            var d = new Date(new Date().getFullYear(), new Date().getMonth() + 1, 0);
            return d.getDate();
          }
  
          for (let i = 0; i < monthDays(); i++) {
            Setmonth(month => ({ ...month, [i + 1]: [0, 0] }))
          }
        }
        settimeintervalchart(() => "ThisMonth");
  
      } else if (state.datesSelect === "week") {
        SetChartDate((CharteDate) => ({ 'Monday': [0, 0], 'Tuesday': [0, 0], 'Wednesday': [0, 0], 'Thursday': [0, 0], "Friday": [0, 0], "Saturday": [0, 0], 'Sunday': [0, 0] }));
        settimeintervalchart("ThisWeek");
      }
      else if (state.datesSelect === "Customics") {
        settimeintervalchart("Customics");
        function convert(str) {
          var date = new Date(str),
            mnth = ("0" + (date.getMonth() + 1)).slice(-2),
            day = ("0" + date.getDate()).slice(-2);
          return [date.getFullYear(), mnth, day].join("-");
        }
        function dateRange(startDate, endDate, steps = 1) {
          const dateArray = [];
          let currentDate = new Date(startDate);
  
          while (currentDate <= new Date(endDate)) {
            dateArray.push(convert(new Date(currentDate)).slice(-2))
            // Use UTC date to prevent problems with time zones and DST
            currentDate.setUTCDate(currentDate.getUTCDate() + steps);
          }
  
          return dateArray;
        }
        const dates = dateRange(state.CustomeStartDate, state.CustomeEndDate);
        for (let i = 0; i < dates.length; i++) {
          Setmonth(month => ({ ...month, [i + 1]: [0, 0] }))
        }
        // settimeintervalchart("Customics");
      }
    }
  }, [state.datesSelect, state.CustomeStartDate, state.CustomeEndDate]);
  // console.log(  [month]
  //   .map((data, index) => Object.values(data))[0]
  //   .map((d) => d))


  const Chartstate = {
    series: [
      {
        name: "Total User",
        data: title === "Total User" ? timeintervalchart === "ThisMonth" ? [month].map((data, index) => Object.values(data))[0].map((d) => d)
          : timeintervalchart === "Customics" ? [month].map((data, index) => Object.values(data))[0].map((d) => d)
            : [CharteDate].map((data, index) => Object.values(data))[0].map((d) => d)
          // Vendor
          : timeintervalchart !== "ThisMonth" ? [CharteDate].map((data, index) => Object.values(data))[0].map((d) => d[0]) : [month].map((data, index) => Object.values(data))[0].map((d) => d[1])
      },
      title === "Sales Performance" && {
        name: "UnitSold",
        data: timeintervalchart !== "ThisMonth" ? [CharteDate].map((data, index) => Object.values(data))[0].map((d) => d[1]) : [month].map((data, index) => Object.values(data))[0].map((d) => d[1])
      }

    ],
    options: {
      chart: {
        background: "#fff",
        height: 350,
        type: "area",
        toolbar: {
          show: false,
        },
        responsive: [
          {
            breakpoint: 1400,
            options: {
              chart: {
                height: 500,
              },
            },
          },
        ],
      },
      dataLabels: {
        enabled: false,
        style: {
          colors: ["#F44336", "#E91E63", "#9C27B0"],
        },
      },
      stroke: {
        curve: "smooth",
      },
      xaxis: {
        type: "year",
        categories:
          timeintervalchart === "ThisMonth" ? Object.keys(month) : timeintervalchart === "Customics" ? Object.keys(month) : Object.keys(CharteDate)

      },
      fill: {
        type: "gradient",
        gradient: {
          shade: "#31B655",
          type: "horizontal",
          shadeIntensity: 0.5,
          gradientToColors: undefined, // optional, if not defined - uses the shades of same color in series
          inverseColors: true,
          opacityFrom: 0.1,
          opacityTo: 0.8,
          stops: [0, 50, 100],
          colorStops: [],
        },
      },
      colors: ["#31B655"],
    },
  };

  React.useEffect(() => {
    if (title === "Total User") {
      axios
        .post(
          "https://api.cannabaze.com/AdminPanel/TotalUserGraph/",
          {
            SelectTime: timeintervalchart,
            StartDate:
              timeintervalchart === "ThisYear"
                ? date.getFullYear() + "-" + "01" + "-" + "01"
                : timeintervalchart === "ThisMonth"
                  ? date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + "01"
                  : timeintervalchart === "ThisWeek"
                    ? new Date(date.setDate(date.getDate() - date.getDay() + (date.getDay() === 0 ? -6 : 1))).toISOString().slice(0, 10)
                    : timeintervalchart === "Today" ? TodayDate : timeintervalchart === "Customics" && state.CustomeStartDate
            ,
            EndDate: timeintervalchart === "Customics" ? state.CustomeEndDate : TodayDate,
          },
          {
            headers: {
              Authorization: `Bearer ${token_data}`,
            },
          }
        )
        .then((res) => {
          if (timeintervalchart === "ThisMonth" || timeintervalchart === "Customics") {
            if (timeintervalchart === "ThisMonth") {
              res.data.map((data) => {
                if (!data.Date.slice(3, data.Date?.length  - 3) > 10) {
                  Setmonth((month) => ({ ...month, [data.Date.slice(4, data.Date?.length  - 3)]: data.User, }));
                } else {
                  Setmonth((month) => ({
                    ...month,
                    [data.Date.slice(4, data.Date?.length  - 3)]: data.User,
                  }));
                }
              });
            }
            else if (timeintervalchart === "Customics") {
              console.log(res.data,)
              res.data.map((data) => {
                if (data.Date.slice(3, data.Date?.length  - 3) < 10) {
                  console.log(data.Date.slice(4, data.Date?.length  - 3), data.Date.slice(3, data.Date?.length  - 3) < 10, data.User, "555555555")
                  Setmonth((month) => ({ ...month, [data.Date.slice(4, data.Date?.length  - 3)]: data.User, }));
                } else {
                  Setmonth((month) => ({
                    ...month,
                    [data.Date.slice(3, data.Date?.length  - 3)]: data.User,
                  }));
                }
              });

            }
          }
          else {
            if (timeintervalchart === "ThisYear") {
              res.data.map((data) => {
                SetChartDate((CharteDate) => ({
                  ...CharteDate,
                  [data.Date.slice(0, 3)]: data.User,
                }));
              });
            } else {
              if (timeintervalchart === "ThisWeek") {
                res.data.map((data) => {
                  SetChartDate((CharteDate) => ({
                    ...CharteDate,
                    [data.Date]: data.User,
                  }));
                });
              }
            }
          }
        });

    }
    else if (title === "Sales Performance") {
      axios
        .post(
          "https://api.cannabaze.com/AdminPanel/SalesPerformanceVendorGraph/",
          {
            SelectTime: timeintervalchart,
            Storeid: id,
            StartDate:
              timeintervalchart === "ThisYear"
                ? date.getFullYear() + "-" + "01" + "-" + "01"
                : timeintervalchart === "ThisMonth"
                  ? date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + "01"
                  : timeintervalchart === "ThisWeek"
                    ? new Date(date.setDate(date.getDate() - date.getDay() + (date.getDay() === 0 ? -6 : 1))).toISOString().slice(0, 10)
                    : timeintervalchart === "Today" ? TodayDate : timeintervalchart === "Customics" && state.CustomeStartDate,
            EndDate: TodayDate,
          },
          {
            headers: {
              Authorization: `Bearer ${token_data}`,
            },
          }
        )
        .then((res) => {
          if (timeintervalchart === "ThisMonth") {
            res.data.map((data) => {
              console.log(data.Date.slice(3, data.Date?.length  - 3) < 10)
              if (!data.Date.slice(3, data.Date?.length  - 3) < 10) {
                Setmonth(month => ({ ...month, [data.Date.slice(4, data.Date?.length  - 3)]: [data.TotalPrice, data.UnitSold] }))
              } else {

                Setmonth(month => ({ ...month, [data.Date.slice(4, data.Date?.length  - 3)]: [data.TotalPrice, data.UnitSold] }))
              }
            })
          }
          else {

            if (timeintervalchart === "ThisWeek") {
              res.data.map((data) => {
                SetChartDate((CharteDate) => ({
                  ...CharteDate,
                  [data.Date]: [data.TotalPrice, data.UnitSold],
                }));
              });
            }
            else {
              res.data.map((data) => {
                if (timeintervalchart === "ThisYear") {

                  SetChartDate(CharteDate => ({ ...CharteDate, [data.Date.slice(0, 3)]: [data.TotalPrice, data.UnitSold] }))
                }

              })
            }


          }

        });
    }
  }, [timeintervalchart, state.CustomeStartDate, state.CustomeEndDate, id]);

  function labelsgenerateds() {
    let labelsdat = Object.keys(salesperformance).map((item, index) => {
      return `${item} : $ ${Object.values(salesperformance)[index]}`;
    });
    return labelsdat;
  }
  const data = {
    // labels: ['In Progress Product : 26', 'Pending Product : 56' ],
    labels: labelsgenerateds(),
    datasets: [
      {
        data: Object.values(salesperformance),
        backgroundColor: ["#31B665", "#6DD19C"],
        borderColor: ["rgba(255, 255, 255, 1)", "rgba(255, 255, 255, 1)"],
        borderWidth: 1,
      },
    ],
  };
  function handleChnagechart(e) {
    if (title === "Total User") {
      if (e?.target?.value === "ThisYear") {
        // settimeintervalchart((timeintervalchart=>=>e?.target?.value))
        SetChartDate((CharteDate) => ({
          Jan: 0,
          Feb: 0,
          Mar: 0,
          Apr: 0,
          May: 0,
          Jun: 0,
          Jul: 0,
          Aug: 0,
          Sep: 0,
          Oct: 0,
          Nov: 0,
          Dec: 0,
        }));
        settimeintervalchart(e?.target?.value);
      } else if (e?.target?.value === "ThisWeek") {
        SetChartDate((CharteDate) => ({
          Monday: 0,
          Tuesday: 0,
          Wednesday: 0,
          Thursday: 0,
          Friday: 0,
          Saturday: 0,
          Sunday: 0,
        }));
        settimeintervalchart(e?.target?.value);
      } else if (e?.target?.value === "ThisMonth") {
        const monthDays = function () {
          var d = new Date(
            new Date().getFullYear(),
            new Date().getMonth() + 1,
            0
          );
          return d.getDate();
        };

        for (let i = 0; i < monthDays(); i++) {
          Setmonth((month) => ({ ...month, [i + 1]: 0 }));
        }
        settimeintervalchart(e?.target?.value);
      }
    }
    else if (title === "Sales Performance") {
      if (e?.target?.value === "ThisYear") {
        // settimeintervalchart((timeintervalchart=>=>e?.target?.value))
        SetChartDate((CharteDate) => ({ 'Jan': [0, 0], 'Feb': [0, 0], 'Mar': [0, 0], 'Apr': [0, 0], "May": [0, 0], "Jun": [0, 0], 'Jul': [0, 0], 'Aug': [0, 0], 'Sep': [0, 0], 'Oct': [0, 0], 'Nov': [0, 0], 'Dec': [0, 0] }))
        settimeintervalchart(e?.target?.value);
      } else if (e?.target?.value === "ThisWeek") {
        SetChartDate(CharteDate => ({ 'Monday': [0, 0], 'Tuesday': [0, 0], 'Wednesday': [0, 0], 'Thursday': [0, 0], "Friday": [0, 0], "Saturday": [0, 0], 'Sunday': [0, 0] }))
        settimeintervalchart(e?.target?.value);
      } else if (e?.target?.value === "ThisMonth") {
        const monthDays = function () {
          var d = new Date(new Date().getFullYear(), new Date().getMonth() + 1, 0);
          return d.getDate();
        }

        for (let i = 0; i < monthDays(); i++) {
          Setmonth(month => ({ ...month, [i + 1]: [0, 0] }))
        }
        settimeintervalchart(e?.target?.value);
      }
    }
  }
  console.log(month)
  return (
    <div>
      <div className="d-flex justify-content-between">
        {" "}
        <h3 className="graphtitle">{title}</h3>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          className={classes.dashboardselect}
          onChange={(e) => {
            handleChnagechart(e);
          }}
          value={timeintervalchart}
        >
          <MenuItem value={"Today"}>Today</MenuItem>
          <MenuItem value={"ThisWeek"}>This Week</MenuItem>
          <MenuItem value={"ThisMonth"}>This Month</MenuItem>
          <MenuItem value={"ThisYear"}>This year</MenuItem>
          {
            state.datesSelect === "Customics" && <MenuItem value={"Customics"}>Customics</MenuItem>
          }
        </Select>{" "}
      </div>
      <Chart
        data={data}
        options={Chartstate.options}
        series={Chartstate.series}
        type="area"
        // width={"500"}
        height={"340"}
      />
    </div>
  );
};
export default Areagraph;
