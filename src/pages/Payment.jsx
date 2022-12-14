import React from "react";
import { useState } from "react";
import styled from "styled-components";
import { GrSecure } from "react-icons/gr";
import { AiOutlineCreditCard } from "react-icons/ai";
import {
  FaCcDiscover,
  FaCcMastercard,
  FaCcVisa,
  FaCcPaypal,
} from "react-icons/fa";
import { useContext } from "react";
import { CartContext } from "../context/CartStateProvider";
import VerifyingPayment from "../components/VerifyingPayment";

const Payment = () => {
  const [cardValues, setCardValue] = useState({
    cardHolderName: "",
    cardNumber: "",
    month: "",
    year: "",
    cvv: "",
  });
  const [errorMsg, setErrorMsg] = useState(false);
  const [verifyingPayment, setVerifyingPayment] = useState(false);

  // This from the context API
  const { cartItems, removeItem } = useContext(CartContext);

  const subtotal = cartItems.reduce(
    (amount, item) => item.pricePerServing * item.qty + amount,
    0
  );

  const handleSubmit = (e) => {
    e.preventDefault();

    // These conditions are used to check if the input field is blank we'll set the errorMsg state to true
    if (
      cardValues.cardHolderName.length === 0 ||
      cardValues.cardNumber.length === 0 ||
      cardValues.cvv.length === 0 ||
      cardValues.month.length === 0 ||
      cardValues.year === 0
    ) {
      setErrorMsg(true);
    } else {
      // VERIFYING PAYMENT
      setVerifyingPayment(true);
    }
  };

  // function format(splitDigit) {
  //   return splitDigit.toString().replace(/\d{4}(?=.)/g, "$& ");
  // }

  const handleChange = (e) => {
    const { name, value } = e.target;

    setCardValue({ ...cardValues, [name]: value });

    // console.log({ [name]: value });
  };

  return (
    <>
      {verifyingPayment ? (
        <VerifyingPayment />
      ) : (
        <Container>
          <Form onSubmit={handleSubmit}>
            <h3>
              <GrSecure />
              Payment
            </h3>
            {/* <sub style={{ color: "#d1c932" }}>
              CARD DEMO: You can type in any card number to test it.
            </sub> */}
            <InputFieldWrapper>
              <InputField>
                <label htmlFor="cardHolderName">Card Holder's Name</label>
                <input
                  type="text"
                  placeholder="Name"
                  name="cardHolderName"
                  pattern="[A-Za-z].{0,}"
                  value={cardValues.cardHolderName}
                  onChange={handleChange}
                />
              </InputField>

              {/* If errorMsg is true and input field is blank it will show error messages if user hits the submit buton*/}
              {errorMsg && cardValues.cardHolderName.length <= 0 ? (
                <ErrorMessage>Card Holder's Name is required</ErrorMessage>
              ) : (
                ""
              )}

              <InputField>
                <label htmlFor="cardnumber">Card Number</label>
                <input
                  type="text"
                  placeholder="Ex. 1234 5678 1234 1234"
                  name="cardNumber"
                  value={cardValues.cardNumber}
                  onChange={handleChange}
                  maxLength={16}
                  min={0}
                  pattern="[0-9s]{13,19}"
                />

                {errorMsg ? (
                  <></>
                ) : (
                  <Icon>
                    <AiOutlineCreditCard />
                  </Icon>
                )}
              </InputField>

              {errorMsg && cardValues.cardNumber.length <= 0 ? (
                <ErrorMessage>Card Number is required</ErrorMessage>
              ) : (
                ""
              )}

              <InputFieldBottom>
                <InputFieldBottomWrapper>
                  <label htmlFor="date">Expiration Date</label>
                  <DateSection>
                    <div>
                      <input
                        type="tel"
                        placeholder="MM"
                        name="month"
                        value={cardValues.month}
                        onChange={handleChange}
                        maxLength={2}
                        min={0}
                        pattern="\d*"
                      />
                      {errorMsg && cardValues.month.length <= 0 ? (
                        <ErrorMessage>Month is required</ErrorMessage>
                      ) : (
                        ""
                      )}
                    </div>

                    <div>
                      <input
                        type="text"
                        placeholder="YYYY"
                        name="year"
                        value={cardValues.year}
                        onChange={handleChange}
                        maxLength={4}
                        min={0}
                        pattern="\d*"
                      />

                      {errorMsg && cardValues.year.length <= 0 ? (
                        <ErrorMessage>Year is required</ErrorMessage>
                      ) : (
                        ""
                      )}
                    </div>
                  </DateSection>
                </InputFieldBottomWrapper>

                <InputFieldBottomWrapper>
                  <label htmlFor="cvv">CVV</label>
                  <input
                    type="text"
                    placeholder="Code"
                    name="cvv"
                    value={cardValues.cvv}
                    onChange={handleChange}
                    maxLength={3}
                    min={0}
                    pattern="\d*"
                  />

                  {errorMsg && cardValues.cvv.length <= 0 ? (
                    <ErrorMessage>CVV Cannot Be Blank</ErrorMessage>
                  ) : (
                    ""
                  )}
                </InputFieldBottomWrapper>
              </InputFieldBottom>
            </InputFieldWrapper>

            {/* if cart is empty then disable the button */}
            <button disabled={cartItems.length <= 0}>Place Your Order</button>

            <CreditCardGroup>
              <p>We accept the following cards</p>
              <CreditCardIconsWrapper>
                <FaCcDiscover />
                <FaCcMastercard />
                <FaCcVisa />
                <FaCcPaypal />
              </CreditCardIconsWrapper>
            </CreditCardGroup>
          </Form>

          {/* If cartItems is empty do not show the the order details */}
          {cartItems.length > 0 && (
            <TotalSection>
              <h3>ORDER DETAILS</h3>
              <hr />

              <OrderDetailWrapper>
                {cartItems?.map((item) => (
                  <OrderList key={item.id}>
                    <img src={item.image} alt={item.title} />
                    <button onClick={() => removeItem(item.id)}>Delete</button>
                    <p>${item.pricePerServing}</p>
                  </OrderList>
                ))}
              </OrderDetailWrapper>
              <hr />
              <Total>
                <p>Total: </p>
                <p>${subtotal.toFixed(2)}</p>
              </Total>
            </TotalSection>
          )}
        </Container>
      )}
    </>
  );
};

