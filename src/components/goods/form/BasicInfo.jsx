import { Box, Grid, TextField } from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setName, setDate } from "../../../app/goodSlice";

export default function BasicInfo() {
  const [value, setValue] = React.useState(dayjs("2022-04-07"));
  const dispatch = useDispatch();
  const name = useSelector((state) => state.good.name);
  return (
    <Box>
      <Grid container spacing={2}>
        <Grid item>
          <TextField
            label="name"
            value={name}
            onChange={(e) => {
              dispatch(setName(e.target.value));
            }}
          />
        </Grid>
        <Grid item>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              openTo="year"
              views={["year", "month", "day"]}
              label="Year, month and date"
              value={value}
              onChange={(newValue) => {
                setValue(dayjs(newValue));
                dispatch(setDate(newValue.toString()));
              }}
              renderInput={(params) => (
                <TextField {...params} helperText={null} />
              )}
            />
          </LocalizationProvider>
        </Grid>
      </Grid>
    </Box>
  );
}
