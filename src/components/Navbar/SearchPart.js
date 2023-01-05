import { FormControl } from "@mui/material";
import React from "react";
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

const SearchPart = () => {
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
          <li className="hover:text-green-400  transition-all ease-in-out  flex items-center gap-2">
            {" "}
            <FontAwesomeIcon className="text-xl" icon={faRecycle} /> Compare
          </li>
          <li className="hover:text-green-400   transition-all ease-in-out flex items-center gap-2">
            {" "}
            <FontAwesomeIcon className="text-xl" icon={faHeart} /> Wishlist
          </li>
          <li className="hover:text-green-400  transition-all ease-in-out flex items-center gap-2">
            <FontAwesomeIcon className="text-xl" icon={faCartArrowDown} />
            Cart
          </li>
          <li className="hover:text-green-400  transition-all ease-in-out flex items-center gap-2 ">
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
