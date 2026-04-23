"use client";

import React from "react";
import { Button } from "./Button";
import Link from "next/link";
import { footerLinks } from "@/constant/data";
import { ChevronRight } from "lucide-react";
import { usePathname } from "next/navigation";
import { FadeIn } from "./animation/fade-in";

const Footer = () => {
  const patname = usePathname();

  return (
    <footer
      className={`relative  pt-32 mb-0 ${patname === "/support" ? "bg-slate" : "bg-main"}`}
    >
      {/* Floating CTA Box */}
      <FadeIn
        distance={8}
        className="container absolute -top-20 left-1/2 -translate-x-1/2 z-20 px-6 md:px-20 lg:px-25 max-w-360 mx-auto"
      >
        <div className="bg-primary rounded-lg p-10 lg:p-16 flex flex-col items-center justify-between shadow-2xl">
          <div className="mb-8 text-center">
            <h2 className="text-3xl md:text-5xl font-medium text-main leading-[140%]">
              Build smarter, launch faster
            </h2>
            <p className="text-main/80 mt-4 text-lg">
              Turn your ideas into powerful projects today
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full md:w-auto">
            <input
              type="email"
              placeholder="Enter Your Email"
              className="px-6 py-4 rounded-sm bg-white text-primary placeholder:text-primary font-medium outline-none w-full sm:w-50 shadow-inner  text-start"
            />
            <Button
              title="Send"
              icon={<ChevronRight />}
              className="bg-secondary text-white px-8 py-4 rounded-sm font-semibold hover:bg-opacity-90 transition-all w-full sm:w-auto flex items-center justify-center gap-3"
            />
          </div>
        </div>
      </FadeIn>

      {/* Main Footer Content */}
      <div className="sm:pt-50  pt-70  px-6  pb-10 min-h-50 bg-green w-full">
        <div className="flex flex-col xl:flex-row items-center justify-between w-full max-w-7xl mx-auto mt-5 gap-5">
          <h3 className="text-main max-w-4xl mb-6 lg:mb-0 font-medium">
            © 2026 Net Interop Inc.{" "}
          </h3>
          <nav className="text-main flex flex-col md:flex-row items-center justify-center gap-6">
            {footerLinks.map((item) => (
              <Link key={item.id} href={item.link}>
                {item.title}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
