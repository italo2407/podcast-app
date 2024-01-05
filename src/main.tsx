import React from "react";
import ReactDOM from "react-dom/client";
import App from "./modules/main/App.tsx";
import "./index.css";
import { GlobalAppProvider } from "./modules/main/store/context.tsx";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <GlobalAppProvider>
        <App />
      </GlobalAppProvider>
    </BrowserRouter>
  </React.StrictMode>
);
