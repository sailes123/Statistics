import React from 'react';
import CompareBox from '../CompareBox/compareBox';
import FilterButton from '../FilterButton/filterButton';
import ExamTable from '../Table/table';
import './statistics.css';
import { Space, Table, Tag } from 'antd';
const { Column, ColumnGroup } = Table;

const StatisticTable = () =>{
  const data = [
    {
      key: '1',
      firstName: 'Hindu',
      lastName: 8,
    },
    {
      key: '2',
      firstName: 'Hindu',
      lastName: 7,
    },
  
  ];

  return(
    <div className='statistics-table'>
         <Table width="500" dataSource={data}>
      <Column title="Selected" dataIndex="firstName" key="firstName" style={{color:"white",
      background:"black"
    }}/>
      <Column title="Number" dataIndex="lastName" key="lastName" />
      </Table>
    </div>
  )
}

const Statistics = () => {
  return (
    <div className='statistics'>
        <h1>Student Exam Performance</h1>
        <div className='filterboxes'>
        <FilterButton buttonName={"Guardian"}/>
        <FilterButton buttonName={"Religion"}/>
        <FilterButton buttonName={"Caste"}/>
        <FilterButton buttonName={"Category"}/>
        <FilterButton buttonName={"Syllabus"}/>
        <FilterButton buttonName={"Subject"}/>
        </div>
        <StatisticTable/>
    </div>
  )
}

export default Statistics;