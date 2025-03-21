import { FaAward, FaBalanceScale } from "react-icons/fa";
import { GiPodiumWinner } from "react-icons/gi";
import { Separator } from "@/components/ui/separator"
import FadeInSection from "./useinview";

export default function Banner2() {
  return (
    <div
      id="wrapper"
      className="w-full overflow-hidden flex flex-wrap justify-center items-center gap-4 p-4  md:gap-10 md:text-2xl"
    >
      {/* Grundat */}
      <div className="flex items-center gap-2">
        <FaBalanceScale className="size-12 md:size-20" />
        <FadeInSection>
          <div className="text-center">
            <p className="font-bold underline">1962</p>
            <p className="text-md font-bold">GRUNDAT</p>
          </div>
        </FadeInSection>
      </div>

      {/* Erfarenhet */}
      <div className="flex items-center gap-2">
        <FaAward className="size-12 md:size-20" />
        <FadeInSection>
          <div className="text-center text-md font-bold">
            <p className="underline">144 ÅR</p>
            <p>ERFARENHET</p>
          </div>
        </FadeInSection>
      </div>

      {/* Vunna fall */}
      <div className="flex items-center gap-2">
        <GiPodiumWinner className="size-12 md:size-20" />
        <FadeInSection>
          <div className="text-center text-md font-bold">
            <p className="underline">3444</p>
            <p>VUNNA FALL</p>
          </div>
        </FadeInSection>
      </div>
      <Separator/>
    </div>
  );
}
