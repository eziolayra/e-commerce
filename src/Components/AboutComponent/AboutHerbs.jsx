import React from "react";
import { oh1, oh2, oh3, oh4 } from "../../images/img";

const AboutHerbs = () => {
  return (
    <div className="AboutHerbs">
      <div className="relative before:content-[''] before:absolute before:inset-0 before:bg-[#445f39] before:opacity-40">
        <img src={oh1} alt="/" className="w-full object-cover h-[500px]" />
        <div className="absolute inset-0 max-w-[600px] m-auto flex flex-col justify-center text-center text-white z-10">
          <p className="text-4xl mb-5">Lorem poem ipsum</p>
          <p className="text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
            eaque sed beatae iste libero enim pariatur, ipsam accusamus
            asperiores dignissimos ex sit laudantium illum officia maiores unde.
            Quae, quis itaque.
          </p>
        </div>
      </div>
      <div className="flex">
        <div className="flex flex-col gap-10 text-center w-1/2 justify-center items-center text-green-800">
          <p className="text-3xl">Home Grown</p>
          <p className="text-xl max-w-[600px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, ipsum.
            Iusto aperiam ipsa temporibus libero delectus earum iure fugiat
            amet, quisquam quia, vitae numquam nihil. Omnis assumenda autem
            laudantium quod.
          </p>
          <button className="ring-2 ring-green-600 p-3 pl-8 pr-8 rounded hover:bg-transparent hover:text-green-600 text-xl bg-green-600 text-white cursor-pointer">
            Visit Our Farm
          </button>
        </div>
        <img src={oh3} alt="/" className="w-1/2 object-cover" />
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
      <div className="flex ">
        <img src={oh2} alt="/" className="w-1/2 object-cover" />
        <div className="w-1/2 flex flex-col gap-5 items-center justify-center">
          <p className="text-3xl max-w-[600px]">
            Worldwide Sourced, Moral Goods and Services
          </p>
          <p className="max-w-[600px] text-xl">
            Not every herb is suitable for our farm to grow. For example, kava
            grows abundantly on the South Pacific's tropical islands.
            Furthermore, Maca grows best in the Peruvian Andes Mountains at high
            elevations. We look to responsible wild craftsmen and independent
            farmers worldwide when we are unable to grow a herb ourselves. We
            make sure all of the suppliers we collaborate with adhere to the
            strictest ethical and quality standards. We won't provide a herb if
            we can't figure out how to get it ethically.
          </p>
        </div>
      </div>
      <div className="relative text-white before:content-[''] before:absolute before:inset-0 before:bg-[#445f39] before:opacity-40 flex items-center justify-center">
        <img src={oh4} alt="/" className="w-full object-cover h-[800px]" />
        <div className="about-box absolute text-center max-w-[600px]">
          <p className="font-bold text-3xl mb-5">Check Our Herbs Library</p>
          <p className="font-bold text-xl mb-5">
            With the aid of our herb library, you may learn more about the uses
            of various herbs, their growth patterns, and more.
          </p>
          <button className="ring-2 ring-green-600 p-3 pl-8 pr-8 rounded hover:bg-transparent text-xl bg-green-600 text-white cursor-pointer">
            Visit Library{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutHerbs;
