import {React,useEffect,useState} from "react";
import { toast } from 'react-toastify';
import ItemList from "../itemList/ItemList";
import ItemListBrand from "../itemListBrand/ItemListBrand";
import ImageCarousel, { ImageType } from "../imageCarousal.js";
import "./HomePage.css";


function HomePage() {
  const [images, setImages] = useState();
  const [products, setProducts] = useState([]);
  const [brandData, setBrandData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/latestProduct')
    .then(response => response.json())
    .then(data => 
      {
        setImages(
          data.map((latestPro) => (
           
            {
             id: latestPro.id,
              url: `${latestPro.image}`
            }
              ))
        );
      })
    .catch(error => toast("error","Something went wrong. Please try again later"));

    fetch('http://localhost:3001/items')
    .then(response => response.json())
    .then(data => 
      {
        setProducts(data.slice(0, 10));

   
    let resArr = [];
    data.filter(function(item){
      
      let i = resArr.findIndex(x => x.brand == item.brand);
      if(i <= -1){
        resArr.push({id: item.id, brand: item.brand, brandLogo: item.brandLogo});
      }
      return null;
    });
setBrandData(resArr)
      })
    .catch(error => toast("error","Something went wrong. Please try again later"));
   
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