import React from "react";

function ShopCard (props) {
  const {card}=props;
  return (
    <div className="productItem">
      <div className="productName">
        {card.name}
      </div>
      <div className="productColor">
        {card.color}
      </div>
      <div className="productPucture">
        <img src={card.img} alt={card.name} />
      </div>
      <div className="priceBlock">
        <div className="productPrice">
          ${card.price}
        </div>
        <div className="productButton">
          <button>Add to cart</button>
        </div>
      </div>
    </div>
  )
};

export default ShopCard;