import React from "react";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import { Box, Grid, TextField } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { setCreateDate, setName } from "../../../app/adminSlice";

export default function BasicInfo() {
  const [value, setValue] = React.useState(dayjs("2022-04-07"));
  const dispatch = useDispatch();
  const name = useSelector((state) => state.admin.name);
  return (
    <Box>
      <Grid container spacing={2}>
        <Grid item>
          <TextField
            label="username"
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
                // dispatch(setCreateDate(newValue));
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
