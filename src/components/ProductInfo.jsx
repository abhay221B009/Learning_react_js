import React from "react";

const ProductInfo = () => {
  const product = {
    name: "Product 1",
    price: "10.99",
    Availability: "in stock",
  };
  return (
    <div>
      Product Info : <br />
      Name: {product.name} <br />
      Price: {product.price} <br />
      Availability: {product.Availability}
    </div>
  );
};

export default ProductInfo;
