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

  const { clearCart, cartItems } = useContext(CartContext);

  useEffect(() => {
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      clearCart();
    }, 3000);
  }, []);

  return (
    <PaymentStyled>
      <Wrapper>
        {isLoading ? (
          <>
            <Loading>
              <GridLoader color="#313131" margin={5} />
            </Loading>

            <VerifyStatus>
              <h6>Verifying payment</h6>
              <PulseLoader color="#313131" size={3} />
            </VerifyStatus>
          </>
        ) : (
          <ThankYouForYourShopping>
            <p style={{ marginTop: "2rem" }}>Thank you for your payment.</p>

            {/*Checking if the order is only one show only singular message otherwise show plural*/}
            {cartItems.length < 2 ? (
              <p>Your order has been placed!</p>
            ) : (
              <p>Your orders have been placed!</p>
            )}

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
    /* margin-top: 2rem;  */
  }
`;

const Loading = styled.div`
  margin: 3rem 0;
`;

const VerifyStatus = styled.div`
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
    margin-top: 3rem;
    font-size: 1.2rem;

    &:hover {
      cursor: pointer;
      background-color: #313131;
    }
  }
`;

export default VerifyingPayment;
