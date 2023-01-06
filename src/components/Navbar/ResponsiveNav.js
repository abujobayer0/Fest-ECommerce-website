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

import LOGO from "../Images/LOGO.png";
import Li from "./Li";
import "./navbar.module.css";
const ResponsiveNav = () => {
  const [openNav, setOpenNav] = useState(false);

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
        <div className="w-full  justify-center items-center md:w-1/2 top-0 z-10 left-0 transition-all ease-in-out  text-xl absolute duration-500 bg-white h-fit   ">
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
            <ul className="flex mx-auto gap-0 justify-center items-center w-full text-md font-semibold flex-col text-gray-700 ">
              <Li i={"Deals"} link={"/deals"} l={faFire}></Li>
              <Li i={"Home"} link={"/home"} l={faHome}></Li>
              <Li i={"About"} link={"/about"} l={faInfo}></Li>
              <Li i={"Shop"} link={"/"} l={faShop}></Li>
              <Li i={"Vendors"} link={"vendors"} l={faDashboard}></Li>
              <Li i={"Mega Menu"} link={"/"} l={faPlateWheat}></Li>
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
