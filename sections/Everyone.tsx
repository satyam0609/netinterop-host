"use client";

import { FadeIn } from "@/components/animation/fade-in";
import UsersIcon from "@/public/svgs/UsersIcon";

const testimonials = [
  {
    name: "Sofia O’Donnell",
    text: `"The ability of Net Interop Corp to effectively set our IT course, as well as implement our corporate vision, has made them a welcome and necessary addition to our organization."`,
  },
  {
    name: "Pablo Wilkinson",
    text: `"Net Interop Corp’s proactive IT management approach ensures the continuity of our operations, preventing unplanned service disruptions that result in expensive outages."`,
  },
  {
    name: "Christian Pratt",
    text: `"Net Interop Corp operates as an extension of our IT department. Their staff understands not only our technology, but also our corporate goals and budget."`,
  },
];

export default function Everyone() {
  return (
    <section className="w-full ">
      {/* HEADER */}
      <div className="py-6 md:py-6 px-6 md:px-20 lg:px-25 max-w-360 mx-auto">
        <FadeIn>
          <div className="max-w-5xl ">
            <h2 className="font-sans font-bold text-[24px] sm:text-[28px] md:text-[32px] lg:text-[36px] leading-[140%] md:leading-[160%] lg:leading-[180%] tracking-[0em] text-[#0F1E4A]">
              What Everyone <span className="text-[#037C3C]">Says</span>
            </h2>

            <p className="mt-7.5 font-sans font-normal text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px] leading-[160%] md:leading-[170%] lg:leading-[180%] tracking-[0em] text-[#696984]">
              Read what our clients have to say about our dedicated IT
              partnership and vision. We take pride in delivering excellence
              that helps organizations thrive and grow.
            </p>
          </div>
        </FadeIn>

        {/* CARDS */}
        <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-16 sm:gap-8 md:gap-[clamp(16px,3vw,32px)] items-stretch">
          {testimonials.map((item, i) => (
            <FadeIn
              key={i}
              delay={i * 0.15}
              duration={0.55}
              distance={8}
              className={
                i === testimonials.length - 1
                  ? "col-span-1 sm:col-span-2 md:col-span-1 mt-0 sm:mt-8 md:mt-0"
                  : ""
              }
            >
              <div
                className={`relative h-full bg-[#e6efea] w-full rounded-[20px] p-6 pt-12 text-center hover:shadow-md hover:scale-102 transition `}
              >
                {/* ICON */}
                <div className="absolute -top-11.25 left-1/2 -translate-x-1/2 w-22.5 h-22.5 flex items-center justify-center bg-white border border-green-600 rounded-full">
                  <UsersIcon />
                </div>

                {/* NAME */}
                <h3 className="text-[#0F1E4A] font-semibold text-lg mt-2">
                  {item.name}
                </h3>

                {/* TEXT */}
                <p className="mt-3 text-gray-600 text-sm leading-relaxed">
                  {item.text}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
