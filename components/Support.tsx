import Image from "next/image";
import React from "react";

interface SupportProps {
  icon: any;
  title: string;
  subTitle: string;
}

const Support: React.FC<SupportProps> = ({ icon, title, subTitle }) => {
  return (
    <div className="flex items-start justify-between gap-2">
      <Image
        src={icon}
        alt={title}
        className="w-9 h-9 sm:w-13 sm:h-13object-cover"
      />
      <div className="flex items-start flex-col justify-end mt-2">
        <h3 className="text-primary font-semibold  sm:text-2xl text-xl">
          {title}
        </h3>
        <p className="text-tertiary font-normal sm:text-xl">{subTitle}</p>
      </div>
    </div>
  );
};

export default Support;
