import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  orders: [],
};

// order => {id: "", carts: [], phone: "", position: {lat: "", long: ""}, address: ""}

const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    addOrder: (state, action) => {
      // payload => order =>  {id: "", carts: [], phone: "", position?: {lat: "", long: ""}, address: ""}
      state.orders.push(action.payload);
    },
  },
});

export const { addOrder } = orderSlice.actions;
export const orderReducer = orderSlice.reducer;
