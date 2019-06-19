/** @jsx jsx */
import React from "react";
import { useOnIncrement } from "../action-hooks";
import { jsx } from "@emotion/core";

function Product({id, name, price}) {
  const onIncrement = useOnIncrement();

  function handleClick() {
    onIncrement(id);
  }

  return (
    <li key={id} css={{display: "flex", justifyContent: "space-around", marginBottom: "20px"}}>
      <span css={{width:"20%"}}>{name}</span>
      <span css={{width:"20%"}}>Price: {price}</span>
      <span css={{width:"20%"}}>Id: {id}</span>
      <button onClick={handleClick}>Add</button>
    </li>
  );
}

export default Product;
