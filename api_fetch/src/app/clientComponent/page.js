"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

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
      <h2>Client Component</h2>
      <h2>Products : </h2>
      {products.map((items) => (
        <div key={items.id}>
          <h3>Title : {items.title}</h3>
          <Image
            src={items.images[0]}
            alt="Product-Image"
            width={300}
            height={300}
          />
          <p>
            Price : {items.price} , Rating : {items.rating}{" "}
          </p>
        </div>
      ))}
    </div>
  );
};
export default ClientProducts;
