import React, { useState } from "react";
import ProductCard from "../GlobalComponents/ProductCard";
import productdata from "../../Datas/OurHerbsdata";

const OurProducts = () => {
  const [activeTab, setActiveTab] = useState("Kitchen");

  const filterData =
    productdata.find((item) => item.iname === activeTab).product || [];

  return (
    <div className="OurProducts">
      <p className="text-3xl mb-5 font-bold">Our Herbs</p>
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
        <div className="Chinese p-2">
          {filterData.map((data, index) => (
            <React.Fragment key={index}>
              {/* <ProductCard {...data}/> */}
              <ProductCard
                img={data?.image}
                name={data?.name}
                detail={data?.detail}
                id={data?.id}
              />
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurProducts;
