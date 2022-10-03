const CartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      // "...action.payload, qty: 1" this code means that spread all the all the current payload and add qty to that payload as well
      // By doing this we can implement the add and subtract qty in the cart component
      return {
        ...state,
        cartItems: [...state.cartItems, { ...action.payload, qty: 1 }],
      };

      const newItem = action.payload;
      const existItem = state.cartItems.find((item) => item.id === newItem.id);

    // const newCart = existItem
    //   ? state.cartItems.map((item) =>
    //       item.id === existItem.id ? newItem : item
    //     )
    //   : [...state.cartItems, newItem];

    // return { ...state, cartItems: { ...state.cartItems, newCart } };
    case "REMOVE_FROM_CART":
      return {
        ...state,
        cartItems: state.cartItems.filter((item) => item.id !== action.payload),
      };
    default:
      return state;
  }
};

export default CartReducer;
