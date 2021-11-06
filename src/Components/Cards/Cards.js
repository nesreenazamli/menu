import { useState } from "react";
import { FlexBox, FlexColumn, Typography } from "../../App.Styles";
import {
  AddBtn,
  CardContainer,
  CardImg,
  CounterBtn,
  Counter,
} from "./Cards.Styles";
import CounterComponent from "../Counter/Counter";
import { addCartItem } from "../../Redux/Cart/cartActions";
import { useDispatch } from "react-redux";

export default function Cards(props) {
  const [count, setCount] = useState(1);
  const [isShow, setIsShow] = useState(true);

  const dispatch = useDispatch();
  return (
    <CardContainer>
      <CardImg src={props.image} />
      <Typography style={{ margin: "10px 0" }}>{props.title}</Typography>

      <FlexBox style={{ justifyContent: "space-between", width: "100%" }}>
        <Typography fontWeight={"bold"} style={{ margin: "5px 0 0 0" }}>
          {props.price}
        </Typography>
        {isShow ? (
          <CounterBtn
            onClick={() => {
              setIsShow(false) 
              && dispatch(addCartItem())
            }}
          >
            <Typography fontWeight={"bold"}>إضافة </Typography>
            <AddBtn onClick={() => {}} fontWeight={"bold"}>
              +
            </AddBtn>
          </CounterBtn>
        ) : (
          <CounterComponent /> 
        )}
      </FlexBox>
    </CardContainer>
  );
}
