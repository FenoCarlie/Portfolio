import React, { useEffect } from "react";
import { assets } from "../assets/assets";

function SkillsBar() {
  return (
    <>
      <div className="flex flex-row">
        <img src={assets.css} className="w-[5vh] h-auto" />
        <img src={assets.html} className="w-[5vh] h-auto" />
        <img src={assets.react} className="w-[5vh] h-auto" />
        <img src={assets.js} className="w-[5vh] h-auto" />
        <img src={assets.php} className="w-[5vh] h-auto" />
        <img src={assets.mongo} className="w-[5vh] h-auto" />
        <img src={assets.css} className="w-[5vh] h-auto" />
      </div>
    </>
  );
}

export default SkillsBar;
