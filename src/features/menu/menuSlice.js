import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = { menus: [] };

const menuSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {
    addMenus: (state, action) => {
      // payload => [{}]
      if (state.menus.length >= 10) return;
      state.menus.push(...action.payload);
    },
  },
});

export const { addMenus } = menuSlice.actions;

export const fetchMenu = createAsyncThunk("menu/fetch", async () => {});

export const menuReducer = menuSlice.reducer;
