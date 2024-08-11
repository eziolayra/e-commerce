import React from "react";
import { coll, h1, h2 } from "../../images/img";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const HomePage = () => {
  const homeData = [
    {
      image: h2,
      title: "Lorrem Porem Ipsum",
      description:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit Sequi dolores aspernatur modi porro veniam odit inventore assumenda deleniti quibusdam provident accusamus illo debitis omnis quaerat molestias suscipit est nesciunt ipsa Lorem ipsum dolor sit amet consectetur adipisicing elit",
    },
    {
      image: h1,
      title: "Lorrem Ipsum Porem",
      description:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit Sequi dolores aspernatur modi porro veniam odit inventore assumenda deleniti quibusdam provident accusamus illo debitis omnis quaerat molestias suscipit est nesciunt ipsa Lorem ipsum dolor sit amet consectetur adipisicing elit",
    },
    {
      image: coll,
      title: "Ipsum Lorrem Porem ",
      description:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit Sequi dolores aspernatur modi porro veniam odit inventore assumenda deleniti quibusdam provident accusamus illo debitis omnis quaerat molestias suscipit est nesciunt ipsa Lorem ipsum dolor sit amet consectetur adipisicing elit",
    },
  ];
  return (
    <div className="HomeContainer">
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        slidesPerView={1}
        pagination={{ clickable: true }}
        loop={true}
        autoplay={{
          delay: 6000,
          disableOnInteraction: false,
        }}
      >
        {homeData.map((data, index) => (
          <SwiperSlide key={index}>
            <div className="HomePage">
              <img src={data.image} alt="" className="HomePage-image" />
              <div className="HomePage-textbox">
                <div>
                  <strong>{data.title}</strong>
                  <p>{data.description}</p>
                </div>
                <button>Learn More</button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HomePage;
