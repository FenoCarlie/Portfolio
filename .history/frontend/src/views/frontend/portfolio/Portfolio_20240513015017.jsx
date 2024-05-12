import React from "react";

function PortfolioPage() {
  return (
    <div id="portfolio" className="w-full h-auto mt-20">
      <div className="px-4 w-full  sm:px-10 lg:px-20 xl:px-30">
        <section className="flex flex-col w-full justify-end items-end">
          <h1 className="text-4xl text-white">About me</h1>
          <div className="flex flex-col mb-10 h-[10px] items-end w-full justify-between">
            <div className="bg-yellowClaire xl:w-[20%] lg:w-[25%] w-[50%] h-[2px]"></div>
            <div className="bg-yellowClaire xl:w-[15%] lg:w-[20%] w-[40%] h-[2px]"></div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default PortfolioPage;
