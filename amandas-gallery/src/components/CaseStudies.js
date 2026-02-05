import React from "react";
import { Link } from "react-router-dom";
import "./CaseStudies.css";
import { caseStudiesData } from "../data/caseStudies";

function CaseStudies({ items = caseStudiesData }) {
  return (
    <section className="case-studies" id="case-studies">
      <div className="case-studies-grid">
        {items.map((item) => (
          <article key={item.slug} className="case-study-card">
            <Link to={`/case-study/${item.slug}`} className="case-study-card-link">
              <div className="case-study-media">
                {item.videoUrl ? (
                  <span className="case-study-media-inner">
                    <img
                      src={item.videoThumbnail || item.imageSrc}
                      alt=""
                      className="case-study-thumbnail"
                    />
                  </span>
                ) : (
                  <img
                    src={item.imageSrc}
                    alt=""
                    className="case-study-thumbnail"
                  />
                )}
              </div>
              <p className="case-study-title">{item.galleryTitle || item.title}</p>
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}

export default CaseStudies;
