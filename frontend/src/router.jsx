import { createBrowserRouter } from "react-router-dom";

import App from "./App";
import NotFound from "./views/notFound/NotFound";
import LogIn from "./views/backend/GuestLayout/LogIn";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/backOffice/login",
    element: <LogIn />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;
