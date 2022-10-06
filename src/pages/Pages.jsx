import React from "react";
import Homepage from "./Homepage";
import { Route, Routes } from "react-router-dom";
import Cuisine from "./Cuisine";
import SearchResult from "../components/SearchResult";
import SingleItem from "./SingleItem";
import Cart from "./Cart";
import Payment from "./Payment";
import Category from "../components/Category";

function Pages() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <Category />
            <Homepage />
          </>
        }
      />
      <Route
        path="/cuisine/:type"
        element={
          <>
            <Category />
            <Cuisine />
          </>
        }
      />
      <Route
        path="/searchResult/:search"
        element={
          <>
            <Category />
            <SearchResult />
          </>
        }
      />
      <Route
        path="/singleItem/:id"
        element={
          <>
            <Category />
            <SingleItem />
          </>
        }
      />
      <Route path="/cart" element={<Cart />} />
      <Route path="/payment" element={<Payment />} />
    </Routes>
  );
}

export default Pages;
