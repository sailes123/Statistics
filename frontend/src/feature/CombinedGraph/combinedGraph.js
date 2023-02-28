import React from 'react';
import { Bar, Line, ComposedChart, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';



const CombinedGraph = ({width,height}) => {
    const data = [
        { name: 'English', max: 10, min: 20, avg: 60, mid: 70 },
        { name: 'Math', max: 90, min: 50, avg: 40, mid: 50 },
        { name: 'hin', max: 30, min: 60, avg: 80, mid: 90 },
        { name: 'physics', max: 10, min: 20, avg: 60, mid: 70 },
        { name: 'chemistry', max: 90, min: 50, avg: 40, mid: 50 },
        { name: 'math', max: 30, min: 60, avg: 80, mid: 90 },
        { name: 'Biology', max: 10, min: 20, avg: 60, mid: 70 },
      ];
  return (
    <div className='combinedGraph'>
          <ComposedChart width={width} height={height} data={data}>
  <XAxis dataKey="name" />
  <YAxis />
  <CartesianGrid stroke="#f5f5f5" />
  <Tooltip />
  <Legend />
  <Bar dataKey="max" fill="#8884d8" />
  <Bar dataKey="min" fill="#82ca9d" />
  <Line dataKey="avg" stroke="#ff7300" />
  <Line dataKey="mid" stroke="#387908" />
</ComposedChart>
    </div>
  )
}

export default CombinedGraph