import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { cf, co, dl,  ga, gb, gi, gn, mi, ss, h1 } from "../../images/img";

const Slider = () => {
  const products = [
    {
      image: cf,
      name: "ft2",
      pname: "Product 1",
      pdetail: "Lorem porem ipsum",
      pprice: "Rs. 123",
    },
    {
      image: co,
      name: "ft2",
      pname: "Product 2",
      pdetail: "Lorem porem ipsum",
      pprice: "Rs. 123",
    },
    {
      image: dl,
      name: "ft2",
      pname: "Product 3",
      pdetail: "Lorem porem ipsum",
      pprice: "Rs. 123",
    },
    {
      image: ga,
      name: "ft2",
      pname: "Product 4",
      pdetail: "Lorem porem ipsum",
      pprice: "Rs. 123",
    },
    {
      image: gb,
      name: "ft2",
      pname: "Product 5",
      pdetail: "Lorem porem ipsum",
      pprice: "Rs. 123",
    },
    {
      image: gi,
      name: "ft2",
      pname: "Product 6",
      pdetail: "Lorem porem ipsum",
      pprice: "Rs. 123",
    },
    {
      image: gn,
      name: "ft2",
      pname: "Product 7",
      pdetail: "Lorem porem ipsum",
      pprice: "Rs. 123",
    },
    {
      image: mi,
      name: "ft2",
      pname: "Product 8",
      pdetail: "Lorem porem ipsum",
      pprice: "Rs. 123",
    },
    {
      image: ss,
      name: "ft2",
      pname: "Product 9",
      pdetail: "Lorem porem ipsum",
      pprice: "Rs. 123",
    },
    // Add more products as needed
  ];

  return (
    <div className="slider-cointainer ">
      <div className="detail-slider">
        <img src={h1} alt="" />
        <div className="detail-box">
          <p className="text-4xl">Lorem poem ipsum</p>
          <p className="text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
            eaque sed beatae iste libero enim pariatur, ipsam accusamus
            asperiores dignissimos ex sit laudantium illum officia maiores unde.
            Quae, quis itaque.
          </p>
        </div>
      </div>
      <div className="slider-swiper">
        <p className="text-4xl text-center mb-10 ">Shop More</p>
        <div className="sliderShadow">
          <Swiper
            modules={[Navigation, Pagination, A11y, Autoplay]}
            spaceBetween={30}
            slidesPerView={4}
            autoplay={{ delay: 3000 }}
            navigation={{ clickable: true }}
          >
            {products.map((product, index) => (
              <SwiperSlide key={index}>
                <div className="slider-img h-2">
                  <img src={product.image} alt={product.name} className="" />
                  <div className="slider-detail">
                    <p>{product.pname}</p>
                    <span >{product.pdetail}</span>
                    <span className="ml-[160px]">{product.pprice}</span>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Slider;
