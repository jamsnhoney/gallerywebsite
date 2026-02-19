import React, { useEffect, useState } from "react";
import "../pretty/About.css";

import img1 from '../assets/aboutphotos/aboutme1.png';
import img2 from '../assets/aboutphotos/aboutme2.png';
import img3 from '../assets/aboutphotos/aboutme3.png';
import img4 from '../assets/aboutphotos/aboutme4.png';
import img5 from '../assets/aboutphotos/aboutme5.png';
import img6 from '../assets/aboutphotos/aboutme6.png';
import img7 from '../assets/aboutphotos/aboutme7.png';
import img8 from '../assets/aboutphotos/aboutme8.png';
import img9 from '../assets/aboutphotos/aboutme9.png';
import img10 from '../assets/aboutphotos/aboutme10.png';
import img11 from '../assets/aboutphotos/aboutme11.png';
import img12 from '../assets/aboutphotos/aboutme12.png';
import img13 from '../assets/aboutphotos/aboutme13.png';
import img14 from '../assets/aboutphotos/aboutme14.png';
import img15 from '../assets/aboutphotos/aboutme15.png';
import img16 from '../assets/aboutphotos/aboutme16.png';

function About() {
  const [visibleImages, setVisibleImages] = useState([]);

  useEffect(() => {
    // Staggered fade-in animation for gallery images
    const imageCount = 16;
    const staggerDelay = 50; // 50ms delay between each image
    
    const timers = [];
    for (let i = 0; i < imageCount; i++) {
      const timer = setTimeout(() => {
        setVisibleImages((prev) => [...prev, i]);
      }, i * staggerDelay);
      timers.push(timer);
    }

    return () => {
      timers.forEach((timer) => clearTimeout(timer));
    };
  }, []);

  // Array of imported images in the specified order (left to right, top to bottom)
  const images = [
    img5, img15, img14, img3, img2, img4, img1, img8,
    img7, img6, img9, img10, img11, img12, img13, img16
  ];

  return (
    <main className="about-page">
      <div className="about-container">
        <div className="about-header-section">
          <h1 className="about-header">hello .ᐟ</h1>
          <p className="about-location"> i'm amanda, ui/ux designer based in toronto ✈︎ </p>
        </div>
        <div className="about-items">
          <div className="about-item">
            <span className="about-label">the journey</span>
            <span className="about-content">i love all things design.
                                            between human–computer interaction courses and self-driven learning in graphic/website design,
                                            i found work that doesn't feel like work 𓅰 𓅭 𓅮 𓅯 </span>
          </div>
          <div className="about-item">
            <span className="about-label">where i'm at</span>
            <span className="about-content"> i'm in my last year of studying computer science at queen's university, making the most out school club life at @queens.ux club, @queenswic, @casuallycooldanceteam & @id8id8id8.  </span>
          </div>
          <div className="about-item">
            <span className="about-label">you'll find me</span>
            <span className="about-content"> playing piano, in the dance studio with friends, journaling, & making mini creative side projects.</span>
          </div>
        </div>
        <div className="about-gallery">
          {Array.from({ length: 16 }, (_, index) => (
            <div
              key={index}
              className={`about-gallery-item ${
                visibleImages.includes(index) ? "fade-in-visible" : ""
              }`}
            >
              <img
                src={images[index]}
                alt="something in my camera roll"
                className="about-gallery-image"
              />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

export default About;
