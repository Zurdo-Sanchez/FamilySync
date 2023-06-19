import loadable from "@loadable/component";
import { createBrowserRouter, Navigate } from "react-router-dom";
import ErrorPage from "./error-page";
const NavBar = loadable(() => import("../containers/navBarContainer"));
const Dashboard = loadable(() => import("../containers/dashboardContainer"));
const Accountant = loadable(() => import("../containers/accountantContainer"));

const protectedRouter = createBrowserRouter([
  {
    path: "/dashboard",
    element: (
      <>
        <NavBar />
        <Dashboard />
      </>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: "/accountant",
    element: (
      <>
        <NavBar />
        <Accountant />
      </>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: "*",
    element: <Navigate to="/dashboard" />,
  },
]);

export default protectedRouter;
