import styled from "styled-components"
import{Field } from 'formik'
import { FlexBox, InnerSection } from "../../../App.Styles"
import BG from "../../../Assets/bg.jpg"

export const Input= styled(Field)`
    outline: none;
    height: 40px;
    font-size: 19px;
    padding: 11px;
    width: 100%;
    margin-bottom: 25px;
    border-bottom: 1;
    border: none;
    border-bottom: 1px solid #eee;

&::placeholder{
    outline: none;
};

`
export const ErrorMessage= styled("span")`
color:red;
margin :0 0 10px;
display:flex;
justify-content: start;
`
export const LoginContainer= styled(InnerSection)`
width:100%;
background-image: 'url("../../../Assets/bg.jpg")';
`

export const LoginBox= styled(FlexBox)`
width:30%;
justify-content:center;
margin-top:60px;

@media screen and (max-width: 1100px) {
    width: 80%;
    margin-top:40px
  }
`
export const Img = styled("img")`
z-index:-1;
`;