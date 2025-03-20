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
      <div
        className="w-full bg-cover bg-center h-[350px] md:h-[600px]"
        style={{
          backgroundImage: "url('/assets/gothenburgpanorama.jpg')",
        }}
      >
        <div className="text-black flex justify-center place-items-center text-center">
          <div className="max-w-sm mt-35 md:mt-60">
            <p className="mb-3 bg-slate-50 opacity-90 p-3 border-black border font-bold">
              144 års samlad erfarenhet i advokatyrket <br />I Göteborg sedan
              1962.
              {/* Välkommen till Odevall Advokatbyrå i Göteborg! I Göteborg sedan 1962. Med hög
              kompetens och lång erfarenhet erbjuder vi juridiska tjänster och
              rådgivning både till företagare och privatpersoner. */}
            </p>
            <button className="border-2 bg-white pl-2 pr-2 mt-3 ">Om oss</button>
          </div>
        </div>
      </div>
    </div>
  );
}
