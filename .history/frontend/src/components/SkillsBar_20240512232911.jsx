import React, { useEffect } from "react";
import { assets } from "../assets/assets";

function SkillsBar() {
  return (
    <>
      <div className="flex flex-row">
        <img src={assets.css} />
        <img src={assets.html} />
        <img src={assets.react} />
        <img src={assets.js} />
        <img src={assets.php} />
        <img src={assets.mongo} />
        <img src={assets.css} />
      </div>
    </>
  );
}

export default SkillsBar;