import React, { useEffect } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "@tsparticles/slim";

function Home() {
  useEffect(() => {
    loadSlim({
      id: "tsparticles",
      options: {
        particles: {
          number: {
            value: 80,
          },
          size: {
            value: 3,
          },
          move: {
            direction: "top",
            outModes: {
              default: "destroy",
            },
          },
        },
      },
    });
  }, []);

  return (
    <div id="home" className="w-full h-full bg-white">
      <div id="tsparticles"></div>
      <div className="px-4 sm:px-10 lg:px-20 xl:px-30">
        <h1>Home page</h1>
      </div>
    </div>
  );
}

export default Home;
