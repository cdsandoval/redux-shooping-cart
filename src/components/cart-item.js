/**@jsx jsx */
import React from "react";
import { jsx } from "@emotion/core";

const cart = [
  {
    id: 1,
    name: "Polo con cuello en V Rojo",
    brand: "Nike",
    price: 5300,
    stock: 15,
    quantity: 0,
    total: 0
  },
  {
    id: 2,
    name: "Pantalon Negro",
    brand: "Pioneer",
    price: 6580,
    stock: 10,
    quantity: 0,
    total: 0
  },
  {
    id: 3,
    name: "Casaca de cuero color negro",
    brand: "Test",
    price: 25300,
    stock: 2,
    quantity: 0,
    total: 0
  },
  {
    id: 4,
    name: "Camisa de Seda con rallas azules",
    brand: "Billabong",
    price: 5850,
    stock: 1,
    quantity: 0,
    total: 0
  },
  {
    id: 5,
    name: "Chalina England rayas gris",
    brand: "Bilbard",
    price: 1000,
    stock: 10,
    quantity: 0,
    total: 0
  },
  {
    id: 6,
    name: "Polo para gimnasio oscuro",
    brand: "Adidas",
    price: 1700,
    stock: 15,
    quantity: 0,
    total: 0
  },
  {
    id: 7,
    name: "Pelota oficial de Copa America 5gr",
    brand: "Adidas",
    price: 3700,
    stock: 15,
    quantity: 0,
    total: 0
  }
];

function CartItem() {
  const [value, setValue] = React.useState(cart);

  function handleChange(e, id) {
    console.log(e.currentTarget.value);
  }

  return (
    <ul
      css={{
        listStyle: "none",
        padding: 0,
        margin: 0
      }}
    >
      {value.map(element => {
        return (
          <li
            key={element.id}
            css={{
              marginBottom: "20px",
              display: "flex",
              justifyContent: "space-between"
            }}
          >
            <button>X</button>
            <span css={{ width: "30%" }}>{element.name}</span>
            <span css={{ width: "20%" }}>{element.price}</span>
            <input
              type="number"
              max={element.stock}
              min="0"
              onChange={e => handleChange(element.id)}
              css={{ width: "10%" }}
            />
            <span>{element.total}</span>
          </li>
        );
      })}
    </ul>
  );
}

export default CartItem;
