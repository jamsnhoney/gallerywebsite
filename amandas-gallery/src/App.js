import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";

import Navbar from "./pages/Navbar";
import Hero from "./pages/Hero";
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
  return (
    <>
      <CaseStudies />
      <Hero />
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
