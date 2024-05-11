import "./App.css";
import NavBar from "./components/NavBar";
import AboutPage from "./views/frontend/about/About";
import ContactPage from "./views/frontend/contact/Contact";
import Home from "./views/frontend/home/Home";
import PortfolioPage from "./views/frontend/portfolio/Portfolio";

function App() {
  return (
    <>
      <div className="font-openSans h-full w-full bg-greyGlass">
        <div className="h-24 stick">
          <NavBar />
        </div>
        <div className="w-full">
          <Home />
          <AboutPage />
          <PortfolioPage />
          <ContactPage />
        </div>
      </div>
    </>
  );
}

export default App;
