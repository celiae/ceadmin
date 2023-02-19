import { Button } from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setLogin } from "../../app/userSlice";

export default function Logout() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <Button
      onClick={() => {
        dispatch(setLogin(false));
        navigate("/");
      }}
      variant="contained"
    >
      Logout
    </Button>
  );
}
