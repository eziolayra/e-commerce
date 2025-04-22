import React from "react";
import { useParams } from "react-router-dom";
import productdata from "../../Datas/OurHerbsdata";

const OurHerbsProduct = () => {
    const { id } = useParams();
    const product = productdata
        .flatMap((category) => category.product)
        .find((item) => item.id === id);

    console.log("Details of Our Herbs",product);
    

    if (!product) return <p className="text-3xl flex items-center justify-center h-screen">Product not found</p>;

    return (
        <div className="p-4">
            <img src={product.image} alt={product.name} className="w-60" />
            <h1 className="text-3xl font-bold my-3">{product.name}</h1>
            <p className="text-lg">{product.detail}</p>
        </div>
    );
};

export default OurHerbsProduct;
