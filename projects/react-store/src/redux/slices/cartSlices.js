import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    data: JSON.parse(localStorage.getItem("cart")) || []
  },
  reducers: {
    addToCart: (state, action) => {
      const existItemInCart = state.data.find(
        (item) => item.id === action.payload.id
      );
      if (existItemInCart) {
        existItemInCart.qty += action.payload.qty;
      } else {
        state.data.push(action.payload);
      }
    },
    deleteItem: (state, action) => {
      const deleteItem = state.data.filter(
        (item) => item.id !== action.payload
      );
      state.data = deleteItem;
    }
  }
});

export const { addToCart, deleteItem } = cartSlice.actions;
export default cartSlice.reducer;
