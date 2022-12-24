import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Users, Home } from "./screens";
import Head from "./components/Head";
import SideMenu from "./components/SideMenu";
import Scripts from "./components/Scripts";
import { SideBarContext } from "./components/Contexts";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <App />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
