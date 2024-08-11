import React from "react";
import { cf, co, dl, ga, gb, gi, mi, ss } from "../../images/img";
import HerbsDetail from "../GlobalComponents/HerbsDetail";

const HerbsLibarary = () => {
  const filterData = [
    {
      image: gb,
      name: "Goji Berries",
      detail: "Lorem porem ipsum Lorem porem ipsum Lorem porem ipsum ",
    },
    {
      image: ss,
      name: "Solomon's seal",
      detail: "Lorem porem ipsum",
    },
    {
      image: cf,
      name: "Cordyceps flowers",
      detail: "Lorem porem ipsum",
    },
    {
      image: mi,
      name: "Mint",
      detail: "Lorem porem ipsum",
    },
    {
      image: dl,
      name: "Dill",
      detail: "Lorem porem ipsum",
    },
    {
      image: co,
      name: "Coriander",
      detail: "Lorem porem ipsum",
    },
    {
      image: ga,
      name: "Garlic",
      detail: "Lorem porem ipsum",
    },
    {
      image: gi,
      name: "Ginger",
      detail: "Lorem porem ipsum",
    },
  ];
  return (
    <div className="grid grid-cols-4 items-center justify-center gap-5 p-10 ">
      {filterData.map((data, index) => (
        <React.Fragment key={index}>
          {/* <HerbsDetail {...data}/> */}
          <HerbsDetail
            img={data?.image}
            name={data?.name}
            detail={data?.detail}
          />
        </React.Fragment>
      ))}
    </div>
  );
};

export default HerbsLibarary;
