import { FaAward, FaBalanceScale } from "react-icons/fa";
import { GiPodiumWinner } from "react-icons/gi";
import FadeInSection from "./useinview";

export default function Banner() {
  return (
    <div id="wrapper" className="flex p-4 border border-black">

      <FaBalanceScale className="size-10" />{" "}
      <FadeInSection>
        <div id="yearAndText" className="ml-1 text-center">
          <p className="font-bold underline">1962</p>
          <p className="text-xs fontbold">GRUNDAT</p>
        </div>
      </FadeInSection>
      <FaAward className="size-9  ml-5" />{" "}
      <FadeInSection>
        <div id="yearAndText" className="ml-1 text-center">
          <p className="font-bold underline">144 ÅR</p>
          <p className="text-xs fontbold">ERFARENHET</p>
        </div>
      </FadeInSection>{" "}
      <GiPodiumWinner className="size-10  ml-5" />
      <FadeInSection>
      <div id="yearAndText" className=" text-center">
        <p className="font-bold underline">3444</p>
        <p className="text-xs fontbold">VUNNA FALL</p>
      </div>
      </FadeInSection>
    </div>
  );
}
