import {React,useEffect,useState} from "react";
import items from "../../mockData/items.json";
import latestProduct from "../../mockData/latestProduct.json";
import ItemList from "../itemList/ItemList";
import ItemListBrand from "../itemListBrand/ItemListBrand";
import ImageCarousel, { ImageType } from "../imageCarousal.js";
import "./HomePage.css";


function HomePage() {
  const [images, setImages] = useState();
  const [products, setProducts] = useState([]);
  const [brandData, setBrandData] = useState([]);

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
    let resArr = [];
    items.filter(function(item){
      
      let i = resArr.findIndex(x => x.brand == item.brand);
      if(i <= -1){
        resArr.push({id: item.id, brand: item.brand, brandLogo: item.brandLogo});
      }
      return null;
    });
setBrandData(resArr)
  }, []);
  return (
    <section> 
  <div className="">
      <ImageCarousel images={images} />
    </div>
    <h3>Biggest offer of the season</h3>
    <ItemList items={products} />
    <h3>Shop by brand</h3>

   <ItemListBrand items={brandData} />
    </section>
  );
}

export default HomePage;