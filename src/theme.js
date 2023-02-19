import { createTheme } from "@mui/material";

const theme = createTheme({
  status: {
    danger: "#e53e3e",
  },
  palette: {
    primary: {
      main: "#0971f1",
      darker: "#053e85",
    },
    neutral: {
      main: "#64748B",
      contrastText: "#fff",
    },
    success: {
      main: "#69f0ae",
    },
  },
});

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

export default theme;
