import React from "react";
import Image from "next/image";
import { Button } from "@/components/Button";
import { FadeIn } from "@/components/animation/fade-in";

interface ServiceCardProps {
  id: number;
  title: React.ReactNode;
  para: React.ReactNode;
  lists: string[];
  imageSrc: any;
  imageTitle?: string;
  imagePara?: React.ReactNode;
  imageButtonTitle?: string;
  index: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  id,
  title,
  para,
  lists,
  imageSrc,
  imageTitle,
  imagePara,
  imageButtonTitle,
  index,
}) => {
  return (
    <section
      id="ServiceCard"
      className={`flex items-start justify-between sm:gap-10 gap-5 flex-col-reverse ${id % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"}`}
    >
      <div className="text-wrap">
        <FadeIn direction={index % 2 == 0 ? "right" : "left"} distance={8}>
          <h2 className="text-primary font-bold sm:text-4xl text-2xl leading-[160%]">
            {title}
          </h2>
        </FadeIn>
        <FadeIn
          direction={index % 2 == 0 ? "right" : "left"}
          delay={0.1}
          distance={8}
        >
          <p className="text-tertiary sm:text-2xl  text-lg  leading-[180%] max-w-121 my-4">
            {para}
          </p>
        </FadeIn>
        <ul className="text-tertiary sm:text-2xl  text-lg leading-[180%] mt-4">
          {lists.map((list, idx) => (
            <li key={idx} className="">
              <FadeIn
                direction={index % 2 == 0 ? "right" : "left"}
                delay={0.1 + 0.1 * idx}
                distance={8}
                className="flex items-center gap-3"
              >
                <span className="text-green text-xl">
                  <Image
                    src="/svgs/Setting_alt_line_duotone.svg"
                    alt="disc"
                    width={23}
                    height={23}
                  />
                </span>
                <span>{list}</span>
              </FadeIn>
            </li>
          ))}
        </ul>
      </div>
      <FadeIn
        direction={index % 2 === 0 ? "left" : "right"}
        className="flex flex-col justify-center"
      >
        <div className="relative">
          <Image
            src={imageSrc}
            alt={"serviceImage"}
            className="w-174.5 h-100 min-[623px]:h-108 rounded-xl object-cover sm:object-cover "
          />

          {(imageTitle || imagePara || imageButtonTitle) && (
            <div
              className="image-content bg-[#00000040] sm:max-w-122 sm:p-6 p-4 md:py-10 absolute  sm:top-[10%] top-[20%] rounded-md
"
            >
              <h4 className="text-main font-semibold sm:text-4xl text-2xl leading-10">
                {imageTitle}
              </h4>
              <p className="text-main sm:text-xl text-sm leading-[140%] my-4">
                {imagePara}
              </p>
              {imageButtonTitle && (
                <Button
                  title={imageButtonTitle}
                  className="text-main bg-green rounded-md"
                />
              )}
            </div>
          )}
        </div>
      </FadeIn>
    </section>
  );
};

export default ServiceCard;
