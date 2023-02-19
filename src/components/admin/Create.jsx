import React from "react";
import BasicTabs from "../tab";
import BasicInfo from "./form/BasicInfo";
import Final from "./form/Final";

const tabItem = [
  {
    index: 0,
    label: "basic",
    component: <BasicInfo />,
  },
  {
    index: 1,
    label: "final",
    component: <Final />,
  },
];

export default function Create() {
  return <BasicTabs tabItem={tabItem} />;
}
