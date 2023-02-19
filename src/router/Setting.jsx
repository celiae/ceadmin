import { Typography } from "@mui/material";
import React from "react";
import SpecificTransition from "../components/anim/SpecificTransition";
import MuiSwitch from "../components/setting/MuiSwitch";
import BasicTabs from "../components/tab";

const tabItem = [
  {
    index: 0,
    label: "主题",
    component: (
      <>
        <MuiSwitch />
      </>
    ),
  },
  {
    index: 1,
    label: "哈哈",
    component: <></>,
  },
  {
    index: 2,
    label: "丰富",
    component: <>c</>,
  },
];

export default function Setting() {
  const [time, setTime] = React.useState(new Date().toString());
  setInterval(() => {
    setTime(new Date().toString());
  }, 1000);
  return (
    <SpecificTransition>
      <Typography>{time}</Typography>
      <BasicTabs tabItem={tabItem} noExit={true} />
    </SpecificTransition>
  );
}
