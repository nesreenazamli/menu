import React, { useState } from 'react';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay, virtualize, bindKeyboard } from 'react-swipeable-views-utils';
import {Link} from "react-scroll";
import { StyledLink } from './ScrollBar.Styles';

const EnhancedSwipeableViews = bindKeyboard(autoPlay(virtualize(SwipeableViews)));
const styless = {
  root: {
    direction: 'rtl',
  }}
const styles = {
  slide: {
    direction: 'rtl',
    padding: 10,
    minHeight: 20,
    margin:"30px 0",
    color: '#fff',
  },
  slide1: {
    backgroundColor: '#fff',
    
  },
  slide2: {
    backgroundColor: '#fff',
  },
  slide3: {
    backgroundColor: '#fff',
  },
};




function ScrollBar() {
 const [active, setActive] = useState({
   one:true,
   two:false,
   three:false,
   four:false,
   five:false,
   six:false
 });

const [sliderIndex, setSliderIndex] = useState(0)
 
const handleactive=(index)=>{
  
   setActive(
     {...active,
      active,
    }
   )
}

console.log("test " ,setSliderIndex);
  return (
    <SwipeableViews
    onChangeIndex={()=>console.log("fkjjdsfdfs")}
    enableMouseEvents style={styless.root} style={{width:"100%"}} axis="x-reverse" index={sliderIndex}>
      <div style={Object.assign({}, styles.slide, styles.slide1)} className="JC">

        {}
      <StyledLink onClick={handleactive}  active={sliderIndex && active.one} to="Category1" smooth={true} duration={1000} className="bg-scroll C-pointer">صنف 1</StyledLink>
      <StyledLink onClick={handleactive} active={sliderIndex && active.two} to="Category2" smooth={true} duration={1000} className=" C-pointer">صنف 2</StyledLink>
      <StyledLink onClick={handleactive} active={sliderIndex && active.three}  to="Category3" smooth={true} duration={1000 } className=" C-pointer">صنف 3</StyledLink>
      <StyledLink onClick={handleactive} active={sliderIndex && active.four} to="Category4" smooth={true} duration={1000} className=" C-pointer">صنف 4</StyledLink>
      <StyledLink onClick={handleactive}  active={sliderIndex && active.five} to="Category5" smooth={true} duration={1000} className=" C-pointer">صنف 5</StyledLink>
      <StyledLink onClick={handleactive} active={sliderIndex && active.six} to="Category5" smooth={true} duration={1000} className=" C-pointer">صنف 6</StyledLink>

      </div>
      <div style={Object.assign({}, styles.slide, styles.slide2)} className="JC"> <a href="#Category">صنف 1</a>
      <StyledLink active={active} href="#Category">صنف 2</StyledLink>
      <StyledLink href="#Category">صنف 3</StyledLink>
      <StyledLink href="#Category">صنف 4</StyledLink>
      <StyledLink href="#Category">صنف 5</StyledLink>
      <StyledLink href="#Category">صنف 6</StyledLink></div>
      <div style={Object.assign({}, styles.slide, styles.slide3)} className="JC"> <a href="#Category">صنف 1</a>
      <Link href="#Category">صنف 2</Link>
      <Link href="#Category">صنف 3</Link>
      <Link href="#Category">صنف 4</Link>
      <Link href="#Category">صنف 5</Link>
      <Link href="#Category">صنف 6</Link></div>
    </SwipeableViews>
  );
}

export default ScrollBar;