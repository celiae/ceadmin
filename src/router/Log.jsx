import React from "react";
import SpecificTransition from "../components/anim/SpecificTransition";
import LogCard from "../components/log/LogCard";

const logs = [
  {
    id: 0,
    date: "2002-01-01",
    content: "tanuyf;tnqywfkvq;yf",
  },
  {
    id: 1,
    date: "2003-01-01",
    content: "tanuyf;tnqywfkvq;yf",
  },
  {
    id: 2,
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
