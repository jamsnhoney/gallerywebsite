// import React from 'react';
// import '../pretty/Hero.css';

import img1 from '../assets/1-qwicmerch.png';
import img2 from '../assets/2-resumeworkshop.png';
import img3 from '../assets/3-abighead.png';
import img4 from '../assets/4-coffeechat.png';
import img5 from '../assets/5-laylow.png'; 
import img6 from '../assets/6-creativemode.png';
import img7 from '../assets/7-qwicfolders.png';
import img8 from '../assets/8-qwicbunny.png';

import React, { useState } from "react";
// import "./StickerBoard.css";
import '../pretty/Hero.css';

const stickers = [
  { id: 1, src: img1, top: 50, left: 60 },
  { id: 2, src: img2, top: 140, left: 180 },
  { id: 3, src: img3, top: 220, left: 90 },
  { id: 4, src: img4, top: 300, left: 200 },
];

export default function StickerBoard() {
  const [activeId, setActiveId] = useState(null); // track which sticker is on top
  const [positions, setPositions] = useState(stickers);

  const handleMouseDown = (id, e) => {
    const sticker = positions.find(s => s.id === id);
    const offsetX = e.clientX - sticker.left;
    const offsetY = e.clientY - sticker.top;

    setActiveId(id);

    const handleMouseMove = e => {
      setPositions(prev =>
        prev.map(s =>
          s.id === id
            ? { ...s, left: e.clientX - offsetX, top: e.clientY - offsetY }
            : s
        )
      );
    };

    const handleMouseUp = () => {
      setActiveId(null);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
  };

  return (
    <div className="sticker-board">
      {positions.map((s, i) => (
        <img
          key={s.id}
          src={s.src}
          alt="sticker"
          className={`sticker ${activeId === s.id ? "active" : ""}`}
          style={{
            top: s.top,
            left: s.left,
            zIndex: activeId === s.id ? 10 : i,
          }}
          onMouseDown={e => handleMouseDown(s.id, e)}
          draggable="false"
        />
      ))}
    </div>
  );
}


// function Hero() {
//   return (
//     <div className="hero">
//       <div className="hero-gallery">
//         <img src={img1} alt="qwicmerch" className="hero-image" />
//         <img src={img2} alt="resumeworkshop" className="hero-image" />
//         <img src={img3} alt="abighead" className="hero-image" />
//         <img src={img4} alt="coffeechat" className="hero-image" />
//         <img src={img5} alt="laylow" className="hero-image" />
//         <img src={img6} alt="creativemode" className="hero-image" />
//         <img src={img7} alt="qwicfolders" className="hero-image" />
//         <img src={img8} alt="qwicbunny" className="hero-image" />
//       </div>
//     </div>
    
//   );
// }

// export default Hero;