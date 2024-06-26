import { skills } from "../data/Skills";
import ProgressBar from "./PreogresBar";
import Marquee from "react-fast-marquee";

function SkillsBar() {
  return (
    <>
      <div className="flex flex-row marquee">
        <Marquee speed={30} direction={"left"}>
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="bg-other mr-4 w-[150px] p-3 h-auto rounded"
            >
              <img src={skill.icon} className="mb-4 p-4" />
              <div className="flex flex-col items-center text-white">
                <ProgressBar progress={skill.description.level} />
              </div>
            </div>
          ))}
        </Marquee>
      </div>
    </>
  );
}

export default SkillsBar;
