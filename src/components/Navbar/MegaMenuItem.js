import React from "react";
import { Link } from "react-router-dom";

const MegaMenuItem = ({ one, two, three, four, five, six }) => {
  return (
    <div className="flex flex-col justify-start items-start w-full text-left gap-2">
      <h1 className="CPC text-2xl font-semibold">{one}</h1>
      <div className="text-md CTC flex flex-col gap-2  ">
        <Link>
          <h2 className="hover:text-gray-700">{two}</h2>
        </Link>
        <Link>
          <h2 className="hover:text-gray-700">{three}</h2>
        </Link>
        <Link>
          <h2 className="hover:text-gray-700">{four}</h2>
        </Link>
        <Link>
          <h2 className="hover:text-gray-700">{five}</h2>
        </Link>
        <Link>
          <h2 className="hover:text-gray-700">{six}</h2>
        </Link>
      </div>
    </div>
  );
};

export default MegaMenuItem;
