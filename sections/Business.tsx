// import Image from 'next/image';

// export default function Business() {
//   return (
//     <section className="w-full py-22.5 px-8 md:px-12 lg:px-25">
//       <div className=" grid md:grid-cols-[58%_42%] justify-content-between gap-4 md:gap-6 lg:gap-10 ">

//         {/* LEFT CONTENT */}
//         <div className=''>
//           <h2 className="font-sans font-semibold text-[36px] leading-[160%] tracking-[0em] text-[#0F1E4A">
//             IT Solutions Customized for Your <br />
//             <span className="text-[#037C3C]">Business.</span>
//           </h2>

//           <p className="mt-7.5 font-sans font-normal text-[20px] lg:text-[24px] leading-[180%] tracking-[0.02em]">
//             Net Interop Corp is a full-service IT consulting company based in Northern Virginia. We offer specialized, highly customized technology solutions for small to enterprise businesses. Using powerful, state-of-the art technology, our consultants will design a solution for your business. Learn more about our strategy now.
//           </p>

//           <button className="mt-4 font-sans font-normal text-[22px] leading-[180%] tracking-[0em]  decoration-solid underline text-[#037C3C] hover:text-green-700 cursor-pointer transition">
//             Learn more
//           </button>
//         </div>

//         {/* RIGHT IMAGE */}
//         <div className="relative flex justify-center md:justify-end  w-124 h-87 mt-5">

//           {/* Yellow block */}
//           <div className="absolute top-0 left-0 w-34.5 h-34.5 bg-yellow-400 rounded-[20px] z-0" />

//           {/* Green block */}
//           <div className="absolute bottom-0 right-0 w-34.5 h-34.5 bg-green-600 rounded-[20px] z-0" />

//           {/* Main image */}
//           <div className="relative z-10 rounded-[20px] top-6 right-6  overflow-hidden">
//             <Image
//               src="/images/business-man.png"
//               alt="Business"
//               width={448}
//               height={300}
//               className="object-cover rounded-[20px]"
//             />
//           </div>

//         </div>
//       </div>
//     </section>
//   );
// }

import { FadeIn } from "@/components/animation/fade-in";
import Image from "next/image";

export default function Business() {
  return (
    <section className="w-full mt-10 ">
      <div className="py-10 md:py-17.5 lg:py-24 px-6 md:px-20 lg:px-25 max-w-360 lg2:mx-auto">
        <div className="grid grid-cols-1  md2:grid-cols-[58%_42%] items-center gap-12 md2:gap-[clamp(16px,4vw,48px)]">
          {/* LEFT */}
          <FadeIn>
            <div>
              <h2 className="font-semibold text-[28px] sm:text-[32px] md:text-[36px] leading-[140%] text-[#0F1E4A]">
                IT Solutions Customized for Your <br />
                <span className="text-[#037C3C]">Business.</span>
              </h2>

              <p className="mt-5 md:mt-6 text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] leading-[170%] text-gray-600">
                Net Interop Corp is a full-service IT consulting company based
                in Northern Virginia. We offer specialized, highly customized
                technology solutions for small to enterprise businesses. Using
                powerful, state-of-the-art technology, our consultants will
                design a solution for your business. Learn more about our
                strategy now.
              </p>

              <button className="mt-4 text-[16px] md:text-[18px] lg:text-[20px] underline text-[#037C3C] hover:text-green-700 transition">
                Learn more
              </button>
            </div>
          </FadeIn>

          {/* RIGHT */}
          <FadeIn>
            <div className="relative w-full max-w-125 mx-auto md:ml-auto aspect-4/3">
              {/* Yellow */}
              <div className="absolute top-0 left-0 w-[25%] h-[25%] bg-yellow-400 rounded-xl" />

              {/* Green */}
              <div className="absolute bottom-0 right-0 w-[28%] h-[28%] bg-green-600 rounded-xl" />

              {/* Image */}
              <div className="absolute inset-[8%] z-10 rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="/images/business-man.png"
                  alt="Business"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
