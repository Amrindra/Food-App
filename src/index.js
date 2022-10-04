import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import CartStateProvider from "./context/CartStateProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  <BrowserRouter>
    <CartStateProvider>
      <App />
    </CartStateProvider>
  </BrowserRouter>
  // </React.StrictMode>
);
