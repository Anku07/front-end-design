import React from "react";

export default function Section5() {
  return (
    <div>
      <div className="bg-[rgba(15,23,42,1)] py-24 sm:py-32 ">

        {/* container info */}
        <div className=" px-6 lg:px-8">

          {/* description list */}
          <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
            <div className="mx-auto flex max-w-xs flex-col gap-y-4">
              <div className="flex justify-center">
                <img
                  src="heart-circle-sharp.png"
                  className="w-[64px] h-[64px]"
                  alt="Transaction Icon"
                />
              </div>
              <dd className="text-3xl font-semibold tracking-tight text-amber-500 sm:text-5xl">
                195
              </dd>
              <dt className="text-base leading-7 text-amber-500">
                user countries
              </dt>
            </div>
            <div className="mx-auto flex max-w-xs flex-col gap-y-4">
              <div className="flex justify-center">
                <img
                  src="diamond.png"
                  className="w-[64px] h-[64px]"
                  alt="Assets Icon"
                />
              </div>
              <dd className="text-3xl font-semibold tracking-tight text-amber-500 sm:text-5xl">
                1M
              </dd>
              <dt className="text-base leading-7 text-amber-500">
                valued teacher
              </dt>
            </div>
            <div className="mx-auto flex max-w-xs flex-col gap-y-4">
              <div className="flex justify-center">
                <img
                  src="school.png"
                  className="w-[64px] h-[64px]"
                  alt="New Users Icon"
                />
              </div>
              <dd className="text-3xl font-semibold tracking-tight text-amber-500 sm:text-5xl">
                17M
              </dd>
              <dt className="text-base leading-7 text-amber-500">
                happy students
              </dt>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
}
