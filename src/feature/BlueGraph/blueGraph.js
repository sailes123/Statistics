import React, { useState } from 'react';
import Chart from "react-apexcharts";

const BlueGraph = () => {
    const [state,setState] = useState({
        options: {
          chart: {
            id: "basic-bar"
          },
          xaxis: {
            categories: ["J","F","M","A","M","J","J","A","S","O","N","D"]
          }
        },
        series: [
          {
            data: [30,40, 50, 50 , 60 , 70 , 10, 90, 12, 14, 80 , 40]
          },
        ],
        dataLabels:{
            enabled: false,
        }
    })
  return (
    <div className='blueGraph'>
           <Chart
              options={state.options}
              series={state.series}
              type="bar"
              width="100%"
            />
    </div>
  )
}

export default BlueGraph;
