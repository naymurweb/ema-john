import React, { useEffect, useState } from "react";
import Product from "../Product/Product";
import "./Products.css";

const Products = () => {
    const [products,setProducts]=useState([])
    useEffect(()=>{
        fetch('products.json')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[])
  return (
    <div className="products">
      {
        products.map(product=><Product product={product} key={product.id}></Product>)
      }
    </div>
  );
};

export default Products;
