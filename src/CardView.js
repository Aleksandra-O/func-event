import React from "react";
import ShopCard from "./ShopCard";

function CardView (props) {
  const {cards}=props;
  
  return (
    <div className="cardContainer">
      {cards.map((card, index) => <ShopCard card={card} key={index}/>)}
    </div>
  );
};

export default CardView;