import React from "react";
import BackButton from "../BackButton/BackButton";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";

const NotFoundPage = () => {
  return (
    <div className="w-full  py-8 flex-col gap-4 flex justify-center items-center h-fit">
      <Navbar></Navbar>
      <div>
        <BackButton></BackButton>
      </div>
      <img
        src="https://media.giphy.com/media/cccpTlG85cCdEtyybs/giphy.gif"
        alt=""
      />
      <Footer></Footer>
    </div>
  );
};

export default NotFoundPage;
