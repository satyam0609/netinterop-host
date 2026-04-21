import NewsContent from "@/sections/NewsContent";
import NewsBanner from "@/sections/NewsBanner";
import { Metadata } from "next";

export const metadata = {
  title:
    "267M Facebook Users Had Name, Photos Numbers Leaked On Dark Web | Intcorp Inc",

  description:
    "Hundreds of millions of Facebook users' data including names, phone numbers, and profile details were reportedly leaked on the dark web. Learn about the leak, risks, investigation, and safety precautions.",

  keywords: [
    "Facebook data leak",
    "dark web",
    "cybersecurity",
    "Facebook users leaked",
    "phone numbers leaked",
    "Facebook security breach",
    "illegal scraping",
    "cybersecurity news",
    "data breach",
    "online privacy",
  ],

  authors: [{ name: "Intcorp Inc" }],
  robots: "index, follow",

  alternates: {
    canonical: "/news",
  },

  // openGraph: {
  //   title: "267M Facebook Users Had Name, Photos Numbers Leaked On Dark Web",
  //   description:
  //     "267 million Facebook users' names, phone numbers, and personal details were reportedly exposed on the dark web. Read the full cybersecurity report and precautions.",
  //   url: "https://yourwebsite.com/news/facebook-users-data-leak",
  //   siteName: "Intcorp Inc",
  //   images: [
  //     {
  //       url: "https://yourwebsite.com/images/facebook-data-leak.jpg",
  //       width: 1200,
  //       height: 630,
  //       alt: "Facebook Data Leak News",
  //     },
  //   ],
  //   locale: "en_US",
  //   type: "article",
  // },

  // twitter: {
  //   card: "summary_large_image",
  //   title: "267M Facebook Users Had Name, Photos Numbers Leaked On Dark Web",
  //   description:
  //     "A major Facebook data breach exposed 267 million users' personal information on the dark web. Learn the risks and safety measures.",
  //   images: ["https://yourwebsite.com/images/facebook-data-leak.jpg"],
  // },

  // alternates: {
  //   canonical: "https://yourwebsite.com/news/facebook-users-data-leak",
  // },
};

const page = () => {
  return (
    <section id="newsPage" className="mt-20 mb-40">
      <NewsBanner />
      <main className="px-6 md:px-20 lg:px-25 max-w-360 mx-auto">
        <NewsContent />
      </main>
    </section>
  );
};

export default page;
