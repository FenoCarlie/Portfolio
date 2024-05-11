import React, { useEffect } from "react";
import TrackVisibility from "react-on-screen";

function Home() {
  const [text, setText] = useState("");
  return (
    <div id="home" className="w-full h-full">
      <div className="flex w-full flex-col h-full p-4 sm:flex-col lg:flex-row xl:flex-row sm:px-10 lg:px-20 xl:px-30">
        <section className="flex items-center h-[50%] lg:h-full xl:h-full sm:h-[50%] lg:w-[50%] xl:w-[50%] sm:w-full  p-4 bg-yellowClaire">
          <span className="flex w-full">
            <h3 className="mr-2">I'M</h3>
            <h1 className="text-xl font-bold">Carlie FENO</h1>
          </span>
          <TrackVisibility>
            {({ isVisible }) => (
              <div
                className={isVisible ? "animate__animated animate__fadeIn" : ""}
              >
                <span className="tagline">-- Hello there</span>
                <h1>
                  {`I'm Feno Carlie.`}{" "}
                  <p
                    className="txt-rotate"
                    dataPeriod="1000"
                    data-rotate='[ "Web Designer", "UI / UX Designer", "Front-end Developer" ]'
                  >
                    <span className="wrap">{text}</span>
                  </p>
                </h1>
                <h2 className="mlg">From Madagascar</h2>
              </div>
            )}
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
