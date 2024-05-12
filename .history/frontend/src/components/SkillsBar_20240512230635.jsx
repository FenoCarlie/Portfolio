import React from "react";
import { assets } from "../assets/assets";

function SkillsBar() {
  return (
    <>
      <div className="logos">
        <div className="logos-slide">
          <img src={assets.css} />
          <img src={assets.html} />
          <img src="./logos/budweiser.svg" />
          <img src="./logos/buzzfeed.svg" />
          <img src="./logos/forbes.svg" />
          <img src="./logos/macys.svg" />
          <img src="./logos/menshealth.svg" />
          <img src="./logos/mrbeast.svg" />
        </div>
      </div>
    </>
  );
}

export default SkillsBar;
