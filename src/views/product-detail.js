import React from "react";

function ProductDetail() {
  const product = {
    name: "yogurt",
    description: "litros",
    price: 5,
    quantity: 10
  };
  return (
    <>
      <h1>product Detail</h1>
      <h1>{product.name}</h1>
      <h1>{product.description}</h1>
      <h1>{product.price}</h1>
      <h1>{product.quantity}</h1>
    </>
  );
}

export default ProductDetail;
