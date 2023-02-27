import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";

function Checkout() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const { id } = useParams();
  const [product, setProducts] = useState([]);
  //   useEffect(() => {
  //     const url = `https://fakestoreapi.com/products/${id}`;
  //     fetch(url)
  //       .then((response) => response.json())
  //       .then((data) => setProducts(data));
  //   }, []);
  console.log(product);
  return (
    <>
      <Navbar />
      <div class="mt-20">
        <h1 class="flex items-center justify-center font-bold text-[#3bb77e] text-md lg:text-3xl">
          Checkout
        </h1>
      </div>
      <div class="container p-12 mx-auto">
        <div class="flex flex-col w-full px-0 mx-auto md:flex-row">
          <div class="flex flex-col md:w-full">
            <h2 class="mb-4 font-bold md:text-xl text-heading ">
              Shipping Address
            </h2>
            <form onSubmit={handleSubmit} class="justify-center w-full mx-auto">
              <div class="">
                <div class="space-x-0 lg:flex lg:space-x-4">
                  <div class="w-full lg:w-1/2">
                    <label
                      for="firstName"
                      class="block mb-3 text-sm font-semibold text-gray-500"
                    >
                      First Name
                    </label>
                    <input
                      name="firstName"
                      type="text"
                      placeholder="First Name"
                      class="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-[#3bb77e]"
                    />
                  </div>
                  <div class="w-full lg:w-1/2 ">
                    <label
                      for="firstName"
                      class="block mb-3 text-sm font-semibold text-gray-500"
                    >
                      Last Name
                    </label>
                    <input
                      name="Last Name"
                      type="text"
                      placeholder="Last Name"
                      class="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-[#3bb77e]"
                    />
                  </div>
                </div>
                <div class="mt-4">
                  <div class="w-full">
                    <label
                      for="Email"
                      class="block mb-3 text-sm font-semibold text-gray-500"
                    >
                      Email
                    </label>
                    <input
                      name="Last Name"
                      type="text"
                      placeholder="Email"
                      class="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-[#3bb77e]"
                    />
                  </div>
                </div>
                <div class="mt-4">
                  <div class="w-full">
                    <label
                      for="Address"
                      class="block mb-3 text-sm font-semibold text-gray-500"
                    >
                      Address
                    </label>
                    <textarea
                      class="w-full px-4 py-3 text-xs border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-[#3bb77e]"
                      name="Address"
                      cols="20"
                      rows="4"
                      placeholder="Address"
                    ></textarea>
                  </div>
                </div>
                <div class="space-x-0 lg:flex lg:space-x-4">
                  <div class="w-full lg:w-1/2">
                    <label
                      for="city"
                      class="block mb-3 text-sm font-semibold text-gray-500"
                    >
                      City
                    </label>
                    <input
                      name="city"
                      type="text"
                      placeholder="City"
                      class="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-[#3bb77e]"
                    />
                  </div>
                  <div class="w-full lg:w-1/2 ">
                    <label
                      for="postcode"
                      class="block mb-3 text-sm font-semibold text-gray-500"
                    >
                      Postcode
                    </label>
                    <input
                      name="postcode"
                      type="text"
                      placeholder="Post Code"
                      class="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-[#3bb77e]"
                    />
                  </div>
                </div>
                <div class="flex items-center mt-4">
                  <label class="flex items-center text-sm group text-heading">
                    <input
                      type="checkbox"
                      class="w-5 h-5 border border-gray-300 rounded focus:outline-none focus:ring-1"
                    />
                    <span class="ml-2">
                      Save this information for next time
                    </span>
                  </label>
                </div>
                <div class="relative pt-3 xl:pt-6">
                  <label
                    for="note"
                    class="block mb-3 text-sm font-semibold text-gray-500"
                  >
                    {" "}
                    Notes (Optional)
                  </label>
                  <textarea
                    name="note"
                    class="flex items-center w-full px-4 py-3 text-sm border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-[#3bb77e]"
                    rows="4"
                    placeholder="Notes for delivery"
                  ></textarea>
                </div>
                <div class="mt-4">
                  <button class="w-full px-6 py-2 text-white bg-[#3bb77e] hover:bg-[#3bb76e]">
                    Process
                  </button>
                </div>
              </div>
            </form>
          </div>
          <div class="flex flex-col w-full ml-0 lg:ml-12 lg:w-2/5">
            <div class="pt-12 md:pt-0 2xl:ps-4">
              <h2 class="text-xl font-bold">Order Summary</h2>
              <div class="mt-8">
                <div class="flex flex-col space-y-4">
                  {product.map((item, indx) => (
                    <div key={indx} class="flex space-x-4">
                      <div>
                        <img src={item.image} alt={item.title} class="w-60" />
                      </div>
                      <div>
                        <h2 class="text-xl font-bold">Title</h2>
                        <p class="text-sm">{item.title}</p>
                        <span class="text-red-600">Price</span> ${item.price}
                      </div>
                      <div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="w-6 h-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div class="flex p-4 mt-4">
                <h2 class="text-xl font-bold">ITEMS 2</h2>
              </div>
              <div class="flex items-center w-full py-4 text-sm font-semibold border-b border-gray-300 lg:py-5 lg:px-3 text-heading last:border-b-0 last:text-base last:pb-0">
                Subtotal<span class="ml-2">$40.00</span>
              </div>
              <div class="flex items-center w-full py-4 text-sm font-semibold border-b border-gray-300 lg:py-5 lg:px-3 text-heading last:border-b-0 last:text-base last:pb-0">
                Shipping Tax<span class="ml-2">$10</span>
              </div>
              <div class="flex items-center w-full py-4 text-sm font-semibold border-b border-gray-300 lg:py-5 lg:px-3 text-heading last:border-b-0 last:text-base last:pb-0">
                Total<span class="ml-2">$50.00</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Checkout;
