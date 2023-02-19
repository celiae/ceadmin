import { createSlice } from "@reduxjs/toolkit";

export const alertSlice = createSlice({
  name: "alert",
  initialState: {
    type: "info", // error warning info success
    msg: "test",
    open: false,
  },
  reducers: {
    setType: (state, action) => {
      state.type = action.payload;
    },
    setMsg: (state, action) => {
      state.msg = action.payload;
    },
    setOpen: (state, action) => {
      state.open = action.payload;
    },
  },
});

export const { setType, setMsg, setOpen } = alertSlice.actions;

export default alertSlice.reducer;

export const selectAll = (state) => state.alert;
