import { RouterProvider } from "react-router-dom";
import "./App.css";
import { Provider } from "react-redux";
import { store } from "./utils/store";
import myRoutes from "./routes/myRoutes";
import Loginview from "./containers/loginContainer";
function App() {
  return (
    <Provider store={store}>
      <div className="App">
      <Loginview/>
      </div>
    </Provider>
  );
}

export default App;
