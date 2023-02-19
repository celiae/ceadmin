import { Paper } from "@mui/material";
import React from "react";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";
import SpecificTransition from "../components/anim/SpecificTransition";
const data = [
  { name: "Page A", uv: 400, pv: 2400, amt: 2400 },
  { name: "Page B", uv: 1300, pv: 2400, amt: 2400 },
  { name: "Page C", uv: 400, pv: 2400, amt: 2400 },
  { name: "Page D", uv: 300, pv: 2400, amt: 2400 },
  { name: "Page E", uv: 300, pv: 2400, amt: 2400 },
  { name: "Page F", uv: 300, pv: 2400, amt: 2400 },
  { name: "Page G", uv: 300, pv: 2400, amt: 2400 },
];

export default function Chart() {
  return (
    <SpecificTransition>
      <Paper sx={{ overflowX: "auto" }}>
        <LineChart width={1000} height={400} data={data}>
          <Line type="monotone" dataKey="uv" stroke="#8884d8" />
          <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
        </LineChart>
      </Paper>
    </SpecificTransition>
  );
}
