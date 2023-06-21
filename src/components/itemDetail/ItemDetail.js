import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./ItemDetail.css";
import items from "../../mockData/items.json";
import { GlobalContext } from "../../context/GlobalState";

const getItemDetail = (id) => items.filter((item) => item.id === id)[0];

function ItemDetail() {
  useEffect(() => { 
    item.quantity = 1;

   },[]);
  const params = useParams();
  const itemId = parseInt(params?.id);
  let item = !!itemId && getItemDetail(itemId);
  const { addItemToCartList, cart } = useContext(GlobalContext);
  const [isAdded, setIsAdded] = useState(
    cart.findIndex((c) => c.id === itemId) > -1
  );
  
  const [quantity,setQuantity] = useState(1);

  function handleSelectChange(event) {
    item.quantity = +event.target.value;
    setQuantity(event.target.value)
  }
  return (
    <div className="item-detail-container">
      <Link to="/"> &#8592; Back</Link>
      <div className="item-detail">
        <div className="item-detail-image">
          <img src={item.image} alt={"Item image"} />
        </div>
        <div className="item-detail-info">
          <div className="item-brand" style={{ margin: "0px 10px" }}>
            {item.brand}
          </div>
          <div className="item-name">{item.title}</div>
          <div className="item-price">{item.price}</div>

          <select  value={quantity} className="item-size" onChange={handleSelectChange}>
            <option value={1}> 1</option>
            <option value={2}> 2</option>
            <option value={3}> 3</option>
            <option value={4}> 4</option>
          </select>
          <button
            className="item-btn"
            disabled={isAdded}
            onClick={() => {
              addItemToCartList(item);
              setIsAdded(true);
            }}
          >
            {isAdded ? <Link to="/cart">Go to Cart</Link> : "Add To bag"}
          </button>
          <p className="item-description">
           {item.spec}
          </p>
        </div>
      </div>
    </div>
  );
}

export default ItemDetail;