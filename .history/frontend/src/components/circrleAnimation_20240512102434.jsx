import React, { useEffect, useRef } from "react";
import logos from "../assets/logo.js";

const CanvasComponent = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const images = {
      sun: new Image(),
      moon: new Image(),
      earth: new Image(),
    };

    images.sun.src = "../assets/react.png";
    images.moon.src = "../assets/js.png";
    images.earth.src = "../assets/html.png";

    function draw() {
      ctx.globalCompositeOperation = "destination-over";
      ctx.clearRect(0, 0, 300, 300);

      ctx.fillStyle = "rgba(0,0,0,0.4)";
      ctx.strokeStyle = "rgba(0,153,255,0.4)";
      ctx.save();
      ctx.translate(150, 150);

      // Earth
      const time = new Date();
      ctx.rotate(
        ((2 * Math.PI) / 60) * time.getSeconds() +
          ((2 * Math.PI) / 60000) * time.getMilliseconds()
      );
      ctx.translate(105, 0);
      ctx.fillRect(0, -12, 50, 24);
      ctx.drawImage(images.earth, -12, -12);

      // Moon
      ctx.save();
      ctx.rotate(
        ((2 * Math.PI) / 6) * time.getSeconds() +
          ((2 * Math.PI) / 6000) * time.getMilliseconds()
      );
      ctx.translate(0, 28.5);
      ctx.drawImage(images.moon, -3.5, -3.5);
      ctx.restore();

      ctx.restore();

      ctx.beginPath();
      ctx.arc(150, 150, 105, 0, Math.PI * 2, false);
      ctx.stroke();

      ctx.drawImage(images.sun, 0, 0, 300, 300);

      window.requestAnimationFrame(draw);
    }

    draw();
  }, []);

  return <canvas ref={canvasRef} width="300" height="300"></canvas>;
};

export default CanvasComponent;
