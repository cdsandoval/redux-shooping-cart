function onIncrement(id) {
  return { type: "ADD", payload: { id } };
}

export { onIncrement };
