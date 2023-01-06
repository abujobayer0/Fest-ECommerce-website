import React from "react";

const Common = ({ name, one, two, three, four, five, six, seven }) => {
  return (
    <div className="text-gray-700 text-md justify-start items-start w-full flex flex-col gap-8">
      <h1 className="text-3xl font-semibold">{name}</h1>
      <div>
        <ul className="text-left flex flex-col gap-4">
          <a href="#">
            <li>{one}</li>
          </a>
          <a href="#">
            <li> {two}</li>
          </a>
          <a href="#">
            <li> {three} </li>
          </a>
          <a href="#">
            <li> {four}</li>
          </a>
          <a href="#">
            <li> {five}</li>
          </a>
          <a href="#">
            <li> {six}</li>
          </a>
          <a href="#">
            <li>{seven}</li>
          </a>
        </ul>
      </div>
    </div>
  );
};

export default Common;
