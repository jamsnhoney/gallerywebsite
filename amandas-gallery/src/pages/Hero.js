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

import React, { useState, useRef } from "react";
// import "./StickerBoard.css";
import '../pretty/Hero.css';

const stickers = [
  { id: 1, src: img1, top: 50, left: 60 },
  { id: 2, src: img2, top: 140, left: 350 },
  { id: 3, src: img3, top: 220, left: 900 },
  { id: 4, src: img4, top: 500, left: 800 }, 
  { id: 5, src: img5, top: 380, left: 130 },
  { id: 6, src: img6, top: 660, left: 450 },
  { id: 7, src: img7, top: 540, left: 380 },
  { id: 8, src: img8, top: 620, left: 160 },
];

export default function StickerBoard() {
  const [positions, setPositions] = useState(stickers);
  const [active, setActive] = useState(null);
  const [topZ, setTopZ] = useState(stickers.length);
  const boardRef = useRef(null);

  const getEventPosition = (e) => {
    if (e.touches) {
      return { x: e.touches[0].clientX, y: e.touches[0].clientY };
    }
    return { x: e.clientX, y: e.clientY };
  };

  const bringToFront = (id) => {
    setPositions((prev) =>
      prev.map((s) =>
        s.id === id ? { ...s, z: topZ + 1 } : s
      )
    );
    setTopZ((prev) => prev + 1);
  };

  const handleStart = (id) => {
    setActive(id);
    bringToFront(id);
  };

  const handleEnd = () => setActive(null);

  const handleMove = (e) => {
    if (active === null) return;

    const board = boardRef.current;
    const boardRect = board.getBoundingClientRect();
    const { x, y } = getEventPosition(e);

    setPositions((prev) =>
      prev.map((sticker) => {
        if (sticker.id === active) {
          const img = document.getElementById(`sticker-${sticker.id}`);
          const imgRect = img.getBoundingClientRect();
          const halfW = imgRect.width / 2;
          const halfH = imgRect.height / 2;

          let newLeft = x - boardRect.left - halfW;
          let newTop = y - boardRect.top - halfH;

          // stay inside bounds
          newLeft = Math.max(0, Math.min(newLeft, boardRect.width - imgRect.width));
          newTop = Math.max(0, Math.min(newTop, boardRect.height - imgRect.height));

          return { ...sticker, left: newLeft, top: newTop };
        }
        return sticker;
      })
    );
  };

  return (
    <div
      ref={boardRef}
      className="sticker-board"
      onMouseMove={handleMove}
      onMouseUp={handleEnd}
      onTouchMove={handleMove}
      onTouchEnd={handleEnd}
    >
      {positions.map((sticker) => (
        <img
          key={sticker.id}
          id={`sticker-${sticker.id}`}
          src={sticker.src}
          alt="sticker"
          className="sticker"
          style={{
            top: sticker.top,
            left: sticker.left,
            zIndex: sticker.z,
          }}
          onMouseDown={() => handleStart(sticker.id)}
          onTouchStart={() => handleStart(sticker.id)}
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