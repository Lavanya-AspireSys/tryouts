import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { toast } from 'react-toastify';
import { GlobalContext } from "../../context/GlobalState";
import "./ItemDetail.css";


function ItemDetail() {
  const [itemsData, setItemsData] = useState([]);
  const params = useParams();
  const itemId = parseInt(params?.id);
  const [quantity,setQuantity] = useState(1);
  const { addItemToCartList, cart } = useContext(GlobalContext);
  const [isAdded, setIsAdded] = useState(
    cart.findIndex((c) => c.id === itemId) > -1
  );
    useEffect(() => {
      fetch('http://localhost:3001/items')
        .then(response => response.json())
        .then(data => 
          {
            let getItemDetail = (id) => data.filter((item) => item.id === id)[0];

            
            let item = !!itemId && getItemDetail(itemId);
           setItemsData(item)
           item.quantity = 1;

          })
        .catch(error => toast("error","Something went wrong. Please try again later."));
    }, []);
 

  function handleSelectChange(event) {
    itemsData.quantity = +event.target.value;
    setQuantity(event.target.value)
  }
  return (
    <div className="item-detail-container">
      <Link to="/"> &#8592; Back</Link>
      <div className="item-detail">
        <div className="item-detail-image">
          <img src={itemsData.image} alt={"Item image"} />
        </div>
        <div className="item-detail-info">
          <div className="item-brand" style={{ margin: "0px 10px" }}>
            {itemsData.brand}
          </div>
          <div className="item-name">{itemsData.title}</div>
          <div className="item-price">{itemsData.price}</div>

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
              addItemToCartList(itemsData);
              setIsAdded(true);
            }}
          >
            {isAdded ? <Link to="/cart">Go to Cart</Link> : "Add To bag"}
          </button>
          <p className="item-description">
           {itemsData.spec}
          </p>
        </div>
      </div>
    </div>
  );
}

export default ItemDetail;