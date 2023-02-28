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
      </Route>  
    </Routes>
  </Router>
  );
}

export default App;
