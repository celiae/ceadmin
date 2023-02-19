import React from "react";
import { Button, IconButton, Snackbar } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { selectAll, setOpen } from "../../app/snackbarSlice";
import { AiOutlineCloseCircle } from "react-icons/ai";

export default function AppSnackbar() {
  const dispatch = useDispatch();
  const snackbar = useSelector(selectAll);
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    dispatch(setOpen(false));
  };
  const action = (
    <React.Fragment>
      <Button variant="contained" size="small" onClick={handleClose}>
        UNDO
      </Button>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <AiOutlineCloseCircle />
      </IconButton>
    </React.Fragment>
  );
  return (
    <div>
      <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={handleClose}
        message={snackbar.msg}
        action={action}
      />
    </div>
  );
}
