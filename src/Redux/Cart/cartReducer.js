import { ADD_TO_CART } from "./cartTypesConstants";

export const cartReducer = (
  initialState = {
    cart: [],
  },
  action
) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...initialState,
        cart: action.payload,
      };

    default:
      return initialState;
  }
};
