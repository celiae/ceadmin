import { Avatar, Button, Grid, Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectAll } from "../app/userSlice";
import SpecificTransition from "../components/anim/SpecificTransition";
import Logout from "../components/personal/Logout";

export default function Personal() {
  const navigate = useNavigate();
  const user = useSelector(selectAll);
  return (
    <SpecificTransition>
      <Grid container spacing={2} alignItems="center">
        <Grid item>
          <Avatar />
        </Grid>
        <Grid item>{user.username}</Grid>
        <Grid item xs={12}>
          <Button
            onClick={() => {
              navigate("changepassword");
            }}
            variant="outlined"
          >
            Change password
          </Button>
        </Grid>
        <Grid item xs={12}>
          <Logout />
        </Grid>
        <Grid item xs={12}>
          <Typography variant="subtitle2">Create Date</Typography>
          <Typography variant="h5">2000-01-01</Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="subtitle2">Goods</Typography>
          <Typography variant="h5">2000</Typography>
        </Grid>
      </Grid>
    </SpecificTransition>
  );
}
