import loadable from '@loadable/component'
import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "./error-page";
const Login = loadable(() => import('../containers/loginContainer'));
const Dashboard = loadable(() => import('../containers/DashboardContainer'));

const myRouter = createBrowserRouter([
    {
      path: "/login",
      element: <Login/>,
      errorElement: <ErrorPage />,
      
    },
    {
      path: "/register",
      element: <Login/>,
      errorElement: <ErrorPage />,
      
    },
    {
      path: "/dashboard",
      element: <Dashboard/>,
      errorElement: <ErrorPage />,
      
    },
  ]);

  export default myRouter