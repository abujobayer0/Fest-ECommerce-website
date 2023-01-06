import {
  faClock,
  faHeadphones,
  faLocation,
  faMailBulk,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import LOGO from "../Images/LOGO.png";
const Nest = () => {
  return (
    <div className="flex justify-start   items-start  w-full gap-8 flex-col">
      <img className="w-52" src={LOGO} alt="" />
      <div className=" flex text-md flex-col gap-4 text-left text-gray-700">
        <p>
          <span>
            <FontAwesomeIcon
              className="text-[#3bb77e] px-2"
              icon={faLocation}
            />
          </span>
          Address 5433 W Campbell ave Undefiend Kent,Utah 53423 United States
        </p>
        <p>
          <span>
            <FontAwesomeIcon
              className="text-[#3bb77e] px-2"
              icon={faHeadphones}
            />
          </span>
          <span className="text-[#3bb77e]">Call us (+81)-543-345-423423</span>
        </p>
        <p>
          <span>
            <FontAwesomeIcon
              className="text-[#3bb77e] px-2"
              icon={faMailBulk}
            />
          </span>
          Email <span className="text-[#3bb77e]">Sale@Fest.com</span>
        </p>
        <p>
          <span>
            <FontAwesomeIcon className="text-[#3bb77e] px-2" icon={faClock} />
          </span>
          Hours 10:00-18:00 ,Mon-Sat
        </p>
      </div>
    </div>
  );
};

export default Nest;
