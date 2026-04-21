import { Button } from "@/components/Button";
import { aboutCardsSectionData } from "@/constant/data";
import AboutCards from "@/sections/AboutCards";
import HeroAbout from "@/sections/HeroAbout";
import Marquee from "@/sections/Marquee";

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
