import React from 'react';
import CartItem from '../components/cart-item';

function Cart() {
  const list = [];
  let finalTotal = 0;
  const emptyMessage = <span>You don't have products added</span>;
  return (
    <div>
      <h1>List articles</h1>
      {list.length === 0 ? (
        emptyMessage
      ) : (
        <ul>
          <li />
          {list.map(article => {
            finalTotal += article.price * article.quantity;
            return <CartItem />;
          })}
        </ul>
      )}
      <hr />
      <section>
        <span>Total amount:</span>
        <span>{finalTotal}</span>
      </section>
    </div>
  );
}

export default Cart;
