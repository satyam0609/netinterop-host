import Business from "@/sections/Business";
import Everyone from "@/sections/Everyone";
import Hero from "@/sections/Hero";
import Marquee from "@/sections/Marquee";

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
