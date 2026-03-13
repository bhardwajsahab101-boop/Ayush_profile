import React from "react";
import "./footer.css";
function footer() {
  return (
    <>
      {/* 
    Ayush Sharma
Aspiring Web Developer 

Quick Links
Home | About | Projects | Contact
 
Connect
GitHub | LinkedIn

© 2026 Ayush Sharma
    */}
      <footer className="footer_container">
        <div className="footer_content">
          <h2>Ayush Sharma</h2>
          <p>Aspiring Web Developer</p>
          <div className="footer_links">
            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Projects</a>
            <a href="#">Contact</a>
          </div>
          <div className="footer_connect">
            <a href="#">GitHub</a>
            <a href="#">LinkedIn</a>
          </div>
          <p>© 2026 Ayush Sharma</p>
        </div>
      </footer>
    </>
  );
}

export default footer;
