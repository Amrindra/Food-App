import React from "react";
import Homepage from "./Homepage";
import { Route, Routes } from "react-router-dom";
import Cuisine from "./Cuisine";
import SearchResult from "../components/SearchResult";
import SingleItem from "./SingleItem";
import Cart from "./Cart";
import Payment from "./Payment";

function Pages() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/cuisine/:type" element={<Cuisine />} />
      <Route path="/searchResult/:search" element={<SearchResult />} />
      <Route path="/singleItem/:id" element={<SingleItem />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/payment" element={<Payment />} />
    </Routes>
  );
}

export default Pages;
