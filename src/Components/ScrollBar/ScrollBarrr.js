// import React, { Component } from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// export default function ScrollBarrrrr() {
//   const styleobj = {
//     background: "black",
//     color: "white",
//     padding: "20px 20px",
//     lineHeight: "40px",
//   };

//   // const settings3 = {
//   //   infinite: true,
//   //   slidesToShow: 1,
//   //   slidesToScroll: 1,
//   //   autoplay: true,
//   //   dots: true,
//   //   infinite: false,
//   //   autoplaySpeed: 2000,
//     // rtl: true,
//     // responsive: [
//     //   {
//     //     breakpoint: 1024,
//     //     settings: {
//     //       slidesToShow: 3,
//     //       slidesToScroll: 3,
//     //       infinite: false,
//     //       dots: false,
//     //     },
//     //   },
//     //   {
//     //     breakpoint: 600,
//     //     settings: {
//     //       slidesToShow: 2,
//     //       slidesToScroll: 2,
//     //       initialSlide: 2,
//     //     },
//     //   },
//     //   {
//     //     breakpoint: 480,
//     //     settings: {
//     //       slidesToShow: 1,
//     //       slidesToScroll: 1,
//     //     },
//     //   },
//     // ],
//   // };

//   const settings3 = {
//     dots: true,
//     infinite: false,
//     autoplay: true,
//     speed: 1000,
//     slidesToShow: 4,
//     slidesToScroll: 2,
//     initialSlide: 1

//   };


//   const  settings = {
//     dots: false,
//     infinite: false,
//     speed: 1000,
//     // slidesToShow: 4,
//     // slidesToScroll: 2,
//     // initialSlide: 1,

//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 3,
//           slidesToScroll: 3,
//           infinite: false,
//           dots: false,
//         },
//       },
//       {
//         breakpoint: 600,
//         settings: {
//           slidesToShow: 2,
//           slidesToScroll: 2,
//           initialSlide: 2,
//         },
//       },
//       {
//         breakpoint: 480,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1,
//         },
//       },
//     ],
//   };
//   return (
//     <div
//       style={{
//         marginTop: "80px",
//         background: "#eee",
//         width: "100%",
//         direction: "rtl"
//       }}
//     >
//     <Slider
//       {...settings3}
//       style={{
//         marginTop: "80px",
//         background: "#eee",
//         width: "100%",
//         direction: "rtl",
//       }}
//     >
//       {/* {Array(5).fill(0).map(x=><div style={{width:'200px' ,background:"red"}}>ddsdsdsd</div>)} */}
//       <div style={{ textAlign: "center" }}>
//       <a href="#Meals">Meals</a>

//       </div>
//       <div style={{ textAlign: "center" }}>
//       <a href="#Category">Category</a>
//       </div>
//       <div style={{ textAlign: "center" }}>
//       <a href="#Category2">Category2</a>
//       </div>
//       <div style={{ textAlign: "center" }}>
//         <span>2بيتزا</span>
//       </div>
//       <div style={{ textAlign: "center" }}>
//         <span>2أرز</span>
//       </div>
//       <div style={{ textAlign: "center" }}>
//         <span>2دجاج</span>
//       </div>
//       <div style={{ textAlign: "center" }}>
//         <span>3بيتزا</span>
//       </div>
//       <div style={{ textAlign: "center" }}>
//         <span>3أرز</span>
//       </div>
//       <div style={{ textAlign: "center" }}>
//         <span>3دجاج</span>
//       </div>
//     </Slider>
//     </div>
//   );
// }
