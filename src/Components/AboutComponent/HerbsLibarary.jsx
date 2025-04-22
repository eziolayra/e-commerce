import React from "react";
import HerbsDetail from "../GlobalComponents/HerbsDetail";
import filterData from "../../Datas/AboutDatas";

const HerbsLibarary = () => {
  
  return (
    <div className="grid grid-cols-4 items-center justify-center gap-5 p-10 ">
      {filterData.map((data, index) => (
        <React.Fragment key={index}>
          {/* <HerbsDetail {...data}/> */}
          <HerbsDetail
            img={data?.image}
            name={data?.name}
            detail={data?.detail}
          />
        </React.Fragment>
      ))}
    </div>
  );
};

export default HerbsLibarary;
