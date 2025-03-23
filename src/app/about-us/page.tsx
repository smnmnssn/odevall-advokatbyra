import KitchenSinkExample from "../_components/card";

export default function AboutUs() {
  return (
    <div className=" w-full p-3 md:w-[80%] mx-auto  ">
      <div
        className="text-center mx-auto text-2xl w-65"
      >
        <p>Odevall Advokatbyrå erbjuder hög kompetens</p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-5 mx-auto ">
        <KitchenSinkExample />
        <KitchenSinkExample />
        <KitchenSinkExample />
        <KitchenSinkExample />
      </div>

    </div>
  );
}
