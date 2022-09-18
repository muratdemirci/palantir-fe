import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard"
import Register from "./pages/Register";
import Main from "./pages/Main";
import Price from "./pages/Price";
import { ThemeProvider } from "@material-tailwind/react";
import About from "./pages/About";

const root = ReactDOM.createRoot(document.getElementById("root"));
let isLoggedIn = localStorage.getItem("isLoggedIn");

root.render(
  <ThemeProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <Main />
        } />
        <Route path="/dashboard" element={
          <Dashboard />
        } />
        <Route path="/about" element={
          <About />
        } />
        <Route path="/prices" element={<Price />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  </ThemeProvider>
);

reportWebVitals();
