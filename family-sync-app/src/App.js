import { RouterProvider } from "react-router-dom";
import loadable from "@loadable/component";
import router from "./routes/router";
import ProtectedRouter from "./routes/protectedRouter";
import "./App.css";
const NavBar = loadable(() => import("./containers/navBarContainer"));

function App(props) {
  const {
    //STATE
    getIsLoggedSelector,
  } = props;
  return (
    <>
      {!getIsLoggedSelector ? (
        <RouterProvider router={router} />
      ) : (
        <div className="App">
          <NavBar />
          <RouterProvider router={ProtectedRouter} />
        </div>
      )}
    </>
  );
}

export default App;
