import "./App.css";
import { MainContainer } from "./App.Styles";
import NavBar from "./Components/UpperNavBar/NavBar";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Meals from "./Screens/MenuScreen/Meals";
import Rtl from "./Components/ScrollBar/ScrollBar";
import { Redirect, Route, Switch } from "react-router";
import SignIn from "./Screens/Auth/SignIn/SignIn";
import SignUp from "./Screens/Auth/SignUpPage/SignUp";
import Responsive from "./Components/ScrollBar/ScrollBar";
import MyComponent from "./Components/ScrollBar/ScrollBar";
import { useSelector } from "react-redux";
import ScrollBar from "./Components/ScrollBar/ScrollBar";
import MenuScreen from "./Screens/MenuScreen/MenuScreen";
import Cart from "./Components/Cart/Cart";


function App(props) {
  const isuser = useSelector((state) => state);
  console.log("isssdddddd", Object.entries(isuser?.user?.email).length);
  return (
    <MainContainer>
      <NavBar />

      <Switch>
        <Route key={1} exact={true} path={"/"} component={MenuScreen} />
        <Route key={1} exact={true} path={"/cart"} component={Cart} />{" "}
        {/* new line*/}
        {Object.entries(isuser?.user?.email).length !== 0 ? (
          <>
            {console.log("  login  success  ")}

            <Route key={100} exact={true} path={"/"} component={MenuScreen} />
            <Redirect to="/" />
          </>
        ) : (
          <>
            <Redirect to="/login" />
            {console.log("not  login")}

            <Redirect to="/signin" />

            <Route key={1} exact={true} path={"/signin"} component={SignIn} />
            <Route key={200} exact={true} path={"/signup"} component={SignUp} />
          </>
        )}
      </Switch>
    </MainContainer>
  );
}

export default App;
