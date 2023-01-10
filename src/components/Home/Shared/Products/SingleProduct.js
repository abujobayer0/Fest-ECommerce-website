import { faCartPlus, faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { HeartBroken, ShoppingBag, Star } from "@mui/icons-material";
import { Button } from "@mui/material";
import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { Link } from "react-router-dom";
import "./css.css";
import CustomizedDialogs from "./CustomizedDialogs";
const SingleProduct = ({
  product,
  productCartHomeGlobal,
  setproductCartHomeGlobal,
  WishListHomeGlobal,
  setWhishListHomeGlobal,
}) => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const [wishColor, setWishColor] = useState(false);
  const handleWishListToast = (addedWish, WishListHomeGlobal) => {
    if (wishColor) {
      toast.error(`Removed ${name} From WishList.`, {
        icon: <HeartBroken style={{ color: "deepPink" }} />,
      });
      setWhishListHomeGlobal(
        WishListHomeGlobal.filter((pt) => pt.id !== product.id)
      );
    } else {
      toast.success(`Added ${name} To WishList.`, {
        icon: <FontAwesomeIcon className="text-[#3bb77e]" icon={faHeart} />,
      });
      const newProductList = [...WishListHomeGlobal, addedWish];
      setWhishListHomeGlobal(newProductList);
    }
    setWishColor((current) => !current);
  };
  const [cartColor, setColor] = useState(false);
  const handleCartToast = (addedproduct, productCartHomeGlobal) => {
    if (cartColor) {
      toast.error(`Removed ${name} From Cart.`);
      setproductCartHomeGlobal(
        productCartHomeGlobal.filter((pt) => pt.id !== product.id)
      );
    } else {
      toast.success(`Added ${name} To Cart.`);
      const newProductList = [...productCartHomeGlobal, addedproduct];
      setproductCartHomeGlobal(newProductList);
    }
    setColor((current) => !current);
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
        cartColor={cartColor}
        setColor={setColor}
        product={product}
        setproductCartHomeGlobal={setproductCartHomeGlobal}
        star={star}
        productCartHomeGlobal={productCartHomeGlobal}
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
      <div className="w-full flex  justify-between items-center">
        <Button
          onClick={() => handleWishListToast(product, WishListHomeGlobal)}
        >
          {wishColor ? (
            <FontAwesomeIcon
              className="text-[#3bb77e] text-2xl "
              icon={faHeart}
            />
          ) : (
            <FontAwesomeIcon
              className="text-gray-700  text-2xl"
              icon={faHeart}
            />
          )}
        </Button>
        <Link to={`/products/${name}`}>
          <Button
            varient="contained"
            style={{ backgroundColor: "#3bb77e", color: "white" }}
          >
            Buy Now
            <ShoppingBag></ShoppingBag>
          </Button>
        </Link>{" "}
        <Button onClick={() => handleCartToast(product, productCartHomeGlobal)}>
          {cartColor ? (
            <FontAwesomeIcon
              className="text-[#3bb77e] text-2xl "
              icon={faCartPlus}
            />
          ) : (
            <FontAwesomeIcon
              className="text-gray-700  text-2xl"
              icon={faCartPlus}
            />
          )}
        </Button>
      </div>
    </div>
  );
};

export default SingleProduct;
