import {
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardHeader,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectAll } from "../../../app/adminSlice";
import { setMsg, setOpen } from "../../../app/snackbarSlice";

export default function Final() {
  const admin = useSelector(selectAll);
  const dispatch = useDispatch();

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Card>
          <CardActionArea>
            <CardHeader title="Form" subheader={new Date().toString()} />
            <CardContent>
              <Typography>name:{admin.name}</Typography>
              <Typography>password:*****</Typography>
              <Typography>create date:{admin.createDate}</Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
      <Grid item>
        <Button
          onClick={() => {
            dispatch(setMsg("Submit success"));
            dispatch(setOpen(true));
          }}
          variant="contained"
        >
          Submit
        </Button>
      </Grid>
    </Grid>
  );
}
