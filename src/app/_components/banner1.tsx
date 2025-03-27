import { Separator } from "@/components/ui/separator"
import FadeInSection from "./useinview";

export default function Banner1() {
  return (
    <div
      id="wrapper"
      className="w-full overflow-hidden flex flex-wrap justify-center items-center gap-4  md:gap-10"
    >
      <div className=" gap-2 ">
        <FadeInSection>
          <div className="mb-10 mt-10 text-center flex flex-col items-center ">
            <h1 className="text-3xl md:text-5xl">
              Välkommen till Odevall Advokatbyrå i Göteborg
            </h1>
            <p className="mt-6 font-sans text-xl md:w-[40%] p-3">
              Odevall Advokatbyrå AB bedriver sin verksamhet i Göteborg sedan
              1962. Med hög kompetens och lång erfarenhet erbjuder vi juridiska
              tjänster och rådgivning både till företagare och privatpersoner.
            </p>
          </div>
        </FadeInSection>
      </div>
          <Separator />
    </div>
  );
}
