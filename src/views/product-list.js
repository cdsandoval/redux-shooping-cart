import React from 'react';
import Product from '../components/product';
import { listProduct } from '../data/product-fake';

function ProductList() {
  return (
    <>
      {listProduct.map(p => (
        <Product productName={p.name} price={p.price} />
      ))}
    </>
  );
}

export default ProductList;
