import styled from "styled-components";
import { Link } from "react-router-dom";
import { FlexBox, FlexRow } from "../../App.Styles";

export const LogoImg = styled("img")`
  margin-top: 10px;
  min-width: 30px;
  min-height: 30px;
  cursor: pointer;
  
`;

export const NavText = styled(Link)`
  padding: 4px 9px;
  margin-top: 10px;
  color: #000;
  border: 1px solid #e85826;
  border-radius: 7px;

  &:hover {
    color: #e85826;
    -webkit-transition: 0.2s;
    transition: 0.2s;
  }
`;
export const NavContainer = styled(FlexRow)`
  justify-content: space-between;
  /* position: fixed; */

  @media screen and (max-width: 800px) {
    width: 95%;
    margin: auto;
    position: fixed;
  } ;
`;
