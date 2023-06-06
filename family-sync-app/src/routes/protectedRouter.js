import loadable from '@loadable/component'
import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "./error-page";
const Login = loadable(() => import('../containers/loginContainer'));
const Dashboard = loadable(() => import('../containers/DashboardContainer'));

const protectedRouter = createBrowserRouter([
 
    {
      path: "/dashboard",
      element: <Dashboard/>,
      errorElement: <ErrorPage />,
      
    },
  ]);

  export default protectedRouter