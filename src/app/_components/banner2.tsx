import { FaAward, FaBalanceScale } from "react-icons/fa";
import { GiPodiumWinner } from "react-icons/gi";
import { Separator } from "@/components/ui/separator"
import FadeInSection from "./useinview";

export default function Banner2() {
  return (
    <div
      id="wrapper"
      className="w-full overflow-hidden flex flex-wrap justify-center items-center md:text-2xl gap-x-10 lg:gap-x-60 gap-y-4 py-6 text-center"
    >
      {/* Grundat */}
      <div className="flex items-center gap-2">
        <FaBalanceScale className="size-12 md:size-20 mb-3" />
        <FadeInSection>
          <div className="text-center">
            <p className="font-bold underline m-0 ">1962</p>
            <p className="text-md font-bold">GRUNDAT</p>
          </div>
        </FadeInSection>
      </div>

      {/* Erfarenhet */}
      <div className="flex items-center gap-2">
        <FaAward className="size-12 md:size-20 mb-3" />
        <FadeInSection>
          <div className="text-center text-md font-bold">
            <p className="underline m-0">144 ÅR</p>
            <p>ERFARENHET</p>
          </div>
        </FadeInSection>
      </div>

      {/* Vunna fall */}
      <div className="flex items-center gap-2">
        <GiPodiumWinner className="size-12 md:size-20 mb-3" />
        <FadeInSection>
          <div className="text-center text-md font-bold">
            <p className="underline m-0">3444</p>
            <p>VUNNA FALL</p>
          </div>
        </FadeInSection>
      </div>
      <Separator/>
    </div>
  );
}
