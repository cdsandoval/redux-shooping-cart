/** @jsx jsx */
import { jsx } from "@emotion/core";
import React from "react";
import Product from "./product";
import { useTodos,useCart } from "../selectors";

function ProductList() {
  const products = useTodos();
  const cart = useCart();
  return (
    <section >
      {products.map(prod => (
        <article >
          <ul css={{listStyle: "none", margin: 0,padding: 0}}>
            <Product {...prod} />
          </ul>
        </article>
      ))}
      {cart.map(value=>(
          <span>{value}</span>
        ))
      }
    </section>
  );
}

export default ProductList;
