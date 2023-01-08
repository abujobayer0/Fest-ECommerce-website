import { ArrowBack } from "@mui/icons-material";
import { Button } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router";

const BackButton = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Button
        style={{ backgroundColor: "#3bb77e" }}
        onClick={() => navigate(-1)}
        variant="contained"
      >
        <ArrowBack /> Back
      </Button>
    </div>
  );
};

export default BackButton;
