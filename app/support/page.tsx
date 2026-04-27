import { FadeIn } from "@/components/animation/fade-in";
import ContactCard from "@/components/ContactCard";
import SupportCard from "@/components/SupportCard";
import {
  supportCardsData,
  supportContactData,
  supportSpecialData,
} from "@/constant/data";
import SupportBanner from "@/components/sections/SupportBanner";
import SupportSvgs from "@/components/sections/SupportSvgs";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "IT Support Services | 24/7 Technical Support | NetInterop Corp",
  description:
    "Get fast and reliable IT support from NetInterop Corp. Our certified engineers provide 24/7 technical support, remote assistance, and business IT solutions.",

  keywords: [
    "IT support services",
    "technical support",
    "remote IT support",
    "24/7 IT support",
    "business IT help",
    "IT help desk services",
    "NetInterop support",
  ],

  alternates: {
    canonical: "/support",
  },

  openGraph: {
    title: "24/7 IT Support | NetInterop Corp",
    description:
      "Fast, reliable IT support with certified engineers. Get remote assistance and expert help anytime.",
    url: "/support",
    siteName: "NetInterop Corp",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "NetInterop IT Support",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "IT Support Services | NetInterop",
    description:
      "24/7 IT support, remote assistance, and certified engineers ready to help.",
    images: ["/og-image.png"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

const page = () => {
  return (
    <section id="supportPage" className="mt-28 bg-slate pb-40">
      <SupportBanner />

      <main className="px-6 md:px-20 lg:px-25">
        <section
          id="spportSpecial"
          className="w-full max-w-7xl mx-auto flex flex-wrap justify-evenly items-center "
        >
          {supportSpecialData.map((item) => (
            <div key={item.id}>
              <SupportSvgs title={item.title} />
            </div>
          ))}
        </section>

        <section
          id="supportDetial"
          className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg-md:grid-cols-3 gap-5 md:gap-7.5 my-10 relative items-stretch"
        >
          {supportCardsData.map((item, index) => (
            <FadeIn
              className={`h-full flex flex-col ${
                index === supportCardsData.length - 1
                  ? "col-span-1 sm:col-span-2 lg-md:col-span-1"
                  : ""
              }`}
              key={item.id}
            >
              <SupportCard
                key={item.id}
                icon={item.icon}
                title={item.title}
                subTitle={item.subTitle}
                buttonText={item.buttonText}
              />
            </FadeIn>
          ))}
        </section>

        <section
          id="ContactUsCard"
          className="bg-main max-w-7xl mx-auto p-8 rounded-md mt-10"
        >
          <h3 className="text-primary text-[28px] font-semibold text-center mb-6">
            Contact Us
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 pb-6">
            {supportContactData.map((item, i) => (
              <FadeIn
                className="flex h-full flex-col"
                key={item.id}
                distance={8}
              >
                <ContactCard
                  icon={item.icon}
                  title={item.title}
                  subTitle={item.subTitle}
                />
              </FadeIn>
            ))}
          </div>
        </section>
      </main>
    </section>
  );
};

export default page;
