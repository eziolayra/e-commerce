import React, { useEffect } from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaPhoneAlt,
  FaYoutube,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoIosMail, IoMdContact } from "react-icons/io";
import { Link } from "react-router-dom";

const Footer = () => {
  useEffect(() => {
    const links = document.querySelectorAll("a");

    links.forEach((link) => {
      link.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      });
    });

    return () => {
      links.forEach((link) => {
        link.removeEventListener("click", () => {
          window.scrollTo({ top: 0, behavior: "smooth" });
        });
      });
    };
  }, []);

  const socials = [
    {
      name: <FaFacebook />,
      linkto: "https://www.facebook.com/prabal.aryal.773",
    },
    {
      name: <FaInstagram />,
      linkto: "https://www.facebook.com/prabal.aryal.773",
    },
    {
      name: <FaXTwitter />,
      linkto: "https://www.facebook.com/prabal.aryal.773",
    },
    {
      name: <FaLinkedin />,
      linkto: "https://www.facebook.com/prabal.aryal.773",
    },
    {
      name: <FaYoutube />,
      linkto: "https://www.facebook.com/prabal.aryal.773",
    },
  ];

  return (
    <div className="bg-green-600 text-white flex gap-5 justify-evenly p-[100px]">
      <div className="flex flex-col gap-3">
        <Link to="/contact-us" className="font-bold text-xl ">Contact Us</Link>
        <p className="flex items-center gap-2">
          <FaPhoneAlt />
          +977-9876543210
        </p>
        <p className="flex items-center gap-2">
          <IoIosMail />
          abc@gmail.com
        </p>
        <p className="flex items-center gap-2">
          <IoMdContact />
          01-1234567
        </p>
      </div>
      <div className="flex flex-col gap-3">
        <Link to={"/AboutUs"} className="font-bold text-xl ">
          About Us
        </Link>
        <Link to="/AboutHerbs">Our Herbs</Link>
        <Link to="/AboutFarm">Our Farms</Link>
        <Link to="/HerbsLibarary">Herbs Library</Link>
      </div>
      <div className="flex flex-col justify-center">
        <p className="text-center font-bold">Follow us:</p>
        <div className="flex justify-evenly mt-6 text-xl">
        {socials.map((data, index) => (
              <div key={index}>
                <Link
                  to={data.linkto}
                  className="text-xl text-center justify-center "
                >
                  {data.name}
                </Link>
              </div>
            ))}
        </div>
        <div className="text-center">
          <p className="mt-5 mb-8">© 2022. All Rights Reserved</p>
          <Link to="/" className="text-3xl mt-8">
            T&S Herbs
          </Link>
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <Link to="/Shop" className="font-bold text-xl ">Shop</Link>
        <Link to="/AboutUs">Medical</Link>
        <Link to="/AboutUs">Chinese</Link>
        <Link to="/AboutUs">Kitchen</Link>
        <button className="ring ring-white rounded p-1 pl-3 pr-3 hover:shadow-xl">
          View All
        </button>
      </div>
      <div className="flex flex-col gap-3">
        <p className="font-bold text-xl ">Stores</p>
        <p>Location 1</p>
        <p>Location 2</p>
        <p>Location 3</p>
        <button className="ring ring-white rounded p-1 pl-3 pr-3 hover:shadow-xl">
          View All
        </button>
      </div>
    </div>
  );
};

export default Footer;