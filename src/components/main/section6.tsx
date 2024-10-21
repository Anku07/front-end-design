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
        {/* space container  */}
        <div className="lg:h-20 h-10"></div>

        {/* details of scroller through button */}
        <div className="lg:flex w-full lg:w-[1220px] ">
          <div className="lg:flex flex  gap-8">
            <div className="item-center lg:w-[380px] w-[309px] h-[323px] lg:h-[305px] pt-9 px-6 gap-4 rounded-[12px] shadow-lg z-0 ">
              <p className="lg:w-[348px] lg:h-[145px] w-[277px] h-[203px] item-center p-4">
                Lacus vestibulum ultricies mi risus, duis non, volutpat nullam
                non. Magna congue nisi maecenas elit aliquet eu sed consectetur.
                Vitae quis cras vitae praesent morbi adipiscing purus
                consectetur mi.
              </p>
              <div className="flex w-[348px] h-[80px] pt-4 px-0 gap-4">
                <img src="user1.png" className="p-1" />
                <div>
                  <h5 className="text-large font-bold text-[rgba(15,23,42,1)]">
                    Helen Jummy
                  </h5>
                  <span className="text-base font-light text-gray-500">
                    Financial Counselor
                  </span>
                </div>
              </div>
            </div>

            <div className=" flex-col item-center lg:w-[380px] w-[309px] h-[323px] lg:h-[305px] pt-9 px-6 gap-4 rounded-[12px] shadow-lg hidden lg:flex">
              <p className="lg:w-[348px] lg:h-[145px] w-[277px] h-[203px] item-center p-4 overflow-hidden">
                Odio rhoncus ornare ut quam. Molestie vel duis quis scelerisque
                ut id. In tortor turpis viverra sagittis ultrices nisi, nec
                tortor. Vestibulum, ultrices ultricies neque, hac ultricies
                dolor.
              </p>
              <div className="flex w-[348px] h-[80px] pt-4 px-0 gap-4">
                <img src="user2.png" className="p-1" />
                <div>
                  <h5 className="text-large font-bold text-[rgba(15,23,42,1)]">
                    Ralph Edward
                  </h5>
                  <span className="text-base font-light text-gray-500">
                    Maths Teacher
                  </span>
                </div>
              </div>
            </div>

            <div className="flex-col item-center lg:w-[380px] w-[309px] h-[323px] lg:h-[305px] pt-9 px-6 gap-4 rounded-[12px] shadow-lg hidden lg:flex">
              <p className="lg:w-[348px] lg:h-[145px] w-[277px] h-[203px] item-center p-4">
                Sagittis nunc egestas leo et malesuada urna risus. Morbi proin
                et cras aliquam. Diam tellus, amet, hac imperdiet. Tellus mi
                volutpat tellus, congue malesuada sit nisl donec a.
              </p>
              <div className="flex w-[348px] h-[80px] pt-4 px-0 gap-4">
                <img src="user3.png" className="p-1" />
                <div>
                  <h5 className="text-large font-bold">Helena John</h5>
                  <span className="text-base font-light text-gray-500">
                    Psychology Student
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
