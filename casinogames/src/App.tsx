import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { GameI } from "./interfaces";
import Homepage from "./pages/Home_Page/HomePage";
import GamePage from "./pages/Game_Page/GamePage";

function App() {
 
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage/>}></Route>
        <Route path="/gamepage/:name" element={<GamePage/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
