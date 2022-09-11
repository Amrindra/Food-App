import React from "react";
import { FaPizzaSlice, FaHamburger } from "react-icons/fa";
import { GiChopsticks, GiNoodles } from "react-icons/gi";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Category = () => {
  return (
    <CategoryListItem>
      <div>
        <GiNoodles />
        <h4>Cambodian</h4>
      </div>
      <div>
        <GiChopsticks />
        <h4>Japanese</h4>
      </div>
      <div>
        <FaPizzaSlice />
        <h4>Italian</h4>
      </div>
      <div>
        <FaHamburger />
        <h4>American</h4>
      </div>
    </CategoryListItem>
  );
};

const CategoryListItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default Category;
