import React from "react";
import { useSelector, shallowEqual } from "react-redux";

function useProducts() {
  return useSelector(state => Object.values(state.products), shallowEqual);
}

function useCartLength() {
  return useSelector(state => Object.values(state.cart).length, shallowEqual);
}

function useCart() {
  return useSelector(state => Object.values(state.cart), shallowEqual);
}

function useProductfromCatalog(id) {
  return useSelector(state => {
    if (state.products.hasOwnProperty(id)) return state.products[id];
    return null;
  }, shallowEqual);
}

function useProductfromCart(id) {
  return useSelector(state => {
    if (state.cart.hasOwnProperty(id)) return state.cart[id];
    return null;
  }, shallowEqual);
}

function useMixCart(cartArray) {
  return useSelector(state => {
    return cartArray.map(product => {
      return { ...product, ...state.products[product.id] };
    });
  }, shallowEqual);
}

export {
  useProducts,
  useCartLength,
  useCart,
  useProductfromCart,
  useProductfromCatalog,
  useMixCart
};
