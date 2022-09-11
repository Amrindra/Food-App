import React from "react";
import Homepage from "./Homepage";
import { Route, Routes } from "react-router-dom";
import Cuisine from "./Cuisine";
import SearchResult from "../components/SearchResult";
import Recipe from "./Recipe";

function Pages() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/cuisine/:type" element={<Cuisine />} />
      <Route path="/searchResult/:search" element={<SearchResult />} />
      <Route path="/recipe/:id" element={<Recipe />} />
    </Routes>
  );
}

export default Pages;
