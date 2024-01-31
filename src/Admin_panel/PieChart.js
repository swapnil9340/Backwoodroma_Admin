import React from 'react';
import Chart from 'react-apexcharts';

const PieChart = () => {
  const options = {
    chart: {
      type: 'pie',
    },
    labels: ['Label 1', 'Label 2', 'Label 3', 'Label 4'], // Add your labels here
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
            position: 'bottom',
          },
        },
      },
      {
        breakpoint: 1480,
        options: {
          chart: {
            width: 300,
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
  };

  const series = [44, 55, 13, 33]; // Add your data here

  return (
    <div>
      <Chart options={options} series={series} type="pie" />
    </div>
  );
};

export default PieChart;
