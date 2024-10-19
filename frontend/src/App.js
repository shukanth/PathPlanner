import './App.css';
import App1 from './landingPage';
// import Footer from './footer';
import CreditList from './CreditList';
import LogInPage from './LogInPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<App1 />} />
          <Route path="/login" element={<LogInPage />} />
          <Route path="/credit-list" element={<CreditList />} />
        </Routes>
      </Router>    </div>
  );
}

export default App;
