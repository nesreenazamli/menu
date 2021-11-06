import styled from "styled-components";
import { Link } from "react-router-dom";
import { FlexBox, FlexRow } from "../../App.Styles";

export const LogoImg = styled("img")`
  margin-top: 10px;
  min-width: 30px;
  min-height: 30px;
`;

export const NavText = styled(Link)`
  padding-right: 40px;
  margin-top: 10px;
  color: #000;

  &:hover {
    color: #e85826;
    -webkit-transition: 0.2s;
    transition: 0.2s;
  }
`;
export const NavContainer = styled(FlexRow)`
  justify-content: space-between;

  @media screen and (max-width: 800px) {
    width: 95%;
    margin: auto;
  } ;
`;
