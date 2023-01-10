import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Delete, ShoppingCartCheckoutTwoTone } from "@mui/icons-material";
import { Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const WishList = ({ i, faHeart, doller }) => {
  return (
    <>
      {i.length !== 0 ? (
        <div
          className="flex w-full 
      customShadow 
      justify-between px-4 gap-2 items-center "
        >
          <div className=" px-2 border-r-2 border-green-300">
            <FontAwesomeIcon className="text-green-300" icon={faHeart} />
          </div>
          <img src={i.img} className={"w-24"} alt="" />
          <div className="flex justify-start items-start text-left  w-full flex-col">
            <h1>{i.name}</h1>
            <div className="flex text-left justify-start items-center gap-2 w-full">
              <p className="flex ">
                <span>{doller}</span> {i.newPrice}
              </p>
              <p className="flex line-through">
                <span>{doller}</span>
                {i.oldPrice}
              </p>
            </div>
          </div>
          <div className="flex justify-center items-center gap-2">
            <Button style={{ backgroundColor: "#f76f72", color: "white" }}>
              <Delete />
            </Button>
            <Link to={`products/${i.name}`}>
              <Button style={{ backgroundColor: "#3bb77e", color: "white" }}>
                <ShoppingCartCheckoutTwoTone />
              </Button>
            </Link>
          </div>
        </div>
      ) : (
        <div>
          <h1 className="text-xl CPC">
            Wish List Products{" "}
            <span>
              <FontAwesomeIcon icon={faHeart} />
            </span>
          </h1>{" "}
        </div>
      )}
    </>
  );
};

export default WishList;
