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
          <Logo>
            <FaPizzaSlice />
          </Logo>
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
`;

const LogoWrapper = styled.div`
  background-color: black;
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Logo = styled.div`
  color: white;
  font-size: 2rem;
`;

const SearchbarWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CartWrapper = styled.div`
  background-color: black;
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  span {
    color: white;
  }

  svg {
    color: white;
    font-size: 2rem;
  }
`;

export default Header;
