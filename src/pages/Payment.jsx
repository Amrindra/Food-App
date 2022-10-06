import React from "react";
import { useState } from "react";
import styled from "styled-components";
import { GrSecure } from "react-icons/gr";
import { AiOutlineCreditCard } from "react-icons/ai";
import { useContext } from "react";
import { CartContext } from "../context/CartStateProvider";

const Payment = () => {
  const [cardValues, setCardValue] = useState({
    cardHolderName: "",
    cardNumber: "",
    expDate: "",
    cvv: "",
  });

  const { cartItems } = useContext(CartContext);

  const subtotal = cartItems.reduce(
    (amount, item) => item.pricePerServing * item.qty + amount,
    0
  );

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

          <Icon>
            <AiOutlineCreditCard />
          </Icon>

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
        {/* <div>
          <p>We accept these types of credit</p>
          <img
            src="https://a1devices.com/wp-content/uploads/2020/07/paypal-acceptance-mark-major-credit-card-logos.jpg"
            alt=""
          />
        </div> */}
      </PaymentForm>

      <TotalSection>
        <h3>ORDER DETAILS</h3>

        <OrderDetailWrapper>
          {cartItems?.map((item) => (
            <OrderList key={item.id}>
              <img src={item.image} alt={item.title} />
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
  /* height: 100vh; */
`;

const PaymentForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* height: 100vh; */
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

const InputFieldWrapper = styled.div`
  position: relative;
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

const TotalSection = styled.div`
  max-height: 10%;

  h3 {
    margin: 2rem 0;
    font-weight: 400;
    font-size: 2.5rem;
    text-align: center;
  }
`;
const OrderDetailWrapper = styled.ul`
  margin-bottom: 1rem;
`;

const OrderList = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;

  img {
    width: 100px;
    height: 80px;
    margin-bottom: 10px;
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
`;

export default Payment;
