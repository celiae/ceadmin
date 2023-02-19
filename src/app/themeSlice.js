import { createSlice } from "@reduxjs/toolkit";

export const themeSlice = createSlice({
  name: "theme",
  initialState: {
    mode: localStorage.getItem("mode") ? localStorage.getItem("mode") : "light",
  },
  reducers: {
    setMode: (state, action) => {
      state.mode = action.payload;
      localStorage.setItem("mode", action.payload);
    },
  },
});

export const { setMode } = themeSlice.actions;

export default themeSlice.reducer;

export const selectAll = (state) => state.theme;
