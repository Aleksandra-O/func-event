import React from "react";

function ShopItem (props) {
  const {item}=props;
  return (
    <div className="productItem">
      <div className="productPucture">
        <img src={item.img} alt={item.name} />
      </div>
      <div className="productName">
        {item.name}
      </div>
      <div className="productColor">
        {item.color}
      </div>
      <div className="productPrice">
        ${item.price}
      </div>
      <div className="productButton">
        <button>Add to cart</button>
      </div>
    </div>
  )
};

export default ShopItem;