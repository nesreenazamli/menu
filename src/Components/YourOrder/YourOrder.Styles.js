import styled from "styled-components";
import { FlexColumn, FlexRow,InnerSection, Typography } from "../../App.Styles";

export const OrderTitle = styled("h3")`
 text-transform: capitalize;
 padding:10px 0;
 background: #fff;
    width: 100%;
    text-align: center;
    overflow: hidden;
`

export const Counter = styled.div`
  display: flex;
  padding: 0px 8px;
  border: 1px solid #fcdd06;
  opacity: 0.3;
  cursor: pointer;
  margin:0 10px
`

export const OrderContainer = styled(FlexColumn)`
    width:100%;
    align-items: center;
    /* box-shadow:0 0 6px 3px #ddd; */
    border-radius: 15px;
    background-color:#f2f2f2;
    overflow: hidden;
`