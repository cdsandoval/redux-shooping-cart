import React from "react";
import CartItem from "../components/cart-item";
import { Link } from "@reach/router";
import { useCart, useMixCart } from "../selector";

function Cart() {
  const cart = useCart();
  const mixProducts = useMixCart(cart);
  const total = mixProducts.reduce((acc, value) => {
    return acc + value.price * value.quantity;
  }, 0);

  console.log(total);
  console.log(mixProducts);
  return (
    <div>
      <h1>List articles</h1>

      <ul>
        {mixProducts.map(article => {
          return <CartItem cart={article} />;
        })}
      </ul>
      <hr />
      <section>
        <span>Total amount: {total}</span>
      </section>
      <Link to="/">
        <button>Home</button>
      </Link>
    </div>
  );
}

export default Cart;
