import { Alert, Collapse } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { selectAll } from "../../app/alertSlice";

export default function AppAlert() {
  const alert = useSelector(selectAll);
  return (
    <div>
      <Collapse in={alert.open}>
        <Alert severity={alert.type}>{alert.msg}</Alert>
      </Collapse>
    </div>
  );
}
