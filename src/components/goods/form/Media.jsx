import { Button } from "@mui/material";
import { MdPermMedia } from "react-icons/md";
import React from "react";

export default function Media() {
  return (
    <Button
      size="large"
      variant="outlined"
      color="primary"
      aria-label="upload picture"
      component="label"
    >
      <input hidden accept="image/*" type="file" />
      <MdPermMedia size={100} />
    </Button>
  );
}
