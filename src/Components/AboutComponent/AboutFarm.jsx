import React from "react";
import { af1, af2, af3, af4 } from "../../images/img";

const AboutFarm = () => {
  const pic = [
    {
      image: af1,
      detail: "Lorem porem ipsum",
    },
    {
      image: af4,
      detail: "Lorem ipsum porem",
    },
    {
      image: af2,
      detail: "porem ipsum Lorem",
    },
  ];

  return (
    <div>
      <div className="relative before:content-[''] before:absolute before:inset-0 before:bg-[#445f39] before:opacity-40">
        <img src={af3} alt="" className="w-full object-cover h-[500px]" />
        <div className="absolute inset-0 max-w-[600px] m-auto flex flex-col justify-center text-center text-white z-10">
          <p className="text-4xl mb-5">Our Farms</p>
          <p className="text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
            eaque sed beatae iste libero enim pariatur, ipsam accusamus
            asperiores dignissimos ex sit laudantium illum officia maiores unde.
            Quae, quis itaque.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-5 p-5">
        {pic.map((item, index) => (
          <div
            key={index}
            className="relative before:content-[''] before:absolute before:inset-0 before:bg-[#445f39] before:opacity-40"
          >
            <img
              src={item.image}
              alt=""
              className="w-full object-cover h-[500px]"
            />
            <div className="absolute inset-0 max-w-[500px] text-white top-[80%] z-10 p-5">
              <p className="text-xl ">{item.detail}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="flex items-center gap-5 flex-col justify-center bg-green-700 p-10 h-[400px] text-white">
        <p className="text-3xl">Lorem porem ispurem</p>
        <p className="max-w-[850px] text-xl">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut
          temporibus cum non aliquid commodi quibusdam consequuntur
          necessitatibus harum quo saepe laborum laudantium dolores consectetur
          hic est delectus
        </p>
      </div>
      <div className="flex">
        <div className="flex flex-col gap-10 text-center w-1/2 justify-center items-center text-green-800">
          <p className="text-3xl">Our Farmers</p>
          <p className="text-xl max-w-[600px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, ipsum.
            Iusto aperiam ipsa temporibus libero delectus earum iure fugiat
            amet, quisquam quia, vitae numquam nihil. Omnis assumenda autem
            laudantium quod. Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Aut, ipsum. Iusto aperiam ipsa temporibus libero delectus
            earum iure fugiat amet, quisquam quia, vitae numquam nihil. Omnis
            assumenda autem laudantium quod.
          </p>
        </div>
        <img src={af2} alt="/" className="w-1/2 object-cover" />
      </div>
      <div className="flex gap-5 items-center justify-center p-10">
        <iframe
          width="75%"
          height="600"
          src="https://www.youtube.com/embed/AbjKwCS74Zg?si=vGD1jB7TgeCLJB_w"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      </div>
    </div>
  );
};

export default AboutFarm;
