import React from "react";
import { FaPizzaSlice, FaHamburger } from "react-icons/fa";
import { GiChopsticks, GiNoodles } from "react-icons/gi";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Category = () => {
  return (
    <CategoryListItem>
      <Wrapper>
        <CategoryLink to="/cuisine/American">
          <FaHamburger />
          <h4>American</h4>
        </CategoryLink>

        <CategoryLink to="/cuisine/italian">
          <FaPizzaSlice />
          <h4>Italian</h4>
        </CategoryLink>

        <CategoryLink to="/cuisine/chinese">
          <GiNoodles />
          <h4>Chinese</h4>
        </CategoryLink>

        <CategoryLink to="/cuisine/vietnamese">
          <GiChopsticks />
          <h4>Vietnames</h4>
        </CategoryLink>
      </Wrapper>
    </CategoryListItem>
  );
};

const CategoryListItem = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: sticky;
  top: 60px;
  z-index: 99;

  /* @media only screen and (max-width: 580px) {
    top: 30px;
  } */
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background-color: lightgray;
  width: 50%;
  height: 4.5rem;
  border-radius: 50px;
  margin-top: 2rem;

  @media only screen and (max-width: 580px) {
    width: 100%;
    height: 4.5rem;
    margin-top: 1.7rem;
  }
`;

const CategoryLink = styled(NavLink)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  text-decoration: none;
  /* background: linear-gradient(35deg, #494949, #313131); */
  width: 5rem;
  height: 5rem;
  cursor: pointer;
  transform: scale(0.8);

  h4 {
    color: #313131;
    font-size: 1.2rem;
  }

  svg {
    color: #313131;
    font-size: 2rem;
  }

  &.active {
    /* background: linear-gradient(to right, #dddddd, #a68dad); */
    h4,
    svg {
      color: green;
    }
  }

  @media only screen and (max-width: 580px) {
    width: 5rem;
    height: 5rem;

    h4 {
      font-size: 0.9rem;
    }

    svg {
      font-size: 1.2rem;
    }
  }
`;

export default Category;
