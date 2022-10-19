import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import dotenv from 'dotenv'

import { BrowserRouter } from "react-router-dom";

import "./index.css";
dotenv.config();

axios.defaults.baseURL = process.env.REACT_APP_API || "http://localhost:3001";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
