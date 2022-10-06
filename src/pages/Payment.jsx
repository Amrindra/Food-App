import React from "react";
import { useState } from "react";
import styled from "styled-components";
import { GrSecure } from "react-icons/gr";

const Payment = () => {
  const [cardValues, setCardValue] = useState({
    cardHolderName: "",
    cardNumber: "",
    expDate: "",
    cvv: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCardValue({ ...cardValues, [name]: value });
  };

  return (
    <Container>
      <PaymentForm onSubmit={handleSubmit}>
        <h3>
          <GrSecure />
          Payment
        </h3>
        <InputFieldWrapper>
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
              placeholder="Ex. 1234 5678 1234 1234"
              name="cardNumber"
              value={cardValues.cardNumber}
              onChange={handleChange}
              pattern="[0-9\s]{13,19}"
            />
          </InputField>

          <InputFieldBottom>
            <Wrapper>
              <label htmlFor="date">Expiration Date</label>
              <input
                type="text"
                placeholder="MM/DD/YYYY"
                name="expDate"
                value={cardValues.expDate}
                onChange={handleChange}
                onFocus={(e) => (e.target.type = "date")}
                onBlur={(e) => (e.target.type = "text")}
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
        </InputFieldWrapper>

        <button>Place Your Order</button>
      </PaymentForm>
      <TotalSection>
        <h3>ORDER</h3>

        <div>
          <img
            src="https://spoonacular.com/recipeImages/634070-556x370.jpg"
            alt=""
          />
          <p>$44</p>
        </div>
      </TotalSection>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  gap: 2rem;
  background-color: white;
  padding: 30px;
  margin-top: 4rem;
  justify-content: center;
  align-items: center;
`;

const PaymentForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* width: 100%; */

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
    width: 200px;

    &:hover {
      background-color: #65ba7b;
      cursor: pointer;
    }
  }
`;

const InputFieldWrapper = styled.div``;

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
  }
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
  }
`;
const TotalSection = styled.div``;

export default Payment;
