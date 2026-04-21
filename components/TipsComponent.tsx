import React, { FC } from "react";
import { Button } from "./Button";

interface TipsComponentProps {
  className: string;
}

const TipsComponent: React.FC<TipsComponentProps> = ({ className }) => {
  return (
    <div className={`${className} bg-green p-4`}>
      <h2 className="text-main sm:text-2xl text-xl font-semibold leading-[180%]">
        Cybersecurity Tips <br />
        Delivered to Your inbox
      </h2>
      <p className="text-main text-base leading-[180%] my-2">
        Subscribe for updates and tips on securing your digital assets
      </p>
      <form
        action=""
        className="flex  flex-col justify-between gap-5 my-5 mt-8"
      >
        <input
          type="text"
          placeholder="Enter Your Email"
          className="bg-main rounded-md text-xl text-primary py-2 px-4 w-full border-none outline-none placeholder:text-primary"
        />
        <Button
          title="Subscribe"
          className="text-main bg-primary  py-2 rounded-md"
        />
      </form>
    </div>
  );
};

export default TipsComponent;
