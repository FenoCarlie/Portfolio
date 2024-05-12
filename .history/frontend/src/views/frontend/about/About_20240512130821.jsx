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
                  <p>
                    Ut enim quisque sibi plurimum confidit et ut quisque maxime
                    virtute et sapientia sic munitus est, ut nullo egeat suaque
                    omnia in se ipso posita iudicet, ita in amicitiis expetendis
                    colendisque maxime excellit. Quid enim? Africanus indigens
                    mei? Minime hercule! ac ne ego quidem illius; sed ego
                    admiratione quadam virtutis eius, ille vicissim opinione
                    fortasse non nulla, quam de meis moribus habebat, me
                    dilexit; auxit benevolentiam consuetudo. Sed quamquam
                    utilitates multae et magnae consecutae sunt, non sunt tamen
                    ab earum spe causae diligendi profectae.
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
