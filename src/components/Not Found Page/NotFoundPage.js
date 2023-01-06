import { ArrowBack } from "@mui/icons-material";
import { Button } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full py-8 flex-col flex justify-center items-center h-fit">
      <Button
        color={"warning"}
        onClick={() => navigate(-1)}
        variant="contained"
      >
        <ArrowBack /> Back
      </Button>
      <img
        src="https://media.giphy.com/media/cccpTlG85cCdEtyybs/giphy.gif"
        alt=""
      />
    </div>
  );
};

export default NotFoundPage;
