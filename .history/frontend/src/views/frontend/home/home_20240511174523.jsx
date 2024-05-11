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
      <div className="flex w-full flex-col h-full p-4 sm:flex-col lg:flex-row xl:flex-row sm:px-10 lg:px-20 xl:px-30">
        <section className="flex items-center h-[50%] lg:h-full xl:h-full sm:h-[50%] lg:w-[50%] xl:w-[50%] sm:w-full  p-4">
          <TrackVisibility>
            <div className={""}>
              <span className="text-yellowClaire">
                <h3>-- I'm</h3>
                <h1>Carlie FENO</h1>
              </span>
              <h1>
                {`I'm Feno Carlie.`}{" "}
                <p
                  className="txt-rotate"
                  data-rotate='[ "Web Designer", "UI / UX Designer", "Front-end Developer" ]'
                >
                  <span className="wrap">{text}</span>
                </p>
              </h1>
              <h2 className="mlg">From Madagascar</h2>
            </div>
          </TrackVisibility>
        </section>
        <section className="flex h-[50%] lg:h-full xl:h-full sm:h-[50%] lg:w-[50%] xl:w-[50%] sm:w-full  p-4 bg-greyGlass">
          section 2
        </section>
      </div>
    </div>
  );
}

export default Home;
