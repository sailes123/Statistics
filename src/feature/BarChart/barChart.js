import React, { useState } from 'react';
import Chart from "react-apexcharts";

const BarChart = () => {
    const [state,setState] = useState({
        options: {
          chart: {
            id: "basic-bar"
          },
          xaxis: {
            categories: ["Subject1","Subject2","Subject3","Subject4","Subject5","Subject6"]
          }
        },
        series: [
          {
            name: "max",
            data: [30, 40, 45, 50, 49]
          },
          {
            name: "average",
            data: [60, 90, 50, 55, 59]
          },
          {
            name: "min",
            data: [60, 90, 50, 55, 59]
          },
          {
            name: "mid",
            data: [50, 80, 50, 65, 25]
          },
        ],
        dataLabels:{
            enabled: false,
        }
    })
  return (
    <div className='barChart'>
           <Chart
              options={state.options}
              series={state.series}
              type="bar"
              width="100%"
            />
    </div>
  )
}

export default BarChart;
