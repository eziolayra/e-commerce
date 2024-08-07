import React from "react";
import { IoIosHelpCircleOutline, IoMdSearch, IoMdCart } from "react-icons/io";
import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";

const navData = [
  {
    name: "SHOP",
    slug: "/shop",
  },
  {
    name: "ABOUT US",
    slug: "/AboutUs",
  },
  {
    name: "CONTACT US",
    slug: "/contact-us",
  },
  {
    name: "STORES",
    slug: "/stores",
  },
];

const NavBar = () => {
  return (
    <div className="navContainer ">
      <div className="Nav">
        <div className="NavHome">
          {navData.map((data, index) => (
            <Link key={index} to={data.slug} >
              {data.name}
            </Link>
          ))}
        </div>
        <div className="NavLogo text-3xl">
          <Link to="/">T-S Herbs</Link>
        </div>
        <div className="Nav-logo">
          <div className="nav-logo-search">
            <input type="text" placeholder="Search" />
            <IoMdSearch className="cursor-pointer" />
          </div>
          <a href="#!">
            <IoIosHelpCircleOutline />
          </a>
          <Link to="/login">
            <FaUser />
          </Link>
          <a href="#!">
            <IoMdCart />
          </a>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
