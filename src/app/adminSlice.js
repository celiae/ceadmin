import { createSlice } from "@reduxjs/toolkit";

export const adminSlice = createSlice({
  name: "admin",
  initialState: {
    name: "",
    createDate: "2000-01-01",
  },
  reducers: {
    setName: (state, action) => {
      state.name = action.payload;
    },
    setCreateDate: (state, action) => {
      state.createDate = action.payload;
    },
  },
});

export const { setName, setCreateDate } = adminSlice.actions;

export default adminSlice.reducer;

export const selectAll = (state) => state.admin;
