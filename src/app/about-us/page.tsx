import { Separator } from "@/components/ui/separator";
import KitchenSinkExample from "../_components/card";

export default function AboutUs() {
  return (
    <div className=" w-full p-3 md:w-[60%] mx-auto  ">
      <div className="text-center mx-auto text-2xl">
        <p className="md:text-3xl p-2 md:p-15">Vi på Odevall Advokatbyrå har över 140 års samlad yrkeserfarenhet och står redo att representera dig.</p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-5 mx-auto ">
        <KitchenSinkExample />
        <KitchenSinkExample />
        <KitchenSinkExample />
        <KitchenSinkExample />
      </div>
      <div className="">
        <Separator className="text-black mt-5 mx-auto" />
      </div>
    </div>
  );
}
