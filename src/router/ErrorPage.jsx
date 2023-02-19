import {
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardHeader,
  Paper,
} from "@mui/material";
import React from "react";
import { useNavigate, useRouteError } from "react-router-dom";
import CenterBox from "../components/layout/CenterBox";

export default function ErrorPage() {
  const navigate = useNavigate();
  const error = useRouteError();
  console.error(error);
  return (
    <div className="bg-stone-900 w-screen h-screen">
      <CenterBox>
        <Paper className="p-3 bg-gradient-to-r from-cyan-500 to-blue-500">
          <Card>
            <CardActionArea
              onClick={() => {
                navigate(`/`);
              }}
            >
              <CardHeader title="Oops!" subheader="Cannot find page" />
              <CardContent>
                <Button variant="outlined">Come back to home</Button>
              </CardContent>
            </CardActionArea>
          </Card>
        </Paper>
      </CenterBox>
    </div>
  );
}
