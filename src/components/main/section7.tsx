import React from "react";

export default function Section7() {
  return (
    <section className="lg:flex lg:items-center  lg:justify-center lg:w-full lg:">
      {/* container info */}
      <div className="lg:flex lg:flex-row w-[393px] h-[813px] px-4 py-12 gap-18 lg:w-[1240px] lg:h-[639px] lg:p-[30px] lg:gap-[60px]  justify-between gap-7 ">
        {/* first part container info*/}
        <div className="flex flex-col lg:flex lg:flex-col w-[361px] h-[232px] gap-[30px] lg:w-[600px] lg:h-[326px] lg:gap-[32px] lg:mt-28">
          {/* first part details */}
          <div className="relative w-[300px] h-[40px] gap-[8px] lg:w-[600px] lg:h-[62px] lg:gap-[8px] font-bold ">
            {/* Overlap image (downLine) */}
            <div className="absolute left-[55%] lg:left-[52%] top-[20px] lg:top-[48px] z-0">
              <img src="downLine.png" className="lg:w-[220px] w-[120px]" />
            </div>

            <h1 className="text-3xl font-sans leading-[26.4px] lg:font-sans lg:text-[56px] lg:leading-[61.6px] relative z-10 mix-blend-normal text-[rgba(15,23,42,1)]">
              All the cool features
            </h1>
          </div>

          <div className="w-[361px] h-[110px] lg:h-[144px] lg:w-[530px]">
            <p className="lg:text-lg lg:font-normal lg:leading-9 text-base font-normal leading-[22.4px] z-10 text-[rgba(15,23,42,1)]">
              Mauris consequat, cursus pharetra et, habitasse rhoncus quis odio
              ac. In et dolor eu donec maecenas nulla. Cum sed orci, sit
              pellentesque quisque feugiat crass ullamcorper. Ultrices in amet,
              ullamcorper non viverra a, neque orci.
            </p>
          </div>

          <div className="flex lg:flex w-[204px] h-[48px] rounded-lg  lg:w-[260px] lg:h-[56px] ">
            <span className="lg:w-[220px] lg:h-[24px] w-[192px] h-[24px] text-base leading-6 font-medium lg:text-lg lg:leading-6 text-[rgb(37,99,235,1)] lg:p-0 z-10">
              View all the features
            </span>
            <img
              src="arrow-right.png"
              className="lg:w-[24px] lg:h-[24px] w-[24px] h-[24px] lg:right-5 z-10"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
