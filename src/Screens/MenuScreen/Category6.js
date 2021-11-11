import React from "react";
import { FlexRow, InnerSection } from "../../App.Styles";
import CardImage from "../../Assets/555.jpeg";
import Cards from "../../Components/Cards/Cards";

export default function Category6() {
  const Data = [
    {
      id: "1",
      image: CardImage,
      title: "بيتزا خضار",
      price: "$25",
    },
    {
        id: "2",
        image: CardImage,
        title: "بيتزا خضار",
        price: "$25",
      },
      {
        id: "3",
        image: CardImage,
        title: "بيتزا خضار",
        price: "$25",
      },
      {
        id: "4",
        image: CardImage,
        title: "بيتزا خضار",
        price: "$25",
      },
      {
        id: "5",
        image: CardImage,
        title: "بيتزا خضار",
        price: "$25",
      },
  ];

  return (
    <InnerSection id="Category6" >
      <FlexRow>
        {Data.map((item) => {
          return (
            <Cards
              id={item.id}
              image={item.image}
              title={item.title}
              text={item.text}
              price={item.price}
            />
          );
        })}
      </FlexRow>
    </InnerSection>
  );
}
