import { assets } from "./../../../assets/assets";
import background from "../../../data/major.json";
import experiences from "../../../data/experience.json";
import SkillsBar from "../../../components/SkillsBar";

function AboutPage() {
  const formationPars = JSON.parse(JSON.stringify(background));
  const formation = formationPars.reverse();

  const experiencePars = JSON.parse(JSON.stringify(experiences));
  const experience = experiencePars.reverse();

  console.log(formation);

  return (
    <div id="about" className="w-full">
      <div className="flex items-center justify-center flex-col p-4 sm:px-10 lg:px-20 xl:px-30">
        <section className="flex flex-col w-full">
          <h1 className="text-2xl md:text-4xl text-white">About me</h1>
          <div className="flex flex-col mb-10 h-[10px] w-full justify-between">
            <div className="bg-yellowClaire xl:w-[20%] lg:w-[25%] w-[50%] h-[2px]"></div>
            <div className="bg-yellowClaire xl:w-[15%] lg:w-[20%] w-[40%] h-[2px]"></div>
          </div>
        </section>
        <div className="flex flex-col lg:flex-row xl:flex-row w-full h-auto">
          <section className="w-auto h-auto lg:w-[100vh] xl:w-[100vh]">
            <img
              src={assets.carlie}
              alt="image"
              className="w-[100vh] xl:w-[100vh] lg:w-[100vh] h-auto overflow-hidden"
            />
          </section>
          <section className="flex items-center justify-center lg:ml-5 xl:ml-5 w-full">
            <div className="bg-greyGlass w-full md:w-[85%] xl:w-[85%] xl:h-auto lg:h-auto rounded h-auto p-7 shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
              <div className="flex h-auto w-full justify-between flex-col">
                <div className="bg-yellowClaire w-full h-1"></div>
                <section className="h-auto w-full overflow-auto text-justify text-grey1 py-4">
                  <p className="indent-10">
                    Full-stack developer and passionate about cooking as well as
                    mechanical sports, I enthusiastically juggle between these
                    two universes. Technology has fascinated me since forever,
                    but my passion for cooking and mechanical sports brings an
                    essential balance to my life. Shy with strangers, yet I find
                    my voice when discussing my passions. Deeply devoted and
                    protective towards my loved ones, I always strive to create
                    a positive environment around me. Pressure can sometimes
                    disrupt my concentration, but my love for cooking and
                    mechanical sports allows me to find refuge and inspiration.
                    Always eager to discover new recipes and keep up with the
                    latest technology news, I navigate with curiosity in these
                    two worlds. In a perpetual quest for knowledge, I am a
                    passionate developer, always ready to learn and share. My
                    friends know me as someone reserved, but as soon as it comes
                    to coding or cooking, my passion takes over. In a constantly
                    evolving digital world, I find my balance in exploring the
                    pleasures of cooking and passionately following the latest
                    technological advancements. I find beauty in the logic and
                    creativity of programming, while savoring each dish prepared
                    with love.
                  </p>
                </section>
                <div className="bg-yellowClaire w-full h-1"></div>
              </div>
            </div>
          </section>
        </div>
        <div className="h-full w-full md:w-[90%] bg-greyGlass mt-4 p-4 rounded">
          <span className="w-full flex justify-center my-7">
            <h1 className="text-white text-3xl uppercase">skills</h1>
          </span>
          <div className="w-full flex h-auto py-10 px-6 justify-center">
            <SkillsBar />
          </div>
          <span className="w-full flex justify-center my-7">
            <h1 className="text-white text-3xl uppercase">
              formation & experience
            </h1>
          </span>
          <div className="relative w-full flex flex-col traced_path">
            <div className="absolute md:left-[50%] bg-yellowClaire h-full w-[2px]"></div>
            {formation.map((formation) => (
              <label
                key={formation.titled}
                className="flex flex-col mb-3 md:w-[50%] pl-[25px]"
              >
                <div className="w-[95%] md:w-[75%]">
                  <h1 className="mb-2 text-white">{formation.titled}</h1>
                  <h1 className="mb-2 text-white">{formation.location}</h1>
                  <label className="dateParent flex mb-3 items-center">
                    <h2 className="date pr-3 text-yellowClaire">
                      {formation.time.start}
                      {formation.time.end ? " - " : null}
                      {formation.time.end}
                    </h2>
                    <span className="line w-[100%]"></span>
                  </label>
                  <p className="ml-5 text-grey1">{formation.description}</p>
                </div>
              </label>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
