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
          <p>༝ uix/ux/graphic/logo design ꕀ</p>
          <p>༝ growing co-founded queen's ux club ｡˚ </p>
          <p>༝ studying biomedical computing @ queen's u ⊹</p>
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
          {/* <p>all</p>
          <p>work</p>
          <p>fun-work</p>
          <a> contact</a> */}
          <a
          href="https://www.linkedin.com/in/amanda-zhu-b01422242/"
          target="_blank"
          rel="noopener noreferrer"
          >
          linkedin ☕︎⛾
         </a>
          <a
          href="/AMANDA_ZHU.pdf"
          target="_blank"
          rel="noopener noreferrer"
          >
          resume
         </a>
        </div>
      </div>
    </div>
  );
}

export default Top;
