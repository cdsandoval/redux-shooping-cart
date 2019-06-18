import React from "react";
import Product from "./product";
import { useTodo } from "../selectors";

function ProductList() {
  const products = useTodo();
  return (
    <section>
      {products.map(prod => (
        <article key={new Date().toLocaleString()}>
          <Product {...prod} />
        </article>
      ))}
    </section>
  );
}

export default ProductList;
