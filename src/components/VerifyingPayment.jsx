import React from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { GridLoader, PulseLoader } from "react-spinners";
import styled from "styled-components";
import { CartContext } from "../context/CartStateProvider";

const VerifyingPayment = () => {
  const [isLoading, setIsLoading] = useState(false);

  const { cartItems } = useContext(CartContext);

  useEffect(() => {
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      // cartItems = [];
    }, 5000);
  }, []);

  return (
    <PaymentStyled>
      <Wrapper>
        {isLoading ? (
          <>
            <Top>
              <h6>Verifying payment</h6>
              <PulseLoader color="#313131" size={3} />
            </Top>

            <div>
              <GridLoader color="#36d7b7" margin={5} />
            </div>
          </>
        ) : (
          <ThankYouForYourShopping>
            <p>Thank you for your payment!</p>
            <Link to="/">
              <button>Continue Shopping</button>
            </Link>
          </ThankYouForYourShopping>
        )}
      </Wrapper>
    </PaymentStyled>
  );
};

const PaymentStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Wrapper = styled.div`
  background-color: white;
  width: 300px;
  height: 300px;
  margin-top: 100px;
  text-align: center;
  border-radius: 5px;

  div {
    margin-top: 2rem;
  }
`;

const Top = styled.div`
  display: flex;
  justify-content: center;
  align-items: baseline;

  h6 {
    font-size: 1.5rem;
    font-weight: 400;
  }
`;

const ThankYouForYourShopping = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: all 8s ease-in-out;

  p {
    font-size: 1.5rem;
    font-weight: 400;
  }

  button {
    background-color: black;
    border-radius: 10px;
    border: none;
    color: white;
    width: 200px;
    height: 40px;
    margin-top: 2rem;
    font-size: 1.2rem;

    &:hover {
      cursor: pointer;
      background-color: #313131;
    }
  }
`;

export default VerifyingPayment;