const Container = styled.div`
  display: flex;
  gap: 2rem;
  padding: 30px;
  margin-top: 4rem;
  justify-content: center;
  align-items: center;
  border-radius: 10px;

  @media only screen and (max-width: 580px) {
    flex-direction: column-reverse;
    margin-top: 2rem;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h3 {
    margin: 2rem 0;
    font-weight: 400;
    font-size: 2.5rem;
  }

  svg {
    font-size: 2rem;
  }

  button {
    margin-top: 2rem;
    padding: 20px;
    border: none;
    border-radius: 5px;
    font-size: 1.2rem;
    font-weight: bold;
    background-color: #2ba64b;
    color: white;
    width: 250px;

    &:hover {
      background-color: #65ba7b;
      cursor: pointer;
    }

    &:disabled {
      background: #dddddd;
      cursor: not-allowed;
      color: gray;
    }
  }

  @media only screen and (max-width: 580px) {
    h3 {
      font-size: 2rem;
      margin: 1rem 0;
    }

    svg {
      font-size: 1.5rem;
    }

    button {
      padding: 15px;
    }
  }
`;

const InputFieldWrapper = styled.div`
  position: relative;
  width: 100%;
`;

const InputField = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 15px;
  height: 80px;

  label {
    font-size: 1.2rem;
    font-weight: 500;
    color: gray;
    text-transform: uppercase;
  }

  input {
    border: 2px solid gray;
    height: 35px;
    padding: 20px;
    margin-top: 5px;
    background: none;
    font-size: 1.2rem;
    border-radius: 5px;

    &:focus {
      outline-color: #2ba64b;
    }

    &:invalid {
      border: none;
      outline: 2px solid red;
    }
  }

  @media only screen and (max-width: 580px) {
    margin-top: 1px;
    height: 75px;

    label {
      font-size: 1rem;
    }
  }
`;

const InputFieldBottom = styled.div`
  display: flex;
  align-items: center;
  align-items: center;
  gap: 1rem;

  @media only screen and (max-width: 580px) {
    flex-direction: column;
    gap: 0;
  }
`;

const InputFieldBottomWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 15px;
  width: 100%;

  label {
    font-size: 1.2rem;
    font-weight: 500;
    color: gray;
    text-transform: uppercase;
  }

  input {
    border: 2px solid gray;
    height: 35px;
    padding: 20px;
    margin-top: 5px;
    background: none;
    font-size: 1.2rem;
    border-radius: 5px;

    &:focus {
      outline-color: #2ba64b;
    }

    &::placeholder {
      color: gray;
    }

    &:invalid {
      border: none;
      outline: 2px solid red;
    }
  }

  @media only screen and (max-width: 580px) {
    margin-top: 5px;

    label {
      font-size: 1rem;
    }
  }
`;

const DateSection = styled.div`
  display: flex;
  gap: 1rem;

  input {
    width: 8rem;
  }

  div {
    display: flex;
    flex-direction: column;
  }
`;

const CreditCardGroup = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  p {
    padding: 2rem 0 1rem 0;
    font-size: 1.2rem;
  }
`;

const CreditCardIconsWrapper = styled.div`
  display: flex;
  gap: 1rem;

  svg:nth-last-child(4) {
    font-size: 3rem;
    color: orange;
  }
  svg:nth-last-child(3) {
    font-size: 3rem;
    color: red;
  }
  svg:nth-last-child(2) {
    color: blue;
    font-size: 3rem;
  }
  svg:nth-last-child(1) {
    font-size: 3rem;
    color: lightblue;
  }
`;

const ErrorMessage = styled.span`
  font-size: 1rem;
  color: red;
`;

// *****TOTAL SECTION BELOW *****

const TotalSection = styled.div`
  max-height: 10%;

  h3 {
    margin: 1rem 0;
    font-weight: 400;
    font-size: 2.5rem;
    text-align: center;
  }

  @media only screen and (max-width: 580px) {
    width: 100%;

    h3 {
      font-size: 2rem;
    }
  }
`;

const OrderDetailWrapper = styled.ul`
  margin-bottom: 1rem;
  margin-top: 1rem;
`;

const OrderList = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;

  img {
    width: 90px;
    height: 70px;
    margin-bottom: 10px;
  }

  button {
    border: none;
    background-color: #cf2f1d;
    color: white;
    padding: 5px;
    border-radius: 5px;

    &:hover {
      cursor: pointer;
      background-color: #c9574b;
    }
  }
`;

const Total = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 1rem;

  p {
    font-size: 1.2rem;
  }
`;

const Icon = styled.div`
  position: absolute;
  right: 10px;
  bottom: 96px;

  @media only screen and (max-width: 580px) {
    bottom: 162px;

    svg {
      font-size: 1.2rem;
    }
  }
`;

export default Payment;
