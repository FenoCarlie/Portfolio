import { Navigate, createBrowserRouter } from "react-router-dom";
import AboutPage from "./views/about/About";
import ContactPage from "./views/contact/Contact";
import PortfolioPage from "./views/portfolio/Portfolio";
import NotFound from "./views/notFound/NotFound";
import Home from "./views/frontend/home/home";
import App from "./App";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Navigate to="/home" />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/about",
        element: <AboutPage />,
      },
      {
        path: "/contact",
        element: <ContactPage />,
      },
      {
        path: "/portfolio",
        element: <PortfolioPage />,
      },
    ],
  },
  /*{
        path: "/backOffice",
        element: <"" />,
        children: [
          
        ],
      },*/
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;
