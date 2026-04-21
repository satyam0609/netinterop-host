import Business from "@/sections/Business";
import Everyone from "@/sections/Everyone";
import Hero from "@/sections/Hero";
import Marquee from "@/sections/Marquee";

export const metadata = {
  title: "NetInterop Corp | IT Solutions, Team Scaling & Workflow Optimization",
  description:
    "Safely connect your business with powerful IT solutions. NetInterop Corp helps you scale teams, optimize workflows, and deliver smarter projects.",

  keywords: [
    "IT solutions company",
    "business scaling",
    "team management software",
    "workflow optimization",
    "enterprise IT consulting",
    "project workflow tools",
  ],
};

const HomePage = () => {
  return (
    <section id="home" className="mb-40">
      <Hero />
      <Marquee />
      <Business />
      <Everyone />
    </section>
  );
};

export default HomePage;
