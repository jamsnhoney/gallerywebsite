import React from "react";
import "./CaseStudies.css";
import img1 from "../assets/wingmate.png";
import img2 from "../assets/wingmate.png";
import img3 from "../assets/wingmate.png";
import img4 from "../assets/wingmate.png";

const defaultItems = [
  { title: "wingmate | the fresh into the world dating app", imageSrc: img1 },
  { title: "new website new brand | website audit for careerxl", imageSrc: img2 },
  { title: "let’s get f***king moving | graphic and website design", imageSrc: img3 },
  { title: "my favourite productivity app | ux research is easy when i am the only user", imageSrc: img4 },
];

function CaseStudies({ items = defaultItems }) {
  return (
    <section className="case-studies" id="case-studies">
      <div className="case-studies-grid">
        {items.map((item, index) => (
          <article key={index} className="case-study-card">
            <div className="case-study-media">
              {item.videoUrl ? (
                <a href={item.videoUrl} target="_blank" rel="noopener noreferrer">
                  <img
                    src={item.imageSrc || item.videoThumbnail}
                    alt=""
                    className="case-study-thumbnail"
                  />
                </a>
              ) : (
                <img
                  src={item.imageSrc}
                  alt=""
                  className="case-study-thumbnail"
                />
              )}
            </div>
            <p className="case-study-title">{item.title}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default CaseStudies;
