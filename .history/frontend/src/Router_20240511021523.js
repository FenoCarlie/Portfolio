import { Navigate, createBrowserRouter } from "react-router-dom";
import AboutPage from "./views/about/About";
import ContactPage from "./views/contact/Contact";
import PortfolioPage from "./views/portfolio/Portfolio";
import NotFound from "./views/notFound/NotFound";
import DefaultLayout from "./views/frontend/DefaultLayout";
import Home from "./views/frontend/home/home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <DefaultLayout />,
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
