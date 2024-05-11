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
      <div className="font-openSans h-screen w-full overflow-hidden bg-greyGlass">
        <div className="">
          <NavBar />
        </div>
        <div
          id="page"
          className="w-full overflow-auto focus:outline-none"
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
