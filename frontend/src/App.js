import './App.css';
import Dashboard from './feature/Dashboard/dashboard';
import Sidebar from './feature/Dash/dash';
import ExamTable from './feature/Table/table';
import Dash from './feature/Dash/dash';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Student from './feature/Student/student';
import ZoomBlueGraph from './feature/ZoomBlueGraph/zoomBlueGraph';
import GraphGroup from './feature/GraphGroup/graphGroup';
import ZoomMixed from './feature/zoomMixed/zoomMixed';
import Statistics from './feature/Statistics/statistics';
import Performance from './feature/Performance/performance';
import FileUploader from './feature/FileUploader/fileUploader';

function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<Dash/>} >
         <Route path="/" element={<Dashboard/>} /> 
         <Route path="zoom/:id" element={<ZoomBlueGraph/>}/>
         <Route path="student" element={<Student/>} />
         <Route path="group" element={<GraphGroup/>} />
         <Route path="zoomChart/:id" element={<ZoomMixed/>} />
         <Route path="statistics" element={<Statistics/>} />
         <Route path="performance" element={<Performance/>} />
         <Route path="file-upload" element={<FileUploader/>} />
      </Route>  
    </Routes>
  </Router>
  );
}

export default App;
