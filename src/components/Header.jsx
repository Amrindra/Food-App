import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Searchbar from "./Searchbar";
import { FaPizzaSlice } from "react-icons/fa";
import { GiShoppingCart } from "react-icons/gi";

const Header = () => {
  return (
    <HeaderContainer>
      <LogoWrapper>
        <Link to="/">
          <Logo>FOOD</Logo>
        </Link>
      </LogoWrapper>
      <SearchbarWrapper>
        <Searchbar />
      </SearchbarWrapper>
      <CartWrapper>
        <span>0</span>
        <GiShoppingCart />
      </CartWrapper>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1rem;
`;

const LogoWrapper = styled.div`
  background-color: var(--dark-color);
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Logo = styled.div`
  color: white;
  font-size: 1rem;
  font-weight: bold;
`;

const SearchbarWrapper = styled.div`
  /* width: 40%; */
`;

const CartWrapper = styled.div`
  background-color: var(--dark-color);
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  span {
    color: white;
    position: absolute;
    top: 0;
    font-weight: bold;
  }

  svg {
    color: white;
    font-size: 2rem;
  }
`;

export default Header;
