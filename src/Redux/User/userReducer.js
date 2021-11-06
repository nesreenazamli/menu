import {
  USER_LOGIN_START,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAILED,
  USER_LOGOUT_SUCCESS,
  USER_REGISTER_FAILED,
  USER_REGISTER_START,
  USER_REGISTER_SUCCESS,
} from "./userTypesConstants";

export const userReducer = (
  initialState = {
    email: "",
    isSucesss: false,
  },
  action
) => {
  switch (action.type) {

    case USER_LOGIN_START:
      return {
        ...initialState,
        isSucesss: false,

      };

    case USER_LOGIN_SUCCESS:
      return {
        ...initialState,
        email: action.payload.email,
        isSucesss: true,
      };

    case USER_LOGIN_FAILED:
      return {
        ...initialState,
        isSucesss: false,
      };

      case USER_REGISTER_START:
        return {
          ...initialState,
          isLoading: true,
        };
  
      case USER_REGISTER_SUCCESS:
        return {
          user: action.payload,
          isLoading: false,
          success: true,
        };
  
      case USER_REGISTER_FAILED:
        return {
          ...initialState,
          error: action.payload,
          isLoading: false,
        };

    case USER_LOGOUT_SUCCESS:
      return {
        user: {
          email: "",
        },
      };

    default:
      return initialState;
  }
};
