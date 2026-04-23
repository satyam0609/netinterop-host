import aboutImage1 from "@/public/Netinterop Assets/1x Images/a-man-in-glasses-holding-a-laptop-free-png 2.png";
import aboutImage2 from "@/public/Netinterop Assets/1x Images/pngtree-corporate-executives-convene-to-brainstorm-and-strategize-a-project-png-image_12425353 1.png";
import aboutImage3 from "@/public/Netinterop Assets/1x Images/pngtree-business-taam-businessteam-person-sitting-photo-png-image_20089124-removebg-preview 1.png";
import Materials from "@/public/svgs/Materials_fill.svg";
import Message from "@/public/svgs/Message_alt_fill.svg";
import Shield from "@/public/svgs/Chield_check_fill.svg";
import Phone from "@/public/svgs/Phone_fill.svg";
import Headphone from "@/public/svgs/Headphones_fill.svg";
import Time from "@/public/svgs/Time.svg";
1;
import serviceImage1 from "@/public/Netinterop Assets/1x Images/service-section-call-center.png";
import serviceImage2 from "@/public/Netinterop Assets/2x Images/ChatGPT Image Mar 6, 2026, 10_42_25 PM 1.png";
import Compass from "@/public/svgs/Compass_fill.svg";
import Desktop from "@/public/svgs/desktop_duotone_fill.svg";
import HeadphoneFill from "@/public/svgs/Headphones_fill_duotone_line.svg";
import Note from "@/public/svgs/Desk_alt_duotone_line.svg";
import Pin from "@/public/svgs/Pin_alt_fill.svg";
import NewsCard from "@/components/NewsCard";

export const navlinks = [
  { id: 1, title: "About", link: "/about" },
  { id: 2, title: "Services", link: "/services" },
  { id: 3, title: "Support", link: "/support" },
  { id: 4, title: "News", link: "/news" },
];

export const aboutCardsSectionData = [
  {
    id: 1,
    title: (
      <>
        Full-service <span className="text-green">IT</span> consulting
      </>
    ),
    para: "Net Interop Corp is an innovative and rapidly growing full-service IT consulting firm. We provide our clients with cutting-edge technologies and the know-how to apply them to their individual business models.",
    image: aboutImage1,
  },
  {
    id: 2,
    title: (
      <>
        <span className="text-green">25+</span> years experience
      </>
    ),
    para: "For over 25+ years, we have been providing reliable IT solutions to businesses in the Washington Metro area and beyond. Our comprehensive services provide clients with unique technology solutions that are customized to meet the specific demands of their business.",
    image: aboutImage2,
  },
  {
    id: 3,
    title: (
      <>
        Clients can focus on core<span className="text-green"> Business</span>
      </>
    ),
    para: "Look to our experts for strategic IT guidance, management and support that allows you to take your mind off technology and concentrate on your core area of business. Net Interop Corp provides cost-efficient consulting services and solutions that simply make good sense.",
    image: aboutImage3,
  },
];

export const serviceSvgs = [
  { id: 1, icon: Materials, title: "Collaboration" },
  { id: 2, icon: Message, title: "Messaging" },
  { id: 3, icon: Shield, title: "Security" },
  { id: 4, icon: Phone, title: "Communication " },
];

export const supportSvgData = [
  {
    id: 1,
    icon: Shield,
    title: "24/7 Support",
    subTitle: "Customer Support",
  },
  {
    id: 2,
    icon: Headphone,
    title: "Certified Experts ",
    subTitle: "Option 2 for Support",
  },
  {
    id: 3,
    icon: Time,
    title: "Average Response Time",
    subTitle: "98% Client Retention",
  },
];

// export const serviceCardSectionData = [
//   {
//     id: 1,
//     title: (
//       <>
//         Unified Business <br /> Communication
//       </>
//     ),
//     para: (
//       <>
//         Streamline your business with{" "}
//         <span className="text-green">our unified</span> communications
//         solutions, making it easy to stay connected with your team and clients.
//       </>
//     ),
//     lists: [
//       "Auto Attendant",
//       "Conference",
//       "Call Forwarding",
//       "Voice to Email",
//       "Dynamic Voice Conferences",
//     ],
//     image: serviceImage1,
//     src: "/public/Netinterop Assets/1x Images/service-section-call-center.png",
//     imageTitle: "Advance Security Protection",
//     imagePara: (
//       <>
//         Protect your business with our unified communication, <br /> asset
//         tracking and automated security managment
//       </>
//     ),
//     imageButtonTitle: "Get Protected",
//   },
//   {
//     id: 2,
//     title: (
//       <>
//         Professional Business <br /> Messaging
//       </>
//     ),
//     para: (
//       <>
//         Elevate your team’s productivity with our business class messaging
//         platform.
//       </>
//     ),
//     lists: [
//       "Instant Messaging",
//       "Group Chat",
//       "Shared Calendar",
//       "Contact Management",
//       "Malware Protection",
//     ],
//     image: serviceImage2,
//     src: "/public/Netinterop Assets/2x Images/ChatGPT Image Mar 6, 2026, 10_42_25 PM 1.png",
//   },
// ];

