import {
  faCartShopping,
  faClose,
  faNavicon,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import LOGO from "../Images/LOGO.png";
const ResponsiveNav = () => {
  const [openNav, setOpenNav] = useState(false);

  return (
    <div className="w-full transition-all ease-in-out">
      {openNav === false ? (
        <div className="flex px-8  transition-all ease-in-out justify-between py-4 items-center w-full">
          <div>
            <button onClick={() => setOpenNav(true)}>
              <FontAwesomeIcon
                className="text-3xl text-gray-700"
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
        <div className="w-full transition-all ease-in-out   bg-white h-screen">
          <button onClick={() => setOpenNav(false)}>
            <FontAwesomeIcon
              className="text-4xl p-4 text-gray-700"
              icon={faClose}
            />
          </button>
          <div>
            <h1 className="text-4xl text-gray-700">its navbar responsive</h1>
          </div>
        </div>
      )}
    </div>
  );
};

export default ResponsiveNav;
