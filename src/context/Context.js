import React, { createContext, useContext, useReducer } from "react";
import { faker } from "@faker-js/faker";
import { cartReducer, productReducer } from "./Reducers";

const Cart = createContext();

const Context = ({ children }) => {
  const products = [...Array(20)].map(() => ({
    id: faker.datatype.uuid(),
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    image: faker.image.abstract(null, null, true),
    inStock: faker.random.numeric(1, { allowLeadingZeros: true }),
    fastDelivery: faker.datatype.boolean(),
    ratings: faker.random.numeric(1, {
      bannedDigits: ["0", "6", "7", "8", "9"],
    }),
  }));

  const [state, dispatch] = useReducer(cartReducer, {
    products: products,
    cart: [],
  });

  const [productState, Productdispatch] = useReducer(productReducer, {
    byStock: false,
    byFastDelivery: false,
    byRating: 0,
    searchQuery: "",
  });

  //   console.log(products);
  return (
    <Cart.Provider value={{ state, dispatch, productState, Productdispatch }}>
      {children}
    </Cart.Provider>
  );
};

export const CartState = () => {
  return useContext(Cart);
};

export default Context;
