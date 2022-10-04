import React from "react";
import { FaPizzaSlice, FaHamburger } from "react-icons/fa";
import { GiChopsticks, GiNoodles } from "react-icons/gi";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Category = () => {
  return (
    <CategoryListItem>
      <Wrapper>
        <CategoryLink to="/cuisine/chinese">
          <GiNoodles />
          <h4>Chinese</h4>
        </CategoryLink>

        <CategoryLink to="/cuisine/vietnamese">
          <GiChopsticks />
          <h4>Vietnames</h4>
        </CategoryLink>

        <CategoryLink to="/cuisine/italian">
          <FaPizzaSlice />
          <h4>Italian</h4>
        </CategoryLink>

        <CategoryLink to="/cuisine/American">
          <FaHamburger />
          <h4>American</h4>
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
  top: 50px;
  z-index: 99;

  /* @media only screen and (max-width: 580px) {
    top: 30px;
  } */
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: lightgray;
  width: 50%;
  height: 6rem;
  border-radius: 50px;
  margin-top: 4rem;

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
  background: linear-gradient(35deg, #494949, #313131);
  width: 6rem;
  height: 6rem;
  cursor: pointer;
  transform: scale(0.8);

  h4 {
    color: white;
  }

  svg {
    color: white;
    font-size: 1.5rem;
  }

  &.active {
    background: linear-gradient(to right, #dddddd, #a68dad);
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
