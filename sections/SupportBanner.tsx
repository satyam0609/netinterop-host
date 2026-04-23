import { FadeIn } from "@/components/animation/fade-in";
import { Button } from "@/components/Button";
import React from "react";

const SupportBanner = () => {
  return (
    <section className="w-full min-h-30 bg-cover bg-position-[70%_22%] bg-[linear-gradient(90deg,rgba(3,124,60,0.3)_0%,rgba(3,124,60,0.2)_10%,rgba(30,30,30,0.3)_30%,rgba(30,30,30,0.2)_70%,transparent_100%),url('/background/support.png')]">
      <div className="min-h-150 max-w-4xl flex items-center justify-start px-6 md:px-20 lg:px-25">
        <div className="flex flex-col  justify-center items-start gap-5">
          <FadeIn>
            <h2
              className="text-main font-semibold sm:text-6xl text-4xl leading-[100%] 
        "
            >
              Get Fast, Reliable IT <br className="hidden sm:block" />
              Support When You Need It Most
            </h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-main font-medium sm:text-xl text-lg leading-[180%]">
              Our certified engineers are ready to resolve{" "}
              <br className="hidden sm:block" />
              your issues quickly and efficiently.
            </p>
          </FadeIn>
          <FadeIn delay={0.4}>
            <div className="flex flex-col sm:flex-row justify-center sm:items-center gap-5">
              <Button
                title="Submit a Support Request"
                className="bg-green rounded-md py-2 text-main font-medium sm:text-xl text-lg"
              />
              <Button
                title="Call (703) 968-9800"
                className="bg-main rounded-md py-2 text-primary font-medium sm:text-xl text-lg"
              />
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default SupportBanner;
