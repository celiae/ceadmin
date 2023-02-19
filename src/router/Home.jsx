import {
  Card,
  CardActionArea,
  CardContent,
  CardHeader,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import NormalTransition from "../components/anim/NormalTransition";
import { FaReact } from "react-icons/fa";
import SpecificTransition from "../components/anim/SpecificTransition";

export default function Home() {
  const navigate = useNavigate();
  return (
    <SpecificTransition>
      <Grid container spacing={10} p={5}>
        <Grid item xs={6}>
          <NormalTransition>
            <Card>
              <CardActionArea>
                <CardHeader title={"Goods Number"} />
                <CardContent>
                  <Typography variant="h3">50</Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </NormalTransition>
        </Grid>
        <Grid item xs={6}>
          <NormalTransition>
            <Card>
              <CardActionArea>
                <CardHeader title={"User Number"} />
                <CardContent>
                  <Typography variant="h3">50</Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </NormalTransition>
        </Grid>
        <Grid item xs={12}>
          <FaReact className={"hover:animate-spin delay-75"} size={270} />
        </Grid>
      </Grid>
    </SpecificTransition>
  );
}
