import { useEffect, useRef, useState } from "react";
import { FaLinkedin, FaGithub, FaFacebook, FaInstagram } from "react-icons/fa6";
import { assets } from "./../../../assets/assets";

function Home() {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = ["Web Designer", "UI / UX Designer", "full-stack Developer"];
  const period = 2000;
  const homeRef = useRef(null);

  const socialNets = [
    {
      icon: <FaLinkedin className="w-8 h-8 mb-4 text-yellowClaire" />,
      link: "www.linkedin.com/in/carlie-feno-516063240",
      name: "linkedin",
    },
    {
      icon: <FaGithub className="w-8 h-8 mb-4 text-yellowClaire" />,
      link: "https://github.com/FenoCarlie/",
      name: "github",
    },
    {
      icon: <FaFacebook className="w-8 h-8 mb-4 text-yellowClaire" />,
      link: "https://www.facebook.com/aidane.feno",
      name: "facebook",
    },
    {
      icon: <FaInstagram className="w-8 h-8 mb-4 text-yellowClaire" />,
      link: "https://www.instagram.com/carliefeno/",
      name: "instagram",
    },
  ];
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
    <div id="home" ref={homeRef} className="w-full h-full relative">
      <div className="flex justify-between w-full h-full p-4 lg:flex-row xl:flex-row sm:px-10 lg:px-20 xl:px-30">
        <section className=" flex items-center h-hull w-full p-4 xl:w-[50%] lg:w-[50%]">
          <div className="w-full">
            <div className={"w-full"}>
              <span className="text-yellowClaire flex mb-2">
                <h1 className="text-4xl lg:text-5xl">-- Hi, i'm Carlie FENO</h1>
              </span>
              <h1>
                <p
                  className="text-white"
                  data-rotate='[ "Web Designer", "UI / UX Designer", "Front-end Developer" ]'
                >
                  <span className="text-3xl lg:text-5xl border-r-2 border-grey1">
                    .{text}
                  </span>
                </p>
              </h1>
              <p className="mlg text-grey1 text md:text-3xl">
                Grow your business with a high-performing and engaging website
                that reflects your ambition.
              </p>
            </div>
            <section className="flex w-full items-center mt-20 ">
              <a
                href="#contact"
                className="px-4 hover:bg-yellowClaire hover:transition-all py-2 border-4 hover:text-black border-yellowClaire rounded text-white text-2xl"
              >
                Lets's talk
              </a>
            </section>
          </div>
        </section>
        <section className="hidden items-center p-4 lg:flex xl:flex xl:w-[50%] lg:w-[50%] lg:h-full- xl:h-full">
          <img
            src={assets.homeDesign}
            alt="image"
            className="w-[100vh] xl:w-[100vh] lg:w-[100vh] h-auto overflow-hidden"
          />
        </section>
        <section className="h-full items-center flex-col justify-end flex">
          {socialNets.map((socialNet) => (
            <a href={socialNet.link} key={socialNet.name} target="_blank">
              {socialNet.icon}
            </a>
          ))}
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
