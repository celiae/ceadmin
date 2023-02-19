import React from "react";
import { Button } from "@mui/material";
import GoodsTable from "../components/table/GoodsTable";
import { useNavigate } from "react-router-dom";
import { Box } from "@mui/system";
import SpecificTransition from "../components/anim/SpecificTransition";

export default function Goods() {
  const navigate = useNavigate();
  return (
    <SpecificTransition>
      <GoodsTable />
      <Box mt={3}>
        <Button
          onClick={() => {
            navigate(`create`);
          }}
          variant="outlined"
        >
          Create
        </Button>
      </Box>
    </SpecificTransition>
  );
}
