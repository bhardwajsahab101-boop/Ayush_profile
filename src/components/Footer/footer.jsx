import { Link } from "react-router-dom";
import "./footer.css";
function footer() {
  return (
    <>
   
      <footer className="footer_container">
        <div className="footer_content">
          <h2>Ayush Sharma</h2>
          <p>Aspiring Web Developer</p>
          <div className="footer_links">
            <Link to="/" >Home</Link>
            <Link to="/about" >About</Link>
            <Link to="/projects" >Projects</Link>
            <Link to="/contact" >Contact</Link>
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
