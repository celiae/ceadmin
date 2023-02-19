import * as React from "react";
import {
  Button,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { setOpen } from "../../app/formDialogSlice";

export default function FormDialog() {
  const dispatch = useDispatch();
  const formDialog = useSelector((state) => state.formDialog);

  const handleClose = () => {
    dispatch(setOpen(false));
  };

  return (
    <div>
      <Dialog open={formDialog.open} onClose={handleClose}>
        <DialogTitle>{formDialog.title}</DialogTitle>
        <DialogContent>
          <DialogContentText>{formDialog.msg}</DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label={formDialog.label}
            type={formDialog.inputType}
            fullWidth
            variant="standard"
            color={formDialog.type}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button color={formDialog.type} onClick={handleClose}>
            {formDialog.buttonMsg}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
