import { ShoppingBag, Star } from "@mui/icons-material";
import { Button } from "@mui/material";
import React from "react";
import "./css.css";
import CustomizedDialogs from "./CustomizedDialogs";
const SingleProduct = ({ product }) => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const [hover, setHover] = React.useState(false);
  const handleHover = () => {
    setHover((current) => !current);
  };
  const { star, img, name, oldPrice, newPrice, description } = product;
  return (
    <div className="gap-2 w-full flex flex-col px-8 py-4 text-gray-700 justify-center items-center customShadow   ">
      <div className="relative overflow-hidden mx-auto flex flex-col justify-center items-center w-full ">
        <img
          className="w-52 relative scale-95 hover:scale-125 transition-all ease-in-out"
          src={img}
          alt=""
        />
      </div>

      <CustomizedDialogs
        open={open}
        setOpen={setOpen}
        handleClickOpen={handleClickOpen}
        img={img}
        star={star}
        name={name}
        oldPrice={oldPrice}
        newPrice={oldPrice}
        description={description}
      />
      <h2 className="text-xl lg:text-2xl font-semibold ">{name}</h2>
      <div className="flex text-orange-300">
        <Star />
        <Star />
        <Star />
        <Star />
        <Star />
      </div>
      <p className="">
        By <span className="CPC ">FestFood</span>
      </p>
      <div className="flex gap-4 font-semibold">
        <h2 className="text-xl lg:text-2xl CPC ">${newPrice}</h2>
        <h2 className="text-gray-500 text-lg lg:text-xl line-through">
          ${oldPrice}
        </h2>
      </div>
      <Button
        varient="contained"
        style={{ backgroundColor: "#3bb77e", color: "white" }}
      >
        Buy Now
        <ShoppingBag></ShoppingBag>
      </Button>
    </div>
  );
};

export default SingleProduct;
