import styled from "styled-components";

import {
  FlexColumn,
  FlexRow,
  InnerSection,
  Typography,
} from "../../App.Styles";

export const CardContainer = styled(FlexColumn)`
  margin: 20px 20px 0 0px;
  width: 30%;
  overflow:hidden;

  @media screen and (max-width: 600px) {
    width: 45%;
  }
`;
export const CardImg = styled("img")`
  height: 200px;
  width: 100%;
  border-radius: 17px !important;
  overflow:hidden;
  object-fit: cover;
  /* background-image: url("../"); */

  &:hover{
      transform:scale(1,1);
      border-radius: 17px !important;
      overflow:hidden;
      background: red;
  }
`;

export const CounterBtn = styled("div")`
  background: linear-gradient(to right, #f5914e, #e85826);
  display: flex;
  padding: 5px 25px;
  border-radius: 17px;
  justify-content: space-between;
  color:#FFF;
  cursor: pointer;
`;
export const AddBtn = styled(Typography)`
  margin-top: -7px;
  margin-right: 10px;
  margin-left: -13px;
  cursor: pointer;
`;
export const CounterBox = styled.div`
  display: flex;
  padding: 0px 8px;
  font-Weight:bold;
  border: 1px solid #e85826;
  cursor: pointer;
  background: #e85826;
  color: #fff;
`;