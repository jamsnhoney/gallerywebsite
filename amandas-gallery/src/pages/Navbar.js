import { useState } from "react";
import "../pretty/Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="top">
      <div className="hello">
        <div className="title">
          <h1>amanda zhu.ᐟ</h1>
        </div>
        <p>ui/ux/graphic designer breaking into product design. </p>
      </div>

      {/* navbar */}
      <div className="navbar">
        <div
          className={`hamburger ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        <div className={`nav-links ${menuOpen ? "show" : ""}`}>
          <a href="#case-studies">case studies</a>
          <a href="#fun-work">fun work</a>
          <a href="#about">about</a>
          <a href="/AMANDA_ZHU.pdf" target="_blank" rel="noopener noreferrer">resume</a>
          <a href="#contact">contact</a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
