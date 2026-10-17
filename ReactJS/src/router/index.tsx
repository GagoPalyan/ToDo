import { createBrowserRouter } from "react-router-dom";
import Home from "../lib/home";
import NotFound from "../lib/404";
import { Routes } from "../types/routes";

const router = createBrowserRouter([
  {
    path: Routes.HOME,
    element: <Home />,
  },
  {
    path: Routes.NOT_FOUND,
    element: <NotFound />,
  },
]);

export default router;
