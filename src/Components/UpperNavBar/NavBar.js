import React, { useEffect } from "react";
import { FlexRow } from "../../App.Styles";
import { LogoImg, NavContainer, NavText } from "./NavBar.Styles";
import LogoImage from "../../Assets/logo.png";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logoutAction } from "../../Redux/User/userActions";
// import PersonIcon from "@material-ui/icons/Person";
import { FaUserAlt } from 'react-icons/fa'

export default function NavBar() {
  const { user } = useSelector((state) => state);
  const dispatch = useDispatch();
  const history = useHistory();

  console.log("isUser", user.email);
  useEffect(() => {
    console.log("login");
  }, [dispatch]);
  const handleLogOut = () => {
    dispatch(logoutAction());
    window.location.pathname = "/";
  };

  return (
    <NavContainer>
      <LogoImg src={LogoImage} alt={"Logo Image"} />

      {!Object.entries(user.email).length ? (
        <NavText to={"/signin"}>
         <FaUserAlt style={{margin:"-2px 1px -2px 6px"}} />
          تسجيل دخول
        </NavText>
      ) : (
        <NavText
          onClick={() => {
            handleLogOut(history);
          }}
        >
          مرحبًا روبانزل
        </NavText>
      )}
    </NavContainer>
  );
}
