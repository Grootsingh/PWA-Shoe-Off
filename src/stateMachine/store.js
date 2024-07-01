import cartMenu from "./cartMenuSlice";
import cart from "./cartSlice";
import { configureStore, createListenerMiddleware } from "@reduxjs/toolkit";
import { openDB } from "idb";
// Create the middleware instance and methods
const listenerMiddleware = createListenerMiddleware();

listenerMiddleware.startListening({
  matcher: (action) => action.type.startsWith(cart.name),
  effect: async (action, listenerApi) => {
    const state = listenerApi.getState();
    const idb = await openDB("shoe-storage", 1, {
      async upgrade(db) {
        await db.createObjectStore("cart");
      },
    });

    await idb.put("cart", state.cart, "cartState");
  },
});

// state management issue
export const store = configureStore({
  reducer: { cart: cart.reducer, cartMenu },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().prepend(listenerMiddleware.middleware),
});
