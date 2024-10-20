import './App.css';
import App1 from './landingPage';
// import Footer from './footer';
import CourseList from './CourseList';
import LogInPage from './LogInPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SchedulePlan from './SchedulePlan';
import TransferPage from './TransferPage';
import Backend from './Backend';
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<App1 />} />
          <Route path="/login" element={<LogInPage />} />
          <Route path="/transfer-page" element={<TransferPage />} />
          <Route path="/test-backend" element={<Backend />} />
          <Route path="/schedule-plan" element={<SchedulePlan />} />
          <Route path="/credit-list" element={<CourseList />} />
        </Routes>
      </Router>    </div>
  );
}

export default App;
