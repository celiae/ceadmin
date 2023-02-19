import { Grid, InputAdornment, TextField } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setDiscount, setPrice } from "../../../app/goodSlice";

export default function PriceInfo() {
  const dispatch = useDispatch();
  const price = useSelector((state) => state.good.price);
  const discount = useSelector((state) => state.good.discount);

  return (
    <Grid container spacing={2}>
      <Grid item>
        <TextField
          onChange={(e) => {
            dispatch(setPrice(e.target.value));
          }}
          value={price}
          label="price"
          type={"number"}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">￥</InputAdornment>
            ),
          }}
        />
      </Grid>
      <Grid item>
        <TextField
          onChange={(e) => {
            dispatch(setDiscount(e.target.value));
          }}
          value={discount}
          label="discount"
          InputProps={{
            endAdornment: <InputAdornment position="start">%</InputAdornment>,
          }}
        />
      </Grid>
    </Grid>
  );
}
