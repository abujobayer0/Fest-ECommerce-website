import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Li = ({ i, l }) => {
  return (
    <div className="w-full">
      <li className="w-full px-12 gap-2 py-4 text-left flex items-center ">
        {" "}
        <FontAwesomeIcon className="text-lg px-2 text-[#3bb77e]" icon={l} />
        {i}
      </li>
      <hr />
    </div>
  );
};

export default Li;
