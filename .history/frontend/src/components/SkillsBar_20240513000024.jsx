import React, { useEffect } from "react";
import { skills } from "../data/Skills";

function SkillsBar() {
  console.log(skills);
  return (
    <>
      <div className="flex flex-row">
        {skills.map((skill) => (
          <div key={skill.name} className="">
            {skill.name}
          </div>
        ))}
      </div>
    </>
  );
}

export default SkillsBar;