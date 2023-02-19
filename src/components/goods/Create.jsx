import React from "react";
import BasicTabs from "../tab";
import BasicInfo from "./form/BasicInfo";
import Final from "./form/Final";
import Media from "./form/Media";
import PriceInfo from "./form/PriceInfo";

const tabItem = [
  {
    index: 0,
    label: "basic",
    component: <BasicInfo />,
  },
  {
    index: 1,
    label: "price",
    component: <PriceInfo />,
  },
  {
    index: 2,
    label: "media",
    component: <Media />,
  },
  {
    index: 3,
    label: "final",
    component: <Final />,
  },
];

export default function Create() {
  return <BasicTabs tabItem={tabItem} />;
}
