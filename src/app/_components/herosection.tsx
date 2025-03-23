import Link  from "next/link";
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
        className="w-full bg-cover bg-center h-[450px] md:h-[600px]"
        // style={{
        //   backgroundImage: "url('/assets/gothenburgpanorama.jpg')",
        // }}
      >
      <FadeInSection>

        <div className="text-black flex justify-center place-items-center text-center">
          <div className="w-xs md:w-xl md:text-xl mt-15 md:mt-50  flex flex-col items-center">
            <p className="mb-3 bg-slate-50 opacity-90 p-3  border font-sans italic">
              &quot;En väl etablerad relation med Odevall Advokatbyrå
              säkerställer en trygg hantering av alla de tvister som kan
              förekomma&quot;
              {/* Välkommen till Odevall Advokatbyrå i Göteborg! I Göteborg sedan 1962. Med hög
              kompetens och lång erfarenhet erbjuder vi juridiska tjänster och
              rådgivning både till företagare och privatpersoner. */}
            </p>
            <div className="flex flex-col w-[100px] items-center">
              <button className="cursor-pointer bg-white w-fit p-3 pt-2 pb-2 mt-10 ">
                RÅDGIVNING
              </button>
              <Link href="/about-us">
              <button className="cursor-pointer bg-white w-fit p-3 pt-2 pb-2 mt-2">
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
