import React from "react";
import { useReducer } from "react";
import { createContext } from "react";
import CartReducer from "./CartReducer";

const CartContext = createContext();

function CartState({ children }) {
  const initialState = {
    cartItems: [],
  };

  const [state, dispatch] = useReducer(CartReducer, initialState);

  const addToCart = (item) => {
    dispatch({ type: "ADD_TO_CART", payload: item });
  };

  const removeItem = (id) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: id });
  };

  return (
    <CartContext.Provider
      value={{ cartItems: state.cartItems, addToCart, removeItem }}
    >
      {children}
    </CartContext.Provider>
  );
}

export default CartState;
