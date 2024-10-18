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

        {/* Image Grid */}
        <div className="flex flex-row order-1 md:flex-row gap-1 lg:w-[600px] lg:h-[651px] lg:gap-[16px] w-[361px] h-[309.5.px] justify-between">
          <div className="flex flex-col lg:w-[172px] w-[94px] lg:h-auto lg:pt-[80px] lg:gap-2 lg:pt-48px pt-12 gap-4px h-281px">
            <img
              src="pic1.png"
              className="w-[72px] h-[96px] rounded-[5px] mx-5 lg:w-[128px] lg:h-[192px] lg:rounded-sm lg:mx-8"
            />
            <img src="pic2.png" className="lg:h-[258px] h-[129px]" />
          </div>
          <div className="flex flex-col lg:w-[128px] lg:h-auto lg:pt-[32px] lg:gap-2 w-[72px] h-[309px] ">
            <img src="pic3.png" className="h-[106px] lg:h-[212px]" />
            <img src="pic5.png" className="h-[107.5px] lg:h-[215px]" />
            <img src="pic4.png" className="h-[80px] lg:h-[160px]" />
          </div>
          <div className="flex flex-col lg:w-[128px] lg:h-auto lg:pt-[45px] lg:gap-2 w-[72px] h-[96px] pt-3">
            <img src="pic6.png" className="h-[85.5px] lg:h-[172px]" />
            <img src="pic7.png" className="h-[86px] lg:h-[175px]" />
            <img src="pic8.png" className="h-[96px] lg:h-[192px]" />
          </div>
          <div className="flex flex-col lg:w-[160px] lg:h-auto py-[40px] lg:gap-2 w-[88px] h-[218px] lg:mt-9 ">
            <img src="pic9.png" className="h-[127.5px ] lg:h-[255px]" />
            <img
              src="pic10.png "
              className="lg:w-[128px] lg:h-[165px] lg:rounded-[5px] h-[82.5px] w-[72px] rounded-[5px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
