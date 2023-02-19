import { Button } from "@mui/material";
import React from "react";
import AdminTable from "../components/table/AdminTable";
import { useNavigate } from "react-router-dom";
import { Box } from "@mui/system";
import SpecificTransition from "../components/anim/SpecificTransition";

export default function Admin() {
  const navigate = useNavigate();
  return (
    <SpecificTransition>
      <AdminTable />
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
