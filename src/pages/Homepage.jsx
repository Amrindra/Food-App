import React from "react";
import styled from "styled-components";
import Banner from "../components/Banner";
import Popular from "../components/Popular";
import Veggetable from "../components/Veggetable";

function Homepage() {
  return (
    <Main>
      <Banner />
      <Popular />
      <Veggetable />
    </Main>
  );
}

const Main = styled.main`
  width: 100%;
`;

export default Homepage;
