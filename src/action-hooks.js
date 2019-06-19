import React from "react";
import { useDispatch } from "react-redux";
import { onIncrement } from "./action";

export function useOnIncrement() {
  const dispatch = useDispatch();
  return React.useCallback(id => dispatch(onIncrement(id)), [dispatch]);
}
