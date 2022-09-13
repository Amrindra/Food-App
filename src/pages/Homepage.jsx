import React from "react";
import Banner from "../components/Banner";
import Popular from "../components/Popular";
import Veggetable from "../components/Veggetable";

function Homepage() {
  return (
    <>
      <main>
        <Banner />
        <Popular />
        <Veggetable />
      </main>
    </>
  );
}

export default Homepage;
