import {
  Call,
  Facebook,
  Instagram,
  Twitter,
  WhatsApp,
} from "@mui/icons-material";
import React from "react";

const Bottom = () => {
  return (
    <div className="flex py-4 justify-around flex-wrap gap-4 w-full items-center text-gray-700">
      <div className="flex flex-col  justify-start md:items-start items-center lg:items-start ">
        <h1>* 2023 Fest-Ecommerce Website</h1>
        <p>All rights reserved</p>
      </div>
      <div className="lg:flex md:flex hidden">
        <div className="flex justify-center items-center gap-2 text-xl">
          <Call />{" "}
          <div className="flex font-bold CPC flex-col justify-center items-start">
            <a href="tel:+1900549999">1900549999</a>
            <p className="font-normal text-sm text-gray-700">
              Working 6:00 - 22:00
            </p>
          </div>
        </div>
        <div className="flex justify-center items-center gap-2 text-xl">
          <Call />{" "}
          <div className="flex font-bold CPC flex-col justify-center items-start">
            <a href="tel:+1900648888">1900648888</a>
            <p className="font-normal text-sm text-gray-700">
              {" "}
              24/7 Support Center
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-end md:items-end items-center lg:items-end">
        <div className="flex CPC items-center justify-center">
          <h1 className="text-xl font-bold text-gray-700">Follow Us</h1>{" "}
          <Facebook /> <Twitter />
          <WhatsApp />
          <Instagram />
        </div>
        <h1>Up to 15% Discount on Your First Subscribe</h1>
      </div>
    </div>
  );
};

export default Bottom;
