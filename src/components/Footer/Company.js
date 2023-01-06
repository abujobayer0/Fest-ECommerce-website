import React from "react";

const Common = ({ name, one, two, three, four, five, six, seven }) => {
  return (
    <div className="text-gray-700 text-md justify-start items-start w-full flex flex-col gap-8">
      <h1 className="text-3xl font-semibold">{name}</h1>
      <div>
        <ul className="text-left flex flex-col gap-4">
          <li>{one}</li>
          <li> {two}</li>
          <li> {three} </li>
          <li> {four}</li>
          <li> {five}</li>
          <li> {six}</li>
          <li>{seven}</li>
        </ul>
      </div>
    </div>
  );
};

export default Common;
