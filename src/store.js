import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./features/user/userSlice";
import { cartReducer } from "./features/cart/cartSlice";
import { menuReducer } from "./features/menu/menuSlice";

export const store = configureStore({
  reducer: { user: userReducer, cart: cartReducer, menu: menuReducer },
});