import { skills } from "../data/Skills";

function SkillsBar() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 p-8">
      {skills.map((skill) => (
        <div
          key={skill.name}
          className="flex flex-col items-center w-full bg-gradient-to-br from-gray-800 via-gray-700 to-gray-600 rounded-3xl shadow-xl p-6 hover:scale-105 transform transition-transform duration-500 ease-in-out"
        >
          <img
            src={skill.icon}
            alt={skill.name}
            className="w-20 h-20 mb-4 object-contain transition-transform duration-500 ease-in-out hover:rotate-6"
          />
          <h3 className="text-white text-center text-lg font-extrabold mb-3">
            {skill.name}
          </h3>
          <div className="w-full bg-gray-700 rounded-full h-3 overflow-hidden">
            <div
              className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 h-3 rounded-full"
              style={{ width: `${skill.level}%` }}
            ></div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default SkillsBar;
