import React, { useEffect, useRef } from "react";

const CanvasComponent = () => {
  return (
    <>
      <div className="loader">
        <span></span>

        <div id="dot-1" className="dot"></div>
        <div id="dot-2" className="dot"></div>
        <div id="dot-3" className="dot"></div>
        <div id="dot-4" className="dot"></div>
        <div id="dot-5" className="dot"></div>
      </div>
    </>
  );
};

export default CanvasComponent;
