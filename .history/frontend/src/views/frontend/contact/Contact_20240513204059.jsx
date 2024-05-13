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
            <div className="bg-greyGlass flex flex-col p-3 rounded w-[90vh] h-[75vh]">
              <TabPan>
                <TabContent
                  className="w-full h-full flex flex-col"
                  label="Individual"
                >
                  <form className="item-center justify-center  w-full flex ">
                    <span className="flex w-full flex-row">
                      <div className="w-full flex flex-col md:flex-row justify-between">
                        <span className="flex flex-col w-[35vh]">
                          <label>First name</label>
                          <input type="text" placeholder="First name" />
                        </span>
                        <span className="w-[35vh] flex flex-col">
                          <label>Last Name</label>
                          <input type="text" placeholder="Last Name" />
                        </span>
                      </div>
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
