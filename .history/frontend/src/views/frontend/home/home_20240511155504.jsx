import React, { useEffect } from "react";
import Particles from "../../../particles.js-master/particles.js";

function Home() {
  useEffect(() => {
    Particles.load("particles-js", "assets/particles.json", function () {
      console.log("callback - particles.js config loaded");
    });
  }, []);
  return (
    <div id="home" className="w-full h-full bg-white">
      <div id="particles-js"></div>
      <div className="px-4 sm:px-10 lg:px-20 xl:px-30">
        <h1>Home page</h1>
      </div>
    </div>
  );
}

export default Home;
