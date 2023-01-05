import { faCartShopping, faNavicon } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import LOGO from "../Images/LOGO.png";
const ResponsiveNav = () => {
  return (
    <div className="flex px-8  justify-between py-4 items-center w-full">
      <div>
        <button>
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
  );
};

export default ResponsiveNav;
