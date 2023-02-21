import './App.css';
import Dashboard from './feature/Dashboard/dashboard';
import Sidebar from './feature/Dash/dash';
import ExamTable from './feature/Table/table';
import Dash from './feature/Dash/dash';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Student from './feature/Student/student';

function App() {
  return (
    <Router>
    <Routes>
      <Route path="/*" element={<Dash/>} />
    </Routes>
  </Router>
  );
}

export default App;
