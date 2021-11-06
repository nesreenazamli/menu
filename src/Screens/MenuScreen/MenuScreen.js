import React, { useEffect, useRef } from "react";
import Meals from "./Meals";
import Category from "../MenuScreen/Category";
import Category2 from "../MenuScreen/Category2";
import Category3 from "../MenuScreen/Category3";
import Category4 from "../MenuScreen/Category4";
import Category5 from "../MenuScreen/Category5";
import Category6 from "../MenuScreen/Category6";
import Category7 from "../MenuScreen/Category7";
import Category8 from "../MenuScreen/Category8";

import { InnerSection } from "../../App.Styles";
import ScrollBar from "../../Components/ScrollBar/ScrollBar";
import { useHistory } from "react-router";

export default function MenuScreen() {
console.log("jdkahsh");

const history = useHistory();
  
//   const useSmoothScrollTo = id => {
//     const ref = useRef(null)
//     useEffect(() => {
//         const listener = e => {
//             if (ref.current && location.hash === id) {
//                 ref.current.scrollIntoView({behavior: 'smooth'})
//             }
//         }
//         window.addEventListener('hashchange', listener, true)
//         return () => {
//             window.removeEventListener('hashchange', listener)
//         }
//     }, [])
//     return {
//         'data-anchor-id': id,
//         ref
//     }
// }
  // useEffect(() => {
  //   localStorage.getItem("user");
  // }, []);

  return (
    // <h1>hi</h1>
    <InnerSection>
      <ScrollBar />
      <Meals />
      <Category />
      <Category2 />
      <Category3 />
      <Category4 />
      <Category5 />
      <Category6 />
      <Category7 />
      <Category8 />
    </InnerSection>
  );
}
