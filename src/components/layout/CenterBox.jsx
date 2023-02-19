import { Box } from "@mui/material";
import React from "react";

export default function CenterBox({ children }) {
  return (
    <Box sx={{ display: "grid", height: "100vh", placeItems: "center" }}>
      {children}
    </Box>
  );
}
