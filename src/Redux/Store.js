import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { cartReducer } from "./Cart/cartReducer";
import { userReducer } from "./User/userReducer";

const reducers = combineReducers({
  user: userReducer,
  cart: cartReducer,
});

// const userFromLocalStorage = JSON.parse(localStorage.getItem("user")) || "";
const temp = localStorage.getItem('user')
const email = temp ? JSON.parse(temp) : {}

const cartFromLocalStorage = JSON.parse(localStorage.getItem("cart")) || [];

// console.log("userFromLocalStorage",userFromLocalStorage)

const initialState = {
  user: {
    email
  },
  cart:cartFromLocalStorage,
}; 

const middlewares = [thunk];

const store = createStore(
  reducers,
  initialState,
  applyMiddleware(...middlewares)
);

window.store=store;

export default store;
