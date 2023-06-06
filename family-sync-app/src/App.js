import { RouterProvider } from "react-router-dom";
import { ThemeProvider } from "@mui/material";
import theme from './utils/Theme';

import "./App.css";
import { Provider } from "react-redux";
import { store } from "./utils/store";
import router from "./routes/router";
import ProtectedRouter from "./routes/protectedRouter";

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
         <RouterProvider router={router}/>
        <RouterProvider router={ProtectedRouter} />
      </ThemeProvider>
    </Provider>
  );
}

export default App;
