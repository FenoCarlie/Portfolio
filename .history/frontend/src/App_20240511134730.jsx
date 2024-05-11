import { useEffect, useRef, useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import AboutPage from "./views/frontend/about/About";
import ContactPage from "./views/frontend/contact/Contact";
import Home from "./views/frontend/home/Home";
import PortfolioPage from "./views/frontend/portfolio/Portfolio";

function App() {
  const links = [
    { url: "home", title: <Home ref={useRef(null)} />, id: "home" },
    { url: "about", title: <AboutPage ref={useRef(null)} />, id: "about" },
    {
      url: "portfolio",
      title: <PortfolioPage ref={useRef(null)} />,
      id: "portfolio",
    },
    {
      url: "contact",
      title: <ContactPage ref={useRef(null)} />,
      id: "contact",
    },
  ];
  useEffect(() => {
    const page = document.getElementById("page");
    page.focus();
  });

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
          {links.map((link) => (
            <div name={link.url} key={link.title}>
              {link.title}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
