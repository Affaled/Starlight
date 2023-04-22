import React from "react";
import Header from "./components/header/Header";
import { Outlet } from "react-router-dom";
import "./assets/styles/App.css";

function App() {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
}

export default App;
