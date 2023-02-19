import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    username: localStorage.getItem("username"),
    login: localStorage.getItem("login"),
  },
  reducers: {
    setUsername: (state, action) => {
      state.username = action.payload;
      localStorage.setItem("username", action.payload);
    },
    setLogin: (state, action) => {
      state.login = action.payload;
      localStorage.setItem("login", action.payload);
    },
  },
});

export const { setUsername, setLogin } = userSlice.actions;

export default userSlice.reducer;

export const selectAll = (state) => state.user;
