// hooks
import React from "react";
import ReactDOM from "react-dom/client";
import { LoginProvider } from "./hooks/auth.jsx";
// components
import App from "./App.jsx";
// chakra
import { CSSReset, ChakraProvider, extendTheme } from "@chakra-ui/react";
// style
import { getTheme } from "./Theme.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider theme={extendTheme({ ...getTheme() })}>
      <LoginProvider>
          <CSSReset />
          <App />
      </LoginProvider>
    </ChakraProvider>
  </React.StrictMode>
);
