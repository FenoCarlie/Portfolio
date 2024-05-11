import "./App.css";
import NavBar from "./components/NavBar";
import AboutPage from "./views/frontend/about/About";
import ContactPage from "./views/frontend/contact/Contact";
import Home from "./views/frontend/home/Home";
import PortfolioPage from "./views/frontend/portfolio/Portfolio";

function App() {
  return (
    <>
      <div className="font-openSans h-screen w-screen bg-greyGlass">
        <div className="h-24">
          <NavBar />
        </div>
        <div className="h-[calc(100vh - 6rem)]">
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
