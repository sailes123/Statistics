import React from 'react';
import { InfoContainer } from '../Student/student';
import './zoomBlueGraph.css';
import { information } from '../Student/student';
import { useParams } from 'react-router-dom';
import BlueGraph from '../BlueGraph/blueGraph';


function ZoomBlueGraph() {
  const boxId = useParams();
  const graphInfo = information.filter((item)=>item.id==boxId.id)
  return (
    <div className='zoomBlueGraph'>
      
      <div title=''>
        <h1>{graphInfo[0].title}</h1>
        <h1>{graphInfo[0].number}</h1>
        </div>
      <BlueGraph height={700} width={1000}/>
    </div>
  )
}

export default ZoomBlueGraph;