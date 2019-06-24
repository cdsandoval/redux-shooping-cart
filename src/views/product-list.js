/** @jsx jsx */
import React from "react";
import Product from "../components/product";
import { Link } from "@reach/router";
import { useProducts, useCartLength } from "../selector";
import { jsx } from "@emotion/core";

function ProductList() {
  const products = useProducts();
  const cartList = useCartLength();

  return (
    <section css={{ width: "800px", marginTop: "50px" }}>
      <p>{cartList}</p>
      {products.map(product => (
        <Product product={product} key={product.id} />
      ))}
      <Link to="cart">
        <button>CART</button>
      </Link>
    </section>
  );
}

export default ProductList;
