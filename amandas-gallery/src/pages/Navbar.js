import { useState } from "react";
import { Link } from "react-router-dom";
import "../pretty/Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [bunnyWiggle, setBunnyWiggle] = useState(false);
  const [menuBunnyWiggle, setMenuBunnyWiggle] = useState(false);

  const triggerBunnyAnimation = () => {
    setBunnyWiggle(true);
    setTimeout(() => setBunnyWiggle(false), 400);
  };

  const triggerMenuBunnyAnimation = (e) => {
    e.stopPropagation();
    setMenuBunnyWiggle(true);
    setTimeout(() => setMenuBunnyWiggle(false), 400);
  };

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

      {/* Desktop: center-bottom decorative bunny (hover animation) */}
      <img
        src="/bunny.png"
        alt=""
        className="navbar-bunny navbar-bunny-desktop"
        aria-hidden
      />

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
        <a
          href="/#case-studies"
          onClick={(e) => {
            setMenuOpen(false);
            if (window.location.pathname === "/" || window.location.pathname === "") {
              e.preventDefault();
              document.getElementById("case-studies")?.scrollIntoView({ behavior: "smooth", block: "start" });
            }
          }}
        >
          case studies
        </a>
        <a
          href="/#fun-work"
          onClick={(e) => {
            setMenuOpen(false);
            if (window.location.pathname === "/" || window.location.pathname === "") {
              e.preventDefault();
              document.getElementById("fun-work")?.scrollIntoView({ behavior: "smooth", block: "start" });
            }
          }}
        >
          fun work
        </a>
        <a href="/#about">about</a>
        <a href="/AMANDA_ZHU.pdf" target="_blank" rel="noopener noreferrer">resume</a>
        <Link to="/contact" onClick={() => setMenuOpen(false)}>contact</Link>
        {/* Mobile open menu: bunny to the right of links, tap to wiggle */}
        <img
          src="/bunny.png"
          alt=""
          className={`navbar-bunny navbar-bunny-menu ${menuBunnyWiggle ? "bunny-wiggle" : ""}`}
          onClick={triggerMenuBunnyAnimation}
          aria-hidden
        />
      </div>
    </div>
  );
}

export default Navbar;
