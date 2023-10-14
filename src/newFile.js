import React from "react";
import App from "./App";
import { MantineProvider } from "@mantine/core";
import { root, theme } from ".";

root.render(
  <React.StrictMode>
    <MantineProvider theme={theme}>
      <App />
    </MantineProvider>
  </React.StrictMode>
);
