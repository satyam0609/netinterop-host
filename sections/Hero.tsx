import React from "react";
import { NavigateButton } from "@/components/Button";
import Image from "next/image";
import professional from "@/public/Netinterop Assets/1x Images/pngtree-man-developer-with-laptop-png-image_13229697_1-removebg-preview 1.png";
import CalendarIcon from "@/public/svgs/CalendarIcon";
import { FadeIn } from "@/components/animation/fade-in";

const Hero = () => {
  return (
    <div className="pt-23 pb-10 relative overflow-hidden">
      <div className="relative z-20 flex flex-col md:flex-row py-16 px-6 md:pl-20 md:pr-10 lg:px-25 max-w-360 lg2:mx-auto gap-4 md:gap-6 ">
        {/* Left: Text Content */}

        <FadeIn className="flex-1 min-w-0 w-full md:max-w-lg">
          <h1 className="text-3xl font-bold sm:text-4xl md:text-5xl md2:text-[54px] md2:leading-[1.15] lg:leading-[1.2] tracking-wide">
            <span className="text-green">Safely Connecting</span>
            <span className="text-primary"> Your World To Theirs</span>
          </h1>
          <p className="mt-6 text-gray font-sans font-normal text-base sm:text-lg lg:text-2xl leading-8 max-w-xl">
            Let's make your work more organized and easily using the Taskio
            Dashboard with many of the latest features in managing work every
            day.
          </p>
          <div className="mt-8">
            <NavigateButton
              title="Explore"
              link="/explore"
              className="bg-green text-main px-10 py-2 rounded-full text-lg font-medium shadow-lg hover:bg-green-800 transition-all"
            />
          </div>
        </FadeIn>

        {/* Right: Image + Stat Cards */}
        <div className=" flex-1 w-full flex justify-center items-center mt-12 sm:mt-16 md:mt-0">
          <div className="relative">
            <FadeIn>
              <img
                className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg object-contain"
                src="/Netinterop Assets/1x Images/pngtree-man-developer-with-laptop-png-image_13229697_1-removebg-preview 1.png"
                alt="Developer with laptop"
              />
            </FadeIn>

            {/* 10k+ Members — top right */}
            <FadeIn
              direction="left"
              className="absolute bottom-[40%] left-[58%] sm:bottom-[40%] md:bottom-[48%] lg:bottom-[40%] md:left-[58%] xl:right-0 z-20 bg-main/80 backdrop-blur-md p-3 lg-md:p-4 rounded-2xl shadow-xl flex items-center gap-3 lg:gap-6 border border-main/20 min-w-40 xl:min-w-75"
            >
              <div className="bg-yellow-400 p-2 lg:p-3 rounded-lg text-main shrink-0">
                <CalendarIcon />
              </div>
              <div>
                <p className="font-nunito font-bold text-lg lg:text-2xl leading-tight tracking-[0.02em] text-lightgray">
                  10k+
                </p>
                <p className="font-nunito font-semibold text-sm lg:text-xl leading-tight tracking-[0.02em] text-secondary">
                  Members
                </p>
              </div>
            </FadeIn>

            {/* 25k+ Clients — middle left */}
            <FadeIn
              direction="right"
              className="absolute top-[58%] right-[58%] md2:right-[56%] lg:right-[58%] z-20 bg-main/80 backdrop-blur-md p-3 lg-md:px-7 lg-md:py-6 rounded-2xl shadow-xl flex items-center gap-3 lg:gap-8 border border-main/20 min-w-40 xl:min-w-75"
            >
              <div className="bg-yellow-400 p-2 lg:p-3 rounded-lg text-main shrink-0">
                <CalendarIcon />
              </div>
              <div>
                <p className="font-nunito font-bold text-lg lg:text-2xl leading-tight tracking-[0.02em] text-lightgray">
                  25k+
                </p>
                <p className="font-nunito font-semibold text-sm lg:text-xl leading-tight tracking-[0.02em] text-secondary">
                  Clients
                </p>
              </div>
            </FadeIn>

            {/* 25k+ Projects — bottom center-right */}
            <FadeIn
              direction="up"
              className="absolute  top-[90%] left-[30%] sm:left-[33%] z-20 bg-main/80 backdrop-blur-md p-3  lg-md:px-7 lg-md:py-6 rounded-2xl shadow-xl flex items-center gap-3 lg:gap-8 border border-main/20 min-w-40 xl:min-w-75"
            >
              <div className="bg-yellow-400 p-2 lg:p-3 rounded-lg text-main shrink-0">
                <CalendarIcon />
              </div>
              <div>
                <p className="font-nunito font-bold text-lg lg:text-2xl leading-tight tracking-[0.02em] text-lightgray">
                  25k+
                </p>
                <p className="font-nunito font-semibold text-sm lg:text-xl leading-tight tracking-[0.02em] text-secondary">
                  Projects Works
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>

      {/* Background circle */}
      <div className="absolute bottom-0 rounded-full w-[400%] aspect-square left-1/2 -translate-x-1/2 bg-lightgreen z-0" />
    </div>
  );
};

