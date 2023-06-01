import { RouterProvider } from "react-router-dom";
import { ThemeProvider } from "@mui/material";
import theme from './utils/Theme';

import "./App.css";
import { Provider } from "react-redux";
import { store } from "./utils/store";
import myRoutes from "./routes/myRoutes";
function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <RouterProvider router={myRoutes} />
      </ThemeProvider>
    </Provider>
  );
}

export default App;
