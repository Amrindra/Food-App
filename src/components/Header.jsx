import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Searchbar from "./Searchbar";
import { GiShoppingCart } from "react-icons/gi";
import { useContext } from "react";
import { CartContext } from "../context/CartStateProvider";
// import { mobile, tablet } from "../../responsive";

const Header = () => {
  const { cartItems } = useContext(CartContext);
  return (
    <HeaderContainer>
      <Link to="/">
        <LogoWrapper>
          <Logo>FOOD</Logo>
        </LogoWrapper>
      </Link>

      <SearchbarWrapper>
        <Searchbar />
      </SearchbarWrapper>

      <Link to="/cart">
        <CartWrapper>
          {cartItems.length > 0 && <span>{cartItems.length}</span>}
          <GiShoppingCart />
        </CartWrapper>
      </Link>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1rem;
  position: sticky;
  top: 2%;
  z-index: 999;
  width: 100%;
`;

const LogoWrapper = styled.div`
  background-color: var(--dark-color);
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media only screen and (max-width: 580px) {
    width: 3rem;
    height: 3rem;
  }
`;

const Logo = styled.div`
  color: white;
  font-size: 1rem;
  font-weight: bold;

  @media only screen and (max-width: 580px) {
    font-size: 0.8rem;
  }
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
  z-index: 999;

  span {
    color: red;
    position: absolute;
    top: 20px;
    right: 20px;
    font-weight: bold;
    font-size: 0.8rem;
    background-color: white;
    border-radius: 50px;
    width: 30%;
    height: 30%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  /* svg is a icon */
  svg {
    color: white;
    font-size: 2.5rem;
  }

  @media only screen and (max-width: 580px) {
    width: 3rem;
    height: 3rem;

    span {
      right: 15px;
      top: 15px;
    }

    svg {
      font-size: 2rem;
    }
  }
`;

export default Header;
