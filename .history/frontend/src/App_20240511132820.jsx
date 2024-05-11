import { useEffect, useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import Home from "./views/frontend/home/Home";
import AboutPage from "./views/frontend/about/About";
import ContactPage from "./views/frontend/contact/Contact";
import PortfolioPage from "./views/frontend/portfolio/Portfolio";
import Scrollbar from "smooth-scrollbar";

const links = [
  { url: "home", title: <Home /> },
  { url: "about", title: <AboutPage /> },
  { url: "portfolio", title: <PortfolioPage /> },
  { url: "contact", title: <ContactPage /> },
];

function App() {
  useEffect(() => {
    const page = document.getElementById("page");
    page.focus();

    // Initialize the Scrollbar instance
    const scrollbar = Scrollbar.init(page, {
      damping: 0.07,
      plugins: {
        overscroll: {
          effect: "glow", // or "bounce"
        },
      },
    });

    return () => {
      if (scrollbar) scrollbar.destroy();
    };
  }, []);

  return (
    <>
      <div className="font-openSans h-screen w-full flex overflow-hidden flex-col bg-greyGlass">
        <div className="">
          <NavBar />
        </div>
        <div
          id="page"
          className="w-full overflow-auto focus:outline-none h-full"
          tabIndex={0}
        >
          {links.map((link, index) => (
            <div id={link.url} key={link.title}>
              {link.title}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
