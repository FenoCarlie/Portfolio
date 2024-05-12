import { assets } from "./../../../assets/assets";

function AboutPage() {
  return (
    <div id="about" className="w-full h-auto">
      <div className="flex flex-col p-4 sm:px-10 lg:px-20 xl:px-30">
        <section className="flex flex-col w-full">
          <h1 className="text-3xl text-white">About me</h1>
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
            <div className="bg-greyGlass w-[85%] xl:h-[80%] lg:h-[80%] rounded h-[75vh] p-7 shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
              <div className="flex h-full w-full justify-between flex-col">
                <div className="bg-yellowClaire w-full h-1"></div>
                <section className="h-full w-full overflow-auto text-white py-4">
                  <p className="indent-8">
                    Student in computer science and passionate about cooking as
                    well as mechanical sports, I enthusiastically juggle between
                    these two universes. Technology has fascinated me since
                    forever, but my passion for cooking and mechanical sports
                    brings an essential balance to my life.
                    <br />
                    Shy with strangers, yet I find my voice when discussing my
                    passions. Deeply devoted and protective towards my loved
                    ones, I always strive to create a positive environment
                    around me.
                    <br />
                    Pressure can sometimes disrupt my concentration, but my love
                    for cooking and mechanical sports allows me to find refuge
                    and inspiration. Always eager to discover new recipes and
                    keep up with the latest technology news, I navigate with
                    curiosity in these two worlds.
                    <br />
                    In a perpetual quest for knowledge, I am a passionate
                    computer science student, always ready to learn and share.
                    My friends know me as someone reserved, but as soon as it
                    comes to coding or cooking, my passion takes over.
                    <br /> In a constantly evolving digital world, I find my
                    balance in exploring the pleasures of cooking and
                    passionately following the latest technological
                    advancements. I find beauty in the logic and creativity of
                    programming, while savoring each dish prepared with love.
                  </p>
                </section>
                <div className="bg-yellowClaire w-full h-1"></div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
