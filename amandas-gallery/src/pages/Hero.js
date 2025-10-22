import React, { useState, useRef, useEffect } from "react";
import img1 from '../assets/1-qwicmerch.png';
import img2 from '../assets/2-resumeworkshop.png';
import img3 from '../assets/3-abighead.png';
import img4 from '../assets/4-coffeechat.png';
import img5 from '../assets/5-laylow.png'; 
import img6 from '../assets/6-creativemode.png';
import img7 from '../assets/7-qwicfolders.png';
import img8 from '../assets/8-qwicbunny.png';
import img9 from '../assets/qux-sticker.png';
import img10 from '../assets/qux-whatis.png';
import '../pretty/Hero.css';

const stickers = [
  { id: 1, src: img1, top: 0.1, left: 0.06 },
  { id: 2, src: img2, top: 0.05, left: 0.35 },
  { id: 3, src: img3, top: 0.20, left: 0.55 },
  { id: 4, src: img4, top: 0.5, left: 0.4 }, 
  { id: 5, src: img5, top: 0.48, left: 0.2 },
  { id: 6, src: img6, top: 0.36, left: 0.25 },
  { id: 7, src: img7, top: 0.54, left: 0.05 },
  { id: 8, src: img8, top: 0.32, left: 0.16 },
  { id: 9, src: img9, top: 0.2, left: 0.25 },
  { id: 10, src: img10, top: 0.35, left: 0.6 },
];

export default function StickerBoard() {
  const [positions, setPositions] = useState(stickers);
  const [active, setActive] = useState(null);
  const [topZ, setTopZ] = useState(stickers.length);
  const [boardSize, setBoardSize] = useState({ width: 0, height: 0 });
  const boardRef = useRef(null);

  // update board size on mount and on window resize
  useEffect(() => {
    const updateSize = () => {
      if (boardRef.current) {
        setBoardSize({
          width: boardRef.current.clientWidth,
          height: boardRef.current.clientHeight,
        });
      }
    };
    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  const getEventPosition = (e) => {
    if (e.touches) {
      return { x: e.touches[0].clientX, y: e.touches[0].clientY };
    }
    return { x: e.clientX, y: e.clientY };
  };

  const bringToFront = (id) => {
    setPositions((prev) =>
      prev.map((s) => (s.id === id ? { ...s, z: topZ + 1 } : s))
    );
    setTopZ((prev) => prev + 1);
  };

  const handleStart = (id) => {
    setActive(id);
    bringToFront(id);
  };

  const handleEnd = () => setActive(null);

  const handleMove = (e) => {
    if (active === null || !boardRef.current) return;

    if (e.type === "touchmove") {// prevent the screen from scrolling while dragging
      e.preventDefault();
    }

    const { x, y } = getEventPosition(e);
    const boardRect = boardRef.current.getBoundingClientRect();

    setPositions((prev) =>
      prev.map((sticker) => {
        if (sticker.id === active) {
          const img = document.getElementById(`sticker-${sticker.id}`);
          const imgRect = img.getBoundingClientRect();
          const halfW = imgRect.width / 2;
          const halfH = imgRect.height / 2;

          let newLeft = (x - boardRect.left - halfW) / boardRect.width;
          let newTop = (y - boardRect.top - halfH) / boardRect.height;

          // clamp between 0 and 1
          newLeft = Math.max(0, Math.min(newLeft, 1));
          newTop = Math.max(0, Math.min(newTop, 1));

          return { ...sticker, top: newTop, left: newLeft };
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
      onMouseLeave={handleEnd}
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
            top: `${sticker.top * boardSize.height}px`,
            left: `${sticker.left * boardSize.width}px`,
            zIndex: sticker.z,
          }}
          onMouseDown={() => handleStart(sticker.id)}
          onTouchStart={() => handleStart(sticker.id)}
        />
      ))}
    </div>
  );
}
