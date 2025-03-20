export default function HeroSection() {
  return (
    <div className="">
      <div className=" ">
        <picture>
          <source
            media="(max-width: 768px)"
            srcSet="/assets/logosmall.svg"
          />
          <img
            src="/assets/logobig.svg"
            alt="Exempelbild"
            className="absolute bg-transparent mt-2 w-[150px] h-[100px] md:w-[650px] md:h-[200px]"
          />
        </picture>
        {/* <Image
          src="/assets/phone.svg"
          width={350}
          height={300}
          alt="Logo"
          className="absolute bg-transparent mt-2 w-[150px] h-[100px] lg:w-[350px] lg:h-[300px]"
        /> */}
      </div>
      <div
        className="w-full bg-cover bg-center h-[350px] md:h-[600px]"
        style={{
          backgroundImage: "url('/assets/gothenburgpanorama.jpg')",
        }}
      >
        {/* <div className="text-black hero-content place-items-center text-center">
          <div className="max-w-md">
            <p className="mb-5">
              Välkommen till Odevall Advokatbyrå i Göteborg! Odevall Advokatbyrå
              AB bedriver sin verksamhet i Göteborg sedan 1962. Med hög
              kompetens och lång erfarenhet erbjuder vi juridiska tjänster och
              rådgivning både till företagare och privatpersoner.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div> */}
      </div>
    </div>
  );
}
