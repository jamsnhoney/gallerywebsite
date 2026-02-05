import React from "react";
import { useParams, Link } from "react-router-dom";
import { getCaseStudyBySlug } from "../data/caseStudies";
import "../pretty/CaseStudyDetail.css";

function CaseStudyDetail() {
  const { slug } = useParams();
  const caseStudy = getCaseStudyBySlug(slug);

  if (!caseStudy) {
    return (
      <main className="case-study-detail">
        <div className="case-study-detail-container">
          <p>Case study not found.</p>
          <Link to="/" className="case-study-back-link">← Back</Link>
        </div>
      </main>
    );
  }

  const { title, imageSrc, caption } = caseStudy;

  return (
    <main className="case-study-detail">
      <div className="case-study-detail-container">
        {/* Desktop: sticky TOC */}
        <aside className="case-study-toc">
          <Link to="/" className="case-study-toc-back">← Back</Link>
          <nav className="case-study-toc-nav">
            <a href="#overview">Overview</a>
            <a href="#problem-statement">Problem Statement</a>
            <a href="#user-research">User Research</a>
            <a href="#market-research">Market Research</a>
            <a href="#design-process">The Design Process</a>
            <a href="#final-designs">Final Designs</a>
            <a href="#reflections">Reflections</a>
          </nav>
        </aside>

        {/* Mobile: back only */}
        <div className="case-study-mobile-back">
          <Link to="/">← Back</Link>
        </div>

        {/* Main content column */}
        <div className="case-study-main">
          <h1 className="case-study-detail-title">{title}</h1>
          <div className="case-study-hero">
            <img src={imageSrc} alt="" className="case-study-hero-image" />
          </div>
          <p className="case-study-caption">{caption}</p>

          <div id="overview" className="case-study-section">
            <h2>Overview</h2>
            <p className="case-study-placeholder">Content to be added.</p>
          </div>
          <div id="problem-statement" className="case-study-section">
            <h2>Problem Statement</h2>
            <p className="case-study-placeholder">Content to be added.</p>
          </div>
          <div id="user-research" className="case-study-section">
            <h2>User Research</h2>
            <p className="case-study-placeholder">Content to be added.</p>
          </div>
          <div id="market-research" className="case-study-section">
            <h2>Market Research</h2>
            <p className="case-study-placeholder">Content to be added.</p>
          </div>
          <div id="design-process" className="case-study-section">
            <h2>The Design Process</h2>
            <p className="case-study-placeholder">Content to be added.</p>
          </div>
          <div id="final-designs" className="case-study-section">
            <h2>Final Designs</h2>
            <p className="case-study-placeholder">Content to be added.</p>
          </div>
          <div id="reflections" className="case-study-section">
            <h2>Reflections</h2>
            <p className="case-study-placeholder">Content to be added.</p>
          </div>
        </div>
      </div>
    </main>
  );
}

export default CaseStudyDetail;
