import React, { useEffect, useState } from "react";
import { skills } from "../data/Skills";
import ProgressBar from "./ProgressBar";

function SkillsBar() {
  const [animationIndex, setAnimationIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationIndex((prevIndex) => (prevIndex + 1) % skills.length);
    }, 5000); // Adjust the interval time as needed

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="flex flex-row justify-center w-full overflow-auto animate-slide">
        {skills.map((skill, index) => (
          <div
            key={skill.name}
            className={`bg-other mr-4 w-[400px] p-3 h-auto rounded ${
              index === animationIndex ? "animate-enter" : ""
            }`}
          >
            <img src={skill.icon} className="mb-4 p-4" />
            <div className="flex flex-col items-center text-white">
              <ProgressBar progress={skill.description.level} />
              <h1 className="text-lg">{skill.description.experience}</h1>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default SkillsBar;
