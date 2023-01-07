import React from "react";

import Top from "../Top/Top";
import Cards from "./Shared/Card/Cards";
import Catagories from "./Shared/Catagories/Catagories";
import Hero from "./Shared/Hero/Hero";

const Home = () => {
  return (
    <div className="relative  ">
      <Top></Top>
      <Hero></Hero>
      <Catagories></Catagories>
      <Cards></Cards>
    </div>
  );
};

export default Home;
