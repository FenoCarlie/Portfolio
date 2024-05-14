import { assets } from "./../../../assets/assets";

function AboutPage() {
  return (
    <div id="about" className="w-full h-auto">
      <div className="flex flex-col p-4 sm:px-10 lg:px-20 xl:px-30">
        <h1 className="text-3xl text-white mb-4">About</h1>
        <div className="flex flex-col lg:flex-row xl:flex-row w-full">
          <section className="w-auto h-auto">
            <img
              src={assets.carlie}
              alt="image"
              className="relative w-[100vh] xl:w-[60vh] h-auto overflow-hidden"
            />
          </section>
          <section className="w-full lg:w-[50%] xl:w-[50%]">section 2</section>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;