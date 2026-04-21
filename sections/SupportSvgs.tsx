import { Check } from "lucide-react";
import Image from "next/image";
import React from "react";

interface SupportSvgsProps {
  title: string;
}

const SupportSvgs: React.FC<SupportSvgsProps> = ({ title }) => {
  return (
    <div className="container  mt-10 flex items-center  justify-center gap-3">
      <Check size={24} className="text-green" />
      <h2 className="text-primary sm:text-xl text-lg font-medium">{title}</h2>
    </div>
  );
};

export default SupportSvgs;
