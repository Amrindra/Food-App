import React from "react";
import styled from "styled-components";

const Payment = () => {
  return (
    <div>
      <PaymentForm>
        <h3>Payment</h3>
        <InputField>
          <label htmlFor="name">Card Holder's Name</label>
          <input type="text" placeholder="Name" name="name" value="" />
        </InputField>

        <InputField>
          <label htmlFor="cardnumber">Card Number</label>
          <input type="text" placeholder="Name" name="cardnumber" value="" />
        </InputField>

        <InputFieldBottom>
          <Wrapper>
            <label htmlFor="date">Expiration Date</label>
            <input type="date" placeholder="Name" name="date" value="" />
          </Wrapper>
          <Wrapper>
            <label htmlFor="cvv">CVV</label>
            <input type="text" placeholder="Code" name="cvv" value="" />
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
