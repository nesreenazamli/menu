import React, { useState } from "react";
import { FlexColumn, FlexRow, Typography } from "../../App.Styles";
import Button from "../Button/Button";
import { Counter, OrderContainer, OrderTitle } from "./YourOrder.Styles";

export default function YourOrder(props) {
  const [count, setCount] = useState(1);
  return (
    <OrderContainer>
      <OrderTitle>Order Number #3</OrderTitle>
      <FlexRow style={{ justifyContent: "center", margin: "20px 0" }}>
        <Typography fontWeight={"bold"}>Total: &nbsp; </Typography>
        <Typography>${props.totalprice}55</Typography>
      </FlexRow>
      <FlexRow style={{ justifyContent: "center" }}>
        <Typography fontWeight={"bold"} style={{ margin: "10px 0" }}>
          Table Number: &nbsp;{" "}
        </Typography>
        <Typography style={{ margin: "10px 0" }}>
          {props.tableNub} 03
        </Typography>
      </FlexRow>

      <Button
        text="Create Order"
        borderRadius="10"
        style={{
          padding: " 6px 0",
          letterSpacing: "1.5px",
          fontWeight: "bold",
          margin: "10px 0",
          width: "150px !important",
        }}
        isGray={true}
        ishover={true}
      />
    </OrderContainer>
  );
}
