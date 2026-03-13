import React from "react";
import { Link } from "react-router-dom";
import "./CaseStudies.css";
import { caseStudiesData } from "../data/caseStudies";
import mosmVideo from "../assets/mosm/MOSM-vid.mp4";

function CaseStudies({ items = caseStudiesData }) {
  return (
    <section className="case-studies" id="case-studies">
      <div className="case-studies-grid">
        {items.map((item) => (
          <article key={item.slug} className="case-study-card">
            <Link to={`/case-study/${item.slug}`} className="case-study-card-link">
              <div className="case-study-media">
                {item.slug === "case-study-2" ? (
                  <video
                    src={mosmVideo}
                    className="case-study-thumbnail"
                    muted
                    loop
                    autoPlay
                    playsInline
                  />
                ) : item.videoUrl ? (
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
              <p className="case-study-title">
                {(() => {
                  const rawTitle = item.galleryTitle || item.title || "";
                  const [main, ...rest] = rawTitle.split("|");
                  const desc = rest.join("|").trim();
                  return (
                    <>
                      <span className="case-study-title-main">{main.trim()}</span>
                      {desc ? (
                        <>
                          <span className="case-study-title-sep"> | </span>
                          <span className="case-study-title-desc">{desc}</span>
                        </>
                      ) : null}
                    </>
                  );
                })()}
              </p>
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}

export default CaseStudies;
