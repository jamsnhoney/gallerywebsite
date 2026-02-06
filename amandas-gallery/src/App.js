import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import "./App.css";

import Navbar from "./pages/Navbar";
import FunWork from "./pages/FunWork";
import CaseStudies from "./components/CaseStudies";
import CaseStudyDetail from "./pages/CaseStudyDetail";
import Contact from "./pages/Contact";
import Bottom from "./pages/Bottom";

function Layout({ children }) {
  return (
    <div className="app-layout">
      <Navbar />
      <div className="app-main">{children}</div>
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
