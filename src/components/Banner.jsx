import React from "react";
import styled from "styled-components";

const Banner = () => {
  return (
    <BannerStyled>
      <Wrapper>
        <Intro>
          <h3>Best Food App On</h3>
          <h3>
            The <span>Internet.</span>
          </h3>
        </Intro>
        <ImageWrapper>
          <img
            src="https://www.freepnglogos.com/uploads/food-png/true-food-kitchen-35.png"
            alt=""
          />
        </ImageWrapper>
      </Wrapper>
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320 "
          preserveAspectRatio="none"
        >
          <path
            fill="#313131"
            fillOpacity="1"
            d="M0,96L34.3,112C68.6,128,137,160,206,154.7C274.3,149,343,107,411,90.7C480,75,549,85,617,112C685.7,139,754,181,823,218.7C891.4,256,960,288,1029,298.7C1097.1,309,1166,299,1234,277.3C1302.9,256,1371,224,1406,208L1440,192L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"
          ></path>
        </svg>
      </div>
    </BannerStyled>
  );
};

const BannerStyled = styled.div`
  margin-top: 4rem;
  width: 100%;
  background-color: #e6eded;
  border-radius: 0.5rem;
  box-shadow: -2px 1px 12px 2px rgba(0, 0, 0, 0.86);
  -webkit-box-shadow: -2px 1px 12px 2px rgba(0, 0, 0, 0.86);
  -moz-box-shadow: -2px 1px 12px 2px rgba(0, 0, 0, 0.86);

  div {
    svg {
      margin-top: -3rem;
      border-radius: 0.5rem;
    }
  }
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem 2rem 0 2rem;

  @media only screen and (max-width: 580px) {
    flex-direction: column;
    padding: 0;
  }
`;

const Intro = styled.div`
  width: 700px;

  h3,
  span {
    font-family: "Aclonica", sans-serif;
    font-size: 3rem;
    font-weight: 300;
    margin-top: 1rem;
    text-shadow: 3px 3px 2px rgba(0, 0, 0, 0.6);
  }

  span {
    color: red;
  }

  @media only screen and (max-width: 580px) {
    width: 300px;

    h3,
    span {
      font-size: 1.5rem;
      text-align: center;
      text-shadow: none;
    }
  }

  @media only screen and (max-width: 880px) {
    width: 800px;

    h3,
    span {
      font-size: 1.7rem;
      text-align: center;
      text-shadow: none;
    }
  }
`;

const ImageWrapper = styled.div`
  /* flex: 1; */

  img {
    object-fit: cover;
    width: 100%;
  }

  @media only screen and (max-width: 580px) {
    img {
      /* height: 15rem; */
      /* width: 70%; */
      margin: 1rem 0;
    }
  }
`;

export default Banner;
