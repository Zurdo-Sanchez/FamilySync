import loadable from "@loadable/component";
import { createBrowserRouter, Navigate } from "react-router-dom";
import ErrorPage from "./error-page";
const Login = loadable(() => import("../containers/loginContainer"));
const Dashboard = loadable(() => import("../containers/DashboardContainer"));

const myRouter = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/register",
    element: <Login />,
    errorElement: <ErrorPage />,
  },
  {
    path:"*",
    element: <Navigate to="/login" />
  }
  
  
]);

export default myRouter;
