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
import { useNavigate } from "react-router-dom";

export default function LogCard({ logs }) {
  const navigate = useNavigate();

  return (
    <>
      <TextField variant="standard" label={"Search"} placeholder={"keywords"} />
      {logs.map((l, index) => (
        <Box key={index} m={3}>
          <Card>
            <CardActionArea
              onClick={() => {
                navigate(`${l.id}`);
                console.log(l.id);
              }}
            >
              <CardHeader title="Log" subheader={l.date} />
              <CardContent>
                <Typography>{l.content}</Typography>
                <Typography>Get in</Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Box>
      ))}
    </>
  );
}
