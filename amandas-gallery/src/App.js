import React from "react";
import "./App.css";

import Navbar from "./pages/Navbar";
import Hero from "./pages/Hero";
import CaseStudies from "./components/CaseStudies";
import Bottom from "./pages/Bottom";

function App() {
  return (
    <>
      <Navbar />
      <CaseStudies />
      <Hero />
      <Bottom />
    </>
  );
}

export default App;
