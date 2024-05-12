import React, { useEffect } from "react";
import { assets } from "../assets/assets";
import { skills } from "../data/Skills";

function SkillsBar() {
  console.log(skills);
  return (
    <>
      <div className="flex flex-row">
        {/*skills.map((skill) => (
          <div key={skill.name} className="">
            {skills.name}
          </div>
        ))*/}
      </div>
    </>
  );
}

export default SkillsBar;
