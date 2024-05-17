import React from "react";
import GithubRepo from "../../../components/GithubRepo";

function PortfolioPage() {
  return (
    <div id="portfolio" className="w-full h-auto mt-20">
      <div className="p-4 w-full items-center justify-center flex flex-col sm:px-10 lg:px-20 xl:px-30">
        <section className="flex flex-col w-full justify-end items-end">
          <h1 className="text-2xl md:text-4xl text-white">Portfolio</h1>
          <div className="flex flex-col mb-10 h-[10px] items-end w-full justify-between">
            <div className="bg-yellowClaire xl:w-[20%] lg:w-[25%] w-[50%] h-[2px]"></div>
            <div className="bg-yellowClaire xl:w-[15%] lg:w-[20%] w-[40%] h-[2px]"></div>
          </div>
        </section>
        <section className="h-full w-full md:w-[90%] bg-greyGlass mt-4 p-4 rounded">
          <span className="w-full flex justify-center my-7">
            <h1 className="text-white text-3xl">Repo GitHub</h1>
          </span>
          <section>
            <GithubRepo />
          </section>
        </section>
      </div>
    </div>
  );
}

export default PortfolioPage;