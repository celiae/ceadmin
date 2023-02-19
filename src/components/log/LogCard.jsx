import {
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardHeader,
  TextField,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

export default function LogCard({ logs }) {
  return (
    <>
      <TextField variant="standard" label={"Search"} placeholder={"keywords"} />
      {logs.map((l, index) => (
        <Box key={index} m={3}>
          <Card>
            <CardActionArea>
              <CardHeader title="Log" subheader={l.date} />
              <CardContent>
                <Typography>{l.content}</Typography>
                <Button>Get in</Button>
              </CardContent>
            </CardActionArea>
          </Card>
        </Box>
      ))}
    </>
  );
}
