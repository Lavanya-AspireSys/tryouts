import React from "react";
import Item from "../item/Item";
import "./ItemList.css";
import { Link } from "react-router-dom";

function ItemList({ items }) {
  return (
    <div className="item-list">
      {/* {items.map((item) => (
        <Link to={`/item/${item.id}`} key={item.id}>
          <Item
            name={item.name}
            rating={item.rating}
            price={item.price}
            saleDiscount={item.saleDiscount}
            image={item.image}
            brand={item.brand}
          />
        </Link>
      ))} */}
       <div className="product-grid">
      {items.map((item) => (
         <Link to={`/item/${item.id}`} key={item.id}>
        <div key={item.id} className="product">
          <div key={item.id} className="product">
          <img src={item.image} alt={item.title} />
          <h3>{item.title}</h3>
        </div>
        </div>
        </Link>
      ))}
    </div>
    </div>
  );
}

export default ItemList;