import React, { useEffect } from "react";
import { skills } from "../data/Skills";
import ProgressBar from "./PreogresBar";

function SkillsBar() {
  console.log(skills);
  return (
    <>
      <div className="flex flex-row justify-center w-full">
        {skills.map((skill) => (
          <div key={skill.name} className="bg-white mr-4 w-[10vh]">
            <ProgressBar progress={skill.description.level} />
          </div>
        ))}
      </div>
    </>
  );
}

export default SkillsBar;
