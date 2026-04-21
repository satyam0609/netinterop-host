import Image from "next/image";
import React from "react";
import { Button } from "./Button";

interface SupportCardProps {
  icon: any;
  title: string;
  subTitle: string;
  buttonText: string;
  className?: string;
}

const SupportCard: React.FC<SupportCardProps> = ({
  icon,
  title,
  subTitle,
  buttonText,
  className,
}) => {
  return (
    <div
      className={`flex flex-1 flex-col items-center justify-center gap-2 shadow-[2px_8px_22px_2px_#6969844D] p-6 pb-8 lg2:min-w-92 rounded-md hover:scale-101 transition-transform ease-in duration-100 bg-main ${className}`}
    >
      <Image
        src={icon}
        alt={title}
        className="sm:w-25 sm:h-25 w-15 h-15 object-cover"
      />
      <h3 className="text-primary text-center font-semibold sm:text-[28px] text-xl">
        {title}
      </h3>
      <p className="text-green text-center font-normal sm:text-xl  text-lg leading-[100%]">
        {subTitle}
      </p>
      <Button
        title={buttonText}
        className="bg-green text-main font-medium sm:text-xl text-lg rounded-md leading-[100%] my-4 py-3"
      />
    </div>
  );
};

export default SupportCard;
