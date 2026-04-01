import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navRef = useRef();

  const toggleMenu = (e) => {
    e.stopPropagation(); // prevent instant close bug
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    function handleClickOutside(event) {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      {/* Overlay */}
      {isMenuOpen && <div className="overlay" onClick={() => setIsMenuOpen(false)} />}

      <div ref={navRef} className="navbar_container">
        
        {/* Logo */}
        <div className="navbar_logo_container">
          <Link to="/" className="navbar_logo_link" onClick={() => setIsMenuOpen(false)}>
            <img
              className="navbar_logo"
              src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgZzSOT8itwg4W5AroY2Oz58h_cPhPlFbklOCG-61a2bX5pyyzoLSNN7v7CB4sUF2MHgPVU4rqj9tmdR4kYV2237tacwXOCpjIlyB27dr3J1cbsfMTwCqR4asHTm-Ck9KKMsm3932ibi4uvuO3yM6txIBTBCnkRIPM_BD71pUMAyL2exNB2fEOJBigkpRE/s320/Monogram%20Logo%20with%20'AS'%20in%20Glassmorphism%20Style.png"
              alt="Logo"
            />
          </Link>
        </div>

        {/* Menu */}
        <div className={`nav-content ${isMenuOpen ? "active" : ""}`}>
          <div className="nav_links_container">

            <ul className="navbar_links_ul">
              <li><Link to="/" onClick={() => setIsMenuOpen(false)}>Home</Link></li>
              <li><Link to="/about" onClick={() => setIsMenuOpen(false)}>About</Link></li>
              <li><Link to="/projects" onClick={() => setIsMenuOpen(false)}>Projects</Link></li>
              <li><Link to="/contact" onClick={() => setIsMenuOpen(false)}>Contact</Link></li>
            </ul>

            <ul className="navbar_links_ul">
              <li>
                <Link className="nav_work" to="/hire" onClick={() => setIsMenuOpen(false)}>
                  Lets work together
                </Link>
              </li>
            </ul>

          </div>
        </div>

        {/* Hamburger */}
        <div className="hamburger" onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>

      </div>
    </>
  );
}

export default Navbar;