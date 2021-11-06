import {
  ADD_TO_CART,
} from "./cartTypesConstants";

export const cartReducer = (
  initialState = {
    Data: [],
  },
  action
) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...initialState,
        Data: [action.payload],
      };

    default:
      return initialState;
  }
};
