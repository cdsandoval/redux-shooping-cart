/** @jsx jsx */
import React from "react";
import { jsx } from "@emotion/core";
import { useAdd } from "../action-hook";

function Product({ product }) {
  const add = useAdd();

  function onClick() {
    add(product.id);
  }

  return (
    <article css={{ display: "flex", justifyContent: "space-around" }}>
      <span css={{ width: "40%" }}>{product.name}</span>
      <span css={{ width: "20%" }}>{product.brand}</span>
      <span css={{ width: "20%" }}>{product.price}</span>
      <span css={{ width: "20%", textAlign: "center" }}>{product.stock}</span>
      <button onClick={onClick}>ADD</button>
    </article>
  );
}

export default Product;
