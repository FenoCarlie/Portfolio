import { Navigate, createBrowserRouter } from "react-router-dom";

import App from "./App";
import NotFound from "./views/notFound/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
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
