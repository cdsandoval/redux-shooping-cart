import React from "react";
import { useOnIncrement } from "../action-hooks";

function Product(id, name, price) {
  const onIncrement = useOnIncrement();

  function handleClick() {
    onIncrement(id);
  }

  return (
    <li>
      <h3>{name}</h3>
      <p>Price: {price}</p>
      <p>Quantity: {quantity}</p>
      <button onClick={handleClick}>Add</button>
    </li>
  );
}

export default Product;
