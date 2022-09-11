import React from "react";
import Homepage from "./Homepage";
import { Route, Routes } from "react-router-dom";
import Cuisine from "./Cuisine";

function Pages() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/cuisine/:type" element={<Cuisine />} />
    </Routes>
  );
}

export default Pages;
