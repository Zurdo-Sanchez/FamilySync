import { RouterProvider } from "react-router-dom";
import router from "./routes/router";
import ProtectedRouter from "./routes/protectedRouter";
import "./App.css";

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
          <RouterProvider router={ProtectedRouter} />
        </div>
      )}
    </>
  );
}

export default App;
