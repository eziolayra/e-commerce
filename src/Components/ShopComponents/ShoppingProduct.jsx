import React from "react";

const ShoppingProduct = ({ img, name, price }) => {
  return (
    <div className="grid gap-1">
     
      <img src={img} alt="" className="w-full h-[400px] object-cover shadow" />
      <div className="text-2xl p-1"><span className="">{name}</span> <span className="pl-[170px]">{price}</span></div>
      <button className="bg-green-500 p-1 text-lg text-white hover:bg-green-700">
        Add To Cart
      </button>
      <button className="bg-amber-500 p-1 text-lg text-white hover:bg-amber-700">
        Add To WishList
      </button>
    </div>
  );
};

export default ShoppingProduct;
