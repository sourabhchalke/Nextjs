"use client";

import { useEffect, useState } from "react";

// Client Side API rendering
const ClientProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("https://dummyjson.com/products");
        console.log("Response : ", res);
        const jsonData = await res.json();
        console.log(jsonData);
        setProducts(jsonData.products);
      } catch (error) {
        console.log("Error :", error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    console.log("Products : ", products);
  }, [products]);

  return (
    <div>
      <h2>Products : </h2>
      {products.map((items) => (
       <div key={items.id}>
            <h3>Title : {items.title}</h3>
            <img src={items.images} width={"200px"}/>
            <p>Price : {items.price} , Rating : {items.rating} </p>
       </div>
      ))}
    </div>
  );
};
export default ClientProducts;
