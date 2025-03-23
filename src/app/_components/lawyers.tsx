import Image from "next/image";
import FadeInSection from "./useinview";
export default function Lawyers() {
  return (
    <div id="wrapper">
      <FadeInSection>
        <div id="container" className="grid grid-cols-2 gap-1">
          <div>
            <Image
              src="/assets/ann-christin.jpg"
              alt="Medarbetare"
              width={500}
              height={500}
              className="w-[500px] h-[200px]"
            ></Image>
          </div>
          <div>
            <Image
              src="/assets/cecilia.jpg"
              alt="Medarbetare"
              width={500}
              height={500}
              className="w-[500px] h-[200px]"
            ></Image>
          </div>{" "}
          <div>
            <Image
              src="/assets/jan.jpg"
              alt="Medarbetare"
              width={500}
              height={500}
              className="w-[500px] h-[200px]"
            ></Image>
          </div>{" "}
          <div>
            <Image
              src="/assets/gibbons.png"
              alt="Medarbetare"
              width={500}
              height={500}
              className="w-[500px] h-[200px]"
            ></Image>
          </div>
        </div>
      </FadeInSection>
    </div>
  );
}
