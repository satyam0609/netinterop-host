import { FadeIn } from "@/components/animation/fade-in";
import Support from "@/components/Support";
import {
  serviceCardSectionData,
  serviceSvgs,
  supportSvgData,
} from "@/constant/data";
import ServiceBanner from "@/sections/ServiceBanner";
import ServiceCard from "@/sections/ServiceCards";
import ServiceSvgs from "@/sections/ServiceSvgs";

const page = () => {
  return (
    <section id="servicePage" className="mt-20 mb-40 ">
      <ServiceBanner />

      <main className="px-6 md:px-20 lg:px-25 max-w-360 mx-auto">
        <section
          id="serviceSpecial"
          className="w-full max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-4 place-items-center"
        >
          {serviceSvgs.map((item) => (
            <FadeIn key={item.id} distance={8}>
              <div>
                <ServiceSvgs icon={item.icon} title={item.title} />
              </div>
            </FadeIn>
          ))}
        </section>

        <section
          id="serviceCard"
          className="w-full py-16 sm:py-20 max-w-7xl mx-auto even:md:flex-row-reverse overflow-hidden space-y-12 sm:space-y-20"
        >
          {serviceCardSectionData.map((item, index) => (
            <div key={item.id} className="">
              <ServiceCard
                index={index}
                id={item.id}
                title={item.title}
                para={item.para}
                lists={item.lists}
                imageSrc={item.image}
                imageTitle={item.imageTitle}
                imagePara={item.imagePara}
                imageButtonTitle={item.imageButtonTitle}
              />
            </div>
          ))}
        </section>

        <section id="serviceSpecial" className="w-full max-w-7xl mx-auto">
          <FadeIn>
            <div className="text-center mb-10">
              <h2 className="sm:text-4xl  text-2xl font-medium text-primary">
                Ready to <span className="text-green">Enhance</span> Your{" "}
                <span className="text-green">IT Infrastructure?</span>
              </h2>
              <p className="sm:text-2xl  text-lg  text-tertiary leading-[180%]">
                Contact us today to learn how we can support and grow your
                business
              </p>
            </div>
          </FadeIn>

          <FadeIn>
            <div className="flex flex-col gap-10 sm:flex-row justify-between bg-main shadow-[2px_8px_22px_2px_#6969844D] p-6 rounded-lg">
              {supportSvgData.map((item) => (
                <div key={item.id}>
                  <Support
                    icon={item.icon}
                    title={item.title}
                    subTitle={item.subTitle}
                  />
                </div>
              ))}
            </div>
          </FadeIn>
        </section>
      </main>
    </section>
  );
};

export default page;
