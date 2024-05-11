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
      <div className="font-openSans h-screen w-full flex overflow-hidden flex-col bg-greyGlass">
        <div className="h-24">
          <NavBar />
        </div>
        <div className="w-full">
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
