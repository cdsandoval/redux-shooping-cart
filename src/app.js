/**@jsx jsx */
import React from "react";
import { jsx, Global } from "@emotion/core";
// import CartView from './views/cart';
import ProductList from "./views/product-list";

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
      {/* <CartView /> */}
      <ProductList />
    </>
  );
}

export default App;
