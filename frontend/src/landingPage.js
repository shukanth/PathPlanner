import React from 'react';
import './index.css';
import { useNavigate } from 'react-router-dom';

function App1() {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/signup');
  };

  return (
    <div className="landing-page">
      <header className="header">
        <div className="header-container">
          <h1 className="title">PathPlanner</h1>
          <nav className="nav">
            <div className="dropdown">
              <button className="dropdown-button">
                Menu <svg width="8" height="8" viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg"><path d="M0 3L5 8L10 3H0Z" fill="currentColor" /></svg>
              </button>
              <div className="dropdown-content">
                <a href="#select-major">Select Major</a>
                <a href="#input-courses">Input Courses</a>
                <a href="#course-suggestions">Course Suggestions</a>
              </div>
            </div>
            <a href='/login'>
              <button className="login-button">Log In</button>
            </a>
            <a href='/signup'>
              <button className="signup-button">Sign Up</button>
            </a>
          </nav>
        </div>
      </header>
      
      {/* Main Content and Get Started Section Side by Side */}
      <div className="main-sections-container">
        {/* Main Content */}
        <div className="content">
          <div className="side-content">
            <b>Start your degree early!</b>
            <div>
              Your journey to college starts here! At College Path Planner, we help high school students map out their academic schedules to ensure they meet college admissions requirements with ease. Whether you're aiming for a top-tier university or just want to be prepared for what's next, our platform simplifies the process.
            </div>
            <div className="features">
              <div className="feature">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span>Personalized Course Planning</span>
              </div>
              <div className="feature">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 12L11 14L15 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span>College Requirements Tracking</span>
              </div>
              <div className="feature">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M19.4 15C19.1277 15.6171 19.2583 16.3378 19.73 16.82L19.79 16.88C20.1656 17.2551 20.3765 17.764 20.3765 18.295C20.3765 18.826 20.1656 19.3349 19.79 19.71C19.4149 20.0856 18.906 20.2965 18.375 20.2965C17.844 20.2965 17.3351 20.0856 16.96 19.71L16.9 19.65C16.4178 19.1783 15.6971 19.0477 15.08 19.32C14.4755 19.5791 14.0826 20.1724 14.08 20.83V21C14.08 22.1046 13.1846 23 12.08 23C10.9754 23 10.08 22.1046 10.08 21V20.91C10.0642 20.2327 9.63587 19.6339 9 19.4C8.38291 19.1277 7.66219 19.2583 7.18 19.73L7.12 19.79C6.74485 20.1656 6.23603 20.3765 5.705 20.3765C5.17397 20.3765 4.66515 20.1656 4.29 19.79C3.91435 19.4149 3.70349 18.906 3.70349 18.375C3.70349 17.844 3.91435 17.3351 4.29 16.96L4.35 16.9C4.82167 16.4178 4.95231 15.6971 4.68 15.08C4.42093 14.4755 3.82764 14.0826 3.17 14.08H3C1.89543 14.08 1 13.1846 1 12.08C1 10.9754 1.89543 10.08 3 10.08H3.09C3.76733 10.0642 4.36613 9.63587 4.6 9C4.87231 8.38291 4.74167 7.66219 4.27 7.18L4.21 7.12C3.83435 6.74485 3.62349 6.23603 3.62349 5.705C3.62349 5.17397 3.83435 4.66515 4.21 4.29C4.58515 3.91435 5.09397 3.70349 5.625 3.70349C6.15603 3.70349 6.66485 3.91435 7.04 4.29L7.1 4.35C7.58219 4.82167 8.30291 4.95231 8.92 4.68H9C9.60447 4.42093 9.99738 3.82764 10 3.17V3C10 1.89543 10.8954 1 12 1C13.1046 1 14 1.89543 14 3V3.09C14.0026 3.74764 14.3955 4.34093 15 4.6C15.6171 4.87231 16.3378 4.74167 16.82 4.27L16.88 4.21C17.2551 3.83435 17.764 3.62349 18.295 3.62349C18.826 3.62349 19.3349 3.83435 19.71 4.21C20.0856 4.58515 20.2965 5.09397 20.2965 5.625C20.2965 6.15603 20.0856 6.66485 19.71 7.04L19.65 7.1C19.1783 7.58219 19.0477 8.30291 19.32 8.92V9C19.5791 9.60447 20.1724 9.99738 20.83 10H21C22.1046 10 23 10.8954 23 12C23 13.1046 22.1046 14 21 14H20.91C20.2524 14.0026 19.6591 14.3955 19.4 15Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span>Customizable Schedules</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Get Started Section with Image */}
        <div className="get-started-section">
          <div className="get-started-container">
            <div className="get-started-content">
              <h2>Ready to plan your academic future?</h2>
              <p>Join thousands of students who have already started their journey with Path Planner.</p>
              <button className="get-started-button" onClick={handleGetStarted}>
                Get Started!
              </button>
            </div>
            <div className="get-started-image">
              <img src="/students.jpg" alt="Students planning their academic future" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App1;
