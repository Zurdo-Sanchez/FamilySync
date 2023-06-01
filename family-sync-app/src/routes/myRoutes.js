import loadable from '@loadable/component'
import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "./error-page";
const Login = loadable(() => import('../containers/loginContainer'));

const myRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login/>,
      errorElement: <ErrorPage />,
      
    },
  ]);

  export default myRouter