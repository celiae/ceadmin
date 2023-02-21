import React from "react";
import { data } from "../app/constant";

import SpecificTransition from "../components/anim/SpecificTransition";
import ChartLine from "../components/chart/ChartLine";

export default function Chart() {
  return (
    <SpecificTransition>
      <ChartLine data={data} />
    </SpecificTransition>
  );
}
