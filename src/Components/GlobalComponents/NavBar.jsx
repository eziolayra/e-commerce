import React from "react";
import {  IoMdSearch, IoMdCart } from "react-icons/io";
import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import { LiaClipboardListSolid } from "react-icons/lia";

const navData = [
  {
    name: "SHOP",
    linkto: "/shop",
  },
  {
    name: "ABOUT US",
    linkto: "/AboutUs",
    subMenu: [
      { name: "Farm", linkto: "/about-us/farm" },
      { name: "Herbs", linkto: "/about-us/herbs" },
      { name: "Library", linkto: "/about-us/library" },
    ],
  },
  {
    name: "CONTACT US",
    linkto: "/contact-us",
  },
  {
    name: "STORES",
    linkto: "/store",
  },
];

const NavBar = () => {
  return (
    <div className="navContainer ">
      <div className="Nav">
        <div className="NavHome">
          {navData.map((data, index) => (
            <Link key={index} to={data.linkto} >
              {data.name}
            </Link>
          ))}
        </div>
        <div className="NavLogo text-3xl">
          <Link to="/">T&S Herbs</Link>
        </div>
        <div className="Nav-logo">
          <div className="nav-logo-search">
            <input type="text" placeholder="Search" />
            <IoMdSearch className="cursor-pointer" />
          </div>
          <Link to="/login">
            <FaUser />
          </Link>
          <a href="#!">
          <LiaClipboardListSolid />
          </a>
          <a href="#!">
            <IoMdCart />
          </a>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
