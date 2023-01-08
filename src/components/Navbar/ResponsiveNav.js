import {
  faBlog,
  faCartShopping,
  faClose,
  faContactCard,
  faDashboard,
  faFire,
  faHome,
  faInfo,
  faNavicon,
  faPager,
  faPlateWheat,
  faShop,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { ArrowDropDown, ArrowDropUp } from "@mui/icons-material";
import LOGO from "../Images/LOGO.png";
import Li from "./Li";
import "./navbar.module.css";
import ResponsiveShopMenu from "./ResponsiveShopMenu";
import ResponsiveMegaMenu from "./ResponsiveMegaMenu";
const ResponsiveNav = () => {
  const [openNav, setOpenNav] = useState(false);
  const [ShopMenu, setShopMenu] = useState(false);
  const [megaMenu, setMegaMenu] = useState(false);
  const handleToggleShop = () => {
    setShopMenu((current) => !current);
  };
  const handleToggleMegaMenu = () => {
    setMegaMenu((current) => !current);
  };

  return (
    <div className="w-full ">
      {openNav === false ? (
        <div className="flex px-8  sticky top-0 left-0 transition-all  ease-in-out duration-300 justify-between py-4 items-center w-full">
          <div>
            <button onClick={() => setOpenNav(true)}>
              <FontAwesomeIcon
                className="text-3xl  text-gray-700"
                icon={faNavicon}
              />
            </button>
          </div>
          <div>
            <img className="w-52" src={LOGO} alt="" />
          </div>
          <div>
            <button>
              <FontAwesomeIcon
                className="text-3xl text-gray-700"
                icon={faCartShopping}
              />
            </button>
          </div>
        </div>
      ) : (
        <div className="w-full  justify-center items-center md:w-1/2 overflow-auto top-0 z-10 left-0 transition-all ease-in-out  text-xl absolute duration-300 bg-white h-[100vh]    ">
          <div className="flex p-4 justify-between relative w-full">
            <img className="w-52 " src={LOGO} alt="" />
            <button
              className=" mr-8 px-2 md:mr-4 rounded-full lg:p-0"
              onClick={() => setOpenNav(false)}
            >
              <FontAwesomeIcon
                className="text-4xl p-4 text-gray-700"
                icon={faClose}
              />
            </button>
          </div>
          <div className="w-full ">
            <ul className="flex mx-auto  gap-0 justify-center items-center w-full text-md font-semibold flex-col text-gray-700 ">
              <Li i={"Deals"} link={"/deals"} l={faFire}></Li>
              <Li i={"Home"} link={"/home"} l={faHome}></Li>
              <Li i={"About"} link={"/about"} l={faInfo}></Li>
              <p
                className="w-full  flex justify-start items-start flex-col text-left"
                onClick={handleToggleShop}
              >
                <Li
                  i={"Shop"}
                  ArrowDropDown={ArrowDropDown}
                  ArrowDropUp={ArrowDropUp}
                  ShopMenu={ShopMenu}
                  link={""}
                  l={faShop}
                ></Li>
              </p>
              {ShopMenu && <ResponsiveShopMenu></ResponsiveShopMenu>}
              <Li i={"Vendors"} link={"vendors"} l={faDashboard}></Li>

              <p
                className="w-full gap-4 items-center flex justify-between flex-col text-left"
                onClick={handleToggleMegaMenu}
              >
                <Li
                  i={"Mega Menu"}
                  ArrowDropUp={ArrowDropUp}
                  ArrowDropDown={ArrowDropDown}
                  link={"/"}
                  megaMenu={megaMenu}
                  l={faPlateWheat}
                ></Li>
              </p>
              {megaMenu && <ResponsiveMegaMenu></ResponsiveMegaMenu>}
              <Li i={"Blog"} link={"/blog"} l={faBlog}></Li>
              <Li i={"Pages"} link={"/"} l={faPager}></Li>
              <Li i={"Contact"} link={"/contact"} l={faContactCard}></Li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default ResponsiveNav;
