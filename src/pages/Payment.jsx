import React from "react";
import { useState } from "react";
import styled from "styled-components";

const Payment = () => {
  const [cardValues, setCardValue] = useState({
    cardHolderName: "",
    cardNumber: "",
    expDate: "",
    cvv: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCardValue({ ...cardValues, [name]: value });
    console.log(cardValues);
  };

  return (
    <div>
      <PaymentForm>
        <h3>Payment</h3>
        <InputField>
          <label htmlFor="name">Card Holder's Name</label>
          <input
            type="text"
            placeholder="Name"
            name="cardHolderName"
            value={cardValues.cardHolderName}
            onChange={handleChange}
          />
        </InputField>

        <InputField>
          <label htmlFor="cardnumber">Card Number</label>
          <input
            type="text"
            placeholder="Name"
            name="cardNumber"
            value={cardValues.cardNumber}
            onChange={handleChange}
          />
        </InputField>

        <InputFieldBottom>
          <Wrapper>
            <label htmlFor="date">Expiration Date</label>
            <input
              type="date"
              placeholder="Name"
              name="expDate"
              value={cardValues.expDate}
              onChange={handleChange}
            />
          </Wrapper>
          <Wrapper>
            <label htmlFor="cvv">CVV</label>
            <input
              type="text"
              placeholder="Code"
              name="cvv"
              value={cardValues.cvv}
              onChange={handleChange}
              maxLength={3}
            />
          </Wrapper>
        </InputFieldBottom>
      </PaymentForm>
      <TotalSection></TotalSection>
    </div>
  );
};

const PaymentForm = styled.form`
  display: flex;
  flex-direction: column;

  h3 {
    margin: 2rem 0;
  }
`;

const InputField = styled.div`
  display: flex;
  flex-direction: column;
`;

const InputFieldBottom = styled.div`
  display: flex;
  align-items: center;
  align-items: center;
  gap: 1rem;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
const TotalSection = styled.div``;

export default Payment;
