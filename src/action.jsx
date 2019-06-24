function reset() {
  return { type: "RESET" };
}

function addCart(id) {
  return {
    type: "ADD_PRODUCT",
    payload: {
      id,
      quantity: 1
    }
  };
}

function removeCart(id) {
  return {
    type: "REMOVE_PRODUCT",
    payload: {
      id
    }
  };
}

function increaseQuantity(id) {
  return {
    type: "INCREASE_PRODUCT",
    payload: {
      id
    }
  };
}

function decreaseQuantity(id) {
  return {
    type: "DECREASE_PRODUCT",
    payload: {
      id
    }
  };
}

export { reset, addCart, removeCart, increaseQuantity, decreaseQuantity };
