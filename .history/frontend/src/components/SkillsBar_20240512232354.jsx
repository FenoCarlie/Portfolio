import React, { useEffect } from "react";
import { assets } from "../assets/assets";

function SkillsBar() {
  useEffect(() => {
    var copy = document.querySelector(".logos-slide").cloneNode(true);
    document.querySelector(".logos").appendChild(copy);
  });
  return (
    <>
      <div className="logos ">
        <div className="logos-slide">
          <img src={assets.css} />
          <img src={assets.html} />
          <img src={assets.react} />
          <img src={assets.js} />
          <img src={assets.php} />
          <img src={assets.mongo} />
          <img src={assets.css} />
        </div>
      </div>
    </>
  );
}

export default SkillsBar;
