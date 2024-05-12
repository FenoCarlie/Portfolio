import React, { useEffect, useState } from "react";
import { skills } from "../data/Skills";
import ProgressBar from "./ProgressBar";

function SkillsBar() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Activer la visibilité des compétences une fois que le composant est monté
    setIsVisible(true);
  }, []);

  return (
    <>
      <div className="flex flex-row justify-center w-full overflow-auto">
        {skills.map((skill, index) => (
          <div
            key={skill.name}
            className={`bg-other mr-4 w-[400px] p-3 h-auto rounded ${
              isVisible ? "slide-in" : ""
            }`}
            style={{ transitionDelay: `${index * 100}ms` }}
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
