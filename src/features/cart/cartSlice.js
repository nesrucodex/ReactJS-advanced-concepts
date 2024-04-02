import { createSlice } from "@reduxjs/toolkit";

const initialState = { carts: [] };

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addCart: (state, action) => {
      // payload => cartItem
      state.carts.push({ ...action.payload, quantity: 1 });
    },

    removeCart: (state, action) => {
      // payload => cart-id
      state.carts = state.carts.filter((cart) => cart.id !== action.payload);
    },
    increaseCartQuantity: (state, action) => {
      // payload => cart-id
      const cart = state.carts.find((cart) => cart.id === action.payload);

      if (!cart) return;

      cart.quantity++;
    },
    decreaseCartQuantity: (state, action) => {
      // payload => cart-id
      const cart = state.carts.find((cart) => cart.id === action.payload);

      if (!cart) return;

      cart.quantity--;

      if (cart.quantity === 0) cartSlice.caseReducers.removeCart(state, action);
    },
    clearCarts: (state) => {
      // payload => cart-id
      state.carts = [];
    },
  },
});

export const {
  addCart,
  removeCart,
  increaseCartQuantity,
  decreaseCartQuantity,
  clearCarts,
} = cartSlice.actions;

export const getCarts = (state) => state.cart.carts;

export const cartReducer = cartSlice.reducer;
