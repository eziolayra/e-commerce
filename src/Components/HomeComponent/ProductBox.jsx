import React from 'react'
import {coll, hp1, hp2, hp3, hp4} from '../../images/img';


const ProductBox = () => {

  const productdata = [
    {
      image: hp1,
      name: "Product 1",
      detail: "Lorem porem ipsum",
      price: "Rs. 10.00",
    },
    {
      image: hp2,
      name: "Product 2",
      detail: "Lorem porem ipsum",
      price: "Rs. 10.00",
    },
    {
      image: hp3,
      name: "Product 3",
      detail: "Lorem porem ipsum",
      price: "Rs. 10.00",
    },
    {
      image: hp4,
      name: "Product 4",
      detail: "Lorem porem ipsum",
      price: "Rs. 10.00",
    },
  ];
  return (
    <div className="ProductBoxContainer ">
      <div className="ProductBox">
        <div className="ProductBox-img">
          <img src={coll} alt="/" />
          <div className="productBox-text">
            <p className='text-3xl'>Lorem Porem Ipsum</p>
            <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h4>
          </div>
          <div className="productBox-button">
            <button>Shop Now</button>
          </div>
        </div>
        <div className="ProductBox-subimg">
          {productdata.map((data, index) => (
            <div key={index} className="subimg-box">
              <div className="subimg-text">
                <img src={data.image} alt={data.name} />
                <p className='text-2xl'>{data.name}</p>
                <p>
                  {data.detail}{" "}
                  <span className="subimg-price">{data.price}</span>
                </p>
                <div className="subimg-button">
                  <button>Shop Now</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProductBox
