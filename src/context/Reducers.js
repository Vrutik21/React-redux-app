export const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return {
        ...state,
        cart: [{ ...action.payload, qty: 1 }, ...state.cart],
      };
    case "REMOVE":
      return {
        ...state,
        cart: state.cart.filter((c) => c.id !== action.payload.id),
      };
    case "CHANGE":
      return {
        ...state,
        cart: state.cart.filter((c) =>
          c.id === action.payload.id ? (c.qty = action.payload.qty) : c.qty
        ),
      };

    default:
      return state;
  }
};

export const productReducer = (state, action) => {
  switch (action.type) {
    case "SORT_PRICE":
      return {
        ...state,
        sort: action.payload,
      };
    case "FILTER_STOCK":
      return {
        ...state,
        byStock: !state.byStock,
      };
    case "FILTER_DELIVERY":
      return {
        ...state,
        byFastDelivery: !state.byFastDelivery,
      };
    case "FILTER_RATING":
      return {
        ...state,
        byRating: action.payload,
      };
    case "SEARCH":
      return {
        ...state,
        searchQuery: action.payload,
      };
    case "CLEAR":
      return {
        byStock: false,
        byFastDelivery: false,
        byRating: 0,
        searchQuery: "",
      };

    default:
      return state;
  }
};
