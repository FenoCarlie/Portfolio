import React, { useEffect } from "react";
import { assets } from "../assets/assets";

function SkillsBar() {
  return (
    <>
      <div className="flex flex-row">
        <img src={assets.css} className="w-[10vh] h-auto" />
        <img src={assets.html} className="w-[10vh] h-auto" />
        <img src={assets.react} className="w-[10vh] h-auto" />
        <img src={assets.js} className="w-[10vh] h-auto" />
        <img src={assets.php} className="w-[10vh] h-auto" />
        <img src={assets.mongo} className="w-[10vh] h-auto" />
        <img src={assets.css} className="w-[10vh] h-auto" />
      </div>
    </>
  );
}

export default SkillsBar;
