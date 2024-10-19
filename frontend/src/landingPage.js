import React from 'react';
import './index.css';
import { useNavigate } from 'react-router-dom';

function App1() {
  return (
    <div>
      <header className="header">
        <h1 className="title">Path Planner</h1>
        <nav className="nav">
          <div className="dropdown">
            <button className="dropdown-button">
              Home <svg width="8" height="8" viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg"><path d="M0 3L5 8L10 3H0Z" fill="#fff" /></svg>
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
      </header>
      {/* Main Content */}
      <div className="content">
        <div className="main-content"><img style={{ width: '650px', height: '390px' }} src="/ui.JPG" alt="" /></div>
        <div className="side-content">
          <b style={{ fontSize: '25px', marginBottom: '35px' }}>Start your degree early!</b>
          <div>Your journey to college starts here! At College Path Planner, we help high school students map out their academic schedules to ensure they meet college admissions requirements with ease. Whether you’re aiming for a top-tier university or just want to be prepared for what’s next, our platform simplifies the process.</div>
        </div>
      </div>
      {/* Get Started Button */}
      <div className="get-started">
        <button className="get-started-button">Get Started!</button>
      </div>
    </div>
  );
}

export default App1;
