import { FadeIn } from "@/components/animation/fade-in";
import { Button } from "@/components/Button";
import React from "react";

const NewsBanner = () => {
  return (
    <section className="w-full bg-cover bg-center min-h-107 bg-[linear-gradient(80deg,#037C3CCC_0%,#1E1E1E1A_0.36%,#FFFFFF00_90%),url('/background/service.png')] flex justify-between items-center relative overflow-hidden">
      <div className="min-h-120 flex">
        <div className="absolute -top-50 left-20 md:left-40 w-100 md:w-150 h-25 rounded-full bg-[#ffffff] shadow-[0_400px_200px_150px_#ffffff]  md:shadow-[0_400px_200px_110px_#ffffff]"></div>

        <FadeIn className="flex flex-col  justify-center items-start sm:mx-30 mx-10 gap-5 z-10">
          <h2 className="text-primary font-semibold md:text-[54px] sm:text-5xl text-4xl">
            267M Facebook Users Had <br className="hidden lg:block" />
            Name, Photos Numbers <br className="hidden lg:block" />
            Leaked On Dark Web
          </h2>
          <p className="text-primary font-medium sm:text-xl text-lg leading-[180%]">
            By Interop inc - December 24, 2019 pasted in News
          </p>
        </FadeIn>
      </div>
    </section>
  );
};

export default NewsBanner;
