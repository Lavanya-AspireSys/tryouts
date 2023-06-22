import React,{useState,useEffect} from "react";
import { Link, useParams } from "react-router-dom";
import { toast } from 'react-toastify';
import "./ItemListByBrand.css";

function ItemListByBrand() {
  const [itemsData, setItemsData] = useState([]);
  const params = useParams();

  useEffect(() => {
    fetch('http://localhost:3001/users')
      .then(response => response.json())
      .then(data => 
        {
  const itemId = (params?.brand);
  let getItemDetail = data.filter((item) => item.brand === itemId)

  setItemsData(getItemDetail);
        })
      .catch(error => toast("error","Something went wrong. Please try again later."));
  }, []);

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