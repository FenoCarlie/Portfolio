import { useEffect, useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import AboutPage from "./views/frontend/about/About";
import ContactPage from "./views/frontend/contact/Contact";
import Home from "./views/frontend/home/Home";
import PortfolioPage from "./views/frontend/portfolio/Portfolio";
import { Element } from "react-scroll";

const links = [
  { url: "home", title: <Home /> },
  { url: "about", title: <AboutPage /> },
  { url: "portfolio", title: <PortfolioPage /> },
  { url: "contact", title: <ContactPage /> },
];

function App() {
  useEffect(() => {
    const page = document.getElementById("page");
    console.log(page);
  });

  return (
    <>
      <div className="font-openSans h-screen w-full flex overflow-hidden flex-col bg-greyGlass">
        <div className="">
          <NavBar />
        </div>
        <div id="page" className="w-full overflow-auto" tabIndex={0}>
          {links.map((link) => (
            <Element name={link.url} key={link.title}>
              {link.title}
            </Element>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
