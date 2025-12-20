import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./slices/cartSlices.js";

const store = configureStore({
  reducer: {
    cart: cartSlice
  }
});

console.log("on create store : ", store.getState());

store.subscribe(() => {
  console.log("store change : ", store.getState());
});

export default store;
