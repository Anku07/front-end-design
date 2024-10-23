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

        {/* second details */}
        <div className="relative lg:w-[600px] lg:h-[479px] w-[361px] h-[421px] mt-4 ">
          <div className="lg:w-[524px] lg:h-[522px] w-[400px] h-[469px] ">
            <img src="sec7blob.png" />
          </div>
          <div className="absolute lg:w-[200.02px] lg:h-[554px] w-[225.02px] h-[554px] lg:-bottom-10 lg:left-48 -bottom-24 left-48">
            <img src="sec7icon.png" />
          </div>

          <div className="absolute lg:bottom-[460px] bottom-[3px] top-4">
            <div className="absolute flex flex-col max-w-[245px]  max-h-[229px] p-[20px] rounded-[10px] bg-white shadow-md gap-2 bottom">
              <div className=" flex items-center justify-center w-auto max-w-[65px] h-[24px] px--[8px] py-[8px]  rounded-[4px] bg-[rgba(219,234,254,1)] text-[rgba(30,64,175,1)] ">
                <span className="text-sm font-medium">Popular</span>
              </div>
              <div className="w-[193px] h-[36px] lg:h-[44px]  gap-[4px] mt-5 lg:mt-1">
                <h3 className="text-base leading-[17.6px]  font-medium">
                  Design for how people think
                </h3>
              </div>
              <div className="w-[193px] h-[51px]  lg:h-[60px ]">
                <p className=" text-xs lg:text-sm lg:leading-[19.6px] leading-[16.8px] text-[rgba(71,85,105,1)] font-normal">
                  Aliquam ut euismod condimentum elementum ultricies volutpat
                  sit
                  <br className="2xl:hidden" /> non.
                </p>
              </div>
              <div className="lg:mt-6  lg:w-[190px] lg:h-[72px] w-[225px] h-[72px] ">
                <button className="  lg:w-[193px] w-[193px] h-[40px] lg:h-[40px] px-10 lg:px-3 lg:py-2 rounded-[8px_8px_8px_8px] border-2 border-[rgba(37,99,235,1)] bg-transparent text-[rgba(37,99,235,1)] text-sm">
                  <div className="lg:w-[100px] lg:h-[24px] w-[100px] h-[24px] lg:px-2 lg:mx-8">
                    <span className="lg:w-84px lg:h-[24px] font-medium text-sm leading-6 lg:text-sm">
                      Take Lesson
                    </span>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
