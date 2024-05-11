import { useEffect, useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import AboutPage from "./views/frontend/about/About";
import ContactPage from "./views/frontend/contact/Contact";
import Home from "./views/frontend/home/Home";
import PortfolioPage from "./views/frontend/portfolio/Portfolio";

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
  });

  return (
    <>
      <div
        id="app"
        className="font-openSans w-full flex overflow-hidden flex-col bg-greyGlass"
      >
        <div className="">
          <NavBar />
        </div>
        <div
          id="page"
          className="w-full overflow-auto focus:outline-none h-full"
          tabIndex={0}
        >
          {links.map((link) => (
            <div name={link.url} key={link.title} className="">
              {link.title}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
