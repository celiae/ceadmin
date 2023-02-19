import React from "react";
import { useDispatch } from "react-redux";
import { setDate, setDiscount, setName, setPrice } from "../../app/goodSlice";
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

export default function Update() {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(setName("foo"));
    dispatch(setDate("2000-01-01"));
    dispatch(setPrice(300));
    dispatch(setDiscount(80));
  });

  return (
    <div>
      <BasicTabs tabItem={tabItem} />
    </div>
  );
}
