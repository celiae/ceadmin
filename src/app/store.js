import { configureStore } from "@reduxjs/toolkit";
import alertReducer from "./alertSlice";
import userReducer from "./userSlice";
import snackbarReducer from "./snackbarSlice";
import goodReducer from "./goodSlice";
import formDialogReducer from "./formDialogSlice";
import themeReducer from "./themeSlice";
import adminReducer from "./adminSlice";

export default configureStore({
  reducer: {
    admin: adminReducer,
    user: userReducer,
    good: goodReducer,
    theme: themeReducer,
    alert: alertReducer,
    snackbar: snackbarReducer,
    formDialog: formDialogReducer,
  },
});
