import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import StudyRoom from './components/StudyRoom/StudyRoom';
import GPATracker from './pages/GPATracker';
import MyCourses from './pages/MyCourses';
import Scheduler from './pages/Scheduler';
import Login from './pages/Auth/Login';
import Register from './pages/Auth/Register';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/study-room" element={<StudyRoom />} />
        <Route path="/gpa-tracker" element={<GPATracker />} />
        <Route path="/my-courses" element={<MyCourses />} />
        <Route path="/scheduler" element={<Scheduler />} />
      </Routes>
    </Router>
  );
}

export default App;