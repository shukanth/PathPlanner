import React from 'react';
import './footer.css'; // Ensure this file exists and is styled accordingly

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section about">
          <h2>About</h2>
          <p>Path Planner helps students plan their academic journey with ease.</p>
        </div>
        <div className="footer-section links">
          <h2>Quick Links</h2>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Features</a></li>
            <li><a href="#">Pricing</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>
        <div className="footer-section social">
          <h2>Follow Us</h2>
          <div className="social-icons">
            <a href="#"><img src="path-to-facebook-icon.png" alt="Facebook" /></a>
            <a href="#"><img src="path-to-twitter-icon.png" alt="Twitter" /></a>
            <a href="#"><img src="path-to-instagram-icon.png" alt="Instagram" /></a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        &copy; 2024 Path Planner | All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;
