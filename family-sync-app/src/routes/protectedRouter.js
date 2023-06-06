import loadable from "@loadable/component";
import { createBrowserRouter, Navigate } from "react-router-dom";
import ErrorPage from "./error-page";
const Login = loadable(() => import("../containers/loginContainer"));
const Dashboard = loadable(() => import("../containers/DashboardContainer"));

const protectedRouter = createBrowserRouter([
  {
    path: "/dashboard",
    element: <Dashboard />,
    errorElement: <ErrorPage />,
  },
  {
    path: "*",
    element: <Navigate to="/dashboard" />,
  },
]);

export default protectedRouter;
