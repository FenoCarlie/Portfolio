import { useEffect, useRef, useState } from "react";
import { ToastContainer } from "react-toastify";
import "./App.css";
import NavBar from "./components/NavBar";
import AboutPage from "./views/frontend/about/About";
import ContactPage from "./views/frontend/contact/Contact";
import Home from "./views/frontend/home/Home";
import PortfolioPage from "./views/frontend/portfolio/Portfolio";
import "react-toastify/dist/ReactToastify.css";
import { assets } from "./assets/assets";

function App() {
  const [loading, setLoading] = useState(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 5000);
    return true;
  });

  return (
    <>
      <div
        id="app"
        className={`font-openSans w-full flex overflow-hidden flex-col bg-greyGlass ${
          loading ? "items-center justify-center" : ""
        }`}
      >
        {loading ? (
          <>
            <label className="fade-in">
              <img src={assets.logoCarlie} className="w-[300px]" />
            </label>
          </>
        ) : (
          <>
            <div className="">
              <NavBar />
            </div>
            <div
              id="page"
              className="w-full overflow-auto focus:outline-none h-full"
              tabIndex={0}
            >
              <ToastContainer />
              <Home />
              <AboutPage />
              <PortfolioPage />
              <ContactPage />
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default App;
