"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";

const brands = [
  { src: "/brands/microsoft.png", alt: "Microsoft" },
  { src: "/brands/office365.png", alt: "Office 365" },
  { src: "/brands/aws.png", alt: "AWS" },
  { src: "/brands/nextiva.png", alt: "Nextiva" },
  { src: "/brands/watchguard.png", alt: "WatchGuard" },
  { src: "/brands/kerio.png", alt: "Kerio" },
  { src: "/brands/microsoft.png", alt: "Microsoft" },
  { src: "/brands/office365.png", alt: "Office 365" },
  { src: "/brands/aws.png", alt: "AWS" },
  { src: "/brands/nextiva.png", alt: "Nextiva" },
  { src: "/brands/watchguard.png", alt: "WatchGuard" },
  { src: "/brands/microsoft.png", alt: "Microsoft" },
  { src: "/brands/office365.png", alt: "Office 365" },
  { src: "/brands/aws.png", alt: "AWS" },
  { src: "/brands/nextiva.png", alt: "Nextiva" },
  { src: "/brands/watchguard.png", alt: "WatchGuard" },
  { src: "/brands/kerio.png", alt: "Kerio" },
];

export default function Marquee() {
  const pathname = usePathname();
  return (
    <section className="w-full overflow-hidden bg-white pt-10 max-w-7xl mx-auto">
      <h3 className="font-sans font-medium text-[24px] leading-[160%] tracking-[0.02em] text-center text-tertiary">
        {pathname === "/"
          ? "Offering the Brands You Know and Trust"
          : "We're connected"}
      </h3>
      <div className="relative flex w-full overflow-hidden py-8.5">
        {/* LEFT SHADOW */}
        <div
          className="pointer-events-none absolute -left-1 top-0 h-full w-20 z-10 
                  bg-linear-to-r from-white to-transparent"
        />

        {/* RIGHT SHADOW */}
        <div
          className="pointer-events-none absolute -right-1 top-0 h-full w-20 z-10 
                  bg-linear-to-l from-white to-transparent"
        />
        <div className="flex px-25 animate-marquee gap-10 md:gap-32 whitespace-nowrap">
          {[...brands, ...brands].map((brand, i) => (
            <div key={i} className="flex items-center justify-center min-w-25">
              <Image
                src={brand.src}
                alt={brand.alt}
                width={500}
                height={500}
                className="object-contain transition-transform duration-300 hover:scale-125 cursor-pointer"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
