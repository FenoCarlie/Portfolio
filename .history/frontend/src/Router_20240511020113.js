import { Navigate, createBrowserRouter } from "react-router-dom";
import App from "./App";
import AboutPage from "./views/about/About";
import ContactPage from "./views/contact/Contact";
import PortfolioPage from "./views/portfolio/Portfolio";
import NotFound from "./views/notFound/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
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