export const serviceCardSectionData = [
  {
    id: 1,
    title: (
      <>
        Unified Business <br /> Communication
      </>
    ),
    para: (
      <>
        Streamline your business with our unified communication solutions,
        making it easy to stay connected with your team and clients.
      </>
    ),
    lists: [
      "Auto Attendant",
      "Call Queues",
      "Conference Calls",
      "Ring Groups",
      "Call Forwarding",
      "Call Pickup",
      "Call Parking",
      "Call Recording",
      "Paging",
      "Fax Support",
      "Voicemail to Email",
      "Dynamic Voice Conferences",
    ],
    image: serviceImage1,
    src: "/public/Netinterop Assets/1x Images/service-section-call-center.png",
    imageTitle: "Total Communication",
    imagePara: (
      <>
        Our softphone app for Apple iOS and Android mobile devices lets users
        take their office phone on-the-go.
        <br />
        <br />
        Our PBX solution integrates with any SIP + VOIP provider. We regularly
        work with Comcast, Verizon, Nexiva, Star2Star and nexVortex.
      </>
    ),
    imageButtonTitle: "Connect Today",
  },

  {
    id: 2,
    title: (
      <>
        Advanced Security <br /> Protection
      </>
    ),
    para: (
      <>
        Protect your business with advanced security solutions that help manage,
        monitor, and secure your complete IT infrastructure.
      </>
    ),
    lists: [
      "Managed Antivirus",
      "Patch Management",
      "Automated Monitoring",
      "Alerting & Viewing",
      "Remote Access & Management",
      "Systems Reporting",
      "Asset Tracking",
      "Automated Maintenance",
      "Manage Mobile Devices",
    ],
    image: serviceImage2,
    src: "/public/Netinterop Assets/2x Images/security-protection.png",
    imageTitle: "Advanced Protection",
    imagePara: (
      <>
        NICProtect helps your business focus on your business, not your IT
        infrastructure. With NICProtect’s tools, Net Interop can centrally
        manage your complete inventory of electronic assets.
      </>
    ),
    imageButtonTitle: "Get Secured",
  },
];

export const supportSpecialData = [
  { id: 1, title: "25+ Years Experience" },
  { id: 2, title: "24/7 IT Support" },
  { id: 3, title: "Certified Engineers" },
];

export const supportContactData = [
  {
    id: 1,
    icon: Message,
    title: "Email Support",
    subTitle: "support@netinterop.com",
  },
  {
    id: 2,
    icon: Phone,
    title: "Call Us ",
    subTitle: "(703) 968-9800",
  },
  {
    id: 3,
    icon: Compass,
    title: "Remote Access",
    subTitle: "netinterop.maxdesk.us",
  },
];

export const supportCardsData = [
  {
    id: 1,
    icon: Desktop,
    title: "Exisitng Customers",
    subTitle: "Access your support portal",
    buttonText: "Get to Portal",
  },
  {
    id: 2,
    icon: HeadphoneFill,
    title: "Remote Assistance ",
    subTitle: "Get secure remote assistance",
    buttonText: "Start Remote Support",
  },
  {
    id: 3,
    icon: Note,
    title: "New Customers",
    subTitle: "Create a new support ticket",
    buttonText: "Register Here",
  },
];

export const supportContactPageData = [
  {
    id: 1,
    icon: Message,
    title: "Email Support",
    subTitle: "support@netinterop.com",
  },
  {
    id: 2,
    icon: Phone,
    title: "Call Us ",
    subTitle: "(703) 968-9800",
  },
  {
    id: 3,
    icon: Compass,
    title: "Remote Access",
    subTitle: "netinterop.maxdesk.us",
  },
  {
    id: 4,
    icon: Pin,
    title: "Address",
    subTitle: (
      <>
        5501 Merchants View Square  I  Suite 108 I 
        <br className="xl:block hidden sm:block md:hidden" /> Haymarket, VA 
        20169
      </>
    ),
  },
];

export const NewsCardData1 = [
  {
    title: "Articles Quick Links",
    lists: [
      "Dark Web Discovery",
      "Illegal Scraping Operation",
      "Facebook’s Investigation",
      "Precautionary Measures ",
    ],
  },
];

export const NewsCardData2 = [
  {
    title: "Articles Quick Links",
    subtitle: (
      <>
        <span className="text-green">Dark Web</span> Discovery
      </>
    ),
    lists: [
      "Illegal Scraping Operation",
      "Facebook’s Investigation",
      "Precautionary Measures ",
    ],
  },
];

export const footerLinks = [
  { id: 1, title: "About", link: "/about" },
  { id: 3, title: "Support", link: "/support" },
  { id: 2, title: "Services", link: "/services" },
  { id: 4, title: "News", link: "/news" },
  { id: 5, title: "Terms & Conditins", link: "/terms_and_conditins" },
  { id: 6, title: "Privacy Policy", link: "/privacy_policy" },
];
