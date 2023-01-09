import React, { useEffect, useState } from "react";

import Top from "../Top/Top";
import Cards from "./Shared/Card/Cards";
import Catagories from "./Shared/Catagories/Catagories";
import Hero from "./Shared/Hero/Hero";
import Footer from "../Footer/Footer";
import Products from "./Shared/Products/Products";
const Home = () => {
  const [productCartHomeGlobal, setproductCartHomeGlobal] = useState([]);
  const [WishListHomeGlobal, setWhishListHomeGlobal] = useState([]);
  useEffect(() => {
    const newCartProduct = [...productCartHomeGlobal, productCartHomeGlobal];
    const newWishListProduct = [...WishListHomeGlobal, WishListHomeGlobal];
    setproductCartHomeGlobal(newCartProduct);
    setWhishListHomeGlobal(newWishListProduct);
  }, []);
  console.log(WishListHomeGlobal);
  return (
    <div className="relative  ">
      <Top></Top>
      <Hero></Hero>
      <Catagories></Catagories>
      <Cards></Cards>
      <Products
        setproductCartHomeGlobal={setproductCartHomeGlobal}
        productCartHomeGlobal={productCartHomeGlobal}
        WishListHomeGlobal={WishListHomeGlobal}
        setWhishListHomeGlobal={setWhishListHomeGlobal}
      ></Products>
      <Footer></Footer>
    </div>
  );
};

export default Home;
