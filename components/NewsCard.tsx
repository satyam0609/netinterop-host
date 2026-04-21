import Image from "next/image";
import React from "react";

interface NewsCardProps {
  className: string;
  title: string;
  subtitle?: React.ReactNode;
  lists: string[];
}

const NewsCard: React.FC<NewsCardProps> = ({
  className,
  title,
  subtitle,
  lists,
}) => {
  return (
    <div
      className={`${className} bg-main p-4 shadow-[0px_2px_8px_0px_#9ACAB1]`}
    >
      <h4 className="text-primary font-medium sm:text-2xl text-xl">{title}</h4>
      {subtitle && (
        <p className="sm:text-2xl text-xl leading-[180%] text-tertiary">
          {subtitle}
        </p>
      )}
      <ul>
        {lists.map((list, index) => (
          <li key={index} className="flex items-center gap-3">
            <span className="text-green text-xl">
              <Image
                src="/svgs/Setting_alt_line_duotone.svg"
                alt="disc"
                width={23}
                height={23}
              />
            </span>
            <span className="sm:text-2xl text-xl leading-[180%] text-tertiary">
              {list}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NewsCard;
