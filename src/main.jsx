import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App_component from "./components/app/app_component";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App_component></App_component>
  </BrowserRouter>
);
