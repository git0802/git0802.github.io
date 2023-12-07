"use client";
import { Tilt } from "react-tilt";
import SpaceCanvas from "@/canvas/Space";

const Hero = () => {
  return (
    <section className="relative cursor-grab z-0 h-c ">
      <SpaceCanvas />
      {/* <Text /> */}

      <div className=" cursor-pointer p-1 sm:p-4 absolute top-[100px] z-10 w-max left-[50%] translate-x-[-50%] flex flex-col gap-5">
        <h1 className="font-bold lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px] mt-2">
          Hi, I'm <span className=" font-c font-bold text-[#F60]">Dilkhush</span>
        </h1>
        <p
          className={` font-black lg:text-[30px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px] font-c `}
        >
          I am self taught web developer <br className="sm:block hidden" />
          with expertise in React and Next.js
        </p>
      </div>

      <a
        href="#about"
        className="w-max absolute cursor-pointer flex flex-col items-center left-[50%] bottom-10 translate-x-[-50%] "
      >
        <div className="w-[30px] h-[50px] flex pt-3 justify-center rounded-full border-2 border-white ">
          <div className="w-[5px] h-[5px] bg-white rounded-full scroll-dot "></div>
        </div>
        scroll
      </a>
    </section>
  );
};

export default Hero;
