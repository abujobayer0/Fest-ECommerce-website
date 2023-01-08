import { ArrowBack } from "@mui/icons-material";
import { Button } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

const NotFoundPage = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full  py-8 flex-col gap-4 flex justify-center items-center h-fit">
      <Navbar></Navbar>
      <div>
        <Button
          style={{ backgroundColor: "#3bb77e" }}
          onClick={() => navigate(-1)}
          variant="contained"
        >
          <ArrowBack /> Back
        </Button>
      </div>
      <img
        src="https://media.giphy.com/media/cccpTlG85cCdEtyybs/giphy.gif"
        alt=""
      />
    </div>
  );
};

export default NotFoundPage;
