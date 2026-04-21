import Image from "next/image";
import professionalWomen from "@/public/Netinterop Assets/1x Images/pngtree-professional-with-laptop-png-image_12689338 1.png";
import professionalMan from "@/public/Netinterop Assets/1x Images/a-man-in-glasses-holding-a-laptop-free-png 1.png";
import { FadeIn } from "@/components/animation/fade-in";

const HeroAbout = () => {
  return (
    <FadeIn>
      <section
        id="heroAbout"
        className="container min-h-120.75 max-w-7xl rounded-md bg-lightgreen my-10 mx-auto flex flex-col lg:flex-row justify-between relative shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] overflow-hidden lg:overflow-visible pt-10"
      >
        {/* Left Image: Hidden on mobile, shown absolute on Large screens */}
        <Image
          src={professionalWomen}
          width={500}
          height={500}
          loading="eager"
          alt="Professional Women"
          className="hidden xl:block w-100 h-100 object-cover absolute -left-7 bottom-0"
        />

        <div className="flex flex-col mt-10 w-full z-10 px-4">
          {/* Top Header Box */}
          <div className="rounded-t-2xl md:rounded-t-[60px] bg-main px-4 lg:px-11 max-w-lg mx-auto w-full text-center lg:text-left">
            <h2 className="text-3xl md:text-4xl lg:text-[54px] text-green font-bold py-6">
              Our <span className="text-primary">Leadership</span>
            </h2>
          </div>

          {/* Bottom Content Box */}
          <div className="flex-1 rounded-t-0 rounded-b-2xl min-[597px]:rounded-t-2xl md:rounded-t-[20px] min-[1292px]:rounded-b-none bg-main px-4 lg:px-10.5 mx-auto w-full max-w-150">
            <h2 className="text-3xl md:text-4xl lg:text-[54px] text-green font-bold text-center">
              & <span className="text-primary">Team</span>
            </h2>
            <p className="text-lg md:text-xl lg:text-2xl text-tertiary pb-8 pt-6 max-w-xl text-center leading-10">
              You can trust us with your IT operations,
              <br /> because Net Interop Corp has been <br /> certified by
              recognized organizations in the industry.
            </p>
          </div>

          {/* Mobile/Medium Image Gallery: Only visible below Large screens */}
          <div className="flex justify-center gap-4 xl:hidden mt-4">
            <Image
              src={professionalWomen}
              width={500}
              height={500}
              alt="Women"
              className="w-1/2 max-w-100 h-auto object-contain"
            />
            <Image
              src={professionalMan}
              width={500}
              height={500}
              alt="Man"
              className="w-1/2 max-w-100 h-auto object-contain"
            />
          </div>
        </div>

        {/* Right Image: Hidden on mobile, shown absolute on Large screens */}
        <Image
          src={professionalMan}
          width={500}
          height={500}
          alt="Professional Man"
          className="hidden xl:block w-100 h-100 object-cover object-center absolute -right-10 bottom-0"
        />
      </section>
    </FadeIn>
  );
};

export default HeroAbout;
