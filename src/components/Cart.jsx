import React from "react";
import { useContext } from "react";
import styled from "styled-components";
import { CartContext } from "../context/CartStateProvider";

const Cart = () => {
  const { cartItems } = useContext(CartContext);

  const subtotal = cartItems.reduce(
    (amount, item) => item.pricePerServing + amount,
    0
  );

  return (
    <>
      {cartItems.length === 0 ? (
        <div>
          <h3>Your cart is empty</h3>
        </div>
      ) : (
        <TableContainer>
          <Table>
            <tr>
              <th>Product</th>
              <th>Prices</th>
              <th>QTY</th>
              <th>Total</th>
            </tr>
            {cartItems.map((item) => (
              <Tr key={item.id}>
                <Td>
                  <img src={item.image} alt="" />
                  <Title>{item.title}</Title>
                  <p> ID: {item.id}</p>
                </Td>
                <td>
                  <p>${item.pricePerServing}</p>
                </td>
                <td>
                  <QtyWrapper>
                    <span>-</span>
                    <p>{cartItems.length}</p>
                    <span>+</span>
                  </QtyWrapper>
                </td>
                <td>${subtotal}</td>
              </Tr>
            ))}
          </Table>
          <Subtotal>Subtotal: ${subtotal}</Subtotal>
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
  align-items: baseline;

  span {
    /* color: white; */
    font-weight: 500;
    cursor: pointer;
  }

  p {
    padding: 0 0.5rem 0 0.5rem;
  }
`;

const Td = styled.td`
  max-width: 200px;
`;

const Title = styled.h3`
  font-size: 1.5rem;
`;
const Price = styled.p``;

const Subtotal = styled.p`
  text-align: end;
  margin-top: 3rem;
`;

export default Cart;
