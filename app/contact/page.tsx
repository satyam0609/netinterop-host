import { FadeIn } from "@/components/animation/fade-in";
import Support from "@/components/Support";
import { supportSvgData } from "@/constant/data";
import ContactBanner from "@/sections/ContactBanner";
import ContactInfo from "@/sections/ContactInfo";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact NetInterop Corp | Get IT Support & консультаion",
  description:
    "Contact NetInterop Corp for expert IT consulting, support, and business solutions. Reach our team via email, phone, or support form.",

  keywords: [
    "contact NetInterop",
    "IT support contact",
    "business IT consulting contact",
    "technical support services",
    "NetInterop help",
  ],

  alternates: {
    canonical: "/contact",
  },

  openGraph: {
    title: "Contact NetInterop Corp | IT Support & Consulting",
    description:
      "Get in touch with NetInterop Corp for IT solutions, expert consulting, and dedicated support.",
    url: "/contact",
    images: [
      {
        url: "/og-image.png",
        width: 400,
        height: 400,
        alt: "Contact NetInterop Corp",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Contact NetInterop Corp",
    description: "Reach out to NetInterop for IT solutions and support.",
    images: ["/og-contact.png"],
  },
};

const page = () => {
  return (
    <section id="contactPage" className="mt-20 mb-40">
      <ContactBanner />

      <ContactInfo />

      <main className="px-6 md:px-20 lg:px-25 max-w-360 mx-auto">
        <FadeIn>
          <section
            id="supportDetial"
            className="flex flex-col sm:flex-row gap-4 justify-between bg-main shadow-[2px_8px_22px_2px_#6969844D] p-6 rounded-lg max-w-7xl mx-auto my-10"
          >
            {supportSvgData.map((item) => (
              <div key={item.id}>
                <Support
                  icon={item.icon}
                  title={item.title}
                  subTitle={item.subTitle}
                />
              </div>
            ))}
          </section>
        </FadeIn>
      </main>
    </section>
  );
};

export default page;
