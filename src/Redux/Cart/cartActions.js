import { ADD_TO_CART } from "./cartTypesConstants";

export const addCartItem = (Data) => {
  return (dispatch) => {
    dispatch({
      type: ADD_TO_CART,
      payload: Data,
    });
  };
  // console.log("....",Data);

  localStorage.setItem("cart", Data);
};
