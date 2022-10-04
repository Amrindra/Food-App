import React from "react";
import styled from "styled-components";

const Banner = () => {
  return (
    <BannerStyled>
      <img
        src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
        alt=""
      />
    </BannerStyled>
  );
};

const BannerStyled = styled.div`
  width: 100%;

  img {
    object-fit: cover;
    width: 100%;
    height: 35rem;
    border-radius: 1rem;
    margin-top: 3rem;
  }

  @media only screen and (max-width: 580px) {
    img {
      height: 15rem;
      border-radius: 0;
    }
  }
`;

export default Banner;
