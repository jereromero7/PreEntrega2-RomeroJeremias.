import React, { useState, useEffect } from "react";
import ProductCard from "./productcard/Item";
import { ItemList } from "../../assets/ItemList";
import style from "./ItemListContainer.module.css";

export default function ItemListContainer({ ItemList }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const get = new Promise((resolve, reject) => {
      setTimeout(() => resolve(data), 2000);
    }); 

    get.then((data) => {
      setProducts(data);
    });

  return (
    <main className="mt-4">
      <ItemList products= {products} />
      </main>

      {products.map((product) => (
        <ProductCard 
          key={product.id}
          id={product.id}
          img={product.img}
          isFavorite={product.isFavorite}
          isNewProduct={product.isNewProduct}
          isFreeShipping={product.isFreeShipping}
          title={product.title}
          price={product.price}
          fees={product.fees}
        />
      ))}
    ItemList</main>
  );

}
