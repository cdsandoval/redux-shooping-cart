/**@jsx jsx */
import React from "react";
import { jsx } from "@emotion/core";
import {
  useRemoveCart,
  useIncreaseQuantity,
  useDecreaseQuantity
} from "../action-hook";
import { useProductfromCart } from "../selector";

function CartItem({ cart }) {
  const removeCart = useRemoveCart();
  const increaseQuantity = useIncreaseQuantity();
  const decreaseQuantity = useDecreaseQuantity();
  const product = useProductfromCart(cart.id);

  function handleRemove() {
    removeCart(cart.id);
  }

  function handleIncrease() {
    increaseQuantity(cart.id);
  }

  function handleDecrease() {
    if (product.quantity === 1) {
      removeCart(cart.id);
    } else {
      decreaseQuantity(cart.id);
    }
  }

  return (
    <ul
      css={{
        listStyle: "none",
        padding: 0,
        margin: 0
      }}
    >
      <li
        key={cart.id}
        css={{
          marginBottom: "20px",
          display: "flex",
          justifyContent: "space-between"
        }}
      >
        <span css={{ width: "30%" }}>{cart.name}</span>
        <span css={{ width: "20%" }}>{cart.price}</span>
        <span>{cart.quantity}</span>
        <button onClick={handleDecrease}>-</button>
        <button onClick={handleIncrease}>+</button>
        <button onClick={handleRemove}>Delete</button>
        {/* <span>{element.}</span> */}
      </li>
    </ul>
  );
}

export default CartItem;
