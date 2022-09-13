import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Searchbar from "./Searchbar";
import { FaPizzaSlice } from "react-icons/fa";

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
    </HeaderContainer>
  );
};

const HeaderContainer = styled.header``;

const LogoWrapper = styled.div`
  background-color: black;
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
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

export default Header;
