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
            <div className="flex flex-col items-center text-white">
              <h1>{skill.description.experience}</h1>
              <ProgressBar progress={skill.description.level} />
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default SkillsBar;
