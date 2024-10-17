import React from "react";

export default function Section3() {
  return (
    <section className="lg:flex lg:items-center  lg:justify-center lg:w-full ">
      {/* first part details */}
      <div className="flex flex-col lg:flex lg:flex-row  m-2 lg:mt-20">
        <div className="flex flex-col  lg:flex lg:flex-row w-[393px] h-[1124px] px-4 py-12 gap-8 justify-between lg:w-[1200px] lg:h-[706.97px] lg:px-10 lg:gap-20 lg:py-12">
          <div className="relative lg:w-[544px] lg:h-[352px] lg:gap-8">
            <div className="absolute  lg:left-[18%] lg:mt-[125px] left-[10%] mt-5 ">
              <img src="downLine.png" className="lg:w-[260px] w-[110px]" />
            </div>
            <div className="relative flex flex-col w-[361px] h-[164px] gap-[24px] lg:mt-20 ">
              <div className="relative w-[361px] h-[52px] gap-[8px] lg:w-[544px] lg:h-[124px] lg:gap-[32px]">
                <h1 className=" font-bold text-2xl leading-[26.4px] lg:font-bold lg:text-[56px] lg:leading-[61.6px] mb-5 text-[rgba(15,23,42,1)]">
                  An all-in-one app that makes it easier
                </h1>
                <p className="w-[361px] h-[88px] font-normal text-base leading-[22.4px] lg:invisible mb-5 text-[rgba(15,23,42,1)]">
                  Sit elit feugiat turpis sed integer integer accumsan turpis.
                  Sed suspendisse nec lorem mauris. Pharetra, eu imperdiet ipsum
                  ultrices amet, dui sit suspendisse.
                </p>
              </div>
            </div>

            {/* Left side points */}
            <div className="flex flex-col w-[370px] h-[248px] gap-4 lg:w-[304px] lg:h-[108px]">
              <div className="flex items-center gap-2 w-[321px] h-[70px] lg:w-[544px]">
                <img src="tickmark.png" className="w-6 h-6" />
                <p className="font-normal text-lg leading-9 lg:leading-9 text-[rgba(15,23,42,1)]">
                  Est et in pharetra magna adipiscing ornare aliquam.
                </p>
              </div>
              <div className="flex items-center gap-2 w-[321px] h-[72px] lg:w-[544px]">
                <img src="tickmark.png" className="w-6 h-6" />
                <p className="font-normal text-lg leading-9 lg:leading-9 text-[rgba(15,23,42,1)]">
                  Tellus arcu sed consequat ac velit ut eu blandit.
                </p>
              </div>
              <div className="flex items-center gap-2 w-[321px] h-[72px] lg:w-[544px]">
                <img src="tickmark.png" className="w-6 h-6" />
                <p className="font-normal text-lg leading-9 lg:leading-9 text-[rgba(15,23,42,1)]">
                  Ullamcorper ornare in et egestas dolor orci.
                </p>
              </div>
            </div>
            <div className="flex lg:flex w-[204px] h-[48px] rounded-lg py-3 lg:w-[260px] lg:h-[56px] lg:mt-20 mt-6">
            <span className="lg:w-[220px] lg:h-[24px] w-[192px] h-[24px] text-base leading-6 font-medium lg:text-lg lg:leading-6 text-[rgb(37,99,235,1)] lg:p-0 z-10">
              find more about the app
            </span>
            <img
              src="arrow-right.png"
              className="lg:w-[24px] lg:h-[24px] w-[24px] h-[24px] lg:right-5 z-10"
            />
          </div>
          </div>

          {/* second part details */}
          <div className="relative w-[100px] h-[472px] lg:w-[610px] lg:h-[446.97px] ">
            <div className="absolute w-[300.34px] h-[336.68px] lg:w-[380.18px] lg:h-[348.01px] -left-12  lg:left-[1%]">
              <img src="sec3blob.png" />
              <div className="absolute w-[125px] h-[520px] lg:w-[139.0px] lg:h-[582px] bottom-2 left-28 lg:-left-20 lg:-top-12">
                <img src="sec3icon.png" />
              </div>
            </div>

            {/* frame alignment */}
            <div className="absolute w-[300.89px] h-[245px] lg:w-[400px] lg:h-[291px] bg:white shadow-2xl lg:ml-20">
              <div className="absolute  w-[340.89px] h-[260px]  lg:h-[351px] lg:w-[520px] px-2 py-2 gap-7 bg-white border-[5px]  rounded-[10px] lg:border-[5px] shadow-2xl border-white lg:px-4 ml-1 ">
                <div className="absolute flex w-[315px] h-[10px] gap-[5px] lg:w-[408px] m-1">
                  <img src="red.png" />
                  <img src="yellow.png" />
                  <img src="green.png" />
                </div>
                <div className="relative w-[320.89px] h-[234px] gap-[10px] lg:w-[509px] lg:h-[0px] top-7 lg:top-6 rounded-t-none lg:-left-4">
                  <img src="Video.png" className=" rounded-[20px] bottom-1" />
                </div>
              </div>
            </div>

 
          </div>
        </div>
      </div>
    </section>
  );
}
