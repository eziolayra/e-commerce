import React from "react";
import "../App.css";
import f1 from "../images/fe1.avif";
import f2 from "../images/fe2.avif";
import f3 from "../images/fe3.avif";

const ForEveryday = () => {
  const productdata = [
    {
      image: f1,
      name: "Product 1",
      detail: "Lorem porem ipsum",
    },
    {
      image: f2,
      name: "Product 2",
      detail: "Lorem porem ipsum",
    },
    {
      image: f3,
      name: "Product 3",
      detail: "Lorem porem ipsum",
    },
  ];

  return (
    <div className="ForEveryday">
      {productdata.map((data, index) => (
        <div key={index} className="everyday-box">
          <div className="img-wrapper">
            <img src={data.image} alt={data.name} />
            <div className="everyday-button">
              <button>Shop for MEN</button>
              <button>Shop for WOMEN</button>
            </div>
          </div>

          <div className="everyday-sub-box">
            <h2>{data.name}</h2>
            <p>{data.detail}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ForEveryday;
