import React, { useEffect } from "react";
import "./hero.css";

const Hero = () => {
  return (
    <>
      <div className="hero">
        <RandomLinesBackground />
        <div className="heroText">
          <h1>We Innovate</h1>
        </div>
      </div>
    </>
  );
};

const RandomLinesBackground = () => {
  useEffect(() => {
    if (!sessionStorage.getItem("svgGenerated")) {
      const generateSVG = () => {
        var maxwidth = innerWidth;
        var maxheight = 707;
        let svg = `<svg width="100%" height="100%" viewBox="0 0 ${maxwidth} ${maxheight}" xmlns="http://www.w3.org/2000/svg">`;

        const getEdgePoint = () => {
          let edge = Math.floor(Math.random() * 4); // 0 = top, 1 = bottom, 2 = left, 3 = right
          switch (edge) {
            case 0:
              return { x: Math.random() * maxwidth, y: 0 }; // Top edge
            case 1:
              return { x: Math.random() * maxwidth, y: maxheight }; // Bottom edge
            case 2:
              return { x: 0, y: Math.random() * maxheight }; // Left edge
            case 3:
              return { x: maxwidth, y: Math.random() * maxheight }; // Right edge
          }
        };

        for (let i = 0; i < 200; i++) {
          let p1 = getEdgePoint();
          let p2 = getEdgePoint();

          svg += `<line x1="${p1.x}%" y1="${p1.y}%" x2="${p2.x}%" y2="${p2.y}%" 
                stroke="white" stroke-width="1" stroke-opacity="1"/>`;
        }

        svg += `</svg>`;
        return `data:image/svg+xml,${encodeURIComponent(svg)}`;
      };

      let hero = document.querySelector(".hero");
      if (hero) {
        hero.style.backgroundImage = `url('${generateSVG()}')`;
        // sessionStorage.setItem("svgGenerated", "true");
      }
    }
  }, []);

  return null;
};

export default Hero;
