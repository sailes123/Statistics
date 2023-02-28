import React from 'react';
import './zoomMixed.css';
import CombinedGraph from '../CombinedGraph/combinedGraph';

const ZoomMixed = () => {
  return (
    <div className='zoomMixed'>
        <CombinedGraph height={700} width={1000}/>
    </div>
  )
}

export default ZoomMixed