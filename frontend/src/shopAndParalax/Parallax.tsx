import { useEffect, useState } from "react";

export default function Parallax() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="parallax">
      <img src="/sun1.png" className="sun" alt="" />
      <img
        src="/tropical-haven-palm-island-silhouette-cutouts-free-png.webp"
        className="island"
        alt=""
      />
      <img src="/islandRight.png" className="islandRight" alt="" />
      <img src="/clouds.png" className="clouds" alt="" />
      <img src="/seagullLeft.png" className="seagullLeft" alt="" />
      <img src="/seagullRight.png" className="seagullRight" alt="" />
      <img src="/sea.png" className="sea" alt="" />

      {/* Parallax trees that move or fade on scroll */}
      <div
        style={{
          transform: `translate(${scrollY * 3.5}px, ${-scrollY * 1.5}px)`,
        }}
        className="palmtreeRight"
      >
        <img src="/palmtree.png" className="palmtreeRight" alt="" />
        <div className="labelRight">bg</div>
      </div>
      <div
        style={{
          transform: `translate(${-scrollY * 3.5}px, ${-scrollY * 1.5}px)`,
        }}
        className="palmtreeLeft"
      >
        <div className="labelLeft">Plaj</div>
        <img src="/palmtreeLeft.png" className="palmtreeLeft" alt="" />
      </div>
    </div>
  );
}
