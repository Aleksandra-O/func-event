import React from "react";
import ShopItem from "./ShopItem";

function ListView (props) {
  const {items}=props;
  
  return (
    <div className="listContainer">
      {items.map((item, index) => <ShopItem item={item} key={index} />)}
    </div>
  );
};

export default ListView;