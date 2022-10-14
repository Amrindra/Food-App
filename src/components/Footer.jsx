import React from "react";
import styled from "styled-components";
import { FaFacebook, FaInstagram, FaYoutubeSquare } from "react-icons/fa";

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <Container>
      <SocialIcons>
        <FaFacebook />
        <FaInstagram />
        <FaYoutubeSquare />
      </SocialIcons>
      <Description>
        <p>About Us</p>
        <p>Contact Our Customer Support</p>
        <p>&copy; All right reserve {currentYear}</p>
      </Description>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 4rem;
  height: 20vh;
  width: 100%;
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 1rem;

  svg {
    font-size: 2rem;
  }

  svg:nth-last-child(3) {
    color: blue;
  }
  svg:nth-last-child(2) {
    color: #fd5949;
  }
  svg:nth-last-child(1) {
    color: red;
  }
`;
const Description = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 1rem;

  p {
    font-size: 1rem;
    color: gray;
  }
`;

export default Footer;
