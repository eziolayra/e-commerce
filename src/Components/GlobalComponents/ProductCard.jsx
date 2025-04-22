import React from "react";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ img, id, name, detail }) => {

  const navigate = useNavigate();
  return (
    <div className="product-box ">
      <div className="img-wrapper">
        <img src={img} alt={name} />
        <div className="product-button">
          <button onClick={() => navigate(`/product/${id}`)}>View Details</button>
        </div>
      </div>
      <div className="product-sub-box">
        <p className="text-2xl border-b-4 pt-2 pb-3">{name}</p>
        <p className="text-lg p-2 ">{detail}</p>
      </div>
    </div>
  );
};

export default ProductCard;
