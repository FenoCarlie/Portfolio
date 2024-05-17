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
  const pageRef = useRef(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 5000);

    return () => clearTimeout(timeout);
  }, []);

  /*useEffect(() => {
    const pageElement = pageRef.current;
    if (pageElement == null) {
      return;
    }
    var homeElement = document.getElementById("home");
    var aboutElement = document.getElementById("about");
    var portfolioElement = document.getElementById("portfolio");
    var contactElement = document.getElementById("contact");

    var pageElementOffsetTop = pageElement.offsetTop;
    var homeElementOffsetTop = homeElement.offsetTop;
    var aboutElementOffsetTop = aboutElement.offsetTop;
    var portfolioElementOffsetTop = portfolioElement.offsetTop;
    var contactElementOffsetTop = contactElement.offsetTop;
    pageElement.addEventListener("scroll", function () {
      var pageElementScrollTop = pageElement.scrollTop;
      var scrollPage = pageElementOffsetTop + pageElementScrollTop;
      /*console.log(
        homeElementOffsetTop,
        aboutElementOffsetTop,
        portfolioElementOffsetTop,
        contactElementOffsetTop
      );

      console.log(scrollPage == homeElementOffsetTop);
    });
  }, [loading]);*/

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
              ref={pageRef}
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
