import { assets } from "./../../../assets/assets";

function AboutPage() {
  return (
    <div id="about" className="w-full h-auto">
      <div className="flex flex-col p-4 sm:px-10 lg:px-20 xl:px-30">
        <section className="flex flex-col">
          <h1 className="text-3xl text-white mb-10 border-b-2">About me</h1>
          <div className="bg-yellowClaire w-[2px]"></div>
          <div className="bg-yellowClaire w-[2px]"></div>
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
            <div className="bg-greyGlass w-[85%] h-[80%] rounded p-7 shadow-[0_3px_10px_rgb(0,0,0,0.2)]"></div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
