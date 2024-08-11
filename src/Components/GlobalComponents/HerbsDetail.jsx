import React from "react";

const HerbsDetail = ({ img, name, detail }) => {
  return (
    <div className="grid p-5 shadow-xl rounded-lg">
      <img src={img} alt={name} className="w-full h-[300px] object-cover shadow-md rounded"/>
      <p className="text-2xl my-2 font-bold text-center">{name}</p>
      <p className="text-xl my-2 overflow-hidden whitespace-nowrap text-ellipsis ">{detail}</p>
      <button className="bg-green-500 my-5 p-2 text-white rounded hover:bg-green-700 text-xl">Learn More</button>
    </div>
  );
};

export default HerbsDetail;
