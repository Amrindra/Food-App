import React from "react";
import { useEffect } from "react";
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
              <Tr key={item.id}>
                <Td>
                  <button onClick={() => removeItem(item.id)}>X</button>
                  <img src={item.image} alt={item.title} />
                  <Title>{item.title}</Title>
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
              </Tr>
            ))}
          </Table>
          <Subtotal>Subtotal: ${subtotal.toFixed(2)}</Subtotal>
        </TableContainer>
      )}
    </>
  );
};

const TableContainer = styled.div`
  margin-top: 2rem;
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
`;

const Tr = styled.tr`
  /* margin-top: 3rem; */
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
`;

const Td = styled.td`
  max-width: 200px;
  position: relative;

  button {
    position: absolute;
    z-index: 9;
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
      /* background-color: white; */
    }
  }
`;

const Title = styled.h3`
  font-size: 1.5rem;
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

const Subtotal = styled.p`
  text-align: end;
  margin-top: 3rem;
  margin-bottom: 2rem;
  text-decoration: underline;
`;

export default Cart;