export default Hero;

const Hello = () => {
  return (
    // <section className="relative min-h-194.5 flex items-center pt-17.5 overflow-hidden w-full before:content-[''] before:absolute before:inset-0 before:bg-[url('/background/hero.png')] before:bg-cover before:bg-center before:z-0">
    //   <div className="mx-auto px-10 lg:px-25 flex flex-col md:flex-row justify-center w-full gap-10 py-10 items-center">
    //     <div className="z-10 max-w-3xl">
    //       <h1 className="text-3xl font-bold lg:text-[54px] w-full leading-20 tracking-wide">
    //         <span className="text-green">Safely Connecting</span>
    //         <span className="text-primary"> Your World To Theirs</span>
    //       </h1>
    //       <p className="mt-8 text-gray font-sans font-normal text-xl lg:text-2xl leading-8 max-w-xl">
    //         Let's make your work more organized and easily using the Taskio
    //         Dashboard with many of the latest features in managing work every
    //         day.
    //       </p>
    //       <div className="mt-8">
    //         <NavigateButton
    //           title="Explore"
    //           link="/explore"
    //           className="bg-green text-main px-10 py-2 rounded-full text-lg font-medium shadow-lg hover:bg-green-800 transition-all"
    //         />
    //       </div>
    //     </div>

    //     <div className="relative flex justify-center lg:justify-end font-[NunitoSans]">
    //       <div className="relative z-10 ">
    //         <Image
    //           src={professional}
    //           alt="Professional"
    //           className="h-125 lg:h-150 w-153 object-contain"
    //         />
    //       </div>

    //       {/* Floating Stat Cards */}
    //       <div className="absolute top-73.25 -right-0.5 z-20 lg:w-75 h-25 bg-main/80 backdrop-blur- p-4 lg:px-7 lg:py-6 rounded-2xl shadow-xl flex items-center gap-4 lg:gap-8 border border-main/20 min-w-45">
    //         <div className="bg-yellow-400 p-3 rounded-lg text-main">
    //           <span>
    //             <CalendarIcon />
    //           </span>
    //         </div>
    //         <div>
    //           <p className="font-nunito font-bold text-2xl leading-8 tracking-[0.02em] text-lightgray">
    //             10k+
    //           </p>
    //           <p className="font-nunito font-semibold text-xl leading-8 tracking-[0.02em] text-secondary">
    //             Members
    //           </p>
    //         </div>
    //       </div>

    //       {/* 25k+ Clients */}
    //       <div className="absolute bottom-28 -left-20 z-20 lg:w-75 h-25 bg-main/80 backdrop-blur- p-4 lg:px-7 lg:py-6 rounded-2xl shadow-xl flex items-center gap-4 lg:gap-8 border border-main/20 min-w-45">
    //         <div className="bg-yellow-400 p-3 rounded-lg text-main">
    //           <span>
    //             <CalendarIcon />
    //           </span>
    //         </div>
    //         <div>
    //           <p className="font-nunito font-bold text-2xl leading-8 tracking-[0.02em] text-lightgray">
    //             25k+
    //           </p>
    //           <p className="font-nunito font-semibold text-xl leading-8 tracking-[0.02em] text-secondary">
    //             Clients
    //           </p>
    //         </div>
    //       </div>

    //       {/* 25k+ Projects */}

    //       <div className="absolute -bottom-5.5 right-30 z-20 lg:w-75 h-25 bg-main/80 backdrop-blur- p-4 lg:px-7 lg:py-6 rounded-2xl shadow-xl flex items-center gap-4 lg:gap-8 border border-main/20 min-w-45">
    //         <div className="bg-yellow-400 p-3 rounded-lg text-main">
    //           <span>
    //             <CalendarIcon />
    //           </span>
    //         </div>
    //         <div>
    //           <p className="font-nunito font-bold text-2xl leading-8 tracking-[0.02em] text-lightgray">
    //             25k+
    //           </p>
    //           <p className="font-nunito font-semibold text-xl leading-8 tracking-[0.02em] text-secondary">
    //             Projects Works
    //           </p>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </section>
    <section className="px-25 relative overflow-hidden pb-10">
      <div
        className="absolute bottom-0 rounded-full  w-[400%] aspect-square left-1/2 
      -translate-x-1/2 
   
      bg-lightgreen"
      ></div>
      <div className="flex flex-col md:flex-row justify-center w-full gap-10 py-10 items-center">
        <div className="z-10 w-full md:w-1/2 lg:w-2/3">
          <h1 className="text-3xl font-bold lg:text-[54px] w-full leading-20 tracking-wide">
            <span className="text-green">Safely Connecting</span>
            <span className="text-primary">
              {" "}
              Your <br /> World To Theirs
            </span>
          </h1>
          <p className="mt-8 text-gray font-sans font-normal text-xl lg:text-2xl leading-8 max-w-xl">
            Let's make your work more organized and easily using the Taskio
            Dashboard with many of the latest features in managing work every
            day.
          </p>
          <div className="mt-8">
            <NavigateButton
              title="Explore"
              link="/explore"
              className="bg-green text-main px-10 py-2 rounded-full text-lg font-medium shadow-lg hover:bg-green-800 transition-all"
            />
          </div>
        </div>

        <div className="relative flex flex-1 justify-center lg:justify-end font-[NunitoSans]">
          <div className="relative z-10 mr-25">
            <Image
              src={professional}
              alt="Professional"
              className="object-contain"
            />
          </div>

          {/* Floating Stat Cards */}
          <div className="absolute top-[45%] -right-[8%] z-20 lg:w-75 h-25 bg-main/80 backdrop-blur- p-4 lg:px-7 lg:py-6 rounded-2xl shadow-xl flex items-center gap-4 lg:gap-8 border border-main/20 min-w-45">
            <div className="bg-yellow-400 p-3 rounded-lg text-main">
              <span>
                <CalendarIcon />
              </span>
            </div>
            <div>
              <p className="font-nunito font-bold text-2xl leading-8 tracking-[0.02em] text-lightgray">
                10k+
              </p>
              <p className="font-nunito font-semibold text-xl leading-8 tracking-[0.02em] text-secondary">
                Members
              </p>
            </div>
          </div>

          {/* 25k+ Clients */}
          <div className="absolute bottom-[25%] -left-[22%] z-20 lg:w-75 h-25 bg-main/80 backdrop-blur- p-4 lg:px-7 lg:py-6 rounded-2xl shadow-xl flex items-center gap-4 lg:gap-8 border border-main/20 min-w-45">
            <div className="bg-yellow-400 p-3 rounded-lg text-main">
              <span>
                <CalendarIcon />
              </span>
            </div>
            <div>
              <p className="font-nunito font-bold text-2xl leading-8 tracking-[0.02em] text-lightgray">
                25k+
              </p>
              <p className="font-nunito font-semibold text-xl leading-8 tracking-[0.02em] text-secondary">
                Clients
              </p>
            </div>
          </div>

          {/* 25k+ Projects */}

          <div className="absolute -bottom-[2%] right-[10%] z-20 lg:w-75 h-25 bg-main/80 backdrop-blur- p-4 lg:px-7 lg:py-6 rounded-2xl shadow-xl flex items-center gap-4 lg:gap-8 border border-main/20 min-w-45">
            <div className="bg-yellow-400 p-3 rounded-lg text-main">
              <span>
                <CalendarIcon />
              </span>
            </div>
            <div>
              <p className="font-nunito font-bold text-2xl leading-8 tracking-[0.02em] text-lightgray">
                25k+
              </p>
              <p className="font-nunito font-semibold text-xl leading-8 tracking-[0.02em] text-secondary">
                Projects Works
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
