import React from "react";

export default function Footer() {
  return (
    <>
      <div className="bg-[rgba(15,23,42,1)] ">
        {/* upper part */}
        <div className=" px-4 sm:px-6 lg:py-3 text-gray-800 sm:grid md:grid-cols-6 sm:grid-cols-2 gap-4  ">
          <div className="p-5">
            <h3 className=" flex font-bold text-3xl text-white lg:px-5">
              <img src="logo2.svg" className="w-[25px]" />
              teach
            </h3>
          </div>
          <div className="p-5">
            <div className="text-sm uppercase text-white font-bold">
              Product
            </div>
            <a className="my-3 block text-white" href="/#">
              Pricing
            </a>
            <a className="my-3 block text-white" href="/#">
              Overview
            </a>
            <a className="my-3 block text-white" href="/#">
              Browse
            </a>
            <a className="flex my-3 gap-2 text-white" href="/#">
              Accessibility
              <div className="flex w-[42px] h-[20px] rounded-[4px]  bg-[rgba(243,232,255,1)] justify-center items-center">
                <div className="flex w-[37px] h-[17px]  gap-[10px] justify-center">
                  <span className="flex justify-center text-[rgba(107,33,168,1)] text-xs  w-[25px] h-[17px] font-base font-bold  leading-[16.8px]">
                    BETA
                  </span>
                </div>
              </div>
            </a>
          </div>
          <div className="p-5">
            <div className="text-sm uppercase text-white font-bold">
              Product
            </div>
            <a className="my-3 block text-white" href="/#">
              Brainstorming
            </a>
            <a className="my-3 block text-white" href="/#">
              Ideation
            </a>
            <a className="my-3 block text-white" href="/#">
              Wireframimg
            </a>
            <a className="my-3 block text-white" href="/#">
              Research
            </a>
          </div>

          <div className="p-5">
            <div className="text-sm uppercase text-white font-bold">
              Resources
            </div>
            <a className="my-3 block text-white" href="/#">
              Help Center
            </a>
            <a className="my-3 block text-white" href="/#">
              Blog
            </a>
            <a className="my-3 block text-white" href="/#">
              Tutorials
            </a>
            <a className="my-3 block text-white" href="/#">
              FAQs
            </a>
          </div>

          <div className="p-5">
            <div className="text-sm uppercase text-white font-bold">
              Support
            </div>
            <a className="my-3 block text-white" href="/#">
              Contact Us
            </a>
            <a className="my-3 block text-white" href="/#">
              Developers
            </a>
            <a className="my-3 block text-white" href="/#">
              Documentation
            </a>
            <a className="my-3 block text-white" href="/#">
              Integrations
            </a>
          </div>

          <div className="p-5">
            <div className="text-sm uppercase text-white font-bold">
              Company
            </div>
            <a className="my-3 block text-white" href="/#">
              About
            </a>
            <a className="my-3 block text-white" href="/#">
              Press
            </a>
            <a className="my-3 block text-white" href="/#">
              Events
            </a>
            <a className="flex my-3 gap-2 text-white" href="/# ">
              Request Demo
              <div className="flex justify-center items-center gap-1">
                <img src="arrow.png" className="mt-1 w-4" />
              </div>
            </a>
          </div>
        </div>

        {/* info of copyright  */}
        <div className=" border-t lg:border-gray-700 lg:mx-16 lg:mt-7  mx-5 mt-4 border-gray-600">
          <div className="grid lg:py-12 px-17 py-5  grid-cols-1">
            <div className="flex lg:items-center  flex-col lg:justify-between lg:flex-row gap-2 ">
              <span className="text-base text-white pt-4">
                <a>uteach @ 2023. All rights reserved.</a>
              </span>
              <ul className="flex items-center gap-9 mt-4 lg:mt-0">
                <li>
                  <a href="javascript:;" className="text-sm text-white">
                    Terms
                  </a>
                </li>
                <li>
                  <a href="javascript:;" className="text-sm text-white">
                    Privacy
                  </a>
                </li>
                <li>
                  <a href="javascript:;" className="text-sm text-white">
                    Contact
                  </a>
                </li>
                <li>
                  <a
                    href="javascript:;"
                    className="flex text-sm text-white mt-1"
                  >
                    <img src="world.png" />
                    <span className="mt-1">EN</span>
                  </a>
                </li>
                <li>
                  <a
                    href="javascript:;"
                    className="flex text-sm text-white mt-1"
                  >
                    <img src="euro.png" className="w-[20px]" />
                    <span className="mt-1">EUR</span>
                  </a>
                </li>
                <li>
                  <a href="javascript:;" className="text-sm text-white mt-2">
                    <img src="accessibility.png" className="w-[20px]" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
