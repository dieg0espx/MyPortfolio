/* eslint-disable @next/next/no-img-element */
import { v4 as uuidv4 } from "uuid";

import { useFloat } from "@/lib";

import { AnimatedAnchor, Picture } from "@/components/atoms";

import { ArrowIcon, HeroIcon } from "@/assets/icons";

import { heroData } from "@/data";

import GradualSpacing from "../ui/gradual-spacing";


const Hero = () => {
  const { float, handleFloat } = useFloat([false, false]);

  return (
    <section className="hero-section px-3">
      <div className="relative max-w-[1280px] lg:pt-32 md:px-10 mx-auto pt-16">
        <Picture
          className="absolute hero-drone top-28 w-1/4 h-auto right-0 xl:right-0"
          size={[500, 326]}
          src="/home-campaign/hero-drone.webp"
        />
        <div className="flex">
          <div className="relative">
            <Picture size={[437, 637]} src="/home-campaign/lines-hero.svg" />
            <div className="mx-auto my-3">
              <span className="relative z-[11]">
                <HeroIcon />
                <span
                  className="absolute left-0 top-0 w-6 h-full  home-campaign-glowing-icon-glow "
                  style={{
                    backgroundColor: "var(--mktg-accent-primary)",
                    filter: "blur(17px)",
                  }}
                />
              </span>
            </div>
            <div
              style={{
                background:
                  "linear-gradient(#d2a8ff, #a371f7 10%, #196c2e 70%, #2ea043 80%, #56d364)",
                marginLeft: "11px",
              }}
              className="max-md:w-[2px] w-[3px] h-[450px] max-md:h-[650px] max-sm:h-[750px] max-ssm:h-[900px] max-sssm:h-[1150px] line rounded-md"
            />
          </div>
          <div className="absolute pt-32 mt-28 max-md:px-4 ml-4 md:ml-12">

            <div className="animate-moveFade">
              <p className="mt-20 relative z-1 text-[15px] md:text-[28px]  lg:text-[32px] leading-[30px] md:leading-[36px] lg:leading-[44px] md:10/12  lg:w-9/12 text-[#7d8590]">
               Hello there 👋, I'm
              </p>
              <h1 className="relative z-2 max-md:mb-5 text-[50px] md:text-[72px] max-sm:leading-[60px] max-md:leading-[80px] lg:text-[80px] font-semibold text-white">
                Diego Espinosa
              </h1> 
              <p className="relative z-1 text-[15px] md:text-[28px]  lg:text-[20px] leading-[20px] md:leading-[36px] lg:leading-[25px] mb-5 md:mb-12 md:10/12  lg:w-9/12 text-[#7d8590]">
               I'm a profesional full stack Web and App Developer with extensive experience in both front-end and back-end development.
              </p>
              <div className="flex lg:w-11/12 md:space-x-5 max-md:flex-col">
                <span className="border-t-[1px] md:border-l-[0px] border-neutral-700 mb-3 md:mb-0"></span>
                <AnimatedAnchor
                  onMouseEnter={() => handleFloat(true, 1)}
                  onMouseLeave={() => handleFloat(false, 1)}
                  className="flex items-center w-full md:w-auto justify-center text-[16px] py-3 px-5 max-md:mt-4 rounded-md border-[#ae88f9] border-[1.5px] text-white relative md:-left-5"
                  title="Contact Me"
                  controller={float[1]}
                />
              </div>
            </div>
    
            <div className="md:my-32 my-24">
              <p className="text-[16px] leading-[24px] text-[#7d8590]">
                Reliable Development with Proven Technologies↘︎
              </p>
              <div className="mt-6 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 items-center gap-y-4 gap-x-0.5">
                {heroData.collabs.map((logo) => (
                  <img
                    key={uuidv4()}
                    src={logo.src}
                    alt={logo.alt}
                    height={logo.height}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
