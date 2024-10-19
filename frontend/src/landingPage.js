import React from 'react';

function App1() {
  return (
    <div>
      <header className="header">
        <h1 className="title">Path Planner</h1>
        <nav className="nav">
          <div className="dropdown">
            <button className="dropdown-button">
              Home <svg width="8" height="8" viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg"><path d="M0 3L5 8L10 3H0Z" fill="#fff"/></svg>
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
        <div className="main-content">Start your degree early</div>
        <div className="side-content">Text about Path Planner</div>
      </div>
      {/* Get Started Button */}
      <div className="get-started">
        <button className="get-started-button">Get Started!</button>
      </div>
    </div>
  );
}

export default App1;
