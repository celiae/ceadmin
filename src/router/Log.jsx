import React from "react";
import SpecificTransition from "../components/anim/SpecificTransition";
import LogCard from "../components/log/LogCard";

const logs = [
  {
    date: "2002-01-01",
    content: "tanuyf;tnqywfkvq;yf",
  },
  {
    date: "2003-01-01",
    content: "tanuyf;tnqywfkvq;yf",
  },
  {
    date: "2004-01-01",
    content: "tanuyf;tnqywfkvq;yf",
  },
];

export default function Log() {
  return (
    <SpecificTransition>
      <LogCard logs={logs} />
    </SpecificTransition>
  );
}
