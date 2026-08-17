import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import App from "./App";
import { store } from "./redux/store";
import { ThemeProvider } from "./context/ThemeContext";

// Bootstrap: pulled in once, globally, so every component can use Bootstrap classes
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* Redux: Provider makes the store available to every connected component */}
    <Provider store={store}>
      {/* Context API: ThemeProvider makes { theme, toggleTheme } available via useTheme() */}
      <ThemeProvider>
        {/* React Router DOM: BrowserRouter enables navigation between pages */}
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);
