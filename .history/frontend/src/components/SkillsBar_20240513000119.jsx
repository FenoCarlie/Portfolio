import React, { useEffect } from "react";
import { skills } from "../data/Skills";

function SkillsBar() {
  console.log(skills);
  return (
    <>
      <div className="flex flex-row justify-center">
        {skills.map((skill) => (
          <div key={skill.name} className="bg-white">
            {skill.name}
          </div>
        ))}
      </div>
    </>
  );
}

export default SkillsBar;
