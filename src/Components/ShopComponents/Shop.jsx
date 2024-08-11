import React from "react";
import { gi } from "../../images/img";
import ShoppingProduct from "./ShoppingProduct";

const Shop = () => {
  const Data = [
    {
      img: gi,
      name: "Product 1",
      price: "Rs. 10.00",
    },
    {
      img: gi,
      name: "Product 1",
      price: "Rs. 10.00",
    },
    {
      img: gi,
      name: "Product 1",
      price: "Rs. 10.00",
    },
    {
      img: gi,
      name: "Product 1",
      price: "Rs. 10.00",
    },
    {
      img: gi,
      name: "Product 1",
      price: "Rs. 10.00",
    },
    {
      img: gi,
      name: "Product 1",
      price: "Rs. 10.00",
    },
  ];
  return (
    <div className="grid grid-cols-4 gap-4 p-5">

      {Data.map((data, index) => (
        <React.Fragment key={index}>
          <ShoppingProduct img={data.img} name={data.name} price={data.price} />
        </React.Fragment>
      ))}
    </div>
  );
};

export default Shop;
