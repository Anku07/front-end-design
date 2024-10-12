import React from "react";

export default function Section1() {
  return (
    <section className="lg:flex lg:items-center  lg:justify-center lg:w-full ">
      <div className="flex lg:flex w-[393px] lg:w-[1260px]  h-[847px] lg:h-[704.53px]  px-4 lg:py-10 lg:space-y-20 lg:items-center lg:justify-center">
        {/* left part */}
        <div className=" lg:flex lg:w-[1240px] lg:h-[600.53px] w-[361px] h-[374px]  gap-16 lg:py-12 lg:px-4  ">
          <div className="lg:w-[600.4px] lg:h-[524px] lg:gap-20 w-[361px] h-[374] gap-8 lg:left-3">
            <div className="flex flex-col items-start p-4 gap-6 w-full sm:w-[361px] sm:h-auto lg:w-[575.4px] lg:h-[400px] lg:gap-8 ">
              <div className=" lg:w-[575.4px] lg:h-[158px] lg:gap-2">
                <h1 className="text-4xl font-bold lg:leading-[79.5px] lg:font-extrabold sm:leading-[44px] lg:text-6xl text-[rgba(15,23,42,1)]">
                  <span className="relative inline-block">
                    <img
                      className="absolute -bottom-1 left-0 w-[100px] md:w-[125px] lg:w-[175px] h-[14px] md:h-[20px] lg:h-[26px] z-0 "
                      src="downLine.png"
                    />
                    <span className="relative z-10">Teach students</span>
                  </span>
                  <span> worldwide</span>
                </h1>
              </div>

              <p className="sm:text-base lg:text-2xl font-sans sm:leading-[22.2px] text-[rgba(15,23,42,1)]">
                Amet nunc diam orci duis ut sit diam arcu, nec.
                <br /> Eleifend proin massa tincidunt viverra lectus
                <br /> pulvinar. Nunc ipsum est pellentesque turpis ultricies.
              </p>

              <div className="flex gap-4 lg:w-[449px] sm:w-[334px] lg:h-[64px] sm:h-[35px]">
                <button className="lg:mt-3  mt-6 px-6 py-3 lg:px-14 bg-orange-600 text-white text-sans lg:text-lg font-bold rounded-lg hover:bg-orange-500">
                  Sign Up Now
                </button>

                <button className=" mt-5 lg:mt-2 flex items-center gap-2 text-blue-500 lg:w-[178px] lg:h-[56px] w-[157.px] sm:h-[48px] text-center py-2 lg:text-lg sm:px-2 sm:py-3 lg:px-2 lg:py-4">
                  <img src="videobutton.svg" />
                  View Demo
                </button>
              </div>
              <div className=" lg:h-2"></div>
              <div className="lg:flex w-[361px] h-[70px] gap-4 lg:w-[575.4px] lg:h-11 lg:gap-7">
                <div className="h-[22px] lg:w-[135px] lg:h-14 lg:mb-1">
                  <p className="text-base font-[sans-serif]  leading-[22.4px] text-left text-gray-500">
                    Trusted by leading companies
                  </p>
                </div>
                <div className="h-2"></div>
                <div className=" flex w-[361px] h-[32px] gap-6 lg:gap-9 lg:w-[370px] lg:h-[39px]">
                  <img src="first.png" />
                  <img src="second.png" />
                  <img src="fourth.png" />
                  <img src="fifth.png" />
                  <img src="third.png" />
                </div>
              </div>
            </div>
          </div>

          <div className="flex  flex-col m-2 lg:flex lg:flex-col">
            <div className="relative w-[361px] h-[340px]  lg:w-[500.6px] lg:h-[580.53px] lg:p-2 z-10">
              <div className="absolute w-[168px] h-[50px] lg:w-[200px] lg:h-[228px] top-0 gap-[8px] left-[87px] lg:left-[138px]">
                <div className=" flex flex-col lg:flex lg:flex-col z-0 space-y-4">
                  <div className=" lg:ml-2 ml-0 w-[168px] h-[33px] lg:w-[200px] lg:h-[40px] px-1 py-1 lg:px-2 lg:py-1 gap-[10px] rounded-[15px_15px_3px_15px] shadow-[0px_0px_4px_0px_rgba(0,0,0,0.07),_0px_4px_6px_-1px_rgba(0,0,0,0.1)]  ">
                    <span className="lg:m-3 ">Nunc, at libero neque</span>
                  </div>

                  <div className="lg:ml-[98px] ml-12 w-[111px] h-[33px] lg:w-[px] lg:h-[40px] px-1 py-1 lg:px-2 lg:py-1 gap-[10px] left-5 rounded-[15px_15px_3px_15px] lg:font-normal shadow-[0px_0px_4px_0px_rgba(0,0,0,0.07),_0px_4px_6px_-1px_rgba(0,0,0,0.1)]">
                    <span className="ml-1">Vivamus sed</span>
                  </div>

                  <div className="w-[168px] h-[33px] lg:w-[215px] lg:h-[45px] px-1 py-1 gap-2 lg:font-normal lg:px-1 lg:py-2 rounded-[15px_15px_15px_3px] bg-[rgba(51,65,85,1)] text-white shadow-[0px_0px_4px_0px_rgba(0,0,0,0.07),_0px_4px_6px_-1px_rgba(0,0,0,0.1)]">
                    <span className="ml-4">Turpis platea nunc mattis</span>
                  </div>

                  <div className=" w-[150px] h-[33px] lg:w-[186px] lg:h-[45px] px-1 py-1 lg:px-2 lg:py-2 gap-[10px] rounded-[15px_15px_15px_3px] bg-[rgba(51,65,85,1)] text-white shadow-[0px_0px_4px_0px_rgba(0,0,0,0.07),_0px_4px_6px_-1px_rgba(0,0,0,0.1)]">
                    <span className="ml-4">Vitae viverra ut non</span>
                  </div>
                </div>
              </div>

              <div className=" absolute w-[156.25px] h-[201.12.px] bottom-[120px] left-[230.75px] lg:w-[215.34px] lg:h-[347.68px] lg:top-3 lg:left-[340px]">
                <img src="Student.png" />
              </div>
              <div className="absolute w-[160.21px] h-[160.88px] top-40 right lg:w-[220.6px] lg:h-[240.53px] lg:top-[245px] lg:left-3">
                <img src="Teacher.png" />
              </div>
              <div className="absolute w-[91.9px] h-[74.05px] top-[230.71px]  left-[200.7px] lg:w-[159px] lg:h-[128px] lg:top-[350px] lg:left-[300.7px]">
                <img
                  src="icon1.png"
                  className=" absolute w-[46.24px] h-[46.28px]  top-3 lg:w-[80px] lg:h-[80px] "
                />
                <img
                  src="icon2.png"
                  className="absolute w-[36.99px] h-[37.02px] left-16 lg:w-[64px] lg:h-[64px] lg:left-24"
                />
                <img
                  src="icon3.png"
                  className=" absolute w-[27.74px] h-[27.77px] left-14 top-14 lg:w-[48px] lg:h-[48px] lg:left-20 lg:top-20"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
