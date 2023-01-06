import React from "react";

const InstallApp = () => {
  return (
    <div>
      <div className="text-gray-700  text-md justify-start items-start w-full flex flex-col gap-8">
        <h1 className="text-3xl font-semibold">Install App</h1>
        <p>From App Store or Google Play</p>
        <div className="grid grid-cols-2">
          <img
            className="hover:scale-x-110 transition-all ease-in-out duration-200"
            src="https://themepanthers.com/wp/nest/d1/wp-content/uploads/2022/02/google-play.jpg"
            alt=""
          />
          <img
            className="hover:scale-x-110 transition-all ease-in-out duration-200"
            src="https://themepanthers.com/wp/nest/d1/wp-content/uploads/2022/02/app-store.jpg"
            alt=""
          />
        </div>
        <p>Secured Payment GateWaya</p>
        <img
          src="https://themepanthers.com/wp/nest/d1/wp-content/uploads/2022/02/payment-method.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default InstallApp;
