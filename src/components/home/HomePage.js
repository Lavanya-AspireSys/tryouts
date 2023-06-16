import {React,useEffect,useState} from "react";
import items from "../../mockData/items.json";
import latestProduct from "../../mockData/latestProduct.json";
import ItemList from "../itemList/ItemList";
import ImageCarousel, { ImageType } from "../imageCarousal.js";
import "./HomePage.css";


function HomePage() {
  const [images, setImages] = useState();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(items.slice(0, 10));

    setImages(
      latestProduct.map((latestPro) => (
       
        {
         id: latestPro.id,
          url: `${latestPro.image}`
        }
          ))
    );
  }, []);
  return (
    <section>
  <div className="">
      <ImageCarousel images={images} />
    </div>
      <ItemList items={products} />
    </section>
  );
}

export default HomePage;