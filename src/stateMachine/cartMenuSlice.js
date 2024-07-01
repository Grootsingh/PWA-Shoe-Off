import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: false,
};

const cartMenu = createSlice({
  name: "cartMenu",
  initialState,
  reducers: {
    openCart(state) {
      state.value = true;
    },
    closeCart(state) {
      state.value = false;
    },
  },
});

export const { openCart, closeCart } = cartMenu.actions;
export default cartMenu.reducer;
