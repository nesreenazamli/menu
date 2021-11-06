import React, { useState } from 'react'
import { FlexBox, Typography } from '../../App.Styles';
import { CounterBox, CounterBtn } from '../Cards/Cards.Styles';

export default function CounterComponent() {
    const [count, setCount] = useState(1);
    return (
        <FlexBox style={{marginTop:"5px"}}>
        <CounterBox
        onClick={() => setCount(count + 1)}
         
        >
          +
        </CounterBox>
        <Typography fontWeight={"bold"} style={{color:"#e85826", border:"1px solid #e85826" , padding:"0 10px"}}>{count}</Typography>
        <CounterBox  onClick={() => {
            if (count > 1) setCount(count - 1);
          }}>-</CounterBox>
      </FlexBox>
    )
}
