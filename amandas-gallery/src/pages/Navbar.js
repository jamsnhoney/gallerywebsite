import { useState } from "react";
import { Link } from "react-router-dom";
import "../pretty/Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="top">
      <Link to="/" className="hello-link">
        <div className="hello">
          <div className="title">
            <h1>amanda zhu </h1>
          </div>
          <p>ui/ux/graphic designer breaking into product design. </p>
        </div>
      </Link>

      <div className="navbar">
        <div
          className={`hamburger ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          <span></span>
          <span></span>
        </div>
      </div>

      <div className={`nav-links ${menuOpen ? "show" : ""}`}>
        <a href="/#case-studies">case studies</a>
        <a href="/#fun-work">fun work</a>
        <a href="/#about">about</a>
        <a href="/AMANDA_ZHU.pdf" target="_blank" rel="noopener noreferrer">resume</a>
        <Link to="/contact" onClick={() => setMenuOpen(false)}>contact</Link>
      </div>
    </div>
  );
}

export default Navbar;
