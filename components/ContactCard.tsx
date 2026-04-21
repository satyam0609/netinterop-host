import Image from "next/image";
import React from "react";

interface ContactCardProps {
  icon: any;
  title: string;
  subTitle: string | any;
}

const ContactCard: React.FC<ContactCardProps> = ({ icon, title, subTitle }) => {
  return (
    <div className="flex flex-1 flex-col items-start justify-start gap-2 shadow-[2px_8px_22px_2px_#6969844D] p-6 pb-8  rounded-md">
      <div className="flex items-center justify-between gap-3 mt-2">
        <Image
          src={icon}
          alt={title}
          className="sm:w-12 sm:h-12  w-8 h-8 object-cover"
        />
        <h3 className="text-primary font-semibold sm:text-2xl text-xl">
          {title}
        </h3>
      </div>
      <p className="text-green font-normal sm:text-xl text-lg break-all">
        {subTitle}
      </p>
    </div>
  );
};

export default ContactCard;
