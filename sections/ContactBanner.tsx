import { FadeIn } from "@/components/animation/fade-in";
import { Button } from "@/components/Button";
import React from "react";

const ContactBanner = () => {
  return (
    <section className="w-full bg-cover min-h-107 bg-[linear-gradient(90deg,rgba(3,124,60,0.3)_0%,rgba(3,124,60,0.2)_10%,rgba(30,30,30,0.3)_30%,rgba(30,30,30,0.2)_70%,transparent_100%),url('/background/contact_1.jpg')] relative bg-position-[center_20%]">
      <div className="min-h-107 max-w-4xl flex items-center justify-start absolute top-0">
        <div className="lg:mx-30 mx-10 flex flex-col  justify-center items-start gap-5">
          <FadeIn>
            <h2
              className="text-main font-semibold sm:text-6xl text-5xl leading-[100%] 
        "
            >
              Get in Touch
            </h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="text-main font-medium sm:text-xl text-lg leading-[180%]">
              We’d love to hear from you. Please fill out the from <br />
              below and we’ll get back to you as soon as possible
            </p>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default ContactBanner;
