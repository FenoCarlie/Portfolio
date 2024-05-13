import React from "react";
import Footer from "../../../components/Footer";
import { TabContent, TabPan } from "../../../components/TabPan";

function ContactPage() {
  return (
    <div id="contact" className="w-full h-auto">
      <div className="px-4 mb-4 flex flex-col items-center justify-center sm:px-10 lg:px-20 xl:px-30">
        <section className="flex flex-col w-full justify-center items-center">
          <h1 className="text-4xl text-white">Contact</h1>
          <div className="flex flex-col mb-10 h-[10px] items-center w-full justify-between">
            <div className="bg-yellowClaire xl:w-[20%] lg:w-[25%] w-[50%] h-[2px]"></div>
            <div className="bg-yellowClaire xl:w-[15%] lg:w-[20%] w-[40%] h-[2px]"></div>
          </div>
        </section>
        <section className="h-full w-full md:w-[90%] mt-4 rounded">
          <section className="w-full h-full flex flex-row justify-between">
            <div></div>
            <div className="bg-greyGlass flex flex-col p-3 rounded w-[70vh]  sm:h-[100vh]">
              <TabPan>
                <TabContent
                  className="w-full h-full flex flex-col"
                  label="Individual"
                >
                  <form className="item-center mt-6 justify-center w-full h-full flex-col flex ">
                    <span className="flex w-full flex-row px-10">
                      <div className="w-full flex flex-col md:flex-row justify-between">
                        <span className="flex flex-col md:w-[27vh] mb-3">
                          <label className="mb-1 text-white">First name</label>
                          <input
                            className="p-3 text-md border-yellowClaire border-2 rounded bg-grey1 text-black"
                            type="text"
                          />
                        </span>
                        <span className="md:w-[27vh] flex flex-col">
                          <label className="mb-1 text-white">Last Name</label>
                          <input
                            className="p-3 text-md border-yellowClaire border-2 rounded bg-grey1 text-black"
                            type="text"
                          />
                        </span>
                      </div>
                    </span>
                    <span className="flex w-full flex-row px-10 mt-3 mb-3">
                      <span className="flex flex-col w-full">
                        <label className="mb-1 text-white">First name</label>
                        <input
                          className="p-3 text-md border-yellowClaire border-2 rounded bg-grey1 text-black"
                          type="text"
                        />
                      </span>
                    </span>
                    <span className="flex w-full flex-row px-10 mt-3">
                      <span className="flex flex-col w-full">
                        <label className="mb-1 text-white">First name</label>
                        <textarea className="p-3 text-md border-yellowClaire border-2 rounded max-h-80 h-48 bg-grey1 text-black"></textarea>
                      </span>
                    </span>
                  </form>
                </TabContent>
                <TabContent label="Company"></TabContent>
              </TabPan>
            </div>
          </section>
        </section>
      </div>
      <Footer />
    </div>
  );
}

export default ContactPage;
