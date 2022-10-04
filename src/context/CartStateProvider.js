import React from "react";
import { useReducer } from "react";
import { createContext } from "react";
import CartReducer from "./CartReducer";

export const CartContext = createContext();

function CartStateProvider({ children }) {
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

  const increaseQty = (item) => {
    dispatch({ type: "INCREASE", payload: item });
  };

  const decreaseQty = (item) => {
    dispatch({ type: "DECREASE", payload: item });
  };

  return (
    <CartContext.Provider
      value={{
        cartItems: state.cartItems,
        addToCart,
        removeItem,
        increaseQty,
        decreaseQty,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export default CartStateProvider;
