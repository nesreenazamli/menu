import { FlexBox, InnerSection, Typography } from "../../../App.Styles";
import Button from "../../../Components/Button/Button";
import { registerSchema } from "../../../Valedation";
import { ErrorMessage, Img, Input, LoginBox } from "./SignUp.Styles";
import { Form, Formik } from "formik";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { registerAction } from "../../../Redux/User/userActions";
import { Link } from "react-router-dom";
import BGImg from "../../../Assets/bg.jpg"

export default function SignUp() {
  const dispatch = useDispatch();
  const history = useHistory();
  const handleSaveChanges = async (values) => {
    dispatch(registerAction(values, history));
  };
  return (
    <InnerSection style={{ alignItems: "center", margin: "40px 0" }}>
      <Typography fontWeight={"bold"} style={{fontSize:"25px"}}>إنشاء حساب جديد</Typography>
{/* <Img src={BGImg} /> */}
      <LoginBox>
        <Formik
          initialValues={{
            email: "",
            password: "",
            passwordConfirmation: "",
            name: "",
          }}

          validationSchema={registerSchema()}
          onSubmit={handleSaveChanges}
        >
          {({ errors, touched }) => {
            return (
              <Form
                style={{
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  justifyContent: "start",
                  alignItems: "center",
                  flexDirection: "column",
                  margin: "10px 0",
                }}
              >
                <Input name={"name"} type={"name"} placeholder={"اسم المستخدم"} />
                {errors.name && touched.name ? (
                  <ErrorMessage>{errors.name}</ErrorMessage>
                ) : null}

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

                <Input
                  name={"passwordConfirmation"}
                  type={"password"}
                  placeholder={"تأكيد كلمة المرور"}
                />
                {errors.passwordConfirmation && touched.passwordConfirmation ? (
                  <ErrorMessage>{errors.passwordConfirmation}</ErrorMessage>
                ) : null}

                {/* {error ? <ErrorMessage>{error}</ErrorMessage> : null} */}

                <Button
                  text={"إنشاء حساب جديد"}
                  width={"100%"}
                  borderRadius={6}
                  style={{ padding: "10px 0", color: "#fff" }}
                />
              </Form>
            );
          }}
        </Formik>
      </LoginBox>

      <FlexBox>
        <Typography>
           لديك حساب؟
          <Link style={{ color: "red" }} to={"/signin"}>
            سجل دخول    
          </Link>
        </Typography>
      </FlexBox>
    </InnerSection>
  );
}
