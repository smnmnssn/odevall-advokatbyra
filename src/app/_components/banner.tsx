import { FaAward, FaBalanceScale } from "react-icons/fa";
import { GiPodiumWinner } from "react-icons/gi";
import FadeInSection from "./useinview";

export default function Banner() {
  return (
    <div
      id="wrapper"
      className="w-full flex  justify-center items-center gap-4 p-4 border border-black md:gap-10"
    >
      {/* Grundat */}
      <div className="flex items-center gap-2">
        <FaBalanceScale className="size-8 md:size-10" />
        <FadeInSection>
          <div className="text-center">
            <p className="font-bold underline">1962</p>
            <p className="text-xs font-bold">GRUNDAT</p>
          </div>
        </FadeInSection>
      </div>

      {/* Erfarenhet */}
      <div className="flex items-center gap-2">
        <FaAward className="size-8 md:size-10" />
        <FadeInSection>
          <div className="text-center">
            <p className="font-bold underline">144 ÅR</p>
            <p className="text-xs font-bold">ERFARENHET</p>
          </div>
        </FadeInSection>
      </div>

      {/* Vunna fall */}
      <div className="flex items-center gap-2">
        <GiPodiumWinner className="size-8 md:size-10" />
        <FadeInSection>
          <div className="text-center">
            <p className="font-bold underline">3444</p>
            <p className="text-xs font-bold">VUNNA FALL</p>
          </div>
        </FadeInSection>
      </div>
    </div>
  );
}
