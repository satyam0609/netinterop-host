import Link from "next/link";
import React from "react";

interface NavigateButtonProps {
  title: string;
  className: string;
  link: string;
}

interface ButtonProps {
  title: string;
  className: string;
  icon?: any;
}

const mainStyle = "py-1.5 px-6 rounded-full transition-all";

export const NavigateButton: React.FC<NavigateButtonProps> = ({
  title,
  className,
  link,
}) => {
  return (
    <Link href={link} className={`${className} ${mainStyle}`}>
      {title}
    </Link>
  );
};

export const Button: React.FC<ButtonProps> = ({ title, className, icon }) => {
  return (
    <button className={`${className} ${mainStyle}`}>
      {title} {icon}
    </button>
  );
};
