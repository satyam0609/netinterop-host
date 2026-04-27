import Link from "next/link";
import React from "react";

interface NavigateButtonProps {
  title: string;
  className: string;
  link: string;
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  icon?: React.ReactNode;
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

export const Button: React.FC<ButtonProps> = ({
  title,
  className,
  icon,
  disabled,
  ...rest
}) => {
  return (
    <button
      disabled={disabled}
      className={`
        ${mainStyle}
        ${className ?? ""}
        ${disabled ? "opacity-50 cursor-not-allowed" : "hover:opacity-90"}
      `}
      {...rest}
    >
      {title} {icon}
    </button>
  );
};
