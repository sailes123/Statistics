import React, { useState } from 'react';
import './fileUploader.css';

const FileUploader = () => {
 const [selectedFile,setSelectedFile] = useState(null);

 const handleSubmit = ()=>{
    if(selectedFile){
        const reader = new FileReader();
        reader.readAsText(selectedFile);
        reader.onload = (event) => {
          const csvData = event.target.result;
          // Do something with the CSV data
          console.log(csvData);
        };
    }
 }

  return (
    <div className='fileUploader'>
        <input type="file" accept='.csv' onChange={(e)=>{ setSelectedFile(e.target.value) }} />
        <button onClick={handleSubmit} >Uplaod</button>
    </div>
  )
}

export default FileUploader