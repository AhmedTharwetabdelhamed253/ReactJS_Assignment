import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

// Bootstrap: pulled in once, globally, so every component can use Bootstrap classes
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* React Router DOM: BrowserRouter enables navigation between pages */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
