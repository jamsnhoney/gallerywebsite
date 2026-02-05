import { useState } from "react";
import "../pretty/Top.css";
import smiski from "../assets/smiskiiii.png";

function Top() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="top">
      <div className="hello">
        <div className="title">
          <img src={smiski} alt="smiski" className="smiski-image" />
          <h1>amanda zhu .ᐟ</h1>
        </div>
        <div className="bullets">
          <p>ui/ux/graphic designer breaking into product design. </p>
        </div>
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

export default Top;
