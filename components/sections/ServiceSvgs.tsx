import Image from "next/image";
import React from "react";

interface ServiceSvgsProps {
  icon: any;
  title: string;
}

const ServiceSvgs: React.FC<ServiceSvgsProps> = ({ icon, title }) => {
  return (
    <div className="container max-w-36 mt-10 flex items-center flex-col justify-center gap-3">
      <Image
        src={icon}
        alt={title}
        className="sm:w-20 sm:h-20 w-15 h-15 object-cover"
      />
      <h2 className="text-primary sm:text-xl  text-lg font-medium">{title}</h2>
    </div>
  );
};

export default ServiceSvgs;
