import React from "react";
import HorizontalScroll from "react-scroll-horizontal";
import { ScrollContainer } from "./ScrollBar.Styles";

export default function Scroll() {
//   const child = { width: `100vw`, height: `200px`,background:"red",margin:"20px" };
//   const parent  = { width: `60em`, height: `100%`,background:"green"}

  return (
    <ScrollContainer>
      <HorizontalScroll>
        <div className="main bg4">
          <h3>صنف 1</h3>
        </div>
        <div className="main bg5">
          <h3>صنف 2</h3>
        </div>
        <div className="main bg6">
          <h3>صنف 2</h3>
        </div>
      </HorizontalScroll>
    </ScrollContainer>
  );
}
