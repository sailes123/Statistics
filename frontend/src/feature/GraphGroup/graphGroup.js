import React from 'react'
import CombinedGraph from '../CombinedGraph/combinedGraph';
import DifferBar from '../DifferColorBar/differBar';
import './graphGroup.css';

const GraphGroup = () => {
  return (
    <div className='graphGroup'>
      <DifferBar height={700} width={1000}/>
    </div>
  )
}

export default GraphGroup;