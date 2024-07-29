import React, { useState } from "react";
import ProductCard from "../GlobalComponents/ProductCard";
import { cf, co, dl,  ga, gb, gi, gn, mi, ss } from "../../images/img";

const OurProducts = () => {
  const [activeTab, setActiveTab] = useState("Kitchen");

  const productdata = [
    {
      name: "Kitchen",
      product: [
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
      ],
    },
    {
      name: "Medical",
      product: [
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
        {
          image: gn,
          name: "Ginseng",
          detail: "Lorem porem ipsum",
        },
      ],
    },
    {
      name: "Chinese",
      product: [
        {
          image: gb,
          name: "Goji Berries",
          detail: "Lorem porem ipsum",
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
      ],
    },
  ];
  const filterData =
    productdata.find((item) => item.name === activeTab).product || [];

  return (
    <div className="OurProducts">
      <p className="text-3xl mb-5">Our Herbs</p>
      <div>
        <div className="buttonContainer">
          <button
            className={`tab ${activeTab === "Kitchen" && "activeTab"}`}
            onClick={() => setActiveTab("Kitchen")}
          >
            Kitchen
          </button>
          <button
            className={`tab ${activeTab === "Medical" && "activeTab"}`}
            onClick={() => setActiveTab("Medical")}
          >
            Medical
          </button>
          <button
            className={`tab ${activeTab === "Chinese" && "activeTab"}`}
            onClick={() => setActiveTab("Chinese")}
          >
          Chinese
          </button>
        </div>
        <div className="Chinese">
          {filterData.map((data, index) => (
            <React.Fragment key={index}>
              {/* <ProductCard {...data}/> */}
              <ProductCard
                img={data?.image}
                name={data?.name}
                detail={data?.detail}
              />
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurProducts;
