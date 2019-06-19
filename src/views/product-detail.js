/** @jsx jsx */
import React from "react";
import { jsx } from "@emotion/core";
import image from "../data/image.jpg";

function ProductDetail({ product }) {
  const container = {
    display: "flex"
  };
  const labelStyle = { fontWeight: "bold" };
  return (
    <>
      <div css={container}>
        <img src={image} alt="Image" />
        <div>
          <h3>Name: {product.name}</h3>
          <h3>Brand: {product.brand}</h3>
          <h3>Price: {product.price}</h3>
          <h3>Stock: {product.stock}</h3>
        </div>
      </div>
      <div>
        <label css={labelStyle}>Quantity</label>
        <input type="number" value="1" />
        <button>Add cart</button>
      </div>
    </>
  );
}

export default ProductDetail;
