import React, { useState, useEffect } from "react";
import NavBar from "./components/NavBar";
import DashBoard from "./components/DashBoard";
import Table from "./components/Table";
import "./App.css";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="w-auto h-auto flex flex-col">
      <NavBar />
      <DashBoard />
      <Table />
      <Footer/>
    </div>
  );
}

export default App;
