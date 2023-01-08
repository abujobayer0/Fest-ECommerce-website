import React from "react";

import Top from "../Top/Top";
import Cards from "./Shared/Card/Cards";
import Catagories from "./Shared/Catagories/Catagories";
import Hero from "./Shared/Hero/Hero";
import Footer from "../Footer/Footer";
const Home = () => {
  return (
    <div className="relative  ">
      <Top></Top>
      <Hero></Hero>
      <Catagories></Catagories>
      <Cards></Cards>
      <Footer></Footer>
    </div>
  );
};

export default Home;
