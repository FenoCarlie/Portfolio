import { Navigate, createBrowserRouter } from "react-router-dom";

import App from "./App";
import AboutPage from "./views/frontend/about/About";
import Home from "./views/frontend/home/Home";
import ContactPage from "./views/frontend/contact/Contact";
import PortfolioPage from "./views/frontend/portfolio/Portfolio";
import NotFound from "./views/notFound/NotFound";

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
