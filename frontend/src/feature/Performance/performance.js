import React from 'react';
import CompareBox from '../CompareBox/compareBox';
import FilterButton from '../FilterButton/filterButton';
import ExamTable from '../Table/table';
import './performance.css';

const Performance = () => {
  return (
    <div className='performance'>
        <h1>Perforamnce</h1>
        <div className='performanceBox'>
        <FilterButton buttonName={"Exam"}/>
        <FilterButton buttonName={"Name"}/>
        <FilterButton buttonName={"Grade"}/>
        <FilterButton buttonName={"Total"}/>
        <CompareBox heading={"Physics"} />
        <CompareBox heading={"Chemistry"} />
        <CompareBox heading={"Math"} />
        <CompareBox heading={"Biology"} />
        </div>
        <ExamTable/>
    </div>
  )
}

export default Performance;

