import React from "react";
import "./App.css";
import RouterConfig from "./setup/routes/RouterConfig";
import { Box, ThemeProvider } from "@mui/material";
import { theme } from "./types/theme";
import { Provider } from "react-redux";
import store from "./setup/stores";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <Box>
          <RouterConfig />
        </Box>
      </Provider>
    </ThemeProvider>
  );
}

export default App;
