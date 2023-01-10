import { FormControl } from "@mui/material";
import React, { useState } from "react";
import LOGO from "../Images/LOGO.png";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartArrowDown,
  faHeart,
  faRecycle,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { SearchOff } from "@mui/icons-material";
import WishList from "./WishList";
const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(0),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 0),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  color: "#9c9993",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(0, 0, 0, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(1)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

const SearchPart = ({
  setproductCartHomeGlobal,
  productCartHomeGlobal,
  WishListHomeGlobal,
  setWhishListHomeGlobal,
}) => {
  const [cartDetail, setCartDetail] = useState(false);
  const [wishListDetail, setWishListDetail] = useState(false);
  const handleWishList = () => {
    setWishListDetail((current) => !current);
  };
  const handleCart = () => {};
  return (
    <div className="flex  shadow-sm justify-between px-4 items-center">
      <div className="flex py-8  items-center gap-12">
        <div className="w-52">
          <img className="w-full" src={LOGO} alt="" />
        </div>
        <div className="flex justify-center py-0 h-12 gap-2 border-green-200 border-2  px-4 m-0 items-center">
          <FormControl className="p-0" fullWidth>
            <select className="CTC outline-none font-bold" name="" id="">
              <option value={10}>All Categories</option>
              <option value={20}>Baby And Toddler</option>
              <option value={30}>Cream</option>
              <option value={40}>Foods & Vegetables</option>
              <option value={50}>Hodo Foods</option>
              <option value={60}>Organic</option>
              <option value={70}>Snack Cake</option>
            </select>
          </FormControl>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search for…"
              inputProps={{ "aria-label": "search " }}
            ></StyledInputBase>
          </Search>
        </div>
      </div>
      <div>
        <ul className="flex text-gray-600 text-lg font-semibold gap-6">
          <li className="hover:text-[#3bb77e]  transition-all ease-in-out cursor-pointer  flex items-center gap-2">
            {" "}
            <FontAwesomeIcon className="text-xl" icon={faRecycle} /> Compare
          </li>
          <div className="relative">
            <li
              onClick={handleWishList}
              className="hover:text-[#3bb77e]  cursor-pointer transition-all ease-in-out flex items-center gap-2"
            >
              {" "}
              <FontAwesomeIcon
                className="text-xl"
                icon={faHeart}
              /> Wishlist{" "}
              <span className="text-sm  text-white rounded-full w-[15px] h-[15px] flex justify-center items-center  bg-[#3bb77e]">
                {" "}
                {WishListHomeGlobal.length - 1}
              </span>
            </li>
            {wishListDetail && (
              <div className="w-[600px] gap-3 overflow-hidden overflow-y-auto h-[400px] flex flex-col justify-start items-center p-2 right-0   absolute mt-4 z-20 border-2 bg-white">
                {WishListHomeGlobal.map((i) => (
                  <WishList faHeart={faHeart} i={i} doller={"$"} key={i.id} />
                ))}
              </div>
            )}
          </div>
          <li className="hover:text-[#3bb77e] relative  cursor-pointer transition-all ease-in-out flex items-center gap-2">
            <FontAwesomeIcon className="text-xl" icon={faCartArrowDown} />
            Cart
            <span className="text-sm  text-white rounded-full w-[15px] h-[15px] flex justify-center items-center  bg-[#3bb77e]">
              {" "}
              {productCartHomeGlobal.length - 1}
            </span>
          </li>
          <li className="hover:text-[#3bb77e] cursor-pointer transition-all ease-in-out flex items-center gap-2 ">
            {" "}
            <FontAwesomeIcon className="text-xl" icon={faUser} />
            Account
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SearchPart;
