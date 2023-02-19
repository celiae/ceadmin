import React from "react";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import { Box, ThemeProvider } from "@mui/material";
import theme, { darkTheme } from "../../theme";
import { selectAll } from "../../app/userSlice";
import AppAlert from "./AppAlert";
import ResponsiveDrawer from "./AppDrawer";
import AppSnackbar from "./AppSnackbar";
import FormDialog from "./FormDialog";
import SpecificTransition from "../anim/SpecificTransition";

export default function Layout() {
  const user = useSelector(selectAll);
  const mode = useSelector((state) => state.theme.mode);
  if (!user.login) {
    return (
      <ThemeProvider theme={theme}>
        <Outlet />
        <AppAlert />
      </ThemeProvider>
    );
  }
  return (
    <ThemeProvider theme={mode == "light" ? theme : darkTheme}>
      <ResponsiveDrawer>
        <AppAlert />
        <SpecificTransition>
          <Outlet />
        </SpecificTransition>
      </ResponsiveDrawer>
      <AppSnackbar />
      <FormDialog />
    </ThemeProvider>
  );
}
