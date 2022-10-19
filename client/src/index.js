import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import axios from "axios";

import { BrowserRouter } from "react-router-dom";

import "./index.css";

axios.defaults.baseURL = process.env.REACT_APP_API || "http://localhost:3001";

console.log(axios.defaults.baseURL);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
