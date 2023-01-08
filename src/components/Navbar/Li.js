import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

const Li = ({ i, l, megaMenu, ShopMenu, ArrowDropUp, link, ArrowDropDown }) => {
  return (
    <div className="w-full">
      <Link to={link}>
        <li className="w-full px-12 gap-2 py-4 text-left flex items-center ">
          {" "}
          <FontAwesomeIcon className="text-lg px-2 text-[#3bb77e]" icon={l} />
          {i}
          {ArrowDropDown && (
            <p>
              {ShopMenu === true || megaMenu === true ? (
                <ArrowDropUp />
              ) : (
                <ArrowDropDown />
              )}
            </p>
          )}
        </li>
      </Link>
      <hr />
    </div>
  );
};

export default Li;
