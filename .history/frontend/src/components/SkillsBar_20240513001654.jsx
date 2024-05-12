import React, { useEffect } from "react";
import { skills } from "../data/Skills";
import ProgressBar from "./PreogresBar";

function SkillsBar() {
  console.log(skills);
  return (
    <>
      <div className="flex flex-row justify-center w-full">
        {skills.map((skill) => (
          <div key={skill.name} className="bg-other mr-4 w-[250px] p-3">
            <ProgressBar progress={skill.description.level} />
          </div>
        ))}
      </div>
    </>
  );
}

export default SkillsBar;
