const CartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      // "...action.payload, qty: 1" this code means that spread all the all the current payload and add qty to that payload as well
      // By doing this we can implement the add and subtract qty in the cart component

      // Get the existing item in the cartItems
      const existingItem = state.cartItems.filter(
        (item) => action.payload.id === item.id
      );

      // Checking if the the same item alrady existed then return the same state
      // otherwise return new item
      if (existingItem.length > 0) {
        return state;
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, { ...action.payload, qty: 1 }],
        };
      }

    case "REMOVE_FROM_CART":
      return {
        ...state,
        cartItems: state.cartItems.filter((item) => item.id !== action.payload),
      };

    case "INCREASE":
      state.cartItems[
        state.cartItems.findIndex((item) => item.id === action.payload.id)
      ].qty++;

      return {
        ...state,
        cartItems: [...state.cartItems],
      };

    case "DECREASE":
      state.cartItems[
        state.cartItems.findIndex((item) => item.id === action.payload.id)
      ].qty--;

      return {
        ...state,
        cartItems: [...state.cartItems],
      };

    default:
      return state;
  }
};

export default CartReducer;
