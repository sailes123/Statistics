import React from 'react';
import {ComposedChart, BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const DifferBar = ({height,width}) => {
    const data = [
        {
          name: '0-25',
          exam1: 40,
          exam2: 34,
          exam3: 40,
          exam4: 64,
          exam5: 40,
          exam6: 24,
          exam7: 80,
          exam8: 24,
        },
        {
          name: '25-50',
          exam1: 40,
          exam2: 24,
          exam3: 40,
          exam4: 24,
          exam5: 40,
          exam6: 24,
          exam7: 40,
          exam8: 24,
        },
        {
          name: '50-75',
          exam1: 40,
          exam2: 24,
          exam3: 40,
          exam4: 64,
          exam5: 40,
          exam6: 34,
          exam7: 70,
          exam8: 24,
        },
        {
          name: '75-100',
          exam1: 40,
          exam2: 24,
          exam3: 60,
          exam4: 54,
          exam5: 30,
          exam6: 54,
          exam7: 50,
          exam8: 64,
        },
      ];

  return (
    <div className='differBar'>
    <ComposedChart width={width} height={height} data={data}>
  <XAxis dataKey="name" />
  <YAxis />
  <CartesianGrid stroke="#f5f5f5" />
  <Tooltip />
  <Legend />
  <Bar dataKey="exam1" fill="#8884d8" />
  <Bar dataKey="exam2" fill="#0000FF" />
  <Bar dataKey="exam3" fill="#FF0000" />
  <Bar dataKey="exam4" fill="#228B22" />
  <Bar dataKey="exam5" fill="#778899" />
  <Bar dataKey="exam6" fill="#FF4500" />
  <Bar dataKey="exam7" fill="#000000" />
  <Bar dataKey="exam8" fill="#FF1493" />
  </ComposedChart>
    </div>
  )
}

export default DifferBar