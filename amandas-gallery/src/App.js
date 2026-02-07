import React, { useEffect, useState, useRef } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import "./App.css";

import Navbar from "./pages/Navbar";
import FunWork from "./pages/FunWork";
import CaseStudies from "./components/CaseStudies";
import CaseStudyDetail from "./pages/CaseStudyDetail";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Bottom from "./pages/Bottom";

function Layout({ children }) {
  const location = useLocation();
  const [isAnimating, setIsAnimating] = useState(false);
  const isInitialMount = useRef(true);
  const prevPathname = useRef(location.pathname);

  // Scroll to top when navigating to About or Contact pages
  useEffect(() => {
    if ((location.pathname === "/about" || location.pathname === "/contact") && 
        prevPathname.current !== location.pathname) {
      window.scrollTo(0, 0);
    }
    prevPathname.current = location.pathname;
  }, [location.pathname]);

  useEffect(() => {
    // On initial load, animate home page
    if (isInitialMount.current && (location.pathname === "/" || location.pathname === "")) {
      isInitialMount.current = false;
      setIsAnimating(true);
      const timer = setTimeout(() => setIsAnimating(false), 400);
      return () => clearTimeout(timer);
    }
    // On navigation, animate About and Contact pages
    else if (location.pathname === "/about" || location.pathname === "/contact") {
      setIsAnimating(true);
      const timer = setTimeout(() => setIsAnimating(false), 400);
      return () => clearTimeout(timer);
    } else {
      isInitialMount.current = false;
    }
  }, [location.pathname]);

  return (
    <div className="app-layout">
      <Navbar />
      <div className={`app-main ${isAnimating ? "fade-in" : ""}`}>{children}</div>
      <Bottom />
    </div>
  );
}

function HomePage() {
  const location = useLocation();

  useEffect(() => {
    const hash = location.hash?.slice(1);
    if (hash) {
      const el = document.getElementById(hash);
      if (el) {
        const t = setTimeout(() => el.scrollIntoView({ behavior: "smooth", block: "start" }), 50);
        return () => clearTimeout(t);
      }
    }
  }, [location.pathname, location.hash]);

  return (
    <>
      <CaseStudies />
      <FunWork />
    </>
  );
}

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Layout>
            <HomePage />
          </Layout>
        }
      />
      <Route
        path="/contact"
        element={
          <Layout>
            <Contact />
          </Layout>
        }
      />
      <Route
        path="/about"
        element={
          <Layout>
            <About />
          </Layout>
        }
      />
      <Route
        path="/case-study/:slug"
        element={
          <Layout>
            <CaseStudyDetail />
          </Layout>
        }
      />
    </Routes>
  );
}

export default App;
