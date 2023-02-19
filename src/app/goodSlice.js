import { createSlice } from "@reduxjs/toolkit";

export const goodSlice = createSlice({
  name: "good",
  initialState: {
    name: "",
    date: "2000-01-01",
    price: 0,
    discount: 100,
  },
  reducers: {
    setName: (state, action) => {
      state.name = action.payload;
    },
    setDate: (state, action) => {
      state.date = action.payload;
    },
    setPrice: (state, action) => {
      state.price = action.payload;
    },
    setDiscount: (state, action) => {
      state.discount = action.payload;
    },
  },
});

export const { setName, setDate, setPrice, setDiscount } = goodSlice.actions;

export default goodSlice.reducer;

export const selectAll = (state) => state.good;
