import React from "react";
import { useSelector, shallowEqual } from "react-redux";

function useTodos() {
  return useSelector(state => Object.values(state.products), shallowEqual);
}

export { useTodos };
