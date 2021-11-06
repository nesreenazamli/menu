import {
  USER_LOGIN_START,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAILED,
  USER_LOGOUT_SUCCESS,
  USER_REGISTER_FAILED,
  USER_REGISTER_START,
  USER_REGISTER_SUCCESS,
} from "./userTypesConstants";

const LoginData = {
  email: "n@n.com",
  password: "123456",
};

export const loginAction = (values ,history) => {
  const {email,password}=values
  return (dispatch) => {
    dispatch({
      type: USER_LOGIN_START,
    });
    let  con=email==LoginData.email && password==LoginData.password

    if (con) {
      console.log("test2");

      localStorage.setItem("user", JSON.stringify(email));

      // console.log("0000", values.email);
      console.log("test3");


      dispatch({
        type: USER_LOGIN_SUCCESS,
        payload: {
          message: "Success login",
          email: values.email,
          isSucesss: true,
        },
      });
      history.push('/')
    } else {
      dispatch({
        type: USER_LOGIN_FAILED,
        payload: {
          message: "The data entered is wrong",
          isSucesss: false,
        },
      });
      history.push('/signin')

    }
  };
};


export const registerAction = (values, history) => {
  return async (dispatch) => {
    dispatch({
      type: USER_REGISTER_START,
    });

    try {
      const response = values;

      localStorage.setItem("user", JSON.stringify(response));

      dispatch({
        payload: response,
        type: USER_REGISTER_SUCCESS,
      });

      history.push("/");
    } catch (e) {
      dispatch({
        payload: e.response.data.message,
        type: USER_REGISTER_FAILED,
      });
    }
  };
};

export const logoutAction = () => {
  return (dispatch) => {
    localStorage.removeItem("user");
    dispatch({
      type: USER_LOGOUT_SUCCESS,
      payload: {
        message: "Logout",
        isSucesss: false,
      },
    });
  };

};
