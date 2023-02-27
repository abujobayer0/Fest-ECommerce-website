import { faCartPlus, faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { HeartBroken, ShoppingBag, Star } from "@mui/icons-material";
import { Button } from "@mui/material";
import React, { useContext, useState } from "react";
import { toast } from "react-hot-toast";
import { Link } from "react-router-dom";
import GlobalState from "../../../../context/GlobalState";
import "./css.css";
import CustomizedDialogs from "./CustomizedDialogs";
const SingleProduct = ({ product }) => {
  const [open, setOpen] = React.useState(false);
  const { image, title, price, id, description } = product;

  const handleClickOpen = () => {
    setOpen(true);
  };
  const setGlobalState = useContext(GlobalState);

  return (
    <div className="gap-2 w-full flex flex-col px-8 py-4 text-gray-700 justify-center items-center customShadow   ">
      <div className="relative overflow-hidden mx-auto flex flex-col justify-center items-center w-full ">
        <img
          className="lg:w-52 lg:h-52 w-32 h-32 relative scale-75 hover:scale-95 transition-all ease-in-out"
          src={image}
          alt=""
        />
      </div>

      <CustomizedDialogs
        open={open}
        setOpen={setOpen}
        handleClickOpen={handleClickOpen}
        img={image}
        product={product}
        name={title}
        oldPrice={price}
        newPrice={price}
        description={description}
      />
      <h2 className="text-lg lg:text-2xl font-semibold ">
        {title.length >= 30 ? title.slice(0, 30) + "..." : title}
      </h2>
      <div className="flex text-orange-300">
        <Star />
        <Star />
        <Star />
        <Star />
        <Star />
      </div>
      <p className="">
        By <span className="CPC ">FestMart</span>
      </p>
      <div className="flex gap-4 font-semibold">
        <h2 className="text-lg lg:text-2xl CPC ">${price}</h2>
        <h2 className="text-gray-500 text-lg lg:text-xl line-through">
          ${price}
        </h2>
      </div>
      <div className="w-full flex  justify-between items-center">
        <Button>
          <FontAwesomeIcon
            className="text-[#3bb77e] text-2xl "
            icon={faHeart}
          />

          <FontAwesomeIcon className="text-gray-700  text-2xl" icon={faHeart} />
        </Button>
        <Link to={`/products/${id}`}>
          <Button
            onClick={() => setGlobalState(...product, product)}
            varient="contained"
            style={{ backgroundColor: "#3bb77e", color: "white" }}
          >
            Buy Now
            <ShoppingBag></ShoppingBag>
          </Button>
        </Link>{" "}
        <Button>
          <FontAwesomeIcon
            className="text-[#3bb77e] text-2xl "
            icon={faCartPlus}
          />

          <FontAwesomeIcon
            className="text-gray-700  text-2xl"
            icon={faCartPlus}
          />
        </Button>
      </div>
    </div>
  );
};

export default SingleProduct;
