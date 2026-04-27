import type { Metadata } from "next";
import { Geist, Geist_Mono, Poppins, Nunito_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Toaster } from "react-hot-toast";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

const nunitoSans = Nunito_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-nunito",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://netinterop-host.vercel.app/"),

  title: {
    default: "NetInterop Corp | IT Solutions & Team Scaling",
    template: "%s | NetInterop Corp",
  },

  description:
    "NetInterop Corp helps businesses scale efficiently with customized IT solutions, workflow automation, and team management systems.",

  keywords: [
    "IT solutions company",
    "team scaling software",
    "workflow automation tools",
    "enterprise IT consulting",
    "business process optimization",
  ],

  authors: [{ name: "NetInterop Corp" }],
  creator: "NetInterop Corp",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "NetInterop Corp | Safely Connecting Your World to Theirs",
    description:
      "Scale your business with powerful IT solutions, smarter workflows, and expert consulting.",
    url: "/",
    siteName: "NetInterop Corp",
    images: [
      {
        url: "/og-image.png",
        width: 400,
        height: 400,
        alt: "NetInterop Corp IT Solutions",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "NetInterop Corp | IT Solutions & Scaling",
    description: "Optimize workflows and scale your team with NetInterop.",
    images: ["/og-image.png"],
  },

  robots: {
    index: true,
    follow: true,
  },

  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`
    ${poppins.variable} 
    ${nunitoSans.variable}
    h-full antialiased
  `}
    >
      <body className={`w-full ${poppins.variable}`}>
        <Navbar />
        {children}
        <Toaster position="top-right" reverseOrder={false} />
        <Footer />
      </body>
    </html>
  );
}
