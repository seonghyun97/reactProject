import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./route/Login/Login";
import ToDo from "./route/ToDo/ToDo";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/reactProject" element={<Login />} />
        <Route path="/todo" element={<ToDo />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
