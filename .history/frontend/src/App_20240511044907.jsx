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
  return (
    <>
      <div className="font-openSans h-full w-full bg-greyGlass">
        <div className="h-24 sticky top-0">
          <NavBar />
        </div>
        <div className="w-full">
          {links.map((link) => (
            <Element
              name={link.url}
              key={link.title}
              smooth={true}
              duration={500}
              className="px-3 py-1"
            >
              {link.title}
            </Element>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
