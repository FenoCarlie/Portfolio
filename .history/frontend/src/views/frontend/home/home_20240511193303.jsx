import React, { useEffect, useState } from "react";
import TrackVisibility from "react-on-screen";

function Home() {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = ["Web Designer", "UI / UX Designer", "Front-end Developer"];
  const period = 2000;

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
    <div id="home" className="w-full h-full">
      <div className="flex w-full h-full p-4 lg:flex-row xl:flex-row sm:px-10 lg:px-20 xl:px-30">
        <section className= flex items-center h-hull w-full p-4 xl:w-[50%] lg:w-[50%]">
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
            <section className="flex w-full items-center justify-center mt-20 ">
              <button className="text-white text-2xl">Contact</button>
            </section>
          </TrackVisibility>
        </section>
        <section className="hidden p-4 bg-white text-black lg:flex xl:flex xl:w-[50%] lg:w-[50%] lg:h-full- xl:h-full">
          section 2
        </section>
      </div>
    </div>
  );
}

export default Home;