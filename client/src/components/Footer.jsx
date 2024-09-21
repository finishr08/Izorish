import React from "react";
import { assets } from "../assets/assets";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        <div>
          <img className="mb-5 w-32" src={assets.logo} alt="Izorish" />
          <p className="w-full md:w-2/3 text-gray-600">
            Izorish: Where timeless style meets modern fashion, offering a
            curated selection of high-quality clothing to keep your wardrobe
            effortlessly chic and versatile.
          </p>
        </div>

        <div>
          <p className="text-xl font-medium mb-5">COMPANY</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <Link to="/">Home</Link>
            <Link to="/about">About us</Link>
            <Link to="/">Delivery</Link>
            {/* <li>Privacy Policy</li> */}
          </ul>
        </div>

        <div>
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>+1-112-345-7896</li>
            <li>contact@izorish.com</li>
          </ul>
        </div>
      </div>

      <div>
        <hr />
        <p className="py-5 text-sm text-center">
          Izorish © Copyright 2024-All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
