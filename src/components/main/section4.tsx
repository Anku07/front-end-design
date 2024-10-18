import React from "react";

export default function Section4() {
  return (
    <div className="bg-white-400 ">
      <div className="flex flex-col md:flex-row lg:item-center lg:justify-center h-auto p-8 gap-8  order-2 lg:gap-14 sm:order-2">
        {/* Text Section */}
        <div className="flex flex-col w-full lg:w-[600px] h-auto gap-6 mt-4 lg:mt-[70px] items-center md:items-start lg:order-2 sm:order-1 relative">
          {/* Overlap image (plane departure) */}
          <div className="absolute left-[56%] lg:left-[79%] top-[1px] lg:-top-[24px] z-0">
            <img
              src="plane-departure.png"
              className="w-[24px] h-[24px] lg:w-[64px] lg:h-[64px]"
            />
          </div>

          <h1 className="relative font-semibold lg:font-extrabold text-[28px] lg:text-[55px] leading-[41px] lg:leading-[61.6px] text-left mt-3 z-10 text-[rgba(15,23,42,1)]">
            Meet international students and teachers
          </h1>

          <div>
            <p className="text-[16px] lg:text-[20px] font-normal leading-[28px] lg:leading-[36px] text-left z-10 text-[rgba(15,23,42,1)]">
              Morbi sit egestas dignissim pharetra, sed amet. Tempus justo
              senectus risus ac vel, velit, nunc. Eget commodo eget in aliquam
              facilisi facilisi nec magna hendrerit. Placerat ipsum sit tellus
              urna, faucibus aenean lorem faucibus integer.
            </p>
          </div>

          <div className="flex lg:flex w-[360px] h-[48px] rounded-lg py- lg:w-[260px] lg:h-[56px] ">
            <span className="lg:w-[240px] lg:h-[30px] w-[192px] h-[24px] text-base leading-6 font-medium lg:text-lg lg:leading-6 text-[rgb(37,99,235,1)] lg:p-0 z-10">
              Explore teacher and student
            </span>
            <img
              src="arrow-right.png"
              className="lg:w-[24px] lg:h-[24px] w-[24px] h-[24px] lg:right-5 z-10 mt-3"
            />
          </div>
        </div>


      </div>
    </div>
  );
}
