const initialState = {
  cart: {},
  products: {
    1: {
      id: 1,
      name: "Polo con cuello en V Rojo",
      brand: "Nike",
      price: 5300
    },
    2: {
      id: 2,
      name: "Pantalon Negro",
      brand: "Pioneer",
      price: 6580
    },
    3: {
      id: 3,
      name: "Casaca de cuero color negro",
      brand: "Test",
      price: 25300
    },
    4: {
      id: 4,
      name: "Camisa de Seda Azul",
      brand: "Billabong",
      price: 5850
    },
    5: {
      id: 5,
      name: "Chalina England rayas gris",
      brand: "Bilbard",
      price: 1000
    },
    6: {
      id: 6,
      name: "Polo para gimnasio oscuro",
      brand: "Adidas",
      price: 1700
    },
    7: {
      id: 7,
      name: "Pelota oficial de Copa America",
      brand: "Adidas",
      price: 3700
    }
  }
};

function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case "ADD_PRODUCT": {
      return {
        ...state,
        cart: {
          ...state.cart,
          [action.payload.id]: action.payload
        }
      };
    }
    case "REMOVE_PRODUCT": {
      const updatedCart = { ...state.cart };
      delete updatedCart[action.payload.id];

      return {
        ...state,
        cart: updatedCart
      };
    }

    case "INCREASE_PRODUCT": {
      return {
        ...state,
        cart: {
          ...state.cart,
          [action.payload.id]: {
            ...state.cart[action.payload.id],
            quantity: state.cart[action.payload.id].quantity + 1
          }
        }
      };
    }

    case "DECREASE_PRODUCT": {
      return {
        ...state,
        cart: {
          ...state.cart,
          [action.payload.id]: {
            ...state.cart[action.payload.id],
            quantity: state.cart[action.payload.id].quantity - 1
          }
        }
      };
    }

    case "RESET": {
      return initialState;
    }
    default: {
      return state;
    }
  }
}

export default reducer;
