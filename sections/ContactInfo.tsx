import { FadeIn } from "@/components/animation/fade-in";
import { Button } from "@/components/Button";
import ContactCard from "@/components/ContactCard";
import { supportContactPageData } from "@/constant/data";
import React from "react";

const ContactInfo = () => {
  return (
    <section
      id="contactDetails"
      className="w-full bg-cover h-full md:py-20 py-10 bg-[linear-gradient(180deg,_rgba(255,_255,_255,_0.98)_27.61%,_rgba(3,_124,_60,_0.3)_100%),url('/background/contact_2.jpg')]"
    >
      <div className="w-full flex flex-col md:flex-row items-start justify-between px-6 md:px-20 lg:px-25 max-w-360 mx-auto gap-10">
        <div className="md:w-1/2 sm:w-full">
          <FadeIn>
            <h3 className="text-primary font-semibold sm:text-[54px] text-4xl mb-2">
              Get in Touch
            </h3>
          </FadeIn>
          <FadeIn>
            <p className="text-primary font-medium sm:text-xl text-lg leading-[180%]">
              We’d love to hear from you. Please fill out the from{" "}
              <br className="xl:block hidden sm:block md:hidden" />
              below and we’ll get back to you as soon as possible
            </p>
          </FadeIn>
          <div className="flex flex-col justify-between gap-5 mt-10">
            {supportContactPageData.map((item, idx) => (
              <FadeIn
                key={item.id}
                delay={0.1 + idx * 0.1}
                className="bg-main md:max-w-xl w-full rounded-md"
              >
                <ContactCard
                  icon={item.icon}
                  title={item.title}
                  subTitle={item.subTitle}
                />
              </FadeIn>
            ))}
          </div>
        </div>

        <div className="md:w-1/2 md:max-w-xl w-full">
          <FadeIn>
            <form className="bg-main shadow-[2px_8px_22px_2px_#6969844D] p-6 rounded-md">
              <h5 className="text-primary font-medium sm:text-[28px] text-2xl mb-2">
                Email Support
              </h5>
              <p className="text-tertiary sm:text-xl text-lg">
                Fill out the from below and our team will get{" "}
                <br className="xl:block hidden sm:block md:hidden" />
                back to you shortly.
              </p>

              <div className="flex flex-col gap-4 mt-6">
                {/* Name */}
                <div className="form-control">
                  <label className="text-primary sm:text-xl text-lg">
                    Name <span className="text-[#FF0000]">*</span>
                  </label>
                  <input
                    type="text"
                    className="w-full p-3 rounded-md border-[1px_#1E1E1E1A] bg-slate outline-none my-3"
                  />
                </div>

                <div className="form-control">
                  <label className="text-primary sm:text-xl text-lg">
                    Email <span className="text-[#FF0000]">*</span>
                  </label>
                  <input
                    type="email"
                    className="w-full p-3 rounded-md border-[1px_#1E1E1E1A] bg-slate outline-none my-3"
                  />
                </div>

                <div className="form-control">
                  <label className="text-primary sm:text-xl text-lg">
                    Phone <span className="text-[#FF0000]">*</span>
                  </label>
                  <input
                    type="tel"
                    className="w-full p-3 rounded-md border-[1px_#1E1E1E1A] bg-slate outline-none my-3"
                  />
                </div>

                <div className="form-control">
                  <label className="text-primary sm:text-xl text-lg">
                    Massage <span className="text-[#FF0000]">*</span>
                  </label>
                  <textarea
                    placeholder="Your Message"
                    rows={4}
                    className="w-full p-3 rounded-md border-[1px_#1E1E1E1A] bg-slate outline-none my-3 resize-none"
                  />

                  <Button
                    title="Send Massage"
                    className="py-3 rounded-md text-center bg-green w-full text-main my-5"
                  />
                </div>
              </div>
            </form>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;
