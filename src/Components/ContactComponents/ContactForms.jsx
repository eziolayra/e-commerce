import React from "react";
import { Link } from "react-router-dom";
import { contact, socials } from "../../Datas/ContactDatas";

const ContactForms = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-10 bg-gray-50 text-black">
      {/* Contact Info Section */}


      {/* Contact Form Section */}
      <form className="md:col-span-2 bg-white shadow-lg rounded-lg p-8 space-y-6">
        <h2 className="text-2xl font-semibold mb-4">Send a Message</h2>

        <div className="flex flex-col">
          <label className="mb-1 font-medium">Name</label>
          <input
            type="text"
            placeholder="Your Name"
            className="p-3 bg-gray-100 rounded border focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>

        <div className="flex flex-col">
          <label className="mb-1 font-medium">Email</label>
          <input
            type="email"
            placeholder="you@example.com"
            className="p-3 bg-gray-100 rounded border focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>

        <div className="flex flex-col">
          <label className="mb-1 font-medium">Message</label>
          <textarea
            rows="5"
            placeholder="Write your message..."
            className="p-3 bg-gray-100 rounded border resize-none focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>

        <button
          type="submit"
          className="bg-green-600 hover:bg-green-700 text-white py-3 px-6 rounded text-lg transition"
        >
          Send Message
        </button>
      </form>

      <div className="flex flex-col items-center justify-center ">
        <h2 className="text-3xl font-semibold mb-6">Contact Info</h2>
        <div className="space-y-4 pl-[120px] w-full">
          {contact.map((data, index) => (
            <div key={index} className="flex items-center gap-3">
              <span className="text-green-700">{data.icon}</span>
              <div className="flex gap-2">
                <span className="font-medium">{data.name}</span>{data.text}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 w-full flex flex-col items-center">
          <h3 className="text-xl font-semibold mb-3">Connect with us</h3>
          <div className="flex gap-4">
            {socials.map((data, index) => (
              <Link
                key={index}
                to={data.linkto}
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-700 hover:text-green-900 transition text-xl"
              >
                {data.icon ? data.icon : data.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForms;
