import React from "react";
import "../App.css";
import { IoIosHelpCircleOutline, IoMdSearch, IoMdCart } from "react-icons/io";
import { FaUser } from "react-icons/fa";

const NavBar = () => {
  const navdata = [
    {
      name: "MEN",
      slug: "",
    },
    {
      name: "WOMEN",
      slug: "",
    },
    {
      name: "KIDS",
      slug: "",
    },
    {
      name: "SOCKS",
      slug: "",
    },
    {
      name: "SALE",
      slug: "",
    },
    {
      name: "STORES",
      slug: "",
    },
  ];


  return (
    <div>
      <div className="Nav">
        <div className="NavHome">
          {navdata.map((data, index) => (
            <a key={index} href={data?.slug} className="NavHomeapp">
              {data.name}
            </a>
          ))}
        </div>
        <div>
          <a href="#!">LOGO</a>
        </div>
        <div className="Nav-logo">
          <a href="#!">
            <IoMdSearch />
          </a>
          <a href="#!">
            <IoIosHelpCircleOutline />
          </a>
          <a href="#!">
            <FaUser />
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
