import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Header from "./Components/Header/Header";
import Client from "./Components/ClientList/Client";
import AddClient from "./Components/AddClient/AddClient";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="" element={<App />} />
        <Route path="clients" element={<Client />} />
        <Route path="add-client" element={<AddClient />} />
        <Route path="delete-client" />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
