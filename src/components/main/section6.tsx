import React from "react";

export default function Section6() {
  return (
    <section className="lg:flex lg:items-center lg:w-auto lg:justify-center">
      {/* containner info */}
      <div className="w-[393px] h-[477px] px-[20px] py-[48px] my-[32px] gap-20 lg:w-[1240px] lg:h-[614px] lg:p-[30px] lg:gap-[80px] gap items-cente ">
        {/* first part details */}
        <div className=" lg:flex lg:justify-between flex justify-between w-[361px] h-[35px] gap-[24px] lg:w-[1200px] lg:h-[75px] lg:gap-[48px] ">
          <h1 className=" font-sans text-xl leading-[26.4px]  lg:font-bold lg:text-[56px] lg:leading-[61.6px] text-[rgba(15,23,42,1)]">
            What everyone says
          </h1>
          <div className="flex lg:w-[120px] lg:h-[48px] lg:gap-[24px] lg:mt-2 ">
            <img src="Button.png" />
            <img src="button2.png" />
          </div>
        </div>

      </div>
    </section>
  );
}
