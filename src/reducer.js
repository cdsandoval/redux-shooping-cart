const initialState = {
  products: [
    { id: 1, name: "Reloj", price: 2 },
    { id: 2, name: "Zapato", price: 4 },
    { id: 3, name: "Galleta", price: 6 },
    { id: 4, name: "Celular", price: 8 }
  ],
  cart: []
};

function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case "ADD": {
      return {
        ...state,
        cart: {
          ...state.cart,
          [action.payload.id]: action.payload
        }
      };
    }
    default: {
      return state;
    }
  }
}

export default reducer;
