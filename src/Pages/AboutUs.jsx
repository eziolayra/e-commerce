import React from "react";
import { oh2, oh3 } from "../images/img";
import CountUp from "react-countup";

const AboutUs = () => {
  return (
    <div>
      <p className="text-4xl font-bold text-center my-10">ABOUT US</p>
      <div className="flex gap-5 justify-evenly m-10 items-center">
        <div className="text-center">
          <p className="text-3xl font-bold"> Welcome</p>
          <p className="text-3xl font-bold">Few words </p>
          <p className="text-3xl font-bold"> About Us</p>
        </div>
        <div className=" max-w-[500px] text-2xl">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui, totam.
          Esse error blanditiis repudiandae quasi vel ex accusamus eligendi
          explicabo. Neque expedita illum quisquam voluptate ducimus unde
          deserunt, eos dolores.Lorem ipsum dolor, sit amet consectetur
          adipisicing elit. Qui, totam. Esse error blanditiis repudiandae quasi
          vel ex accusamus eligendi explicabo. Neque expedita illum quisquam
          voluptate ducimus unde deserunt, eos dolores.
        </div>
        <div className="max-w-[500px] text-2xl">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui, totam.
          Esse error blanditiis repudiandae quasi vel ex accusamus eligendi
          explicabo. Neque expedita illum quisquam voluptate ducimus unde
          deserunt, eos dolores.Lorem ipsum dolor, sit amet consectetur
          adipisicing elit. Qui, totam. Esse error blanditiis repudiandae quasi
          vel ex accusamus eligendi explicabo. Neque expedita illum quisquam
          voluptate ducimus unde deserunt, eos dolores.
        </div>
      </div>
      <div className="flex justify-evenly p-5 bg-slate-200">
        <div className="text-center">
          <p className="text-4xl">
            <CountUp end={123} duration={3} />+
          </p>
          <p className="text-4xl">Happy Clients</p>
        </div>
        <div className="text-center">
          <p className="text-4xl">
            <CountUp end={456} duration={2} />+
          </p>
          <p className="text-4xl">Plants Types</p>
        </div>
        <div className="text-center">
          <p className="text-4xl">
            <CountUp end={789} duration={2} />+
          </p>
          <p className="text-4xl">Trees Planted</p>
        </div>
      </div>
      <div className="flex">
        <img src={oh3} alt="/" className="w-1/2 object-cover h-[500px]" />
        <img src={oh2} alt="/" className="w-1/2 object-cover h-[500px]" />
      </div>
      
    </div>
  );
};

export default AboutUs;
