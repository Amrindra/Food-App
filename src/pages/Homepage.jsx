import React from "react";
import Category from "../components/Category";
import Popular from "../components/Popular";
import Veggetable from "../components/Veggetable";

function Homepage() {
  return (
    <div>
      <Category />
      <Popular />
      <Veggetable />
    </div>
  );
}

export default Homepage;
