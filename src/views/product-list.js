import React from 'react';
import Product from '../components/product';
import { listProduct } from '../data/product-fake';

function ProductList() {
  return (
    <>
      {listProduct.map(Product => (
        <Product productName={Product.name} price={Product.price} />
      ))}
    </>
  );
}

export default ProductList;
