import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],
  totalItem: 0,
  totalPrice: 0,
};

const cart = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const ShoeInCartIndex = state.value.findIndex(
        (eachShoeObj) => eachShoeObj.slug === action.payload.slug
      );

      if (ShoeInCartIndex > -1) {
        state.value[ShoeInCartIndex].inTheCartCount++;
      } else {
        state.value.push({ ...action.payload, inTheCartCount: 1 });
      }
      // update TotalItem in the cart
      state.totalItem = state.value.reduce((accum, curr) => {
        return accum + curr.inTheCartCount;
      }, 0);
      // update price of all the items in the cart
      state.totalPrice = state.value.reduce((accum, curr) => {
        const price = curr.salePrice ? curr.salePrice : curr.price;
        return accum + curr.inTheCartCount * price;
      }, 0);
    },
    removeFromCart(state, action) {
      const ShoeInCartIndex = state.value.findIndex(
        (eachShoeObj) => eachShoeObj.slug === action.payload.slug
      );

      if (
        ShoeInCartIndex > -1 &&
        state.value[ShoeInCartIndex].inTheCartCount > 1
      ) {
        state.value[ShoeInCartIndex].inTheCartCount--;
      } else {
        state.value = state.value.filter(
          (eachShoeObj) => eachShoeObj.slug !== action.payload.slug
        );
      }

      // update TotalItem in the cart
      state.totalItem = state.value.reduce((accum, curr) => {
        return accum + curr.inTheCartCount;
      }, 0);

      // update price of all the items in the cart
      state.totalPrice = state.value.reduce((accum, curr) => {
        const price = curr.salePrice ? curr.salePrice : curr.price;
        return accum + curr.inTheCartCount * price;
      }, 0);
    },
    clearCart() {
      return initialState;
    },
    resetCart(state, action) {
      return action.payload;
    },
  },
});

export const { addToCart, removeFromCart, clearCart, resetCart } = cart.actions;
// this is childReducer of todos

export default cart;
