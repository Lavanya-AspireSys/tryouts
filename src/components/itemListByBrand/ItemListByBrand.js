import React from "react";
import Item from "../item/Item";
import "./ItemListByBrand.css";
import { Link, useParams } from "react-router-dom";
import brand from "../../mockData/items.json";

function ItemListByBrand() {
  const params = useParams();
  const itemId = (params?.brand);
  let getItemDetail = brand.filter((item) => item.brand === itemId)

  const itemsData = getItemDetail;
  return (
    <div className="item-list">
  
       <div className="product-grid">
      {itemsData.map((item) => (
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

export default ItemListByBrand;