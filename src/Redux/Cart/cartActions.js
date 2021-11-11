import { ADD_TO_CART } from "./cartTypesConstants";
// import Data from  "../../../data"

export const addCartItem = (data) => {

  return (dispatch,getState) => {
        
    console.log("data", data);
    console.log("getData", getState().cart.cart);

    const llocal = localStorage.getItem('cart') || []

    dispatch({
      type: ADD_TO_CART,
      payload: [ llocal,data],
    });
    // localStorage.setItem("cart", JSON.stringify([...data]))
    // console.log("getState().cart", [...getState().cart.cart,data]);


    localStorage.setItem("cart", JSON.stringify([data,(getState().cart.cart)]));

  };

};
