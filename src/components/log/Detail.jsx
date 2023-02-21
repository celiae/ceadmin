import { Button, Grid, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

export default function Detail() {
  const navigate = useNavigate();

  return (
    <div>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Button
            onClick={() => {
              navigate(-1);
            }}
          >
            Exit
          </Button>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h4">Title</Typography>
        </Grid>
        <Grid item>
          <Typography>logs msg</Typography>
        </Grid>
      </Grid>
    </div>
  );
}
