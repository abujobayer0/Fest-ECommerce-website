import React from "react";

import Top from "../Top/Top";
import Cards from "./Shared/Card/Cards";
import Catagories from "./Shared/Catagories/Catagories";
import Hero from "./Shared/Hero/Hero";
import Footer from "../Footer/Footer";
import Products from "./Shared/Products/Products";
const Home = () => {
  return (
    <div className="relative  ">
      <Top></Top>
      <Hero></Hero>
      <Catagories></Catagories>
      <Cards></Cards>
      <Products></Products>
      <Footer></Footer>
    </div>
  );
};

export default Home;
