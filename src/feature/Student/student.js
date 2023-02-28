import React, { useState } from 'react'
import BlueGraph from '../BlueGraph/blueGraph';
import ZoomBlueGraph from '../ZoomBlueGraph/zoomBlueGraph';
import './student.css';
import { useNavigate } from 'react-router-dom';
import CombinedGraph from '../CombinedGraph/combinedGraph';
import Overall from '../OverAll/overall';
import DifferBar from '../DifferColorBar/differBar';
import { Switch,Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';
import ExamTable from '../Table/table';

export const information = [
  { id:1,
    title: "Number of Students",
    number: "500",
    subTitle: "Class and Division Wise Student"
  },
  { id:2,
    title: "Exam",
    number: "500",
    subTitle: "Class and Division Wise Student"
  },
  {
    id:3,
    title: "Teacher",
    number: "500",
    subTitle: "Class and Division Wise Student"
  },
  {
    id:4,
    title: "Subjects",
    number: "500",
    subTitle: "Class and Division Wise Student"
  },
]

export const InfoContainer = ({id,title,number,subTitle,height,width}) =>{
  const navigate = useNavigate();
  return ( 
    <div className='infoContainer' onClick={()=>{
      navigate(`/zoom/${id}`);
    }}>
      <div className='info'>
      <p>{title}</p>
      <p>{number}</p>
      </div>
      <div style={{height:"100%"}}>
         <BlueGraph height={height} width={width}/>
         <h1>{subTitle}</h1>
      </div>
       
    </div>
  )
}

export const MixedInfoContainer=({id,subTitle,title,number,height,width})=>{
  const navigate = useNavigate();
  return (
    <div className='infoContainer'  onClick={()=>{
      navigate(`/zoomChart/${id}`);
    }}>
      <div className='info'>
      <p>{title}</p>
      </div>
      <CombinedGraph height={height} width={width}/>
    </div>
  )

}

export const MixedContainer=({id,subTitle,title,number,height,width})=>{
  const navigate = useNavigate();
  return (
    <div className='infoContainer'  onClick={()=>{
      navigate(`/group`);
    }}>
      <div className='info'>
      <p>{title}</p>
      <p>{number}</p>
      </div>
      <DifferBar height={200} width={300} />
    </div>
  )

}

const BlueGraphTable = () =>{
 
  return (
    <Table>
        <TableHead>
          <TableRow>
            <TableCell>Month</TableCell>
            <TableCell>Number of Students</TableCell>
            <TableCell>Exam</TableCell>
            <TableCell>Teacher</TableCell>
            <TableCell>Students</TableCell>    
          </TableRow>
        </TableHead>
        <TableBody>
              <TableRow>
                <TableCell>J</TableCell>
                <TableCell></TableCell>
                <TableCell></TableCell> 
                <TableCell></TableCell> 
                <TableCell></TableCell> 
              </TableRow>
              <TableRow>
                <TableCell>F</TableCell>
                <TableCell></TableCell>
                <TableCell></TableCell> 
                <TableCell></TableCell> 
                <TableCell></TableCell> 
              </TableRow>
              <TableRow>
                <TableCell>M</TableCell>
                <TableCell></TableCell>
                <TableCell></TableCell> 
                <TableCell></TableCell> 
                <TableCell></TableCell> 
              </TableRow>
              <TableRow>
                <TableCell>A</TableCell>
                <TableCell></TableCell>
                <TableCell></TableCell> 
                <TableCell></TableCell> 
                <TableCell></TableCell> 
              </TableRow>
              <TableRow>
                <TableCell>M</TableCell>
                <TableCell></TableCell>
                <TableCell></TableCell> 
                <TableCell></TableCell> 
                <TableCell></TableCell> 
              </TableRow>
              <TableRow>
                <TableCell>J</TableCell>
                <TableCell></TableCell>
                <TableCell></TableCell> 
                <TableCell></TableCell> 
                <TableCell></TableCell> 
              </TableRow>
              <TableRow>
                <TableCell>J</TableCell>
                <TableCell></TableCell>
                <TableCell></TableCell> 
                <TableCell></TableCell> 
                <TableCell></TableCell> 
              </TableRow>
              <TableRow>
                <TableCell>A</TableCell>
                <TableCell></TableCell>
                <TableCell></TableCell> 
                <TableCell></TableCell> 
                <TableCell></TableCell> 
              </TableRow>
              <TableRow>
                <TableCell>S</TableCell>
                <TableCell></TableCell>
                <TableCell></TableCell> 
                <TableCell></TableCell> 
                <TableCell></TableCell> 
              </TableRow>
              <TableRow>
                <TableCell>O</TableCell>
                <TableCell></TableCell>
                <TableCell></TableCell> 
                <TableCell></TableCell> 
                <TableCell></TableCell> 
              </TableRow>
              <TableRow>
                <TableCell>N</TableCell>
                <TableCell></TableCell>
                <TableCell></TableCell> 
                <TableCell></TableCell> 
                <TableCell></TableCell> 
              </TableRow>
              <TableRow>
                <TableCell>D</TableCell>
                <TableCell></TableCell>
                <TableCell></TableCell> 
                <TableCell></TableCell> 
                <TableCell></TableCell> 
              </TableRow>       
        </TableBody>
      </Table>
  )
}

const Student = () => {
  const [graphMode,setGraphMode] = useState(true);
  const label = { inputProps: { 'aria-label' : 'Switch demo'   } };
  return (
    <div className='student' style={{marginLeft:"200px",marginTop:"64px",padding:"10px",background:"white",width:"100%"}}>

          <div className='sameRow'><h2>Overall All Exam Information</h2>
        <div className='toggle-button'><h3>Table Mode</h3><Switch onClick={()=>{setGraphMode(!graphMode)}} {...label}/></div></div>
       {graphMode? <div className='double-row'>

          {information.map((item)=>{
            return(
            <InfoContainer height={200} width={200} id={item.id} title={item.title} number={item.number} subTitle={item.subTitle}/>
            ) })}
            <MixedInfoContainer id={1} width={200} height={200} title={"Overall Exam Report"} number={50}/>
            <MixedContainer title={"Exam Wise information of grade wise students"}/>
            <MixedInfoContainer id={2} width={200} height={200} title={"Subject wise Exam Report"} number={50}/>

        </div>:<>
        <BlueGraphTable/>
        <h1>Overall Exam Report</h1>
        <Overall/>
        <h1>Exam Wise information of grade wise students</h1>
        <ExamTable/>
        <h1>Subject Wise Exam Report</h1>
        <Overall/>
        </>}
    </div>
  )
}

export default Student;