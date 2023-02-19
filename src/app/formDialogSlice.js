import { createSlice } from "@reduxjs/toolkit";

export const formDialogSlice = createSlice({
  name: "formDialog",
  initialState: {
    type: "info",
    title: "",
    label: "",
    inputType: "",
    msg: "",
    buttonMsg: "",
    open: false,
  },
  reducers: {
    setType: (state, action) => {
      state.type = action.payload;
    },
    setTitle: (state, action) => {
      state.title = action.payload;
    },
    setLabel: (state, action) => {
      state.label = action.payload;
    },
    setInputType: (state, action) => {
      state.inputType = action.payload;
    },
    setMsg: (state, action) => {
      state.msg = action.payload;
    },
    setButtonMsg: (state, action) => {
      state.buttonMsg = action.payload;
    },
    setOpen: (state, action) => {
      state.open = action.payload;
    },
  },
});

export const {
  setType,
  setTitle,
  setLabel,
  setInputType,
  setMsg,
  setButtonMsg,
  setOpen,
} = formDialogSlice.actions;

export default formDialogSlice.reducer;

export const selectAll = (state) => state.formDialog;
