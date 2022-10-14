import React from "react";
import styled from "styled-components";

const Banner = () => {
  return (
    <BannerStyled>
      <Wrapper>
        <Intro>
          <h3>Best Food App On The Internet</h3>
        </Intro>
        <ImageWrapper>
          <img
            src="https://www.freepnglogos.com/uploads/food-png/true-food-kitchen-35.png"
            alt=""
          />
        </ImageWrapper>
      </Wrapper>
    </BannerStyled>
  );
};

const BannerStyled = styled.div`
  margin-top: 3rem;
  width: 100%;
  background-color: #e6eded;
  border-radius: 0.5rem;
  height: 50vh;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  position: relative;
`;

const Intro = styled.div`
  /* flex: 1; */
`;
const ImageWrapper = styled.div`
  img {
    /* clip-path: polygon(25% 0%, 100% 0%, 100% 100%, 25% 100%, 0% 50%); */
    object-fit: cover;
    width: 100%;
    /* border-radius: 1rem; */
  }

  @media only screen and (max-width: 580px) {
    img {
      height: 15rem;
      border-radius: 0;
    }
  }
`;

export default Banner;
