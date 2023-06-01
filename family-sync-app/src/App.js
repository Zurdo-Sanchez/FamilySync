import { RouterProvider } from "react-router-dom";
import "./App.css";
import { Provider } from "react-redux";
import { store } from "./utils/store";
import myRoutes from "./routes/myRoutes";
function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={myRoutes} />
    </Provider>
  );
}

export default App;
