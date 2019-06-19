import React from "react";
import ReactDOM from "react-dom";
import ProductDetail from "./views/product-detail";
import { listProduct } from "./data/product-fake";

const product = listProduct[0];
console.log(product);

ReactDOM.render(
  <ProductDetail product={product} />,
  document.getElementById("root")
);
