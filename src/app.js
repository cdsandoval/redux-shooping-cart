/**@jsx jsx */
import React from "react";
import { jsx, Global } from "@emotion/core";
import CartView from "./views/cart";
import ProductList from "./views/product-list";
import { Router } from "@reach/router";

function App() {
  return (
    <>
      <Global
        styles={{
          body: {
            margin: 0,
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }
        }}
      />
      <Router>
        <ProductList path="/" />
        <CartView path="cart" />
      </Router>
    </>
  );
}

export default App;
