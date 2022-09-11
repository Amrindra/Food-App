import React from "react";
import { FaPizzaSlice, FaHamburger } from "react-icons/fa";
import { GiChopsticks, GiNoodles } from "react-icons/gi";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Category = () => {
  return (
    <CategoryListItem>
      <NavLink to="/cuisine/cambodian">
        <GiNoodles />
        <h4>Cambodian</h4>
      </NavLink>
      <NavLink to="/cuisine/japanese">
        <GiChopsticks />
        <h4>Japanese</h4>
      </NavLink>
      <NavLink to="/cuisine/italian">
        <FaPizzaSlice />
        <h4>Italian</h4>
      </NavLink>
      <NavLink to="/cuisine/American">
        <FaHamburger />
        <h4>American</h4>
      </NavLink>
    </CategoryListItem>
  );
};

const CategoryListItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default Category;
