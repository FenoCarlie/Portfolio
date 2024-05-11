import { useEffect, useState } from "react";
import TrackVisibility from "react-on-screen";
import { FaLinkedin, FaGithub, FaFacebook, FaInstagram } from "react-icons/fa6";

function Home() {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = ["Web Designer", "UI / UX Designer", "Front-end Developer"];
  const period = 2000;
  /***************** */

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex((prevIndex) => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex((prevIndex) => prevIndex + 1);
    }
  };

  return (
    <div id="home" className="w-full h-full relative">
      <div className="flex justify-between w-full h-full p-4 lg:flex-row xl:flex-row sm:px-10 lg:px-20 xl:px-30">
        <section className=" flex items-center h-hull w-full p-4 xl:w-[50%] lg:w-[50%]">
          <TrackVisibility className="w-full">
            <div className={"w-full"}>
              <span className="text-yellowClaire flex items-end">
                <h3 className="mr-2 text-xl lg:text-4xl">-- I'm</h3>
                <h1 className="text-4xl lg:text-6xl">Carlie FENO</h1>
              </span>
              <h1>
                <p
                  className="text-white"
                  data-rotate='[ "Web Designer", "UI / UX Designer", "Front-end Developer" ]'
                >
                  <span className="text-3xl lg:text-5xl border-r-2 border-grey1">
                    {text}
                  </span>
                </p>
              </h1>
              <h2 className="mlg text-grey1 lg:text-5xl">From Madagascar</h2>
            </div>
            <section className="flex w-full items-center mt-20 ">
              <button className="px-4 py-2 border-4 border-yellowClaire rounded text-white text-2xl">
                Contact
              </button>
            </section>
          </TrackVisibility>
        </section>
        <section className="hidden items-center p-4 lg:flex xl:flex xl:w-[50%] lg:w-[50%] lg:h-full- xl:h-full">
          <section className="">
            <div className="border-[3px] border-yellowClaire w-56 h-56 rounded-full"></div>
          </section>
        </section>
        <section className="h-full items-center flex-col justify-end flex">
          <FaLinkedin className="w-8 h-8 mb-4 text-yellowClaire" />
          <FaGithub className="w-8 h-8 mb-4 text-yellowClaire" />
          <FaFacebook className="w-8 h-8 mb-4 text-yellowClaire" />
          <FaInstagram className="w-8 h-8 mb-4 text-yellowClaire" />
          <div className="w-full flex justify-between px-3">
            <div className="h-20 bg-yellowClaire w-[2px]"></div>
            <div className="h-20 bg-yellowClaire w-[2px]"></div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Home;
