import React, { useEffect } from "react";
import { skills } from "../data/Skills";
import ProgressBar from "./PreogresBar";

function SkillsBar() {
  console.log(skills);
  return (
    <>
      <div className="flex flex-row justify-center w-full overflow-auto">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="bg-other mr-4 w-[300px] p-3 h-[150px]"
          >
            <ProgressBar progress={skill.description.level} />
          </div>
        ))}
      </div>
    </>
  );
}

export default SkillsBar;
