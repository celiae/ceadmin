import { Button, Grid, TextField, Typography } from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setMsg, setOpen, setType } from "../../app/alertSlice";
import CenterBox from "../layout/CenterBox";

const OriginalPassword = "bar";

export default function ChangePassword() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [form, setForm] = React.useState({
    oldpassword: "",
    newpassword: "",
  });

  return (
    <CenterBox>
      <Grid width={400} container spacing={3}>
        <Grid item xs={12}>
          <Typography variant="h5">Change Password</Typography>
        </Grid>
        <Grid item xs={12}>
          <TextField
            onChange={(e) => {
              setForm({ ...form, oldpassword: e.target.value });
            }}
            value={form.oldpassword}
            fullWidth
            label="Old password"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            onChange={(e) => {
              setForm({ ...form, newpassword: e.target.value });
            }}
            value={form.newpassword}
            fullWidth
            label="New password"
          />
        </Grid>
        <Grid item xs={12}>
          <Grid container spacing={3}>
            <Grid item>
              <Button
                onClick={() => {
                  if (
                    form.oldpassword === OriginalPassword &&
                    form.newpassword
                  ) {
                    dispatch(setType("info"));
                    dispatch(setMsg("Change password SUCCESS!"));
                    dispatch(setOpen(true));
                    navigate(-1);
                  } else {
                    dispatch(setType("warning"));
                    dispatch(
                      setMsg(
                        "Change password Failed! Wrong old password or new password is empty"
                      )
                    );
                    dispatch(setOpen(true));
                  }
                  setTimeout(() => {
                    dispatch(setOpen(false));
                  }, 5000);
                }}
                color="warning"
                variant="outlined"
              >
                Change
              </Button>
            </Grid>
            <Grid item>
              <Button
                onClick={() => {
                  navigate(-1);
                }}
              >
                Cancel
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </CenterBox>
  );
}
