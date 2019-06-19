import React from "react";
import { useSelector, shallowEqual } from "react-redux";

function useTodos() {
  return useSelector(state => Object.values(state.products), shallowEqual);
}

function useCart(){
  return useSelector(state => Object.values(state.cart),shallowEqual);
}

export { useTodos,useCart };
