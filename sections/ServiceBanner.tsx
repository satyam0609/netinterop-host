import { FadeIn } from "@/components/animation/fade-in";
import { Button } from "@/components/Button";
import React from "react";

const ServiceBanner = () => {
  return (
    <section className="w-full bg-cover bg-no-repeat min-h-107 bg-position-[30%_center] lg:bg-center  bg-[url('/background/service.png')] flex justify-between items-center overflow-hidden relative">
      <div className="flex flex-col  justify-center items-start px-6 md:px-20 lg:px-25 gap-5">
        <div className="absolute -top-60 w-70 md:w-100 h-20 rounded-full bg-[#037C3C] shadow-[0_400px_200px_100px_#037C3C]  md:shadow-[0_400px_200px_100px_#037C3C]"></div>
        <FadeIn className="z-10">
          <h2 className="text-main font-semibold sm:text-6xl text-4xl">
            Our Services
          </h2>
        </FadeIn>
        <FadeIn delay={0.2} className="z-10">
          <p className="text-main font-medium sm:text-xl  text-lg leading-[180%]">
            Comprehensive IT Solutions Tailored <br /> for Your Business Needs.
          </p>
        </FadeIn>
        <FadeIn delay={0.4} className="z-10">
          <Button
            title="Get a Free Consultation"
            className="bg-green rounded-md py-2 text-main font-medium sm:text-xl hover:scale-102 transition-all duration-75"
          />
        </FadeIn>
      </div>
    </section>
  );
};

export default ServiceBanner;
