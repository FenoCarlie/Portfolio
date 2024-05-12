import React, { useEffect } from "react";
import { skills } from "../data/Skills";
import ProgressBar from "./PreogresBar";
import Marquee from "react-marquee-slider";

function SkillsBar() {
  console.log(skills);
  return (
    <>
      <div className="flex flex-row marquee">
        <Marquee velocity={25} scatterRandomly minScale={0.7}>
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="bg-other mr-4 w-[150px] p-3 h-auto rounded"
            >
              <img src={skill.icon} className="mb-4 p-4" />
              <div className="flex flex-col items-center text-white">
                <ProgressBar progress={skill.description.level} />
                <h1 className="text-lg">{skill.description.experience}</h1>
              </div>
            </div>
          ))}
        </Marquee>
      </div>
    </>
  );
}

export default SkillsBar;
