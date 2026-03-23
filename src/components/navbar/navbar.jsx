import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="navbar_container">
      <div className="navbar_logo_container">
        <Link to="/" className="navbar_logo_link">

        <img
          className="navbar_logo"
          src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgZzSOT8itwg4W5AroY2Oz58h_cPhPlFbklOCG-61a2bX5pyyzoLSNN7v7CB4sUF2MHgPVU4rqj9tmdR4kYV2237tacwXOCpjIlyB27dr3J1cbsfMTwCqR4asHTm-Ck9KKMsm3932ibi4uvuO3yM6txIBTBCnkRIPM_BD71pUMAyL2exNB2fEOJBigkpRE/s320/Monogram%20Logo%20with%20'AS'%20in%20Glassmorphism%20Style.png"
          alt="Logo"
        /></Link>
      </div> 
      <div className={`nav-content ${isMenuOpen ? 'active' : ''}`}>
        <ul className="navbar_links_ul">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/projects">Projects</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
       
      </div>
      <div className="hamburger" onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
    </div>
  );
}

export default Navbar;