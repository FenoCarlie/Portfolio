import React, { useEffect } from "react";

function Home() {
  return (
    <div id="home" className="w-full h-full">
      <div className="flex w-full flex-col h-full p-4 sm:flex-col lg:flex-row xl:flex-row sm:px-10 lg:px-20 xl:px-30">
        <section className="flex h-[50%] lg:h-full xl:h-full sm:h-[50%] lg:w-[50%] xl:w-[50%] sm:w-full  p-4 bg-yellowClaire">
          <span className="flex">
            <h3>I'M</h3>
            <h1>Carlie FENO</h1>
          </span>
        </section>
        <section className="flex h-[50%] lg:h-full xl:h-full sm:h-[50%] lg:w-[50%] xl:w-[50%] sm:w-full  p-4 bg-greyGlass">
          section 2
        </section>
      </div>
    </div>
  );
}

export default Home;
