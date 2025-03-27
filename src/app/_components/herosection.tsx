import Link from "next/link";
import FadeInSection from "./useinview";

export default function HeroSection() {
  return (
    <div className="">
      <FadeInSection>
        <div className=" ">
          {/* <picture>
            <source media="(max-width: 768px)" srcSet="/assets/logosmall.svg" />
            <img
              src="/assets/logobig.svg"
              alt="Exempelbild"
              className="absolute bg-transparent mt-2 w-[150px] h-[100px] md:w-[650px] md:h-[200px]"
            />
          </picture> */}
          {/* <Image
          src="/assets/phone.svg"
          width={350}
          height={300}
          alt="Logo"
          className="absolute bg-transparent mt-2 w-[150px] h-[100px] lg:w-[350px] lg:h-[300px]"
          /> */}
        </div>
      </FadeInSection>
      <FadeInSection>
        <div
          className="w-full bg-cover bg-center h-[450px] md:h-[650px] border-t border-b border-black shadow-inner"
          style={{
            backgroundImage: "url('/assets/gothenburgpanorama.jpg')",
          }}
        >
          <FadeInSection>
            <div className="text-black flex justify-center place-items-center text-center">
              <div className="w-xs md:w-xl  text-xl md:text-2xl mt-15 md:mt-50  flex flex-col items-center">
                <div className="mb-3 p-3 rounded-xs bg-white/70 backdrop-blur-sm">
                  <p className="font-sans italic md:text-2xl text-black">
                    &quot;En väl etablerad relation med Odevall Advokatbyrå
                    säkerställer en trygg hantering av alla de tvister som kan
                    förekomma&quot;
                  </p>
                </div>
                {/* Välkommen till Odevall Advokatbyrå i Göteborg! I Göteborg sedan 1962. Med hög
              kompetens och lång erfarenhet erbjuder vi juridiska tjänster och
              rådgivning både till företagare och privatpersoner. */}
                <div className="flex flex-col text-xl items-center ">
                  <Link href="/contact">
                    <button className="cursor-pointer bg-white hover:!bg-gray-200 text-black w-[10rem] md:w-[10rem] border border-black pt-1 pb-1 mt-10 ">
                      RÅDGIVNING
                    </button>
                  </Link>
                  <Link href="/about-us">
                    <button className="cursor-pointer bg-white hover:!bg-gray-200 text-black w-[10rem] md:w-[10rem] border border-black p-1 pt-1 pb-1 mt-2">
                      OM OSS
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </FadeInSection>
        </div>
      </FadeInSection>
    </div>
  );
}
