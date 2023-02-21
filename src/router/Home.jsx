import {
  Avatar,
  Card,
  CardActionArea,
  CardContent,
  CardHeader,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import NormalTransition from "../components/anim/NormalTransition";
import SpecificTransition from "../components/anim/SpecificTransition";
import { smallData } from "../app/constant";
import SmallChartLine from "../components/chart/SmallChartLine";
import { useSelector } from "react-redux";
import { selectAll } from "../app/userSlice";

export default function Home() {
  const navigate = useNavigate();
  const user = useSelector(selectAll);

  return (
    <SpecificTransition>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <NormalTransition>
            <Card>
              <CardActionArea
                onClick={() => {
                  navigate("goods");
                }}
              >
                <CardHeader title={"Goods Number"} />
                <CardContent>
                  <Typography variant="h3" sx={{ borderTop: 1 }}>
                    50
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </NormalTransition>
        </Grid>
        <Grid item xs={6}>
          <NormalTransition>
            <Card>
              <CardActionArea
                onClick={() => {
                  navigate("admin");
                }}
              >
                <CardHeader title={"User Number"} />
                <CardContent>
                  <Typography variant="h3" sx={{ borderTop: 1 }}>
                    50
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </NormalTransition>
        </Grid>
      </Grid>
      <Grid item mt={4} md={6}>
        <SmallChartLine data={smallData} />
      </Grid>
      <Grid item xs={12} mt={4}>
        <Card>
          <CardActionArea>
            <Stack direction={"row"} spacing={4}>
              <Avatar />
              <Typography>{user.username}</Typography>
            </Stack>
          </CardActionArea>
        </Card>
      </Grid>
    </SpecificTransition>
  );
}
