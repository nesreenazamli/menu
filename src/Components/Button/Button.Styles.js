import { Link } from "react-router-dom";
import styled from "styled-components"

export const CustomeButton=styled(Link)`
    display: flex;
    justify-content: center;
    align-items:center;
    background: #e85826;
    color:#00970F;
    width:${props=>props.width?props.width:"200px"};
    border-radius:${props=>props.borderRadius?props.borderRadius : 7}px;
    border:none;
    font-size:15px;
    cursor: pointer;
    z-index: 100;
    text-transform: capitalize;

  ${(props) =>
    props.disabled
      ? `
        background:#eee;
        color:white;
        cursor: none;
  `
      : ""}

      /* &:hover{
        background: #000;
        color: #fafafa;
        transition:ease .3s;

      } */
`;