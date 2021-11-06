import React from "react";
import {
  FlexColumn,
  InnerSection,
  Typography,
  FlexBox,
  FlexRow,
} from "../../App.Styles";
import Counter from "../Counter/Counter";
import { CartContainer } from "./Cart.Styles";
import Button from "../Button/Button";

export default function Cart(props) {
  return (
    <CartContainer>
      <Typography fontWeight={"bold"}>الطلبيات</Typography>

      <FlexColumn
        style={{
          borderBottom: "1px solid #edd7d7",
          width: "100%",
          paddingBottom: "10px",
        }}
      >
        <Typography fontWeight={"bold"} style={{ margin: "20px 0" }}>
          {props.title} بيتزا
        </Typography>
        <FlexBox style={{ justifyContent: "space-between", width: "100%" }}>
          <Typography> {props.price}$25</Typography>
          <Counter />
        </FlexBox>
      </FlexColumn>

      <Typography
        fontWeight={"bold"}
        color={"#e85826"}
        style={{ marginTop: "50px" }}
      >
        تفاصيل الطلب
      </Typography>

      <FlexBox
        style={{
          justifyContent: "space-between",
          width: "100%",
          margin: "20px 0",
        }}
      >
        <Typography fontWeight={"bold"}>السعر الكلي</Typography>
        <Typography>$100</Typography>
      </FlexBox>

      <FlexBox style={{ justifyContent: "space-between", width: "100%" }}>
        <Typography fontWeight={"bold"}>رقم الطاولة</Typography>
        <Typography>#5</Typography>
      </FlexBox>

      <Button
        width={"100%"}
        borderRadius={6}
        text="اطلب الان "
        style={{ padding: "10px 0", color: "#fff", margin: "20px 0" }}
      />
    </CartContainer>
  );
}
