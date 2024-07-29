import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-green-600 text-white flex gap-5 justify-evenly p-[100px]">
      <div className="flex flex-col gap-3">
        <p className="font-bold text-xl underline">About Us</p>
        <Link to="/AboutUs">Our Herbs</Link>
        <Link to="/AboutUs">Our Farms</Link>
        <Link to="/AboutUs">Our Commitment</Link>
      </div>
      <div className="flex flex-col gap-3">
        <p className="font-bold text-xl underline">Contact</p>
        <p>+977-9876543210</p>
        <p>abc@gmail.com</p>
        <p>01-1234567</p>
      </div>
      <div className="flex flex-col justify-center">
        <p className="text-center font-bold">Follow us:</p>
        <div className="flex justify-evenly mt-6 text-xl">
          <FaFacebook className="cursor-pointer" />
          <FaInstagram className="cursor-pointer" />
          <FaXTwitter className="cursor-pointer" />
          <FaLinkedin className="cursor-pointer" />
          <FaYoutube className="cursor-pointer" />
        </div>
        <div className="text-center">
          <p className="mt-5">© 2022. All Rights Reserved</p>
          <p className="text-3xl mt-8">T-S Herbs</p>
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <p className="font-bold text-xl underline">Shop</p>
        <Link to="/AboutUs">Medical</Link>
        <Link to="/AboutUs">Chinese</Link>
        <Link to="/AboutUs">Kitchen</Link>
        <button className="ring ring-white rounded p-1 pl-3 pr-3 hover:shadow-xl">View All</button>
      </div>
      <div className="flex flex-col gap-3">
        <p className="font-bold text-xl underline">Stores</p>
        <p>Location 1</p>
        <p>Location 2</p>
        <p>Location 3</p>
        <button className="ring ring-white rounded p-1 pl-3 pr-3 hover:shadow-xl">View All</button>
      </div>
    </div>
  );
};

export default Footer;
