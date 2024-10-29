import React from "react";

export default function Section8() {
  return (
    <section className="relative bg-[rgba(250,204,21,1)] flex items-center justify-center h-[654.4px] lg:h-[900px] py-16 lg:py-40  ">
      <div className="absolute top-[14%] -left-[1%] hidden lg:block lg:py-10">
        <img src="card3.png" alt="Image 1" className="w-[400px]"/>
      </div>
      <div className="absolute top-[14%] right-[0%] hidden lg:block">
        <img src="card4.png" alt="Image 1" className="w-[400px]"/>
      </div>

      <div className="text-center px-4 lg:px-0">
        <h1 className="text-2xl lg:text-5xl font-extrabold text-black-800 lg:p-4">
          Join a world of learning
        </h1>
        <p className="mt-4 text-sm lg:text-xl text-black-700">
          Malesuada ut aliquam at ac est nisi, interdum etiam dignissim.
          <br />
          Risus elit et fringilla habitant ut facilisi.
        </p>
        <button className="mt-6 px-12 py-3 bg-orange-600 text-white text-sans lg:text-lg font-bold rounded-lg hover:bg-orange-500">
          Sign Up Now
        </button>
      </div>

      <div className="absolute top-[5%] left-[8%] lg:hidden">
        <img src="card1.png" alt="Image 1" />
      </div>
      <div className="absolute bottom-[5%] left-[8%] lg:hidden">
        <img src="Card2.png" alt="Image 1" />
      </div>
    </section>
  );
}
