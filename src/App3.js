import "./App.css";
import React, { useState, useEffect, useReducer } from "react";
import { Routes, Route, Switch } from "react-router-dom";
import { Home, About, Events, Contact } from "./pages";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
