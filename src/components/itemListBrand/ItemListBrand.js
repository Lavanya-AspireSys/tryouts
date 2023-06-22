import React from "react";
import { Link } from "react-router-dom";
import "./ItemListBrand.css";

function ItemList({ items }) {
  return (
    <div className="item-list">
   
       <div className="product-grid">
      {items.map((item) => (
         <Link to={`/itemBrand/${item.brand}`} key={item.brand}>
        <div key={item.id} className="product">
          <div key={item.id} className="product">
          <img src={item.brandLogo} alt={item.brand} />
          <h3>{item.brand}</h3>
        </div>
        </div>
        </Link>
      ))}
    </div>
    </div>
  );
}

export default ItemList;