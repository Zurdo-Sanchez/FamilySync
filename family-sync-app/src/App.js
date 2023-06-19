import { RouterProvider } from "react-router-dom";
import router from "./routes/router";
import ProtectedRouter from "./routes/protectedRouter";
import "./App.css";
import { useEffect } from "react";

function App(props) {
  const {
    //STATE
    getIsLoggedSelector,
    //FUNCTIONS
    getDBCategory,
  } = props;

  useEffect(() => {
    if (getIsLoggedSelector) getDBCategory();
  }, [getIsLoggedSelector]);
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
