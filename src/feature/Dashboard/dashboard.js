import { Switch, Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material'
import React, { useState } from 'react';
import BarChart from '../BarChart/barChart';
import Overall from '../OverAll/overall';
import OverallGraph from '../OverallGraph/OverallGraph';
import ExamTable from '../Table/table';
import './dashboard.css';

const Dashboard = () => {
  const [graphMode,setGraphMode] = useState(false);
  const label = { inputProps: { 'aria-label': 'Switch demo' } };
  return (
    <div className='dashboard'>
    <h1>Dashboard</h1>
    <h2>Statistic</h2>
    <Table>
        <TableHead>
          <TableRow>
            <TableCell>Number of Students </TableCell>
            <TableCell>Number of  Exams</TableCell>
            <TableCell>Number of  Teachers</TableCell>
            <TableCell>Numbers of Subjects</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
              <TableRow>
                <TableCell>150</TableCell>
                <TableCell>5</TableCell>
                <TableCell>10</TableCell> 
                <TableCell>10</TableCell> 
              </TableRow>
        </TableBody>
      </Table>
      <div className='sameRow'><h2>Overall All Exam Information</h2>
        <div><h4>Graph Mode</h4><Switch onClick={()=>{setGraphMode(!graphMode)}} {...label}/></div></div>
        {graphMode?<BarChart/>:<Overall/>} 
        <h2>Overall Exam</h2>
        <ExamTable/>
      
</div>
  )
}

export default Dashboard;
