import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { CartContext } from "../context/CartStateProvider";

const Cart = () => {
  const { cartItems, removeItem, increaseQty, decreaseQty } =
    useContext(CartContext);

  const subtotal = cartItems.reduce(
    (amount, item) => item.pricePerServing * item.qty + amount,
    0
  );

  // console.log(cartItems.cartItems);

  return (
    <>
      {cartItems?.length === 0 ? (
        <EmptyCart>
          <h3>Your cart is empty!</h3>
          <Link to="/">
            <button>Continue Shopping...</button>
          </Link>
        </EmptyCart>
      ) : (
        <TableContainer>
          <Table>
            <tr>
              <th>Product</th>
              <th>Prices</th>
              <th>QTY</th>
              <th>Total</th>
            </tr>
            {cartItems?.map((item) => (
              <tr key={item.id}>
                <Td>
                  <button onClick={() => removeItem(item.id)}>X</button>
                  <img src={item.image} alt={item.title} />
                  <h3>{item.title}</h3>
                  <p>ID: {item.id}</p>
                </Td>
                <td>
                  <p>${item.pricePerServing}</p>
                </td>
                <td>
                  <QtyWrapper>
                    <button
                      onClick={
                        item.qty > 1
                          ? () => decreaseQty(item)
                          : () => removeItem(item.id)
                      }
                    >
                      -
                    </button>
                    <p>{item.qty}</p>
                    <button onClick={() => increaseQty(item)}>+</button>
                  </QtyWrapper>
                </td>
                <td>${(item.pricePerServing * item.qty).toFixed(2)}</td>
              </tr>
            ))}
          </Table>
          <BottomWrapper>
            <Subtotal>Subtotal: ${subtotal.toFixed(2)}</Subtotal>
            <Link to="/payment">
              <CheckOutBtn>Proceed to Check Out</CheckOutBtn>
            </Link>
          </BottomWrapper>
        </TableContainer>
      )}
    </>
  );
};

const TableContainer = styled.div`
  margin-top: 2rem;
  height: 100vh;
  width: 100%;
`;

const Table = styled.table`
  border-collapse: collapse;
  width: 100%;

  td,
  th {
    border: 1px solid #dddddd;
    text-align: left;
    padding: 8px;
  }

  tr:nth-child(even) {
    background-color: #dddddd;
  }

  img {
    width: 10rem;
  }

  h3 {
    font-size: 1.5rem;
  }

  @media only screen and (max-width: 580px) {
    td {
      padding: 4px;
    }

    img {
      width: 7rem;
    }

    h3 {
      font-size: 1rem;
      line-height: 1rem;
      margin-bottom: 1rem;
    }
  }
`;

const QtyWrapper = styled.div`
  display: flex;
  align-items: center;
  align-self: center;

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 500;
    cursor: pointer;
    width: 20px;
    height: 20px;
    font-size: 1rem;
    border-radius: 50%;
    border: none;
    background-color: black;
    color: white;
  }

  p {
    padding: 0 0.5rem 0 0.5rem;
  }

  @media only screen and (max-width: 580px) {
    button {
      background: none;
      color: black;
      font-weight: bold;
    }

    p {
      padding: 0 0.3rem 0 0.3rem;
    }
  }
`;

const Td = styled.td`
  max-width: 200px;
  position: relative;

  button {
    position: absolute;
    z-index: 999;
    font-weight: bold;
    left: 160px;
    top: -4px;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    border: 1px solid red;
    background: red;
    color: white;

    &:hover {
      cursor: pointer;
    }
  }

  @media only screen and (max-width: 580px) {
    button {
      left: 105px;
      top: -7px;
    }
  }
`;

const EmptyCart = styled.div`
  text-align: center;
  margin-top: 3rem;

  button {
    margin-top: 5rem;
    font-size: 1.5rem;
    background-color: lightgray;
    padding: 10px 50px;
    border: none;
    border-radius: 5px;

    &:hover {
      cursor: pointer;
      background-color: black;
      color: white;
    }
  }
`;

const BottomWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  height: 40vh;
`;

const Subtotal = styled.p`
  margin-top: 3rem;
  margin-bottom: 2rem;
  text-decoration: underline;
  font-size: 1.2rem;
  font-weight: bold;
`;

const CheckOutBtn = styled.button`
  padding: 15px 20px;
  border: none;
  color: white;
  font-weight: bold;
  width: 250px;
  font-size: 1.2rem;
  background-color: black;

  &:hover {
    cursor: pointer;
    background-color: gray;
  }
`;

export default Cart;
