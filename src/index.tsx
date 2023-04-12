import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import { createRoot } from "react-dom/client";

import App from "./App";

const root = createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
