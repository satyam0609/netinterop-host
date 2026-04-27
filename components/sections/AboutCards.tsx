import React from "react";
import Image from "next/image";
import { FadeIn } from "@/components/animation/fade-in";

interface AboutCardsProps {
  id: number;
  title: React.ReactNode;
  para: string;
  imageSrc: any;
}

const AboutCards: React.FC<AboutCardsProps> = ({
  id,
  title,
  para,
  imageSrc,
}) => {
  return (
    <section
      id="aboutCards"
      className={`flex items-center justify-between ${id % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"} md:max-w-7xl w-full mx-auto flex-col-reverse gap-10 my-10`}
    >
      <FadeIn>
        <h2 className="text-primary font-bold text-3xl md:text-4xl underline underline-offset-1 decoration-green my-5 w-full ">
          {title}
        </h2>
        <p className="text-tertiary text-xl md:text-2xl leading-[180%] md:max-w-3xl my-4">
          {para}
        </p>
      </FadeIn>
      <FadeIn>
        <Image
          src={imageSrc}
          alt="AboutImage"
          className="w-100 h-100 object-cover rounded-xl"
        />
      </FadeIn>
    </section>
  );
};

export default AboutCards;
