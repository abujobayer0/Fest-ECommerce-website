import React, { useEffect, useState } from "react";
import SingleProduct from "./SingleProduct";

const Products = () => {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    fetch("Products.json")
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);
  return (
    <div className="grid md:grid-cols-3  place-content-center place-items-center grid-cols-1  lg:grid-cols-4 gap-4 px-12">
      {product.map((product) => (
        <SingleProduct product={product} />
      ))}
    </div>
  );
};

export default Products;
