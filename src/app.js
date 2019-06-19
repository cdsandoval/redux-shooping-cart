/**@jsx jsx */
import React from "react";
import { jsx, Global } from "react";
import CartView from "./views/cart";

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
      <CartView />
    </>
  );
}

export default App;
