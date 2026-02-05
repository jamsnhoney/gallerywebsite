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

  const { title, imageSrc, role = [], team = [], skills = [], timeline = [] } = caseStudy;

  return (
    <main className="case-study-detail">
      <div className="case-study-detail-container">
        {/* Desktop: sticky TOC */}
        <aside className="case-study-toc">
          <Link to="/" className="case-study-toc-back">← back</Link>
          <nav className="case-study-toc-nav">
            <a href="#overview">overview</a>
            <a href="#problem-statement">problem statement</a>
            <a href="#user-research">user research</a>
            <a href="#market-research">market research</a>
            <a href="#design-process">the design process</a>
            <a href="#final-designs">final designs</a>
            <a href="#reflections">reflections</a>
          </nav>
        </aside>

        {/* Mobile: back only */}
        <div className="case-study-mobile-back">
          <Link to="/">← back</Link>
        </div>

        {/* Main content column */}
        <div className="case-study-main">
          <h1 className="case-study-detail-title">{title}</h1>
          <div className="case-study-hero">
            <img src={imageSrc} alt="" className="case-study-hero-image" />
          </div>
          <div className="case-study-meta-cols">
            <div className="case-study-meta-col">
              <h3 className="case-study-meta-title">role</h3>
              <div className="case-study-meta-list">
                {role.map((line, i) => (
                  <span key={i}>{line}</span>
                ))}
              </div>
            </div>
            <div className="case-study-meta-col">
              <h3 className="case-study-meta-title">the team</h3>
              <div className="case-study-meta-list">
                {team.map((line, i) => (
                  <span key={i}>{line}</span>
                ))}
              </div>
            </div>
            <div className="case-study-meta-col">
              <h3 className="case-study-meta-title">skills</h3>
              <div className="case-study-meta-list">
                {skills.map((line, i) => (
                  <span key={i}>{line}</span>
                ))}
              </div>
            </div>
            <div className="case-study-meta-col">
              <h3 className="case-study-meta-title">timeline</h3>
              <div className="case-study-meta-list">
                {timeline.map((line, i) => (
                  <span key={i}>{line}</span>
                ))}
              </div>
            </div>
          </div>

          <div id="overview" className="case-study-section">
            <h2>overview</h2>
            <p className="case-study-placeholder">Content to be added.</p>
          </div>
          <div id="problem-statement" className="case-study-section">
            <h2>problem statement</h2>
            <p className="case-study-placeholder">Content to be added.</p>
          </div>
          <div id="user-research" className="case-study-section">
            <h2>user research</h2>
            <p className="case-study-placeholder">Content to be added.</p>
          </div>
          <div id="market-research" className="case-study-section">
            <h2>market research</h2>
            <p className="case-study-placeholder">Content to be added.</p>
          </div>
          <div id="design-process" className="case-study-section">
            <h2>the design process</h2>
            <p className="case-study-placeholder">Content to be added.</p>
          </div>
          <div id="final-designs" className="case-study-section">
            <h2>final designs</h2>
            <p className="case-study-placeholder">Content to be added.</p>
          </div>
          <div id="reflections" className="case-study-section">
            <h2>reflections</h2>
            <p className="case-study-placeholder">Content to be added.</p>
          </div>
        </div>
      </div>
    </main>
  );
}

export default CaseStudyDetail;
