import { createSlice } from "@reduxjs/toolkit";

export const snackbarSlice = createSlice({
  name: "snackbar",
  initialState: {
    msg: "test",
    open: false,
  },
  reducers: {
    setMsg: (state, action) => {
      state.msg = action.payload;
    },
    setOpen: (state, action) => {
      state.open = action.payload;
    },
  },
});

export const { setMsg, setOpen } = snackbarSlice.actions;

export default snackbarSlice.reducer;

export const selectAll = (state) => state.snackbar;
