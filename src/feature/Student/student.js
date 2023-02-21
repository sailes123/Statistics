import React from 'react'
import BlueGraph from '../BlueGraph/blueGraph';
import './student.css';

const InfoContainer = ({title,number,subTitle}) =>{
  return ( 
    <div className='infoContainer'>
      <div className='info'>
      <p>{title}</p>
      <p>{number}</p>
      </div>
      <div style={{height:"100%"}}>
         <BlueGraph/>
         <h1>{subTitle}</h1>
      </div>
       
    </div>
  )
}

const Student = () => {
  return (
    <div className='student' style={{marginLeft:"200px",marginTop:"64px",padding:"10px",background:"white",width:"100%"}}>
        <h1>Student Report</h1>
        <div className="graphCollection">
          <InfoContainer title={"Number of Students"} number={500} subTitle="Class and Dicvision Wise Student"/> 
          <InfoContainer title={"Exam"} number={15} subTitle="Exam Appeared Student C/D"/> 
          <InfoContainer title={"Teacher"} number={10} subTitle="Subject Wise C - D"/> 
          <InfoContainer title={"Subjects"} number={15} subTitle="Subject Wise C - D"/> 
        </div>
    </div>
  )
}

export default Student;