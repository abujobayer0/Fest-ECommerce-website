import React from "react";

import Top from "../Top/Top";
import Catagories from "./Shared/Catagories/Catagories";
import Hero from "./Shared/Hero/Hero";

const Home = () => {
  return (
    <div className="relative  ">
      <Top></Top>
      <Hero></Hero>
      <Catagories></Catagories>
    </div>
  );
};

export default Home;
