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
import { useNavigate } from "react-router-dom";

function App() {
  const navigation = useNavigate();
  const [hashId, setHashId] = useState("");
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
    const homeElement = document.getElementById("home");
    const aboutElement = document.getElementById("about");
    const portfolioElement = document.getElementById("portfolio");
    const contactElement = document.getElementById("contact");

    const pageElementOffsetTop = pageElement.offsetTop;
    const homeElementOffsetTop = homeElement.offsetTop;
    const aboutElementOffsetTop = aboutElement.offsetTop;
    const portfolioElementOffsetTop = portfolioElement.offsetTop;
    const contactElementOffsetTop = contactElement.offsetTop;

    const handleScroll = () => {
      const pageElementScrollTop = pageElement.scrollTop;
      const scrollPage = pageElementOffsetTop + pageElementScrollTop;
      var currentPage = null;
      if (
        scrollPage >= homeElementOffsetTop &&
        scrollPage < aboutElementOffsetTop
      ) {
        currentPage = "home";
        if (hashId == "home") {
          return;
        } else {
          //history.pushState({}, "", "#home");
          //navigation("/#home");
          console.log("On home");
        }
      } else if (
        scrollPage >= aboutElementOffsetTop &&
        scrollPage < portfolioElementOffsetTop
      ) {
        currentPage = "about";
        if (hashId == "about") {
          return;
        } else {
          //history.pushState({}, "", "#about");
          //navigation("/#about");
          console.log("On about");
        }
      } else if (
        scrollPage >= portfolioElementOffsetTop &&
        scrollPage < contactElementOffsetTop
      ) {
        currentPage = "portfolio";
        if (hashId == "portfolio") {
          return;
        } else {
          //history.pushState({}, "", "#portfolio");
          //navigation("/#portfolio");
          console.log("On portfolio");
        }
      } else {
        currentPage = "contact";
        if (hashId == "contact") {
          return;
        } else {
          //history.pushState({}, "", "#contact");
          //navigation("/#contact");
          console.log("On contact");
        }
      }
      if (currentPage[0] != "#") {
        currentPage = "#" + currentPage;
      }
      console.log(currentPage);
      history.pushState({}, "", currentPage);
    };

    pageElement.addEventListener("scroll", handleScroll);

    return () => {
      pageElement.removeEventListener("scroll", handleScroll);
    };
  }, [hashId, navigation]);

  useEffect(() => {
    const hashFragment = window.location.hash.substring(1);
    setHashId(hashFragment);
  }, [hashId]);*/

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
