import React from "react";
import { useContext } from "react";
import { CartContext } from "../context/CartStateProvider";

const Cart = () => {
  const { cartItems } = useContext(CartContext);

  console.log(cartItems);
  return (
    <div>
      {cartItems.map((item) => (
        <div>
          <h3>{item.title}</h3>
          <img src={item.image} alt="" />
          <p>${item.pricePerServing}</p>
        </div>
      ))}
    </div>
  );
};

export default Cart;
