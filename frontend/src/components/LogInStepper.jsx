import React, { useState } from "react";
import { useStateContext } from "../context/ContextProvider";

function LogInStepper() {
  const { setToken } = useStateContext;
  const [currentStep, setCurrentStep] = useState(1);
  const [credential, setCredential] = useState("");
  const [userAdmin, setUserAdmin] = useState({
    userName: "",
    password: "",
  });

  const verifId = async (ev) => {
    ev.preventDefault();
    console.log(userAdmin);
  };

  const submitCredential = async (ev) => {
    ev.preventDefault();
    console.log(credential);
  };

  return (
    <div>
      <div
        className={`${
          currentStep === 1
            ? `bg-greyOpac p-3 rounded h-auto w-[50vh]`
            : `hidden`
        }`}
      >
        <header className="w-full p-3 mb-3 flex items-center justify-center text-white text-xl">
          <h1>How are you?</h1>
        </header>
        <div className="border-2 border-yellowClaire p-3 w-full">
          <div className="flex w-full flex-col p-3">
            <div className="mb-3 w-full">
              <span className="block mb-2 font-medium text-white">
                What is your name?
              </span>
              <input
                className="p-3 text-md focus:outline-none border-yellowClaire border-2 rounded bg-grey1 text-black w-full"
                type="text"
                value={userAdmin.userName}
                onChange={(e) =>
                  setUserAdmin({ ...userAdmin, userName: e.target.value })
                }
              />
            </div>
            <div className=" w-full">
              <label className="flex">
                <span className="text-white block mb-2 font-medium">
                  Put your password
                </span>
              </label>
              <div className="flex w-full items-center mb-3">
                <input
                  className="p-3 text-md focus:outline-none border-yellowClaire border-2 rounded bg-grey1 text-black w-full"
                  type="password"
                  placeholder="**********"
                  value={userAdmin.password}
                  onChange={(e) =>
                    setUserAdmin({ ...userAdmin, password: e.target.value })
                  }
                />
              </div>
            </div>
          </div>
        </div>
        <button
          onClick={verifId}
          value="Send"
          className="w-full text-black mt-4 p-3 text-lg hover:bg-yellowClaire1 bg-yellowClaire"
        >
          Check
        </button>
      </div>
      <div
        className={`${
          currentStep === 2
            ? `bg-greyOpac p-3 rounded h-auto w-[50vh]`
            : `hidden`
        }`}
      >
        <header className="w-full p-3 mb-3 flex items-center justify-center text-white text-xl">
          <h1>How are you?</h1>
        </header>
        <div className="border-2 border-yellowClaire p-3">
          <div className="flex w-full flex-col p-6">
            <div className=" w-full">
              <label className="flex">
                <span className="block mb-2 font-medium">
                  Put your password
                </span>
              </label>
              <div className="flex w-full items-center mb-3">
                <input
                  className="py-2 px-3 text-md focus:outline-none border-yellowClaire border-2 rounded bg-grey1 text-black"
                  type="password"
                  placeholder="**********"
                  value={userAdmin.password}
                  onChange={(e) =>
                    setUserAdmin({ ...userAdmin, password: e.target.value })
                  }
                />
              </div>
            </div>
          </div>
        </div>
        <button
          onClick={verifId}
          value="Send"
          className="w-full text-black mt-4 p-3 text-lg hover:bg-yellowClaire1 bg-yellowClaire"
        >
          Check
        </button>
      </div>
    </div>
  );
}

export default LogInStepper;
