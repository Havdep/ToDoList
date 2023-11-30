import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { GlobalContext } from "./context.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <GlobalContext.Consumer> */}
    <App />
    {/* </GlobalContext.Consumer> */}
  </React.StrictMode>
);
