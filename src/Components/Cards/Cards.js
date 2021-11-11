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
import { FaTrash } from "react-icons/fa";

export default function Cards({ id, price, image, title }) {
  const [count, setCount] = useState(1);
  const [isShow, setIsShow] = useState(true);

  const dispatch = useDispatch();
  return (
    <CardContainer>
      <CardImg src={image} />
      <Typography style={{ margin: "10px 0" }}>{title}</Typography>

      <FlexBox style={{ justifyContent: "space-between", width: "100%" }}>
        <Typography fontWeight={"bold"} style={{ margin: "5px 0 0 0" }}>
          {price}
        </Typography>
        {isShow ? (
          <CounterBtn
            onClick={() => {
              setIsShow(false) &&
                dispatch(addCartItem({ id, title, price, count: 1 }));
            }}
          >
            <AddBtn fontWeight={"bold"}>+</AddBtn>
            <Typography fontWeight={"bold"}>إضافة </Typography>
          </CounterBtn>
        ) : (
          <FlexBox>
            <FaTrash
              style={{ color: "red", margin: "9px", cursor: "pointer" }}
            />
            <CounterComponent />
          </FlexBox>
        )}
      </FlexBox>
    </CardContainer>
  );
}
