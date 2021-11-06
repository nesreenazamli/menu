import { Form, Formik } from "formik";
import React, { useState, useEffect } from "react";
import { FlexBox, InnerSection, Typography } from "../../../App.Styles";
import {
  ErrorMessage,
  Input,
  LoginBox,
  LoginContainer,
  loginContainer,
} from "../SignUpPage/SignUp.Styles";
import Button from "../../../Components/Button/Button";
import { loginSchema } from "../../../Valedation";
import StyledCheckbox from "../../../Components/CheckBox/CheckBox";
import { loginAction } from "../../../Redux/User/userActions";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { addCartItem } from "../../../Redux/Cart/cartActions";

export default function SignIn() {
  const dispatch = useDispatch();
  const history = useHistory();
  // const user = useSelector((store) => store.user);
  const handleSaveChanges = async (values) => {
    dispatch(addCartItem());
  };
  const [state, setstate] = useState(false);

  // function handleChange (setstate(true))
  // console.log(state);

  // useEffect(() => {
  //   history.push("/");
  // }, [dispatch]);
  // console.log("dsddsdsdsdasdasdsa", user.isSucesss);

  return (
    <LoginContainer
      style={{
        alignItems: "center",
        margin: "40px 0",
        justifyContent: "center",
      }}
    >
      {/* {!(user.isSucesss)&&<p>somevndkkjk</p>} */}
      <Typography fontWeight={"bold"} style={{fontSize:"25px"}}>تسجيل الدخول </Typography>

      <LoginBox>
        <Formik
          initialValues={{
            email: "",
            password: "",
          }}
          validationSchema={loginSchema()}
          onSubmit={handleSaveChanges}
        >
          {({ errors, touched }) => {
            return (
              <Form
                style={{
                  width: "80%",
                  height: "80%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                }}
              >
                <Input name={"email"} type={"email"} placeholder={"البريد الإلكتروني"} />
                {errors.email && touched.email ? (
                  <ErrorMessage>{errors.email}</ErrorMessage>
                ) : null}

                <Input
                  name={"password"}
                  type={"password"}
                  placeholder={"كلمة المرور"}
                />
                {errors.password && touched.password ? (
                  <ErrorMessage>{errors.password}</ErrorMessage>
                ) : null}

                <FlexBox
                  style={{
                    justifyContent: "space-between",
                    alignItems: "start",
                  }}
                ></FlexBox>

                <Button
                  width={"100%"}
                  borderRadius={6}
                  text="سجل دخول"
                  style={{ padding: "10px 0", color: "#fff", margin: "20px 0" }}
                />
              </Form>
            );
          }}
        </Formik>
      </LoginBox>

      <FlexBox>
        <Typography>
          {" "}
          لا يوجد لديك حساب{" "}
          <Link style={{ color: "red" }} to={"/signup"}>
            سجل الآن
          </Link>
        </Typography>
      </FlexBox>
    </LoginContainer>
  );
}
