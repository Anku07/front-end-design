import React from "react";

export default function Section2() {
  return (
    <section className="lg:flex lg:items-center  lg:justify-center lg:w-full  lg:bg-[rgba(241,245,249,1)] ">
    <div>
      {/* container info */}
      <div className=" w-[393px] h-[588px] py-12 px-4 gap-8 lg:w-[1220px] lg:h-[1195px] lg:p-20 lg:gap-20  my-3">

        {/* first part details */}
        

        {/* main text info */}
        <div className="flex flex-col  w-[361px] h-[138px] gap-6 lg:w-[200px] lg:h-[171px] lg:gap-8 items-center ">
        <div className="relative w-[123.37] h-[371px]  lg:w-[50px] left-12 lg:left-[100%] ">
            
        {/* overlap part */}
        <div className="absolute w-[153.75px] h-[125.47px] lg:w-[275px] lg:h-[500px]  top-16 lg:top-[70px]  lg:left-[610px] left-[29px]">
            <img src="right1.png" />
          </div>
          <div className="absolute w-[120.24px] h-[215.34px] lg:w-[255.37px] lg:h-[380.19px] top-48 left-16 lg:top-[350px] lg:left-[630px] ">
            <img src="right.png" />
          </div>
          <div className="absolute w-[130.34px] h-[223.37px] lg:w-[328.99px] lg:h-[505.77px] top-40 left-12 lg:-top-12 lg:left-[500px]">
            <img src="Icons2.png" />
          </div>
        </div>
          <div className="absolute lg:mt-20 lg:left-[34%] left-[23%] mt-11 ">
            <img src="downLine.png" className="lg:w-[140px] lg:h-6 w-[54px] h-3" />
          </div>
          <div className="flex relative w-[361px] h-[26px] gap-2  lg:w-[1000px] lg:item-center lg:justify-center lg:h-[62px] lg:left-[200%]">
            <h1 className="flex  font-bold text-2xl leading-[26.4px] lg:font-extrabold lg:text-[56px] lg:leading-[61.6px] text-[rgba(15,23,42,1)] lg:mix-blend-normal">
              All the tools that you need
            </h1>
          </div>
          <div className="flex relative w-[361px] h-[88px] lg:w-[1000px] lg:h-[77px] items-center justify-center lg:left-[200%]">
            <p className="flex  items-center lg:items-center lg:justify-center justify-center font-normal text-base lg:text-center leading-[22.4px] lg:font-normal lg:text-[20px] lg:leading-9 text-[rgba(15,23,42,1)]">
              Sit elit feugiat turpis sed integer integer accumsan turpis. Sed
              suspendisse nec lorem mauris.
              <br />
              Pharetra, eu imperdiet ipsum ultrices amet, dui sit suspendisse.
            </p>
          </div>
        {/* second part details */}
        <div className="relative lg:w-[580.28px] lg:h-[652.22px] w-[157.84px] h-[206px] left-1">
          {/* overlap part */}
          <div className="absolute w-[157.84px] h-[206px] lg:w-[520.28px] lg:h-[499px] lg:top-20 top-10 right-[102%] lg:left-[23%] ">
            <img src="left.png" />
            <div className="absolute lg:-top-[30%] lg:-left-[70px]  lg:w-[139.02px] lg:h-[582px]  w-[43.91px] h-[183.82px] right-[45%] lg:right-44 -top-[30%]">
            <img src="Icons.png" />
          </div>
          </div>

        </div>
        </div>
        

        

         {/* second text info */}
        <div className="flex flex-col relative w-[361px] h-[226px] rounded-[20px] lg:w-[950px] lg:h-[640px] shadow-xl mt-10 bg-white lg:mx-10">
          <div className="flex relative justify-between w-[361px] h-[41px] px-4 py-2 gap-7 lg:w-[950px] lg:h-[640px] rounded-t-[20px] ">
            <div className="flex gap-1 w-[65px] h-[15px] m-[6px] lg:w-[55px] lg:h-[10px] lg:m-[7px]">
              <img src="red.png" />
              <img src="yellow.png" />
              <img src="green.png" />
            </div>

            <div className="flex justify-evenly w-[162.42px] h-[25px] rounded-[5px] px-2 py-1 lg:w-[494.5px] lg:h-[25px] bg-[rgba(241,245,249,1)] lg:bg-[rgba(241,245,249,1)]">
              <div className="flex  w-[64px] h-[17px]">
                <span className="font-normal text-xs leading-[16.8px] text-[rgba(148,163,184,1)]">
                  utech.com
                </span>
              </div>
            </div>

            <div className="flex">
              <img src="chevron-left.png" />
              <img src="chevron-right.png" />
            </div>
          </div>
          <div className="relative">
            <img
              src="screen.png"
              className="lg:w-[1100px] lg:h-[599px] lg:gap-[10px] rounded-md"
            />
          </div>
        </div>
       
       {/* third image  */}
        <div
          className="flex
        lg:w-1093 lg:h-[78px] lg:ml-28"
        >
          <img src="Lines.png" />
        </div>
          
        {/* fourth part details */}
        <div className="lg:flex flex w-[30px] h-[30px] gap-[14px] lg:w-[1100px]  lg:h-[64px] justify-between ">
          <img src="App-thumbnail.png" />
          <img src="App9.png" />
          <img src="App8.png" />
          <img src="App7.png" />
          <img src="App6.png" />
          <img src="App5.png" />
          <img src="App4.png" />
          <img src="App3.png" />
          <img src="App2.png" />
        </div>
      </div>
    </div>
  </section>
  );
}

