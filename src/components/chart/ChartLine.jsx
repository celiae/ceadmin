import React from "react";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";
import { Paper } from "@mui/material";

export default function ChartLine({ data }) {
  return (
    <Paper sx={{ overflowX: "auto" }}>
      <LineChart width={1000} height={400} data={data}>
        <Line type="monotone" dataKey="uv" stroke="#8884d8" />
        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
      </LineChart>
    </Paper>
  );
}
