import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import store from "./app/store";
import { Provider } from "react-redux";
import "./index.css";
import initailRouter from "./router";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={initailRouter} />
    </Provider>
  </React.StrictMode>
);
