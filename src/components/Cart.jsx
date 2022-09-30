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

  console.log(cartItems);
  return (
    <>
      {cartItems.length === 0 ? (
        <div>
          <h3>Your cart is empty</h3>
        </div>
      ) : (
        <TableContainer>
          {cartItems.map((item) => (
            <Table>
              <tr>
                <th>Product</th>
                <th>Prices</th>
                <th>QTY</th>
                <th>Total</th>
              </tr>
              <tr>
                <td>
                  <img src={item.image} alt="" />
                  <Title>{item.title}</Title>
                  <p> ID: {item.id}</p>
                </td>
                <td>
                  <p>${item.pricePerServing}</p>
                </td>
                <td>{cartItems.length}</td>
                <td>{subtotal}</td>
              </tr>
            </Table>
          ))}
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

const Tr = styled.tr``;
const Th = styled.th``;
const Td = styled.td``;
const Title = styled.h3`
  font-size: 1.5rem;
`;
const Price = styled.p``;

const Subtotal = styled.p`
  text-align: end;
`;

export default Cart;
