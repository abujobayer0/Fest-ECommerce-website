import React from "react";
import { Link } from "react-router-dom";

const Common = ({ name, one, two, three, four, five, six, seven }) => {
  return (
    <div className="text-gray-700 text-md justify-start items-start w-full flex flex-col gap-8">
      <h1 className="text-3xl font-semibold">{name}</h1>
      <div>
        <ul className="text-left flex flex-col gap-4">
          <Link>
            <li>{one}</li>
          </Link>
          <Link>
            <li> {two}</li>
          </Link>
          <Link>
            <li> {three} </li>
          </Link>
          <Link>
            <li> {four}</li>
          </Link>
          <Link>
            <li> {five}</li>
          </Link>
          <Link>
            <li> {six}</li>
          </Link>
          <Link>
            <li>{seven}</li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Common;
