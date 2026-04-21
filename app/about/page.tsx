import { Button } from "@/components/Button";
import { aboutCardsSectionData } from "@/constant/data";
import AboutCards from "@/sections/AboutCards";
import HeroAbout from "@/sections/HeroAbout";
import Marquee from "@/sections/Marquee";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About NetInterop Corp | IT Consulting & Team Expertise",
  description:
    "Learn about NetInterop Corp, our leadership team, and 25+ years of experience delivering scalable IT consulting and business solutions.",

  keywords: [
    "about NetInterop",
    "IT consulting company",
    "business technology solutions",
    "enterprise IT services",
    "team scaling experts",
  ],

  alternates: {
    canonical: "/about",
  },

  openGraph: {
    title: "About NetInterop Corp | Leadership & IT Expertise",
    description:
      "Meet the team behind NetInterop and explore our 25+ years of experience in IT consulting and business solutions.",
    url: "/about",
    images: [
      {
        url: "/og-image.png",
        width: 400,
        height: 400,
        alt: "NetInterop About Page",
      },
    ],
  },
};

const page = () => {
  return (
    <section
      id="aboutPage"
      className="mb-40 px-6 md:px-20 lg:px-25 max-w-360 mx-auto"
    >
      <div className="mt-30 text-center">
        <Button icon={""} title="About" className="bg-green text-main" />
      </div>

      <HeroAbout />
      <Marquee />
      {aboutCardsSectionData.map((item) => (
        <div key={item.id}>
          <AboutCards
            id={item.id}
            title={item.title}
            para={item.para}
            imageSrc={item.image}
          />
        </div>
      ))}
    </section>
  );
};

export default page;
