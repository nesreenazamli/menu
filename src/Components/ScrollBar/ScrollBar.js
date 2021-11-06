import React from 'react';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay, virtualize, bindKeyboard } from 'react-swipeable-views-utils';

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
  return (
    <SwipeableViews enableMouseEvents style={styless.root} style={{width:"100%"}} axis="x-reverse">
      <div style={Object.assign({}, styles.slide, styles.slide1)} className="JC">
      <a href="#Category" className="bg-scroll">صنف 1</a>
      <a href="#Category">صنف 2</a>
      <a href="#Category">صنف 3</a>
      <a href="#Category">صنف 4</a>

      </div>
      <div style={Object.assign({}, styles.slide, styles.slide2)} className="JC"> <a href="#Category">صنف 1</a>
      <a href="#Category">صنف 2</a>
      <a href="#Category">صنف 3</a>
      <a href="#Category">صنف 4</a></div>
      <div style={Object.assign({}, styles.slide, styles.slide3)} className="JC"> <a href="#Category">صنف 1</a>
      <a href="#Category">صنف 2</a>
      <a href="#Category">صنف 3</a>
      <a href="#Category">صنف 4</a></div>
    </SwipeableViews>
  );
}

export default ScrollBar;