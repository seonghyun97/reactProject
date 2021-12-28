import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import Login from "./route/Login/Login";
import ToDo from "./route/ToDo/ToDo";
const App = () => {
  return (
    <HashRouter>
        <Route path="/reactProject" element={<Login />} />
        <Route path="/reactProject/todo" element={<ToDo />} />
    </HashRouter>
  );
};

export default App;
