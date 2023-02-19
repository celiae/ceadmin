import {
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardHeader,
  Grid,
  Typography,
} from "@mui/material";
import { useDispatch } from "react-redux";
import React from "react";
import { useNavigate } from "react-router-dom";
import {
  setButtonMsg,
  setLabel,
  setMsg,
  setOpen,
  setTitle,
  setType,
} from "../../app/formDialogSlice";

export default function Detail({ goods }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <div>
      <Grid container mb={3} spacing={3}>
        <Grid item>
          <Button
            onClick={() => {
              navigate(`update`);
            }}
            variant="contained"
          >
            Update
          </Button>
        </Grid>
        <Grid item>
          <Button
            color="error"
            onClick={() => {
              dispatch(setType("error"));
              dispatch(setTitle("DELETE"));
              dispatch(setLabel("Yes/No"));
              dispatch(
                setMsg(" To DELETE to this item, please enter YES here.")
              );
              dispatch(setButtonMsg("DELETE"));
              dispatch(setOpen(true));
            }}
            variant="outlined"
          >
            Delete
          </Button>
        </Grid>
        <Grid item>
          <Button
            onClick={() => {
              navigate(-1);
            }}
            variant="outlined"
          >
            Exit
          </Button>
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid item>
          <Card>
            <CardActionArea>
              <CardHeader title="Detail" subheader="2000-01-01" />
              <CardContent>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <Typography variant="subtitle2">Name</Typography>
                    <Typography variant="h5">Foo Plain</Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography variant="subtitle2">Date</Typography>
                    <Typography variant="h6">2002-01-01</Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography variant="subtitle2">Price</Typography>
                    <Typography variant="h6">2000</Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography variant="subtitle2">Discount</Typography>
                    <Typography variant="h6">100%</Typography>
                  </Grid>
                </Grid>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item></Grid>
      </Grid>
    </div>
  );
}
