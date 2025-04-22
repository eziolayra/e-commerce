import {
    FaFacebook,
    FaInstagram,
    FaLinkedin,
    FaPhoneAlt,
    FaYoutube,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { IoLocationSharp } from "react-icons/io5";

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

const contact = [
    {
        icon: <IoLocationSharp />,
        name: "Address:",
        text: "Lorem, Porem",
    },
    {
        icon: <FaPhoneAlt />,
        name: "Phone:",
        text: "123456789",
    },
    {
        icon: <IoMdMail />,
        name: "Email:",
        text: "abc@gmail",
    },
];

export { socials, contact };